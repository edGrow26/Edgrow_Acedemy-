"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Video, Users, Award, BookOpen, Star, Mic, Camera, MessageSquare, Code, MoreHorizontal } from "lucide-react";
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
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex lg:min-h-screen">
          {/* Split Background */}
          <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
            <div className="w-full lg:w-[55%] h-full" style={{ background: "linear-gradient(135deg, #e3ecf5, #b8cad7)" }} />
            <div className="w-full lg:w-[45%] h-full bg-[#1c2e40] relative" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}>
              {/* Subtle gradient overlay on grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#162534] via-transparent to-transparent" />
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 w-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full items-center">
              
              {/* Left Content */}
              <motion.div 
                className="max-w-2xl space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
                    <span className="text-xs font-bold tracking-wider text-gray-800">LIVE</span>
                    <span className="text-xs font-bold tracking-wider text-gray-800 border-l pl-2 border-gray-300">COHORT ENROLLING NOW</span>
                  </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] text-gray-900">
                  Accelerate Your Tech Career with <span className="font-extrabold text-[#111827]">Tamil-Medium Live IT Courses</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  {t.subtagline} Master full-stack software engineering and AI with industry leaders in Sri Lanka.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Link
                    href="/courses"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-xl transition-all hover:opacity-90 active:scale-95 text-sm"
                    style={{ backgroundColor: "#154f59" }}
                  >
                    <span>EXPLORE COURSES</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#trust"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/40 active:scale-95 text-sm bg-white/30 backdrop-blur-md border border-white/50 text-gray-900 shadow-sm"
                  >
                    <span>WHY EDGROW ACADEMY?</span>
                  </a>
                </motion.div>

                {/* 4 Feature Cards Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                  
                  <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-sm flex flex-col items-center justify-center text-center gap-3 transition-transform hover:scale-105">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <div className="flex">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm -mr-1" />
                        <div className="w-3 h-3 bg-red-500 rounded-sm z-10" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-sm -ml-1" />
                        <div className="w-3 h-3 bg-green-500 rounded-sm -ml-1" />
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 leading-tight">Live Google<br/>Meet Sessions</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-sm flex flex-col items-center justify-center text-center gap-3 transition-transform hover:scale-105">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm">
                      <span className="text-blue-600 font-bold text-lg">₹</span>
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 leading-tight">One-Time<br/>Fee</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-sm flex flex-col items-center justify-center text-center gap-3 transition-transform hover:scale-105">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25D366" viewBox="0 0 16 16">
                         <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592"/>
                       </svg>
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 leading-tight">Dedicated<br/>WhatsApp<br/>Support</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1c2e40]/80 backdrop-blur-md border border-white/10 shadow-sm flex flex-col items-center justify-center text-center gap-2 transition-transform hover:scale-105">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-transparent overflow-hidden"><img src="https://i.pravatar.cc/100?img=33" alt="" /></div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-transparent overflow-hidden"><img src="https://i.pravatar.cc/100?img=47" alt="" /></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-transparent overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="" /></div>
                    </div>
                    <span className="text-[10px] font-medium text-white leading-tight">Join 1,200+<br/>certified students</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-[11px] font-bold text-white">4.9/5</span>
                    </div>
                  </div>

                </motion.div>

              </motion.div>

              {/* Right Content - Mockup */}
              <motion.div 
                className="relative mt-16 lg:mt-0 lg:ml-auto w-full lg:w-[110%] max-w-3xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Tooltip */}
                <div className="absolute -top-6 lg:-top-8 right-10 z-20 bg-white px-5 py-3 rounded-xl shadow-xl border border-gray-100 flex flex-col animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase">Upcoming Session:</span>
                  <span className="text-sm font-extrabold text-gray-900">ADVANCED AI & ML</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-100" />
                </div>

                {/* App Window Frame */}
                <div className="w-full aspect-[16/10] bg-[#1e293b] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col relative z-10">
                  
                  {/* Toolbar */}
                  <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded bg-white/5 text-[10px] text-white/50 font-mono">EdGrow Studio</div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex overflow-hidden">
                    
                    {/* Left Sidebar */}
                    <div className="w-14 border-r border-white/5 flex flex-col items-center py-4 gap-6 bg-[#0f172a]/50 hidden sm:flex">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                        <Code className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-lg text-white/40 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                        <Video className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-lg text-white/40 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-lg text-white/40 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Video Grid Area */}
                    <div className="w-full sm:w-[55%] border-r border-white/5 p-4 flex flex-col gap-4 bg-[#0f172a]">
                      {/* Instructor Video */}
                      <div className="flex-1 rounded-xl bg-gray-800 relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80" alt="Instructor" className="w-full h-full object-cover" />
                        <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-medium flex items-center gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-red-500" /> Instructor
                        </div>
                        {/* Controls overlay */}
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer"><Mic className="w-4 h-4" /></div>
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer"><Camera className="w-4 h-4" /></div>
                        </div>
                      </div>
                      
                      {/* Students Grid */}
                      <div className="h-[30%] grid grid-cols-3 gap-2">
                         <div className="rounded-lg bg-gray-700 overflow-hidden relative">
                           <img src="https://i.pravatar.cc/150?img=11" className="w-full h-full object-cover opacity-80" alt="Student 1" />
                         </div>
                         <div className="rounded-lg bg-gray-700 overflow-hidden relative">
                           <img src="https://i.pravatar.cc/150?img=22" className="w-full h-full object-cover opacity-80" alt="Student 2" />
                         </div>
                         <div className="rounded-lg bg-gray-700 overflow-hidden relative">
                           <img src="https://i.pravatar.cc/150?img=33" className="w-full h-full object-cover opacity-80" alt="Student 3" />
                         </div>
                         <div className="rounded-lg bg-gray-700 overflow-hidden relative">
                           <img src="https://i.pravatar.cc/150?img=44" className="w-full h-full object-cover opacity-80" alt="Student 4" />
                         </div>
                         <div className="rounded-lg bg-gray-700 overflow-hidden relative">
                           <img src="https://i.pravatar.cc/150?img=55" className="w-full h-full object-cover opacity-80" alt="Student 5" />
                         </div>
                         <div className="rounded-lg bg-gray-700 flex items-center justify-center">
                           <span className="text-white/50 text-xs font-semibold">+12</span>
                         </div>
                      </div>
                    </div>

                    {/* Code & Chat Area */}
                    <div className="hidden sm:flex w-[45%] flex-col bg-[#1e293b]">
                      {/* Code Editor */}
                      <div className="flex-[1.5] border-b border-white/5 p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-[10px] text-white/50 font-mono flex gap-2">
                            <span className="text-teal-400 bg-teal-400/10 px-2 py-1 rounded">script.js</span>
                            <span className="px-2 py-1">style.css</span>
                          </div>
                          <MoreHorizontal className="w-4 h-4 text-white/30" />
                        </div>
                        <div className="flex-1 font-mono text-[10px] leading-relaxed text-blue-300 overflow-hidden">
                          <span className="text-purple-400">function</span> <span className="text-yellow-200">trainModel</span>(data) {'{\n'}
                          {'  '}const model = tf.<span className="text-teal-300">sequential</span>();{'\n'}
                          {'  '}model.<span className="text-teal-300">add</span>(tf.layers.<span className="text-teal-300">dense</span>({'{'} units: <span className="text-orange-400">64</span>, activation: <span className="text-green-300">'relu'</span> {'}'}));{'\n'}
                          {'  '}<span className="text-gray-500">// Configure optimizer</span>{'\n'}
                          {'  '}model.<span className="text-teal-300">compile</span>({'{'} optimizer: <span className="text-green-300">'adam'</span>, loss: <span className="text-green-300">'mse'</span> {'}'});{'\n'}
                          {'  '}<span className="text-purple-400">return</span> model;{'\n'}
                          {'}'}
                        </div>
                      </div>

                      {/* Chat */}
                      <div className="flex-1 bg-[#0f172a]/50 p-4 flex flex-col relative">
                        <div className="flex-1 overflow-hidden flex flex-col gap-3 justify-end pb-10">
                          
                          <div className="flex gap-2">
                            <img src="https://i.pravatar.cc/100?img=47" className="w-5 h-5 rounded-full" alt="Student" />
                            <div className="flex flex-col">
                              <span className="text-[9px] text-white/40">Danuka Shan <span className="ml-1">12:30 PM</span></span>
                              <span className="text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-r-lg rounded-bl-lg mt-0.5 max-w-[90%]">What are epochs in ML?</span>
                            </div>
                          </div>

                          <div className="flex gap-2 flex-row-reverse">
                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80" className="w-5 h-5 rounded-full" alt="Instructor" />
                            <div className="flex flex-col items-end">
                              <span className="text-[9px] text-white/40">Instructor <span className="ml-1">12:32 PM</span></span>
                              <span className="text-[10px] text-white/90 bg-teal-500/20 px-2 py-1 rounded-l-lg rounded-br-lg mt-0.5 max-w-[90%] text-right">It's one complete pass through the training dataset!</span>
                            </div>
                          </div>
                          
                        </div>
                        {/* Chat Input */}
                        <div className="absolute bottom-3 left-4 right-4 bg-white/10 rounded-lg flex items-center px-3 py-1.5 border border-white/10">
                          <span className="text-[10px] text-white/40 flex-1">Type a message...</span>
                          <div className="w-5 h-5 rounded bg-teal-500 flex items-center justify-center text-white cursor-pointer">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* TRUST & VALUE PROPOSITION SECTION */}
        <section id="trust" className="py-24 relative bg-[#1c2e40]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}>
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Why Sri Lankan Students Choose <span className="text-gradient-mint">EdGrow Academy</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
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
                className="p-8 rounded-2xl border space-y-4 shadow-lg backdrop-blur-md flex flex-col h-full bg-[#0f172a]/50 border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#154f59]/20 text-teal-400 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.trustItem1Title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1 text-gray-300">
                  {t.trustItem1Desc} Every class is interactive with instant instructor Q&A.
                </p>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-500 font-semibold flex items-center gap-2 mt-4">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>No recorded video lessons provided.</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl border space-y-4 shadow-lg backdrop-blur-md flex flex-col h-full bg-[#0f172a]/50 border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BFA5]/20 text-[#00BFA5] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.trustItem2Title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1 text-gray-300">
                  {t.trustItem2Desc} Taught by practicing senior engineers with proven field experience.
                </p>
                <div className="p-3 rounded-xl bg-[#00BFA5]/10 border border-[#00BFA5]/20 text-[11px] text-[#00BFA5] font-semibold flex items-center gap-2 mt-4">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>8+ Years Industry Experience</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl border space-y-4 shadow-lg backdrop-blur-md flex flex-col h-full bg-[#0f172a]/50 border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1DE9B6]/20 text-[#1DE9B6] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  One-Time Fee & WhatsApp Groups
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1 text-gray-300">
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
              className="p-8 rounded-2xl border text-center grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#0f172a]/50 border-white/10"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#00BFA5]">
                  <AnimatedCounter value={1200} suffix="+" />
                </p>
                <p className="text-xs font-semibold mt-1 text-gray-400">Students Enrolled</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1DE9B6]">
                  <AnimatedCounter value={100} suffix="%" />
                </p>
                <p className="text-xs font-semibold mt-1 text-gray-400">Live Interactive Classes</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#00BFA5]">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-xs font-semibold mt-1 text-gray-400">Course Modules</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1DE9B6]">
                  <AnimatedCounter value={4} suffix=".9/5" />
                </p>
                <p className="text-xs font-semibold mt-1 text-gray-400">Student Rating</p>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
