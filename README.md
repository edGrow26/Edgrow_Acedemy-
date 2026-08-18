# EdGrow Academy

<div align="center">

**Tamil-Medium Online IT Education Platform for Sri Lankan Students**

[![Next.js](https://img.shields.io/badge/Next.js%2015-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D1?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity%20CMS-F03E39?logo=sanity&logoColor=white)](https://www.sanity.io/)

</div>

---

## 🎓 Overview

**EdGrow Academy** is a modern, full-stack web application for a Tamil-medium online IT education platform based in Sri Lanka. It offers 100% live, interactive Google Meet classes taught by industry-experienced instructors — no recordings, no pre-recorded videos.

Students can explore IT courses, filter by topic, fee range, duration, and schedule, submit applications, and receive WhatsApp-based follow-up from the admissions team. Content is managed through **Sanity Studio**, with a graceful fallback to static seed data when the CMS is unavailable.

### Key Highlights

- **100% Live Sessions** — Every class is conducted live via Google Meet with real-time Q&A
- **Tamil-Medium Instruction** — Courses taught entirely in Tamil for Sri Lankan students
- **Industry Experts** — Instructors are senior software engineers from top tech companies
- **One-Time Fee** — Transparent pricing with a strict no-refunds policy
- **WhatsApp-First Workflow** — Applications are verified and followed up via WhatsApp
- **Dark/Light Mode** — Beautiful glassmorphism UI with smooth theme transitions

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Runtime** | React 19 |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + CSS Variables |
| **UI & Animation** | [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **CMS** | [Sanity Studio v6](https://www.sanity.io/) |
| **Data Fetching** | `@sanity/client` with GROQ queries |
| **Fonts** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) 
---

## 📁 Project Structure

```
EdGrow-Academy/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with global metadata & font
│   │   ├── page.tsx                # Home page (hero, featured courses, trust section)
│   │   ├── robots.ts               # robots.txt generation
│   │   ├── sitemap.ts              # Dynamic sitemap generation
│   │   ├── globals.css             # Tailwind base + custom CSS variables & utilities
│   │   ├── courses/
│   │   │   ├── page.tsx            # Courses listing page (server-side Sanity fetch)
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Individual course detail page (SSG + ISR)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Responsive navbar with mobile drawer
│   │   │   └── Footer.tsx          # Footer with WhatsApp support link
│   │   ├── courses/
│   │   │   ├── CourseCard.tsx      # Animated course card component
│   │   │   ├── CourseFilters.tsx   # Filter bar (topic, fee, duration, schedule)
│   │   │   ├── CoursesPageClient.tsx # Client-side course listing with filtering
│   │   │   └── ApplicationForm.tsx # Application form with Zod validation
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx # Scroll-triggered counter animation
│   │       └── ThemeToggle.tsx     # Dark/light mode toggle
│   └── lib/
│       ├── types.ts                # TypeScript interfaces (Course, Teacher, Application, etc.)
│       ├── sanity.ts               # Sanity client & fetch utility
│       ├── sanity.types.ts         # Sanity-specific TypeScript types
│       ├── queries.ts              # GROQ query definitions
│       ├── imageUrl.ts             # Sanity image URL builder
│       ├── data.ts                 # Static seed data + localStorage helpers
│       ├── i18n.ts                 # Dictionary (en/ta) for UI text
│       └── validation.ts           # Zod schemas for forms
├── sanity/
│   ├── sanity.config.ts            # Studio config with custom desk structure
│   ├── sanity.cli.ts               # CLI configuration
│   ├── README.md                   # Sanity-specific documentation
│   └── schemaTypes/
│       ├── index.ts                # Central schema registry
│       ├── course.ts               # Course document schema
│       ├── teacher.ts              # Instructor document schema
│       ├── explorePage.ts          # Singleton page content schema
│       └── application.ts          # Student application schema
├── public/                         # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── README.md
```

---

## 🏃 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS)
- **npm** or **Yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/Keerthihan/EdGrow-Academy.git
cd EdGrow-Academy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add the following variables:

```env
# Sanity CMS configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=7epe2pro
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token_here

# Optional: Override the default site URL
NEXT_PUBLIC_SITE_URL=https://edgrow.lk
```

> **Note:** The project includes a default Sanity project (`7epe2pro`) so it works out of the box. If you want to use your own Sanity project, replace the project ID and dataset.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🏗️ Sanity Studio (CMS)

The project uses **Sanity Studio** as its headless CMS. The schemas are defined in the `sanity/` directory and can be run independently.

### Running Sanity Studio Locally

```bash
cd sanity
npm install
npx sanity dev
```

Studio will be available at [http://localhost:3333](http://localhost:3333).

### Schema Overview

| Schema | File | Description |
|--------|------|-------------|
| `teacher` | `schemaTypes/teacher.ts` | Instructor profiles (name, photo, bio, experience) |
| `course` | `schemaTypes/course.ts` | IT courses with duration, fee, syllabus, schedule |
| `explorePage` | `schemaTypes/explorePage.ts` | Singleton — page-level content for the courses page |
| `application` | `schemaTypes/application.ts` | Student course applications with status tracking |

### Application Status Workflow

```
🆕 New → 📞 Contacted → ✅ Payment Verified → 🎓 Enrolled
```

Admins can update application status directly from the Sanity Studio desk.

### GROQ Queries

The project includes pre-built GROQ queries in `src/lib/queries.ts`:

- `courseListQuery` — Fetch all active courses
- `courseByIdQuery` — Fetch a single course by ID
- `explorePageQuery` — Fetch the explore page singleton + featured courses
- `teachersQuery` — Fetch all instructors

---

## 🗺️ Application Architecture

### Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                    │
│                                                          │
│  Server Components (SSR/SSG)                             │
│  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐ │
│  │ Home Page   │    │ Courses Page │    │ Course Page │ │
│  │ (/)         │    │ (/courses)   │    │ (/courses/  │ │
│  │             │    │              │    │  [id])      │ │
│  └──────┬──────┘    └──────┬───────┘    └──────┬──────┘ │
│         │                  │                     │        │
│         ▼                  ▼                     ▼        │
│  ┌────────────────────────────────────────────────────┐ │
│  │           Sanity Client (sanityFetch)               │ │
│  │  ┌──────────────────────────────────────────────┐   │ │
│  │  │  GROQ Queries (src/lib/queries.ts)           │   │ │
│  │  └──────────────────────────────────────────────┘   │ │
│  └────────────────────────────────────────────────────┘ │
│         │                  │                     │        │
│    Fallback            Fallback               Fallback   │
│         ▼                  ▼                     ▼        │
│  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐ │
│  │ Static Data │    │ Static Data  │    │ Static Data │ │
│  │ (data.ts)   │    │ (data.ts)    │    │ (data.ts)   │ │
│  └─────────────┘    └──────────────┘    └─────────────┘ │
│                                                          │
│  Client Components (CSR)                                 │
│  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐ │
│  │ CourseCard  │    │ CourseFilter │    │ Appl. Form  │ │
│  │             │    │              │    │             │ │
│  └─────────────┘    └──────────────┘    └─────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Key Design Patterns

1. **Graceful Degradation** — All Sanity fetches have try/catch blocks with static data fallbacks
2. **Static Data Seeding** — `src/lib/data.ts` provides initial courses, teachers, and applications
3. **localStorage Persistence** — Application submissions and course data are stored in localStorage
4. **Form Validation** — Zod schemas validate all form inputs (phone numbers, emails, etc.)
5. **SEO Optimization** — JSON-LD structured data, dynamic sitemap, robots.txt
6. **Responsive Design** — Mobile-first with Tailwind breakpoints

---

## 📚 API Reference

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | No | `7epe2pro` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | No | `production` | Sanity dataset name |
| `SANITY_API_TOKEN` | No | — | Sanity API token for authenticated requests |
| `NEXT_PUBLIC_SITE_URL` | No | `https://edgrow.lk` | Site URL for sitemap/SEO |

### TypeScript Types

All core types are defined in `src/lib/types.ts`:

| Type | Description |
|------|-------------|
| `Course` | IT course with title, fee, duration, syllabus, schedule |
| `Teacher` | Instructor with name, photo, bio, years of experience |
| `Application` | Student application with status workflow |
| `CourseFilterState` | Filter state for the course catalog |
| `ApplicationStatus` | `'New' \| 'Contacted' \| 'Payment Verified' \| 'Enrolled'` |
| `DurationCategory` | `'under-1-month' \| '1-3-months' \| '3-plus-months'` |
| `FeeBucket` | `'budget' \| 'mid' \| 'premium'` |
| `ScheduleSlot` | `'morning' \| 'evening' \| 'weekend'` |

---

## 🎨 Styling & Theming

The application uses a **glassmorphism design system** with CSS variables for theming.

### Color Palette

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--primary-blue` | `#0066D6` | `#0066D6` |
| `--accent-teal` | `#00BFA5` | `#00796B` |
| `--mint-highlight` | `#1DE9B6` | `#087F5B` |
| `--background` | `#000000` | `#FFFFFF` |
| `--surface` | `#111111` | `#F8FAFC` |

### Theme Toggle

Users can switch between dark and light mode using the theme toggle in the navbar. The preference is saved to `localStorage` under the key `edgrow_theme`.

### Custom CSS Classes

- `.glass-panel` — Glassmorphism panel with blur
- `.glass-card` — Glassmorphism card with hover effects
- `.text-gradient-blue` — Blue-to-teal text gradient
- `.text-gradient-mint` — Teal-to-mint text gradient
- `.ambient-glow` — Animated ambient glow effect

---

## 🛠️ Development Guidelines

### Adding a New Course

1. **Via Sanity Studio (Recommended):**
   - Run `npx sanity dev`
   - Navigate to the Courses collection
   - Click "Create" and fill in the course details

2. **Via Static Data:**
   - Add a new entry to the `INITIAL_COURSES` array in `src/lib/data.ts`
   - Ensure the `id` matches the format used in `generateStaticParams`

### Adding a New Schema

1. Create a new file in `sanity/schemaTypes/` (e.g., `testimonial.ts`)
2. Export the schema using `defineType()`
3. Import and register it in `sanity/schemaTypes/index.ts`
4. Add it to the desk structure in `sanity/sanity.config.ts`

### Form Validation

All forms use **Zod** schemas defined in `src/lib/validation.ts`:

- `applicationSchema` — Validates student applications (name, phone, email)
- `adminLoginSchema` — Validates admin login credentials
- `courseSchema` — Validates course creation/editing
- `teacherSchema` — Validates instructor profiles

Sri Lankan phone numbers are validated with a regex that accepts both `07X XXXXXXX` and `+94 7X XXXXXXX` formats.

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and import your project
3. Set the environment variables in the Vercel dashboard
4. Deploy!

### Build for Production

```bash
npm run build
```

The build output will be in the `.next/` directory.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a Pull Request

### Coding Standards

- Use **TypeScript** for all new code
- Follow **ESLint** rules (`npm run lint`)
- Use **Tailwind CSS** for styling (avoid inline styles where possible)
- Write **accessible** HTML with proper ARIA attributes
- Add **JSDoc comments** for complex functions

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **[Keerthihan](https://github.com/Keerthihan)** — Lead Developer

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — React framework
- [Sanity](https://www.sanity.io/) — Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) — CSS framework
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Lucide React](https://lucide.dev/) — Icon library
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Typography

---

## 📞 Contact

- **Website:** [https://edgrow.lk](https://edgrow.lk)
- **WhatsApp:** [+94 77 123 4567](https://wa.me/94771234567)
- **GitHub:** [Keerthihan/EdGrow-Academy](https://github.com/Keerthihan/EdGrow-Academy)

<div align="center">

**EdGrow Academy Sri Lanka** — *Accelerate your tech career with Tamil-medium live IT education.*

© {new Date().getFullYear()} EdGrow Academy. All rights reserved.

</div>
# Edgrow_Acedemy-
