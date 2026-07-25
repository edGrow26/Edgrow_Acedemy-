"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { Teacher } from "@/lib/types";

interface TeacherCardProps {
  teacher: Teacher;
  index?: number;
}

export default function TeacherCard({ teacher, index = 0 }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 relative flex flex-col h-full group"
    >
      <div className="space-y-4 flex-1 flex flex-col">

        {/* Top Badge */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border text-[#0066D6] bg-[#0066D6]/10 border-[#0066D6]/20 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            Instructor
          </span>
        </div>

        {/* Photo & Name */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#0066D6]/30 shrink-0">
            {teacher.photoUrl ? (
              <img
                src={teacher.photoUrl}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#0066D6]/20 flex items-center justify-center font-bold text-xl text-[#0066D6]">
                {teacher.name[0]}
              </div>
            )}
          </div>
          <div>
            <h3
              className="text-lg font-bold group-hover:text-[#0066D6] transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              {teacher.name}
            </h3>
            <p className="text-xs font-semibold text-[#0066D6]">
              {teacher.yearsExperience}+ Years Software Industry Experience
            </p>
          </div>
        </div>

        {/* Bio Preview */}
        <p
          className="text-xs leading-relaxed line-clamp-3"
          style={{ color: "var(--text-body)" }}
        >
          {teacher.bio}
        </p>

      </div>

      {/* Action CTA */}
      <div className="pt-6 mt-4 border-t flex items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
        <span className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
          View Instructor Profile
        </span>
        <Link
          href={`/instructors/${teacher.id}`}
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-white transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0"
          style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--primary-blue-hover))" }}
          aria-label={`View ${teacher.name}'s profile`}
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </motion.div>
  );
}
