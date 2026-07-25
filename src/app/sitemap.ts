import { MetadataRoute } from "next";
import { INITIAL_COURSES, INITIAL_TEACHERS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edgrow.lk";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/instructors`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const courseRoutes: MetadataRoute.Sitemap = INITIAL_COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(course.createdAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const instructorRoutes: MetadataRoute.Sitemap = INITIAL_TEACHERS.map((teacher) => ({
    url: `${baseUrl}/instructors/${teacher.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...instructorRoutes];
}
