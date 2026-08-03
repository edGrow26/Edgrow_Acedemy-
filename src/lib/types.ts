export type ApplicationStatus = 'New' | 'Contacted' | 'Payment Verified' | 'Enrolled';

export type ScheduleSlot = 'morning' | 'evening' | 'weekend';
export type DurationCategory = 'under-1-month' | '1-3-months' | '3-plus-months';
export type FeeBucket = 'budget' | 'mid' | 'premium';

export interface Teacher {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  yearsExperience: number;
}

export interface Course {
  id: string;
  title: string;
  titleTa?: string;
  teacherId: string;
  duration: string;
  durationCategory: DurationCategory;
  fee: number;
  feeBucket: FeeBucket;
  couponCode?: string;
  discountType?: "percent" | "fixed";
  discountValue?: number;
  category: string; // Default: "IT"
  topic: string; // e.g., "Web Development", "Programming Fundamentals", "Data/AI", "Networking"
  language: string; // Default: "Tamil"
  scheduleSlot: ScheduleSlot;
  schedule: string;
  syllabus: string[];
  isActive: boolean;
  createdAt: string;
}

export interface Application {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  couponCode?: string;
  courseId: string;
  status: ApplicationStatus;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
}

export interface CourseFilterState {
  feeBucket: string;
  duration: string;
  scheduleSlot: string;
  topic: string;
  searchQuery: string;
}
