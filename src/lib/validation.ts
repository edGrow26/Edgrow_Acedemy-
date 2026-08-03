import { z } from "zod";

// Sri Lanka Phone Number Regex Validator:
// Matches: 07X XXXXXXX (10 digits) or +94 7X XXXXXXX (12 chars with +94 prefix)
export const sriLankaPhoneRegex = /^(?:\+94|0)?7[0-9]{8}$/;

export const applicationSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters" }),
  phone: z
    .string()
    .transform((val) => val.replace(/[\s-]/g, ""))
    .refine((val) => sriLankaPhoneRegex.test(val), {
      message: "Please enter a valid Sri Lankan phone number (e.g., 0771234567 or +94771234567)",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .optional()
    .or(z.literal("")),
  couponCode: z.string().optional().or(z.literal("")),
  courseId: z.string().min(1, { message: "Please select a course" }),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const adminLoginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;

export const courseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  teacherId: z.string().min(1, "Select an instructor"),
  duration: z.string().min(1, "Enter duration"),
  durationCategory: z.enum(["under-1-month", "1-3-months", "3-plus-months"]),
  fee: z.number().min(0, "Fee must be 0 or positive"),
  feeBucket: z.enum(["budget", "mid", "premium"]),
  category: z.string().default("IT"),
  topic: z.string().min(1, "Select or enter a topic"),
  language: z.string().default("Tamil"),
  scheduleSlot: z.enum(["morning", "evening", "weekend"]),
  schedule: z.string().min(1, "Enter class schedule details"),
  syllabus: z.array(z.string()).min(1, "Add at least one syllabus item"),
  isActive: z.boolean().default(true),
});

export type CourseFormData = z.infer<typeof courseSchema>;

export const teacherSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  photoUrl: z.string().url("Enter a valid image URL"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  yearsExperience: z.number().min(0, "Experience must be 0 or positive"),
});

export type TeacherFormData = z.infer<typeof teacherSchema>;
