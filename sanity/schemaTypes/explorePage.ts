import { defineField, defineType } from "sanity";

/**
 * Explore Our IT Courses Page schema
 * Models the page-level content for the /courses route (the "Explore Our IT Courses" page).
 * This is a singleton document so editors manage the page header and introductory copy
 * from a single place in Sanity Studio.
 */
export default defineType({
  name: "explorePage",
  title: "Explore Our IT Courses Page",
  description:
    "Page-level content for the 'Explore Our IT Courses' page (/courses).",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      description: "Main heading shown at the top of the Explore Courses page.",
      initialValue: "Explore Our IT Courses",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageSubtitle",
      title: "Page Subtitle",
      type: "text",
      rows: 3,
      description:
        "Subheading / description shown below the page title.",
      initialValue:
        "100% Live sessions taught in Tamil. Select your preferred track and class schedule.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description:
        "Small label / badge shown above the page title (e.g. 'Course Catalog').",
      initialValue: "Course Catalog",
    }),
    defineField({
      name: "liveOnlyBadge",
      title: "Live-Only Badge",
      type: "string",
      description:
        "Badge text emphasizing that all sessions are live (e.g. '100% Live Sessions Only • No Recorded Classes Available').",
      initialValue:
        "100% Live Sessions Only • No Recorded Classes Available",
    }),
    defineField({
      name: "noRefundsNotice",
      title: "No-Refunds Notice",
      type: "string",
      description:
        "Notice about the one-time payment and no-refunds policy.",
      initialValue: "One-Time Payment • No Refunds Policy",
    }),
    defineField({
      name: "featuredCourseIds",
      title: "Featured Courses (Home Page)",
      type: "array",
      description:
        "Optional: pick up to 3 courses to feature on the home page 'Featured Programs' section.",
      of: [
        {
          type: "reference",
          to: [{ type: "course" }],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(3, "You can feature at most 3 courses."),
    }),
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "badgeText",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle || "Explore Our IT Courses Page",
      };
    },
  },
});
