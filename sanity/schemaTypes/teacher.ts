import { defineField, defineType } from "sanity";

/**
 * Teacher / Instructor schema
 * Models the instructors who teach IT courses at EdGrow Academy.
 * Maps to the `Teacher` interface in src/lib/types.ts.
 */
export default defineType({
  name: "teacher",
  title: "Instructor",
  description: "An IT course instructor at EdGrow Academy.",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(2, "Name must be at least 2 characters"),
    }),
    defineField({
      name: "photoUrl",
      title: "Profile Photo",
      type: "image",
      description: "Headshot of the instructor.",
      options: {
        accept: "image/*",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Describe the image for accessibility.",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.required().min(10, "Bio must be at least 10 characters"),
    }),
    defineField({
      name: "yearsExperience",
      title: "Years of Experience",
      type: "number",
      description: "Total years of industry experience.",
      validation: (Rule) =>
        Rule.required().min(0, "Experience must be 0 or positive"),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "yearsExperience",
      media: "photoUrl",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `${subtitle}+ Years Industry Experience`,
        media,
      };
    },
  },
});
