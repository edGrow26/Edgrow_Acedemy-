import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

/**
 * Sanity Studio configuration for EdGrow Academy.
 *
 * Desk Structure:
 *  📄 Explore Page (singleton)
 *  ─────────────────────────
 *  📚 Courses
 *  👨‍🏫 Instructors
 *  📋 Applications
 *
 * To run the Studio locally:
 *   cd sanity && npx sanity dev
 */
export default defineConfig({
  name: "edgrow-academy",
  title: "EdGrow Academy",
  projectId: "7epe2pro",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("EdGrow Academy CMS")
          .items([
            // ── Singleton: Explore Page ──────────────────────────────────
            S.listItem()
              .title("🌐 Explore Page")
              .id("explorePage")
              .child(
                S.document()
                  .schemaType("explorePage")
                  .documentId("explorePage")
                  .title("Explore Our IT Courses Page")
              ),

            S.divider(),

            // ── Collections ─────────────────────────────────────────────
            S.listItem()
              .title("📚 Courses")
              .schemaType("course")
              .child(S.documentTypeList("course").title("IT Courses")),

            S.listItem()
              .title("👨‍🏫 Instructors")
              .schemaType("teacher")
              .child(S.documentTypeList("teacher").title("Instructors")),

            S.divider(),

            S.listItem()
              .title("📋 Applications")
              .schemaType("application")
              .child(
                S.documentTypeList("application")
                  .title("Course Applications")
                  .defaultOrdering([
                    { field: "submittedAt", direction: "desc" },
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Prevent creating duplicate singleton documents
    newDocumentOptions: (prev) =>
      prev.filter((template) => template.templateId !== "explorePage"),
  },
});
