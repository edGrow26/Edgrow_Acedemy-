import { defineField, defineType } from "sanity";

/**
 * IT Course schema
 * Models the courses displayed on the "Explore Our IT Courses" page.
 * Maps to the `Course` interface in src/lib/types.ts.
 */
export default defineType({
  name: "course",
  title: "IT Course",
  description: "An IT course offered by EdGrow Academy (Tamil-medium, live sessions).",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title (English)",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(3, "Title must be at least 3 characters"),
    }),
    defineField({
      name: "titleTa",
      title: "Course Title (Tamil)",
      type: "string",
      description: "Tamil translation of the course title (optional).",
    }),
    defineField({
      name: "teacher",
      title: "Instructor",
      type: "reference",
      description: "The instructor who teaches this course.",
      to: [{ type: "teacher" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Human-readable duration, e.g. '3 Months', '6 Weeks'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "durationCategory",
      title: "Duration Category",
      type: "string",
      options: {
        list: [
          { title: "Under 1 Month", value: "under-1-month" },
          { title: "1 - 3 Months", value: "1-3-months" },
          { title: "3+ Months", value: "3-plus-months" },
        ],
        layout: "radio",
      },
      initialValue: "1-3-months",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fee",
      title: "Course Fee",
      type: "number",
      description: "One-time fee in Sri Lankan Rupees (LKR).",
      validation: (Rule) => Rule.required().min(0, "Fee must be 0 or positive"),
    }),
    defineField({
      name: "feeBucket",
      title: "Fee Range",
      type: "string",
      options: {
        list: [
          { title: "Budget-Friendly (< Rs. 20,000)", value: "budget" },
          { title: "Mid-Range (Rs. 20,000 - 30,000)", value: "mid" },
          { title: "Premium Pro (> Rs. 30,000)", value: "premium" },
        ],
        layout: "radio",
      },
      initialValue: "mid",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Course category. Defaults to 'IT'.",
      initialValue: "IT",
    }),
    defineField({
      name: "topic",
      title: "Topic / Specialization",
      type: "string",
      description: "e.g. Web Development, Programming Fundamentals, Data/AI, Networking.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language of Instruction",
      type: "string",
      description: "Defaults to 'Tamil'.",
      initialValue: "Tamil",
    }),
    defineField({
      name: "scheduleSlot",
      title: "Schedule Slot",
      type: "string",
      options: {
        list: [
          { title: "Morning", value: "morning" },
          { title: "Evening", value: "evening" },
          { title: "Weekend", value: "weekend" },
        ],
        layout: "radio",
      },
      initialValue: "weekend",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "schedule",
      title: "Class Schedule",
      type: "string",
      description: "Detailed schedule, e.g. 'Saturday & Sunday 7:00 PM - 9:00 PM'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "syllabus",
      title: "Course Syllabus",
      type: "array",
      description: "List of syllabus topics/modules.",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1, "Add at least one syllabus item"),
    }),
    defineField({
      name: "isActive",
      title: "Active on Explore Page",
      type: "boolean",
      description: "Only active courses are shown on the 'Explore Our IT Courses' page.",
      initialValue: true,
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      description: "When this course was first created.",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "topic",
      fee: "fee",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, subtitle, fee, isActive } = selection;
      return {
        title,
        subtitle: `${subtitle} • Rs. ${fee?.toLocaleString()} ${isActive ? "• Active" : "• Draft"}`,
      };
    },
  },
});
