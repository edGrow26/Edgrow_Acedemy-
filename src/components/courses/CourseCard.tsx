"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Course, Teacher } from "@/lib/types";

interface CourseCardProps {
  course: Course;
  teacher?: Teacher;
  index?: number;
}

export default function CourseCard({ course, teacher, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full group"
    >
      <div className="space-y-4">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border text-[#0066D6] bg-[#0066D6]/10 border-[#0066D6]/20">
            {course.topic}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#00BFA5]/10 text-[#00BFA5] border border-[#00BFA5]/20 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Live Class
          </span>
        </div>

        {/* Title */}
        <div>
          <h3
            className="text-lg sm:text-xl font-bold group-hover:text-[#0066D6] transition-colors leading-snug"
            style={{ color: "var(--text-primary)" }}
          >
            {course.title}
          </h3>
        </div>

        {/* Schedule & Duration Meta */}
        <div className="space-y-2 text-xs pt-2" style={{ color: "var(--text-secondary)" }}>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00BFA5] shrink-0" />
            <span>Duration: <strong>{course.duration}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#0066D6] shrink-0" />
            <span className="truncate">Schedule: <strong>{course.schedule}</strong></span>
          </div>
        </div>

        {/* Teacher Info */}
        {teacher && (
          <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#0066D6]/30 shrink-0">
              {teacher.photoUrl ? (
                <img
                  src={teacher.photoUrl}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#0066D6]/20 flex items-center justify-center text-xs font-bold text-[#0066D6]">
                  {teacher.name[0]}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-bold truncate" style={{ color: "var(--text-primary)" }}>
                {teacher.name}
              </p>
              <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                {teacher.yearsExperience}+ Years Experience
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Fee & Action CTA */}
      <div className="pt-6 mt-6 border-t flex items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: "var(--text-muted)" }}>
            One-Time Fee
          </span>
          <span className="text-xl sm:text-2xl font-extrabold text-[#0066D6]">
            Rs. {course.fee.toLocaleString()}
          </span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0"
          style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--primary-blue-hover))" }}
        >
          Details / Apply
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </motion.div>
  );
}
