"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Video, Users, Award, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { dictionary } from "@/lib/i18n";

export default function HomePageClient() {
  const t = dictionary.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
          {/* Ambient Glow Effects */}
          <div className="ambient-glow top-10 -left-20" />
          <div className="ambient-glow bottom-10 -right-20" style={{ background: "rgba(0, 191, 165, 0.12)" }} />

          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              {/* Badge */}
              <motion.div variants={itemVariants} className="flex justify-center">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-[#00BFA5] animate-ping" />
                  <Sparkles className="w-4 h-4 text-[#0066D6]" />
                  <span>{t.liveOnlyBadge}</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2]" style={{ color: "var(--text-primary)" }}>
                Accelerate Your Tech Career with{" "}
                <span className="text-gradient-blue">Tamil-Medium Live IT Courses</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={itemVariants} className="text-base sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
                {t.subtagline} Master full-stack software engineering and AI with industry leaders in Sri Lanka.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white shadow-xl transition-all hover:opacity-90 active:scale-95 text-base"
                  style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--accent-teal))" }}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>{t.exploreCourses}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="#trust"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold border transition-all hover:bg-[var(--ambient-blue)] active:scale-95 text-base"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <span>Why EdGrow Academy?</span>
                </a>
              </motion.div>

              {/* Quick Key Highlights */}
              <motion.div variants={itemVariants} className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00BFA5]" />
                  <span>Live Google Meet Sessions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066D6]" />
                  <span>One-Time Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1DE9B6]" />
                  <span>Dedicated WhatsApp Group Support</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* TRUST & VALUE PROPOSITION SECTION */}
        <section id="trust" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
            
            <motion.div 
              className="text-center max-w-3xl mx-auto space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#00BFA5] block">
                Trusted Learning Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--text-primary)" }}>
                Why Sri Lankan Students Choose <span className="text-gradient-blue">EdGrow Academy</span>
              </h2>
              <p className="text-sm sm:text-base" style={{ color: "var(--text-body)" }}>
                We provide direct, hands-on Tamil-medium IT training tailored for real software engineering jobs.
              </p>
            </motion.div>

            {/* 3 Pillar Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl border space-y-4 shadow-lg backdrop-blur-md glass-card flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066D6]/10 text-[#0066D6] flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {t.trustItem1Title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1" style={{ color: "var(--text-body)" }}>
                  {t.trustItem1Desc} Every class is interactive with instant instructor Q&A.
                </p>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-500 font-semibold flex items-center gap-2 mt-4">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>No recorded video lessons provided.</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl border space-y-4 shadow-lg backdrop-blur-md glass-card flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BFA5]/10 text-[#00BFA5] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {t.trustItem2Title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1" style={{ color: "var(--text-body)" }}>
                  {t.trustItem2Desc} Taught by practicing senior engineers with proven field experience.
                </p>
                <div className="p-3 rounded-xl bg-[#00BFA5]/10 border border-[#00BFA5]/20 text-[11px] text-[#00BFA5] font-semibold flex items-center gap-2 mt-4">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>8+ Years Industry Experience</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl border space-y-4 shadow-lg backdrop-blur-md glass-card flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1DE9B6]/10 text-[#1DE9B6] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  One-Time Fee & WhatsApp Groups
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1" style={{ color: "var(--text-body)" }}>
                  Pay a single transparent fee. After verification, you are added directly into your class WhatsApp group.
                </p>
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[11px] text-red-400 font-semibold flex items-center gap-2 mt-4">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>One-Time Fee • No Refunds Policy</span>
                </div>
              </motion.div>

            </motion.div>

            {/* Impact Counters */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl border text-center grid grid-cols-2 md:grid-cols-4 gap-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0066D6]">
                  <AnimatedCounter value={1200} suffix="+" />
                </p>
                <p className="text-xs font-semibold mt-1" style={{ color: "var(--text-secondary)" }}>Students Enrolled</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#00BFA5]">
                  <AnimatedCounter value={100} suffix="%" />
                </p>
                <p className="text-xs font-semibold mt-1" style={{ color: "var(--text-secondary)" }}>Live Interactive Classes</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1DE9B6]">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-xs font-semibold mt-1" style={{ color: "var(--text-secondary)" }}>Course Modules</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0066D6]">
                  <AnimatedCounter value={4} suffix=".9/5" />
                </p>
                <p className="text-xs font-semibold mt-1" style={{ color: "var(--text-secondary)" }}>Student Rating</p>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
