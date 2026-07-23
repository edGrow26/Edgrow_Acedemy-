"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilters from "@/components/courses/CourseFilters";
import { CourseFilterState, Course, Teacher } from "@/lib/types";
import { getStoredCourses, getStoredTeachers } from "@/lib/data";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    setCourses(getStoredCourses().filter((c) => c.isActive));
    setTeachers(getStoredTeachers());
  }, []);

  const [filters, setFilters] = useState<CourseFilterState>({
    feeBucket: "",
    duration: "",
    scheduleSlot: "",
    topic: "",
    searchQuery: "",
  });

  const topics = useMemo(() => {
    const set = new Set(courses.map((c) => c.topic));
    return Array.from(set);
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (filters.searchQuery.trim() !== "") {
        const query = filters.searchQuery.toLowerCase();
        const matchTitle = course.title.toLowerCase().includes(query);
        const matchTopic = course.topic.toLowerCase().includes(query);
        if (!matchTitle && !matchTopic) return false;
      }

      if (filters.topic && course.topic !== filters.topic) return false;
      if (filters.feeBucket && course.feeBucket !== filters.feeBucket) return false;
      if (filters.duration && course.durationCategory !== filters.duration) return false;
      if (filters.scheduleSlot && course.scheduleSlot !== filters.scheduleSlot) return false;

      return true;
    });
  }, [courses, filters]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066D6] block">
              Course Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold" style={{ color: "var(--text-primary)" }}>
              Explore Our <span className="text-gradient-blue">IT Courses</span>
            </h1>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-body)" }}>
              100% Live sessions taught in Tamil. Select your preferred track and class schedule.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <CourseFilters filters={filters} onChange={setFilters} topics={topics} />

          {/* Results Metadata */}
          <div className="flex items-center justify-between text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
            <p>
              Showing <strong>{filteredCourses.length}</strong> matching courses
            </p>
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => {
                const teacher = teachers.find((t) => t.id === course.teacherId);
                return <CourseCard key={course.id} course={course} teacher={teacher} index={idx} />;
              })}
            </div>
          ) : (
            <div
              className="text-center py-16 p-8 rounded-2xl border space-y-4"
              style={{ backgroundColor: "var(--glass-bg)", borderColor: "var(--border)" }}
            >
              <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                No courses match your filter criteria.
              </p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Try adjusting your search query or resetting your filters.
              </p>
              <button
                type="button"
                onClick={() =>
                  setFilters({
                    feeBucket: "",
                    duration: "",
                    scheduleSlot: "",
                    topic: "",
                    searchQuery: "",
                  })
                }
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0066D6]"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
