import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { INITIAL_COURSES } from "@/lib/data";
import { normalizePhoneNumber, sriLankaPhoneRegex } from "@/lib/validation";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7epe2pro",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

/**
 * Attempt to resolve a human-readable course title from either Sanity or
 * the static fallback data. This allows the application to work regardless
 * of whether the course ID is a Sanity _id or a static-data slug.
 */
async function resolveCourseTitle(courseId: string): Promise<string | null> {
  // 1. Try Sanity first (the ID might be a Sanity _id)
  try {
    const result = await client.fetch<{ title: string } | null>(
      `*[_type == "course" && _id == $id][0]{ title }`,
      { id: courseId }
    );
    if (result?.title) return result.title;
  } catch {
    // Sanity lookup failed — fall through to static data
  }

  // 2. Try the static fallback data (the ID might be a slug like "fullstack-nextjs")
  const staticCourse = INITIAL_COURSES.find((c) => c.id === courseId);
  if (staticCourse) return staticCourse.title;

  return null;
}

export async function POST(request: Request) {
  // Guard: ensure the write token is configured
  if (!process.env.SANITY_API_TOKEN) {
    console.error("SANITY_API_TOKEN is not set in environment variables.");
    return NextResponse.json(
      { error: "Server configuration error: missing Sanity write token." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { selectedCourseId, fullName, phoneNumber, email } = body;

    // Validate required fields
    if (!selectedCourseId || !fullName || !phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields: selectedCourseId, fullName, phoneNumber" },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizePhoneNumber(phoneNumber);
    if (!sriLankaPhoneRegex.test(normalizedPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid Sri Lankan phone number." },
        { status: 400 }
      );
    }

    const courseApplications = await client.fetch<{ _id: string; phoneNumber: string }[]>(
      `*[_type == "courseApplication" && selectedCourse == $courseId]{ _id, phoneNumber }`,
      { courseId: selectedCourseId }
    );
    const existingApplication = courseApplications.find(
      (application) => normalizePhoneNumber(application.phoneNumber) === normalizedPhone
    );

    if (existingApplication) {
      return NextResponse.json(
        { error: "You have already registered for this course with this phone number." },
        { status: 409 }
      );
    }

    // Resolve the course title for display in Sanity Studio
    const courseTitle = await resolveCourseTitle(selectedCourseId);

    // Create the courseApplication document in Sanity
    // Note: selectedCourse is stored as a plain string (not a reference)
    // so that applications work with both Sanity _id values and static-data slugs.
    const doc = await client.create({
      _type: "courseApplication",
      selectedCourse: selectedCourseId,
      selectedCourseTitle: courseTitle || selectedCourseId,
      fullName,
      phoneNumber: normalizedPhone,
      email: email || "",
      appliedAt: new Date().toISOString(),
      status: "pending",
    });

    return NextResponse.json(
      { success: true, id: doc._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Failed to create course application:", {
      message: error?.message,
      statusCode: error?.statusCode,
      details: error?.details,
    });
    return NextResponse.json(
      { error: error.message || "Failed to submit application" },
      { status: 500 }
    );
  }
}