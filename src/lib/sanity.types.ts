export interface SanityRef {
  _ref: string;
  _type: "reference";
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityTeacher {
  _id: string;
  _type: "teacher";
  name: string;
  photoUrl?: SanityImage | string;
  bio: string;
  yearsExperience: number;
}

export interface SanityCourse {
  _id: string;
  _type: "course";
  title: string;
  titleTa?: string;
  teacher?: SanityTeacher | SanityRef;
  teacherId?: string;
  duration: string;
  durationCategory: "under-1-month" | "1-3-months" | "3-plus-months";
  fee: number;
  feeBucket: "budget" | "mid" | "premium";
  category: string;
  topic: string;
  language: string;
  scheduleSlot: "morning" | "evening" | "weekend";
  schedule: string;
  syllabus: string[];
  isActive: boolean;
  createdAt: string;
}

export interface SanityExplorePage {
  _id: string;
  _type: "explorePage";
  pageTitle: string;
  pageSubtitle: string;
  badgeText: string;
  liveOnlyBadge: string;
  noRefundsNotice: string;
  featuredCourseIds?: (SanityCourse | SanityRef)[];
}

export interface SanityApplication {
  _id: string;
  _type: "application";
  fullName: string;
  phone: string;
  email?: string;
  course: SanityRef;
  status: "New" | "Contacted" | "Payment Verified" | "Enrolled";
  adminNotes?: string;
  submittedAt: string;
}
