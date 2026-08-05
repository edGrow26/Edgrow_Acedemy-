"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { dictionary } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = dictionary.en;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-xl backdrop-blur-xl border-b"
          : "py-5 bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--glass-bg)" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl p-0.5 shadow-lg group-hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--accent-teal))" }}
          >
            <div
              className="w-full h-full rounded-[10px] flex items-center justify-center"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <GraduationCap className="w-5 h-5 text-[#0066D6] group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl font-bold tracking-tight flex items-center gap-1.5"
              style={{ color: "var(--text-primary)" }}
            >
              EdGrow <span className="text-[#0066D6]">Academy</span>
            </span>
            <span
              className="text-[10px] font-medium tracking-wide uppercase -mt-0.5 hidden xs:block"
              style={{ color: "var(--text-secondary)" }}
            >
              Sri Lanka Online IT Academy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/courses"
            className="text-sm font-semibold hover:text-[#0066D6] transition-colors flex items-center gap-1.5"
            style={{ color: "var(--text-body)" }}
          >
            <BookOpen className="w-4 h-4 text-[#00BFA5]" />
            {t.exploreCourses}
          </Link>
          <Link
            href="/instructors"
            className="text-sm font-semibold hover:text-[#0066D6] transition-colors flex items-center gap-1.5"
            style={{ color: "var(--text-body)" }}
          >
            <GraduationCap className="w-4 h-4 text-[#0066D6]" />
            Our Instructors
          </Link>
          <Link
            href="/#trust"
            className="text-sm font-semibold hover:text-[#0066D6] transition-colors flex items-center gap-1.5"
            style={{ color: "var(--text-body)" }}
          >
            <Sparkles className="w-4 h-4 text-[#0066D6]" />
            Features
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--primary-blue-hover))" }}
          >
            {t.applyNow}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl border focus:outline-none"
            style={{
              backgroundColor: "var(--glass-bg)",
              borderColor: "var(--border)",
              color: "var(--text-[#0066D6])",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-2xl"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <Link
              href="/courses"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-semibold py-2 hover:text-[#0066D6]"
              style={{ color: "var(--text-primary)" }}
            >
              {t.exploreCourses}
            </Link>
            <Link
              href="/instructors"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-semibold py-2 hover:text-[#0066D6]"
              style={{ color: "var(--text-primary)" }}
            >
              Our Instructors
            </Link>
            <Link
              href="/#trust"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-semibold py-2 hover:text-[#0066D6]"
              style={{ color: "var(--text-primary)" }}
            >
              Features
            </Link>
            <div className="pt-2">
              <Link
                href="/courses"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--accent-teal))" }}
              >
                {t.applyNow}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
