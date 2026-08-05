import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";

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
  openGraph: {
    title: "EdGrow Academy — Tamil Medium Online IT Education Sri Lanka",
    description: "100% Live Google Meet classes. Industry-experienced instructors. One-time fee.",
    url: "https://edgrow.lk",
    siteName: "EdGrow Academy",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomePageClient />;
}