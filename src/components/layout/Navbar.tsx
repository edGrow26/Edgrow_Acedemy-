"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 flex justify-center">
      <div
        className={`w-full max-w-6xl flex items-center justify-between px-4 py-2.5 sm:px-6 transition-all duration-300 rounded-2xl shadow-xl backdrop-blur-2xl border`}
        style={{
          backgroundColor: scrolled ? "var(--glass-bg)" : "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ backgroundColor: "var(--text-primary)" }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: "var(--surface)" }} />
              </div>
              EdGrow <span className="font-normal" style={{ color: "var(--text-secondary)" }}>Academy</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/courses"
            className="text-sm font-semibold tracking-wide transition-colors flex items-center gap-1 uppercase"
            style={{ color: "var(--text-primary)" }}
          >
            Courses <span className="text-[10px] opacity-60 ml-0.5">▼</span>
          </Link>
          <Link
            href="/instructors"
            className="text-sm font-semibold tracking-wide transition-colors uppercase opacity-70 hover:opacity-100"
            style={{ color: "var(--text-primary)" }}
          >
            Instructors
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "var(--text-primary)", color: "var(--surface)" }}
          >
            {t.applyNow}
          </Link>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl border focus:outline-none"
            style={{
              backgroundColor: "var(--glass-bg)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
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
              className="block text-base font-semibold py-2 hover:text-[#154f59]"
              style={{ color: "var(--text-primary)" }}
            >
              Courses
            </Link>
            <Link
              href="/instructors"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-semibold py-2 hover:text-[#154f59]"
              style={{ color: "var(--text-primary)" }}
            >
              Our Instructors
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
