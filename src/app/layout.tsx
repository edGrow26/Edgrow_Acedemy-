import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "EdGrow Academy | Tamil Medium IT Courses Sri Lanka",
  description: "Tamil-medium online education platform for Sri Lankan students. Learn Full-Stack Web Development, Python AI, DevOps & Programming Fundamentals through 100% live Google Meet classes.",
  keywords: [
    "IT courses Sri Lanka",
    "Tamil medium IT courses",
    "Online computer classes Sri Lanka",
    "Learn IT in Tamil",
    "Full stack web development Sri Lanka",
    "Coding classes Sri Lanka"
  ],
  authors: [{ name: "EdGrow Academy Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
