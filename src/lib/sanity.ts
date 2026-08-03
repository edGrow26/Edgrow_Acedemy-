import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7epe2pro";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for fresh server-side data fetching
  token: process.env.SANITY_API_TOKEN,
});

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
}): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw error;
  }
}
