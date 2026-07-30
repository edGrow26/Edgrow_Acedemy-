import { defineField, defineType } from "sanity";

/**
 * Application schema
 * Models course applications submitted via the EdGrow Academy website.
 * Admins can manage application status (New → Contacted → Payment Verified → Enrolled)
 * directly from Sanity Studio.
 *
 * Maps to the `Application` interface in src/lib/types.ts.
 */
export default defineType({
  name: "application",
  title: "Course Application",
  description: "A student's course application submitted via the EdGrow Academy website.",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Applicant's full name.",
      validation: (Rule) =>
        Rule.required().min(2, "Name must be at least 2 characters"),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "WhatsApp-capable phone number (Sri Lanka format preferred).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      description: "Optional email address for follow-up.",
    }),
    defineField({
      name: "course",
      title: "Applied Course",
      type: "reference",
      description: "The course this application is for.",
      to: [{ type: "course" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status", 
      title: "Application Status",
      type: "string",
      options: {
        list: [
          { title: "🆕 New", value: "New" },
          { title: "📞 Contacted", value: "Contacted" },
          { title: "✅ Payment Verified", value: "Payment Verified" },
          { title: "🎓 Enrolled", value: "Enrolled" },
        ],
        layout: "radio",
      },
      initialValue: "New",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "adminNotes",
      title: "Admin Notes",
      type: "text",
      rows: 3,
      description: "Internal notes for admin use only (e.g. WhatsApp confirmation, bank receipt details).",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      description: "Timestamp when the application was submitted.",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
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
      course: "course.title",
    },
    prepare(selection) {
      const { title, subtitle, course } = selection;
      const statusEmoji: Record<string, string> = {
        "New": "🆕",
        "Contacted": "📞",
        "Payment Verified": "✅",
        "Enrolled": "🎓",
      };
      return {
        title,
        subtitle: `${statusEmoji[subtitle] ?? ""} ${subtitle} • ${course ?? "No course"}`,
      };
    },
  },
});
