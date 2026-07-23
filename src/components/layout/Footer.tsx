import Link from "next/link";
import { GraduationCap, PhoneCall, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { dictionary } from "@/lib/i18n";

export default function Footer() {
  const t = dictionary.en;

  return (
    <footer
      className="border-t pt-16 pb-12 text-sm"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: "var(--border)" }}>
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl p-0.5"
                style={{ background: "linear-gradient(135deg, var(--primary-blue), var(--accent-teal))" }}
              >
                <div
                  className="w-full h-full rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <GraduationCap className="w-5 h-5 text-[#0066D6]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                EdGrow <span className="text-[#0066D6]">Academy</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t.tagline}. {t.subtagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--accent-teal)" }}>
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Live Google Meet Classes Only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
              Learning Tracks
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
              <li><Link href="/courses" className="hover:text-[#0066D6]">Full-Stack Web Development</Link></li>
              <li><Link href="/courses" className="hover:text-[#0066D6]">Python Programming & AI</Link></li>
              <li><Link href="/courses" className="hover:text-[#0066D6]">Cloud DevOps & Docker</Link></li>
              <li><Link href="/courses" className="hover:text-[#0066D6]">Programming Fundamentals</Link></li>
            </ul>
          </div>

          {/* Guidelines & Policy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
              Important Policies
            </h4>
            <ul className="space-y-2.5 text-xs" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BFA5] shrink-0" />
                <span>Live Interactive Sessions via Google Meet</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>No Recorded Video Lessons Provided</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>One-Time Fee • No Refunds Policy</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp Support Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
              WhatsApp Support Center
            </h4>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Contact our admissions team directly on WhatsApp:
            </p>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp: +94 77 123 4567
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
          <p>© {new Date().getFullYear()} EdGrow Academy Sri Lanka. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/#trust" className="hover:underline">Features</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
