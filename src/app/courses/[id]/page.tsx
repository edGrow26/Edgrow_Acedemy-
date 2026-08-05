import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailClient from "@/components/courses/CourseDetailClient";
import { INITIAL_COURSES, INITIAL_TEACHERS } from "@/lib/data";
import { sanityFetch } from "@/lib/sanity";
import { urlForImage } from "@/lib/imageUrl";
import { courseByIdQuery, courseListQuery } from "@/lib/queries";
import { Course, Teacher } from "@/lib/types";
import { getCoursePricingInfo } from "@/lib/coursePricing";

interface Props {
  params: Promise<{ id: string }>;
}

async function getCourseAndTeacher(id: string): Promise<{ course: Course | null; teacher: Teacher | null }> {
  try {
    const cmsCourse = await sanityFetch<any>({
      query: courseByIdQuery,
      params: { id },
      revalidate: 60,
    });

    if (cmsCourse) {
      const course: Course = {
        id: cmsCourse._id,
        title: cmsCourse.title,
        titleTa: cmsCourse.titleTa,
        teacherId: cmsCourse.teacher?._id || "",
        duration: cmsCourse.duration,
        durationCategory: cmsCourse.durationCategory,
        fee: cmsCourse.fee,
        feeBucket: cmsCourse.feeBucket,
        couponCode: cmsCourse.couponCode,
        discountType: cmsCourse.discountType,
        discountValue: cmsCourse.discountValue,
        category: cmsCourse.category || "IT",
        topic: cmsCourse.topic,
        language: cmsCourse.language || "Tamil",
        scheduleSlot: cmsCourse.scheduleSlot,
        schedule: cmsCourse.schedule,
        syllabus: cmsCourse.syllabus || [],
        isActive: cmsCourse.isActive,
        createdAt: cmsCourse.createdAt,
      };

      const teacher: Teacher | null = cmsCourse.teacher
        ? {
            id: cmsCourse.teacher._id,
            name: cmsCourse.teacher.name,
            photoUrl: urlForImage(cmsCourse.teacher.photoUrl),
            bio: cmsCourse.teacher.bio,
            yearsExperience: cmsCourse.teacher.yearsExperience,
          }
        : null;

      return { course, teacher };
    }
  } catch (e) {
    console.warn(`Sanity course fetch failed for id: ${id}`, e);
  }

  // Fallback to static data
  const staticCourse = INITIAL_COURSES.find((c) => c.id === id);
  if (!staticCourse) return { course: null, teacher: null };

  const staticTeacher = INITIAL_TEACHERS.find((t) => t.id === staticCourse.teacherId) || null;
  return { course: staticCourse, teacher: staticTeacher };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { course } = await getCourseAndTeacher(id);

  if (!course) return { title: "Course Not Found | EdGrow Academy" };

  return {
    title: `${course.title} | EdGrow Academy Sri Lanka`,
    description: `Learn ${course.title} live in Tamil. 100% live Google Meet classes. Fee: Rs. ${course.fee.toLocaleString()}`,
    keywords: [
      course.title,
      course.topic,
      "IT courses Sri Lanka",
      "Tamil computer classes",
      "EdGrow Academy"
    ],
  };
}

export async function generateStaticParams() {
  try {
    const cmsCourses = await sanityFetch<any[]>({
      query: courseListQuery,
      revalidate: 60,
    });
    if (cmsCourses && cmsCourses.length > 0) {
      return cmsCourses.map((c) => ({ id: c._id }));
    }
  } catch (e) {
    console.warn("Failed to fetch static params from Sanity", e);
  }

  return INITIAL_COURSES.map((c) => ({ id: c.id }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const { course, teacher } = await getCourseAndTeacher(id);

  if (!course) notFound();

  const pricing = getCoursePricingInfo(course);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": `${course.title} taught live in Tamil by ${teacher?.name || 'Industry Instructor'}.`,
    "provider": {
      "@type": "Organization",
      "name": "EdGrow Academy",
      "sameAs": "https://edgrow.lk"
    },
    "offers": {
      "@type": "Offer",
      "price": course.fee,
      "priceCurrency": "LKR",
      "availability": "https://schema.org/InStock"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "instructor": {
        "@type": "Person",
        "name": teacher?.name
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CourseDetailClient course={course} teacher={teacher} />
    </>
  );
}
