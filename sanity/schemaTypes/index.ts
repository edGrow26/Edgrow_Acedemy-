import { type SchemaTypeDefinition } from "sanity";
import teacher from "./teacher";
import course from "./course";
import explorePage from "./explorePage";
import application from "./application";
import courseApplication from "./courseApplication";

/**
 * Central registry of all Sanity schema types for EdGrow Academy.
 * Import this array into sanity.config.ts via the `schema.types` option.
 *
 * Schema types:
 *  - teacher           : IT course instructors
 *  - course            : IT courses offered by the academy
 *  - explorePage       : Singleton — "Explore Our IT Courses" page content
 *  - application       : Student course applications (admin-managed)
 *  - courseApplication : "Apply to Join Course" form submissions
 */
export const schemaTypes: SchemaTypeDefinition[] = [
  teacher,
  course,
  explorePage,
  application,
  courseApplication,
];

export { teacher, course, explorePage, application, courseApplication };
