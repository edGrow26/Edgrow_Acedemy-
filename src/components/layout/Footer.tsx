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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b" style={{ borderColor: "var(--border)" }}>
          
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
                  <GraduationCap className="w-5 h-5 text-[#154f59]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                EdGrow <span className="text-[#154f59]">Academy</span>
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
              <li><Link href="/courses" className="hover:text-[#154f59]">Full-Stack Web Development</Link></li>
              <li><Link href="/courses" className="hover:text-[#154f59]">Python Programming & AI</Link></li>
              <li><Link href="/courses" className="hover:text-[#154f59]">Cloud DevOps & Docker</Link></li>
              <li><Link href="/courses" className="hover:text-[#154f59]">Programming Fundamentals</Link></li>
            </ul>

            {/* Instructors */}
           
          </div>
           <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
                Our Instructors
              </h4>
              <ul className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                <li><Link href="/instructors" className="hover:text-[#154f59]">Meet Our Instructors</Link></li>
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
              href="https://wa.me/94771580346"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4 h-4"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.1.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              WhatsApp: +94 77 158 0346
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
