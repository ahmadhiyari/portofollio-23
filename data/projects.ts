// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to add, remove or change your projects.
//  Each project automatically gets its own page at
//  /projects/<slug>
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = "Web" | "Mobile" | "AI" | "Open source";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  /** Long description shown on the project page. */
  description: string;
  year: string;
  role: string;
  category: ProjectCategory;
  stack: string[];
  /** Short, scannable results or things you built. */
  highlights: string[];
  links?: { label: string; href: string }[];
  /** Tailwind gradient used for the project cover. */
  gradient: string;
  emoji: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nimbus-analytics",
    title: "Nimbus Analytics",
    tagline: "A real-time analytics dashboard for growing SaaS teams.",
    description:
      "Nimbus turns raw product events into answers. I designed and built the whole product: a fast event ingestion API, a flexible reporting layer, and a dashboard that stays readable even with millions of rows. The team now ships weekly instead of monthly.",
    year: "2025",
    role: "Lead full-stack developer",
    category: "Web",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS"],
    highlights: [
      "Built a streaming dashboard that updates without page reloads.",
      "Designed an event pipeline handling 2M+ events per day.",
      "Reduced the main dashboard query time from 1.8s to 240ms.",
      "Shipped a reusable chart and filter system used across 12 screens.",
    ],
    links: [
      { label: "Live demo", href: "https://example.com" },
      { label: "Case study", href: "https://example.com" },
    ],
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    emoji: "📊",
    featured: true,
  },
  {
    slug: "souq-marketplace",
    title: "Souq Marketplace",
    tagline: "A multi-vendor marketplace built for local makers.",
    description:
      "Souq helps independent makers sell online without fighting a complicated platform. Vendors get their own storefront, inventory tools and payouts; buyers get a fast, searchable storefront with a checkout that actually converts.",
    year: "2024",
    role: "Full-stack developer",
    category: "Web",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    highlights: [
      "Built vendor onboarding, storefronts and order management.",
      "Integrated Stripe Connect for split payouts and refunds.",
      "Added full-text search with filters and instant results.",
      "Launched with 40 vendors and 1,200 products on day one.",
    ],
    links: [{ label: "Visit site", href: "https://example.com" }],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    emoji: "🛍️",
    featured: true,
  },
  {
    slug: "pulse-fitness",
    title: "Pulse Fitness",
    tagline: "A habit-first fitness tracker that people actually keep using.",
    description:
      "Most fitness apps overwhelm you with data. Pulse focuses on one thing: showing up. The app builds adaptive weekly plans, tracks streaks and celebrates small wins, all with an offline-first experience.",
    year: "2024",
    role: "Mobile developer & designer",
    category: "Mobile",
    stack: ["React Native", "Expo", "SQLite", "Reanimated", "TypeScript"],
    highlights: [
      "Designed an offline-first workout flow with background sync.",
      "Built 30+ custom animations and haptic interactions.",
      "Reached 4.8★ across 600+ reviews in the first six months.",
      "Cut cold start time to under 1.2 seconds.",
    ],
    links: [{ label: "App Store", href: "https://example.com" }],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    emoji: "⚡",
    featured: true,
  },
  {
    slug: "atlas-ai",
    title: "Atlas AI",
    tagline: "An AI assistant that reads your documents and answers questions.",
    description:
      "Atlas lets small teams search their own knowledge base without a data team. Upload PDFs, contracts or notes and ask questions in plain language. Answers always cite the source paragraph so people can trust what they read.",
    year: "2025",
    role: "Full-stack & AI engineer",
    category: "AI",
    stack: ["Next.js", "Python", "FastAPI", "pgvector", "OpenAI"],
    highlights: [
      "Built document ingestion with chunking and embedding pipelines.",
      "Implemented retrieval with inline source citations.",
      "Added role-based access so private docs stay private.",
      "Handled 10k+ documents with sub-second retrieval.",
    ],
    links: [{ label: "Try the demo", href: "https://example.com" }],
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    emoji: "🤖",
    featured: true,
  },
  {
    slug: "devfolio",
    title: "DevFolio",
    tagline: "A portfolio generator for developers who hate building portfolios.",
    description:
      "DevFolio turns a simple Markdown file into a polished portfolio site. Choose a theme, connect a domain, and publish. It was built as an open-source project and now powers a few hundred personal sites.",
    year: "2023",
    role: "Creator & maintainer",
    category: "Open source",
    stack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    highlights: [
      "Designed a theme system with zero-config deployment.",
      "Wrote the docs and onboarding flow for non-technical users.",
      "Grew to 800+ GitHub stars and 30+ contributors.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/your-username" },
      { label: "Live demo", href: "https://example.com" },
    ],
    gradient: "from-zinc-500 via-slate-600 to-zinc-800",
    emoji: "🧩",
  },
  {
    slug: "ledger-lite",
    title: "Ledger Lite",
    tagline: "Personal finance without the spreadsheet headache.",
    description:
      "Ledger Lite is a calm budgeting app for freelancers with irregular income. It forecasts good months and lean months, tracks recurring costs and helps you decide what you can safely spend this week.",
    year: "2023",
    role: "Product designer & developer",
    category: "Mobile",
    stack: ["React Native", "Expo", "SQLite", "Victory Native"],
    highlights: [
      "Built an income forecasting model for irregular earners.",
      "Designed a three-tap expense logging flow.",
      "Implemented local-first storage with optional encrypted backup.",
    ],
    links: [{ label: "Learn more", href: "https://example.com" }],
    gradient: "from-lime-300 via-green-500 to-emerald-600",
    emoji: "💸",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "Open source",
];
