import { defineField, defineType } from "sanity";

/**
 * courseApplication schema
 * Models "Apply to Join Course" form submissions from the EdGrow Academy website.
 * Stores applicant details, selected course, and admin-managed status.
 *
 * Note: selectedCourse is stored as a plain string (not a reference) so that
 * applications work even when the course page falls back to static data with
 * slug-based IDs (e.g. "fullstack-nextjs") instead of Sanity _id values.
 */
export default defineType({
  name: "courseApplication",
  title: "Course Application",
  description: "A form submission for applying to join a course.",
  type: "document",
  fields: [
    defineField({
      name: "selectedCourse",
      title: "Selected Course ID",
      type: "string",
      description:
        "The ID (slug or Sanity _id) of the course the applicant applied to.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "selectedCourseTitle",
      title: "Selected Course Title",
      type: "string",
      description: "Human-readable course title for quick reference.",
      readOnly: true,
    }),
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Applicant's full name.",
      validation: (Rule) =>
        Rule.required().min(2),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "Sri Lankan phone number (e.g. 0712345678 or +94712345678).",
      validation: (Rule) =>
        Rule.required()
          .regex(/^(?:0\d{9}|\+94\d{9})$/)
          .error("Enter a valid Sri Lankan phone number (07XXXXXXXX or +947XXXXXXXXX)"),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "Optional email address for follow-up.",
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          .error("Enter a valid email address"),
    }),
    defineField({
      name: "appliedAt",
      title: "Applied At",
      type: "datetime",
      description: "Timestamp when the application was submitted.",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "⏳ Pending", value: "pending" },
          { title: "📞 Contacted", value: "contacted" },
          { title: "🎓 Enrolled", value: "enrolled" },
          { title: "❌ Rejected", value: "rejected" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "appliedAtDesc",
      by: [{ field: "appliedAt", direction: "desc" }],
    },
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "status",
      course: "selectedCourseTitle",
    },
    prepare(selection) {
      const { title, subtitle, course } = selection;
      const statusEmoji: Record<string, string> = {
        pending: "⏳",
        contacted: "📞",
        enrolled: "🎓",
        rejected: "❌",
      };
      return {
        title,
        subtitle: `${statusEmoji[subtitle] ?? ""} ${subtitle ?? "unknown"} • ${course ?? "No course"}`,
      };
    },
  },
});