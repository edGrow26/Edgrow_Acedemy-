import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Award, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { INITIAL_COURSES, INITIAL_TEACHERS } from "@/lib/data";
import { sanityFetch } from "@/lib/sanity";
import { urlForImage } from "@/lib/imageUrl";
import { teacherByIdQuery, coursesByTeacherQuery, teachersQuery } from "@/lib/queries";
import { Course, Teacher } from "@/lib/types";

interface Props {
  params: Promise<{ id: string }>;
}

async function getTeacher(id: string): Promise<Teacher | null> {
  try {
    const cmsTeacher = await sanityFetch<any>({
      query: teacherByIdQuery,
      params: { id },
      revalidate: 60,
    });

    if (cmsTeacher) {
      return {
        id: cmsTeacher._id,
        name: cmsTeacher.name,
        photoUrl: urlForImage(cmsTeacher.photoUrl),
        bio: cmsTeacher.bio,
        yearsExperience: cmsTeacher.yearsExperience,
      };
    }
  } catch (e) {
    console.warn(`Sanity teacher fetch failed for id: ${id}`, e);
  }

  // Fallback to static data
  const staticTeacher = INITIAL_TEACHERS.find((t) => t.id === id) || null;
  return staticTeacher;
}

async function getCoursesByTeacher(teacherId: string): Promise<Course[]> {
  try {
    const cmsCourses = await sanityFetch<any[]>({
      query: coursesByTeacherQuery,
      params: { teacherId },
      revalidate: 60,
    });

    if (cmsCourses && cmsCourses.length > 0) {
      return cmsCourses.map((c) => ({
        id: c._id,
        title: c.title,
        titleTa: c.titleTa,
        teacherId: teacherId,
        duration: c.duration,
        durationCategory: c.durationCategory,
        fee: c.fee,
        feeBucket: c.feeBucket,
        couponCode: c.couponCode,
        discountType: c.discountType,
        discountValue: c.discountValue,
        category: c.category || "IT",
        topic: c.topic,
        language: c.language || "Tamil",
        scheduleSlot: c.scheduleSlot,
        schedule: c.schedule,
        syllabus: c.syllabus || [],
        isActive: c.isActive,
        createdAt: c.createdAt,
      }));
    }
  } catch (e) {
    console.warn(`Sanity courses fetch failed for teacherId: ${teacherId}`, e);
  }

  // Fallback to static data
  return INITIAL_COURSES.filter(
    (c) => c.teacherId === teacherId && c.isActive
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const teacher = await getTeacher(id);

  if (!teacher) return { title: "Instructor Not Found | EdGrow Academy" };

  return {
    title: `${teacher.name} | EdGrow Academy Sri Lanka`,
    description: `${teacher.name} - ${teacher.yearsExperience}+ years of industry experience. ${teacher.bio.substring(0, 150)}...`,
    keywords: [
      teacher.name,
      "IT instructor Sri Lanka",
      "Tamil medium IT teacher",
      "EdGrow Academy instructor",
      "software engineering instructor",
    ],
    openGraph: {
      title: `${teacher.name} | EdGrow Academy Sri Lanka`,
      description: `${teacher.name} - ${teacher.yearsExperience}+ years of industry experience.`,
      url: `https://edgrow.lk/instructors/${id}`,
      siteName: "EdGrow Academy",
      locale: "en_US",
      type: "profile",
    },
  };
}

export async function generateStaticParams() {
  try {
    const cmsTeachers = await sanityFetch<any[]>({
      query: teachersQuery,
      revalidate: 60,
    });
    if (cmsTeachers && cmsTeachers.length > 0) {
      return cmsTeachers.map((t) => ({ id: t._id }));
    }
  } catch (e) {
    console.warn("Failed to fetch static params from Sanity", e);
  }

  return INITIAL_TEACHERS.map((t) => ({ id: t.id }));
}

export default async function InstructorProfilePage({ params }: Props) {
  const { id } = await params;
  const teacher = await getTeacher(id);

  if (!teacher) notFound();

  const courses = await getCoursesByTeacher(id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: teacher.name,
    description: teacher.bio,
    jobTitle: "IT Course Instructor",
    worksFor: {
      "@type": "Organization",
      name: "EdGrow Academy",
      sameAs: "https://edgrow.lk",
    },
    knowsAbout: courses.map((c) => c.topic).join(", "),
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Back Link */}
          <Link
            href="/instructors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066D6] hover:underline"
          >
            ← Back to All Instructors
          </Link>

          {/* Instructor Hero */}
          <div
            className="p-8 sm:p-12 rounded-3xl border space-y-8 relative overflow-hidden"
            style={{
              backgroundColor: "var(--glass-bg)",
              borderColor: "var(--border)",
            }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066D6]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start gap-8">

              {/* Photo */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-[#0066D6]/30 shrink-0">
                {teacher.photoUrl ? (
                  <img
                    src={teacher.photoUrl}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0066D6]/20 flex items-center justify-center font-bold text-4xl text-[#0066D6]">
                    {teacher.name[0]}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#0066D6]/10 text-[#0066D6] border border-[#0066D6]/20 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Instructor Profile
                  </span>
                </div>

                <h1
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {teacher.name}
                </h1>

                <p className="text-lg font-semibold text-[#0066D6]">
                  {teacher.yearsExperience}+ Years Software Industry Experience
                </p>

                <div className="pt-2">
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--text-body)" }}
                  >
                    {teacher.bio}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Courses Taught */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066D6] block mb-1">
                  Courses Taught
                </span>
                <h2
                  className="text-2xl sm:text-4xl font-extrabold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Courses by <span className="text-gradient-blue">{teacher.name}</span>
                </h2>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0066D6] hover:underline shrink-0"
              >
                <span>View All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, idx) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    teacher={teacher}
                    index={idx}
                  />
                ))}
              </div>
            ) : (
              <div
                className="text-center py-16 p-8 rounded-2xl border space-y-4"
                style={{ backgroundColor: "var(--glass-bg)", borderColor: "var(--border)" }}
              >
                <BookOpen className="w-12 h-12 mx-auto text-[#0066D6]/30" />
                <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  No active courses found for this instructor.
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  Please check back soon or explore all available courses.
                </p>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--primary-blue), var(--primary-blue-hover))",
                  }}
                >
                  View All Courses
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
