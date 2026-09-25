 "use client";

import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <main className="flex-1 pt-28 pb-20 relative bg-[#1c2e40]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
      }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12 relative z-10">
          
          {/* Top Banner Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden backdrop-blur-md bg-[#0f172a]/50 shadow-lg"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#154f59]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center gap-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#154f59]/20 text-teal-300 border border-[#154f59]/30">
                {course.topic}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#00BFA5]/20 text-[#00BFA5] border border-[#00BFA5]/30 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Live Classes Only
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight relative z-10 text-white">
              {course.title}
            </h1>

            {/* Quick Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t relative z-10" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00BFA5]/20 text-[#00BFA5]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block text-gray-400">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-white">
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#154f59]/30 text-teal-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: "var(--text-muted)" }}>
                    Class Days
                  </span>
                  <span className="text-sm font-bold truncate block" style={{ color: "var(--text-primary)" }}>
                    {course.classDays || course.schedule}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#154f59]/10 text-[#154f59]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block" style={{ color: "var(--text-muted)" }}>
                    Schedule
                  </span>
                  <span className="text-sm font-bold truncate block text-white">
                    {course.schedule}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1DE9B6]/20 text-[#1DE9B6]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block text-gray-400">
                    One-Time Fee
                  </span>
                  <span className="text-2xl font-extrabold text-[#1DE9B6]">
                    Rs. {course.fee.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <a
                href="#apply-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white shadow-xl transition-all hover:opacity-90 active:scale-95 bg-[#154f59]"
              >
                <span>Apply for this Course</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Policy Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
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
                viewport={{ once: true }}
              >
                <motion.h2 variants={itemVariants} className="text-2xl font-bold flex items-center gap-2 text-white">
                  <BookOpen className="w-6 h-6 text-teal-400" />
                  Course Syllabus
                </motion.h2>
                <div className="space-y-3">
                  {course.syllabus.map((item, idx) => (
                    <motion.div
                      variants={itemVariants}
                      key={idx}
                      className="p-4 rounded-xl border flex items-start gap-3 transition-colors hover:border-[#154f59]/60 backdrop-blur-md bg-[#0f172a]/50 border-white/10 shadow-sm"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#154f59]/30 text-teal-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-medium pt-0.5 text-gray-200">
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
                  className="p-6 rounded-2xl border space-y-4 backdrop-blur-md bg-[#0f172a]/50 border-white/10 shadow-lg"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#00BFA5]">
                    Instructor Profile
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#154f59]/40 shrink-0">
                      {teacher.photoUrl ? (
                        <img
                          src={teacher.photoUrl}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#154f59]/30 flex items-center justify-center font-bold text-xl text-teal-400">
                          {teacher.name[0]}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">
                        {teacher.name}
                      </h4>
                      <p className="text-xs font-semibold text-teal-400">
                        {teacher.yearsExperience}+ Years Software Industry Experience
                      </p>
                      <p className="text-xs leading-relaxed text-gray-300">
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
