"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, AlertCircle, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationForm from "@/components/courses/ApplicationForm";
import { Course, Teacher } from "@/lib/types";

interface Props {
  course: Course;
  teacher: Teacher | null;
}

export default function CourseDetailClient({ course, teacher }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
          
          {/* Top Banner Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl border space-y-6 relative overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: "var(--glass-bg)",
              borderColor: "var(--border)",
            }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066D6]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center gap-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#0066D6]/10 text-[#0066D6] border border-[#0066D6]/20">
                {course.topic}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#00BFA5]/10 text-[#00BFA5] border border-[#00BFA5]/20 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Live Classes Only
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight relative z-10" style={{ color: "var(--text-primary)" }}>
              {course.title}
            </h1>

            {/* Quick Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t relative z-10" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00BFA5]/10 text-[#00BFA5]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: "var(--text-muted)" }}>
                    Duration
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0066D6]/10 text-[#0066D6]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: "var(--text-muted)" }}>
                    Schedule
                  </span>
                  <span className="text-sm font-bold truncate block" style={{ color: "var(--text-primary)" }}>
                    {course.schedule}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1DE9B6]/10 text-[#1DE9B6]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: "var(--text-muted)" }}>
                    One-Time Fee
                  </span>
                  <span className="text-2xl font-extrabold text-[#0066D6]">
                    Rs. {course.fee.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <a
                href="#apply-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white shadow-xl transition-all hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--accent-teal))" }}
              >
                <span>Apply for this Course</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Policy Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
                <span className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                  <AlertCircle className="w-3.5 h-3.5" />
                  No Recordings Provided
                </span>
                <span className="flex items-center gap-1 text-red-400 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-3.5 h-3.5" />
                  No Refunds Policy
                </span>
              </div>
            </div>

          </motion.div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content (Syllabus & Teacher) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Syllabus Section */}
              <motion.div 
                className="space-y-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2 variants={itemVariants} className="text-2xl font-bold flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                  <BookOpen className="w-6 h-6 text-[#0066D6]" />
                  Course Syllabus
                </motion.h2>
                <div className="space-y-3">
                  {course.syllabus.map((item, idx) => (
                    <motion.div
                      variants={itemVariants}
                      key={idx}
                      className="p-4 rounded-xl border flex items-start gap-3 transition-colors hover:border-[#0066D6]/40 glass-card"
                      style={{
                        backgroundColor: "var(--surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#0066D6]/10 text-[#0066D6] font-extrabold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-medium pt-0.5" style={{ color: "var(--text-primary)" }}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Instructor Bio Section */}
              {teacher && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-2xl border space-y-4"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#00BFA5]">
                    Instructor Profile
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#0066D6]/40 shrink-0">
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
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                        {teacher.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#0066D6]">
                        {teacher.yearsExperience}+ Years Software Industry Experience
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-body)" }}>
                        {teacher.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right Sticky Application Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-5 sticky top-28"
            >
              <ApplicationForm course={course} />
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
