import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeacherCard from "@/components/instructors/TeacherCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { INITIAL_TEACHERS } from "@/lib/data";
import { sanityFetch } from "@/lib/sanity";
import { urlForImage } from "@/lib/imageUrl";
import { teachersQuery } from "@/lib/queries";
import { Teacher } from "@/lib/types";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Instructors | EdGrow Academy Sri Lanka",
  description:
    "Meet the industry-experienced instructors behind EdGrow Academy's Tamil-medium IT courses. Learn from senior software engineers, AI researchers, and cloud architects.",
  keywords: [
    "IT instructors Sri Lanka",
    "Tamil medium IT teachers",
    "EdGrow Academy instructors",
    "software engineering instructors",
    "AI instructors Sri Lanka",
    "cloud DevOps instructors",
  ],
  openGraph: {
    title: "Our Instructors | EdGrow Academy Sri Lanka",
    description:
      "Meet the industry-experienced instructors behind EdGrow Academy's Tamil-medium IT courses.",
    url: "https://edgrow.lk/instructors",
    siteName: "EdGrow Academy",
    locale: "en_US",
    type: "website",
  },
};

export default async function InstructorsPage() {
  let teachers: Teacher[] = [];

  try {
    const cmsTeachers = await sanityFetch<any[]>({
      query: teachersQuery,
      revalidate: 60,
    });

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

  // Fallback to static data if no teachers fetched
  if (teachers.length === 0) {
    teachers = INITIAL_TEACHERS;
  }

  const totalExperience = teachers.reduce(
    (sum, t) => sum + t.yearsExperience,
    0
  );

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066D6] block flex items-center justify-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Our Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: "var(--text-primary)" }}>
              Meet Our <span className="text-gradient-blue">Industry Experts</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
              Learn from senior software engineers, AI researchers, and cloud architects with proven field experience. All classes are conducted live in Tamil via Google Meet.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div
              className="p-6 rounded-2xl border text-center space-y-2"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0066D6]">
                <AnimatedCounter value={teachers.length} suffix="+" />
              </div>
              <p className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
                Expert Instructors
              </p>
            </div>
            <div
              className="p-6 rounded-2xl border text-center space-y-2"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00BFA5]">
                <AnimatedCounter value={totalExperience} suffix="+" />
              </div>
              <p className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
                Years Combined Experience
              </p>
            </div>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={idx} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
