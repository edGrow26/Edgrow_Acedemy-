import CoursesPageClient from "@/components/courses/CoursesPageClient";
import { sanityFetch } from "@/lib/sanity";
import { urlForImage } from "@/lib/imageUrl";
import { courseListQuery, teachersQuery } from "@/lib/queries";
import { Course, Teacher } from "@/lib/types";
import { INITIAL_COURSES, INITIAL_TEACHERS } from "@/lib/data";

export default async function CoursesPage() {
  let courses: Course[] = [];
  let teachers: Teacher[] = [];

  try {
    const cmsCourses = await sanityFetch<any[]>({
      query: courseListQuery,
      revalidate: 60,
    });

    const cmsTeachers = await sanityFetch<any[]>({
      query: teachersQuery,
      revalidate: 60,
    });

    if (cmsCourses && cmsCourses.length > 0) {
      courses = cmsCourses.map((c) => ({
        id: c._id,
        title: c.title,
        titleTa: c.titleTa,
        teacherId: c.teacher?._id || "",
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

    if (cmsTeachers && cmsTeachers.length > 0) {
      teachers = cmsTeachers.map((t) => ({
        id: t._id,
        name: t.name,
        photoUrl: urlForImage(t.photoUrl),
        bio: t.bio,
        yearsExperience: t.yearsExperience,
      }));
    }
  } catch (e) {
    console.warn("Sanity fetch failed, falling back to static data", e);
  }

  // Fallback to static data if no courses fetched
  if (courses.length === 0) {
    courses = INITIAL_COURSES.filter((c) => c.isActive);
  }
  if (teachers.length === 0) {
    teachers = INITIAL_TEACHERS;
  }

  return <CoursesPageClient initialCourses={courses} initialTeachers={teachers} />;
}
