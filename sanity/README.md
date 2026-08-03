# Sanity CMS — EdGrow Academy

This directory contains the Sanity schemas for the **EdGrow Academy** content management system.

## Schemas

| Schema         | File                        | Description                                                              |
| -------------- | --------------------------- | ------------------------------------------------------------------------ |
| `teacher`      | `schemas/teacher.ts`        | Instructor / teacher profiles (name, photo, bio, experience).            |
| `course`       | `schemas/course.ts`         | IT courses shown on the "Explore Our IT Courses" page.                   |
| `explorePage`  | `schemas/explorePage.ts`    | Singleton page-level content for the `/courses` route (header, badges). |

### Registration

All schemas are registered in `schemaTypes/index.ts` and consumed by `sanity.config.ts`.

## How the Schemas Map to the App

The schemas mirror the TypeScript types defined in `src/lib/types.ts`:

| Sanity Schema   | TypeScript Interface (`src/lib/types.ts`) |
| --------------- | ------------------------------------------ |
| `teacher`       | `Teacher`                                  |
| `course`        | `Course`                                   |
| `explorePage`   | *(new — page-level content)*               |

## Setup Instructions

> **Prerequisite:** A Sanity project. If you don't have one, create it at
> [sanity.io/manage](https://sanity.io/manage).

### 1. Install Sanity Studio (standalone)

The recommended approach is to run Sanity Studio as a **separate package** in a
subdirectory (e.g. `studio/`). This keeps it decoupled from the Next.js build.

```bash
npx create-sanity@latest studio \
  --project-id <your-project-id> \
  --dataset production \
  --template clean
```

### 2. Copy the schemas

```bash
cp -r sanity/schemas studio/schemas
cp sanity/schemaTypes/index.ts studio/schemaTypes/index.ts
cp sanity/sanity.config.ts studio/sanity.config.ts
```

### 3. Install dependencies in the Studio

```bash
cd studio
npm install
```

### 4. Run the Studio

```bash
npm run dev
```

### 5. Connect the Next.js app to Sanity

In your Next.js app, install the Sanity client and create a data-fetching layer:

```bash
npm install @sanity/client @sanity/image-url groq
```

Create `src/lib/sanity.ts`:

```ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
```

Then replace the static data in `src/lib/data.ts` with Sanity queries (GROQ).

## Environment Variables

Add these to your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## GROQ Query Examples

### Fetch all active courses (for the Explore page)

```groq
*[_type == "course" && isActive == true] | order(createdAt desc) {
  _id,
  title,
  "id": _id,
  "teacherId": teacher._ref,
  duration,
  durationCategory,
  fee,
  feeBucket,
  category,
  topic,
  language,
  scheduleSlot,
  schedule,
  syllabus,
  isActive,
  createdAt
}
```

### Fetch a single course by ID

```groq
*[_type == "course" && _id == $id][0] {
  ...,
  teacher -> {
    name,
    "photoUrl": photoUrl.asset->url,
    bio,
    yearsExperience
  }
}
```

### Fetch the Explore page singleton

```groq
*[_type == "explorePage"][0] {
  pageTitle,
  pageSubtitle,
  badgeText,
  liveOnlyBadge,
  noRefundsNotice
}
```
