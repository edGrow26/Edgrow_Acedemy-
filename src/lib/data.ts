import { Course, Teacher, Application } from "./types";

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: "t1",
    name: "Karthik Baskaran",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Senior Full-Stack Lead with 8+ years of experience building enterprise web applications across Sri Lanka and international markets.",
    yearsExperience: 8,
  },
  {
    id: "t2",
    name: "Priya Sivakumar",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "AI Researcher and Data Scientist specializing in Machine Learning, Python NLP pipelines, and LLM integrations.",
    yearsExperience: 6,
  },
  {
    id: "t3",
    name: "Arun Raj",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Principal Cloud Engineer & DevOps Specialist managing multi-region Kubernetes clusters and CI/CD pipelines.",
    yearsExperience: 10,
  },
];

export const INITIAL_COURSES: Course[] = [
  {
    id: "fullstack-nextjs",
    title: "Full-Stack Web Development (Next.js 15 & TypeScript)",
    titleTa: "Full-Stack Web Development (Next.js 15 & TypeScript)",
    teacherId: "t1",
    duration: "3 Months",
    durationCategory: "1-3-months",
    fee: 25000,
    feeBucket: "mid",
    category: "IT",
    topic: "Web Development",
    language: "Tamil",
    scheduleSlot: "weekend",
    schedule: "Saturday & Sunday 7:00 PM - 9:00 PM",
    syllabus: [
      "HTML5, CSS3, Modern JavaScript (ES6+)",
      "React 19 Hooks & State Management",
      "Next.js 15 App Router & Server Components",
      "TypeScript Fundamentals & Interfaces",
      "Tailwind CSS & Responsive UI Design",
      "Prisma ORM & PostgreSQL Database Integration",
      "REST APIs & Next.js Server Actions",
      "Vercel Deployment & Capstone Project"
    ],
    isActive: true,
    createdAt: "2026-01-10T10:00:00Z",
  },
  {
    id: "python-ai-foundations",
    title: "Python Programming & AI Foundations",
    titleTa: "Python Programming & AI Foundations",
    teacherId: "t2",
    duration: "6 Weeks",
    durationCategory: "1-3-months",
    fee: 18000,
    feeBucket: "budget",
    category: "IT",
    topic: "Data/AI",
    language: "Tamil",
    scheduleSlot: "evening",
    schedule: "Monday & Wednesday 8:00 PM - 9:30 PM",
    syllabus: [
      "Python Basics, Data Structures & Functions",
      "Object-Oriented Programming (OOP)",
      "NumPy & Pandas for Data Analysis",
      "Machine Learning Algorithms with Scikit-Learn",
      "OpenAI API & Prompt Engineering",
      "Building Practical AI Micro-tools"
    ],
    isActive: true,
    createdAt: "2026-01-12T10:00:00Z",
  },
  {
    id: "devops-kubernetes",
    title: "Modern Cloud DevOps, Docker & Kubernetes",
    titleTa: "Modern Cloud DevOps, Docker & Kubernetes",
    teacherId: "t3",
    duration: "2 Months",
    durationCategory: "1-3-months",
    fee: 35000,
    feeBucket: "premium",
    category: "IT",
    topic: "Networking",
    language: "Tamil",
    scheduleSlot: "weekend",
    schedule: "Sunday 9:00 AM - 12:00 PM",
    syllabus: [
      "Linux Administration & Bash Scripting",
      "Git & GitHub Actions Automation",
      "Containerization with Docker & Multi-stage builds",
      "Kubernetes Architecture, Pods & Services",
      "Terraform Infrastructure as Code (IaC)",
      "AWS Cloud Fundamentals & Monitoring"
    ],
    isActive: true,
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "cs-fundamentals",
    title: "Programming Fundamentals & Data Structures",
    titleTa: "Programming Fundamentals & Data Structures",
    teacherId: "t1",
    duration: "4 Weeks",
    durationCategory: "under-1-month",
    fee: 12000,
    feeBucket: "budget",
    category: "IT",
    topic: "Programming Fundamentals",
    language: "Tamil",
    scheduleSlot: "morning",
    schedule: "Saturday 8:00 AM - 10:30 AM",
    syllabus: [
      "Computational Thinking & Problem Solving",
      "Variables, Loops & Conditional Logic",
      "Arrays, Linked Lists, Stacks & Queues",
      "Searching & Sorting Algorithms",
      "Big O Notation & Code Optimization",
      "Coding Interview Problem Solving"
    ],
    isActive: true,
    createdAt: "2026-01-18T10:00:00Z",
  }
];

export const INITIAL_APPLICATIONS: Application[] = [
  {
    id: "app-101",
    fullName: "Kajan Tharmalingam",
    phone: "0771234567",
    email: "kajan.t@gmail.com",
    courseId: "fullstack-nextjs",
    status: "New",
    adminNotes: "Requested weekend slot confirmation via WhatsApp.",
    createdAt: "2026-07-21T14:20:00Z",
    updatedAt: "2026-07-21T14:20:00Z",
  },
  {
    id: "app-102",
    fullName: "Suresh Kumar",
    phone: "0719876543",
    email: "suresh.k@outlook.com",
    courseId: "python-ai-foundations",
    status: "Contacted",
    adminNotes: "Sent WhatsApp onboarding details. Awaiting bank receipt.",
    createdAt: "2026-07-20T09:15:00Z",
    updatedAt: "2026-07-21T10:30:00Z",
  },
  {
    id: "app-103",
    fullName: "Deepa Jeganathan",
    phone: "+94765432109",
    email: "deepa.j@yahoo.com",
    courseId: "fullstack-nextjs",
    status: "Payment Verified",
    adminNotes: "Bank transfer verified. Added to pending onboarding list.",
    createdAt: "2026-07-19T16:45:00Z",
    updatedAt: "2026-07-20T11:00:00Z",
  },
  {
    id: "app-104",
    fullName: "Praveen Selvaraja",
    phone: "0751122334",
    email: "",
    courseId: "devops-kubernetes",
    status: "Enrolled",
    adminNotes: "Payment verified & student added to WhatsApp Group + Meet calendar link sent.",
    createdAt: "2026-07-18T11:00:00Z",
    updatedAt: "2026-07-19T08:20:00Z",
  }
];

export const getStoredCourses = (): Course[] => {
  if (typeof window === "undefined") return INITIAL_COURSES;
  const stored = localStorage.getItem("edgrow_courses");
  return stored ? JSON.parse(stored) : INITIAL_COURSES;
};

export const saveCourses = (courses: Course[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("edgrow_courses", JSON.stringify(courses));
  }
};

export const getStoredTeachers = (): Teacher[] => {
  if (typeof window === "undefined") return INITIAL_TEACHERS;
  const stored = localStorage.getItem("edgrow_teachers");
  return stored ? JSON.parse(stored) : INITIAL_TEACHERS;
};

export const saveTeachers = (teachers: Teacher[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("edgrow_teachers", JSON.stringify(teachers));
  }
};

export const getStoredApplications = (): Application[] => {
  if (typeof window === "undefined") return INITIAL_APPLICATIONS;
  const stored = localStorage.getItem("edgrow_applications");
  return stored ? JSON.parse(stored) : INITIAL_APPLICATIONS;
};

export const saveApplications = (applications: Application[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("edgrow_applications", JSON.stringify(applications));
  }
};
