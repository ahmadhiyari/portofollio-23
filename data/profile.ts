// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to make the site yours.
//  Everything on the homepage comes from the values below.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ahmed",
  initials: "A",
  role: "Full-Stack Developer",
  headline: "I build fast, thoughtful products for the web.",
  location: "Remote · Available worldwide",
  email: "ahmed@example.com",
  availability: "Open to new opportunities",
  resumeUrl: "/resume.pdf",

  intro:
    "I'm a full-stack developer who turns complex ideas into clean, reliable products. I care about the details — from database schema to the last pixel — and I love shipping things people actually enjoy using.",

  about: [
    "Over the past few years I've built dashboards, marketplaces, mobile apps and AI tools. I work end-to-end: research, design, frontend, APIs, deployment and everything in between.",
    "When I'm not coding, I'm usually reading about product design, experimenting with new tooling, or breaking my own side projects in the name of learning.",
  ],

  stats: [
    { value: "5+", label: "Years building" },
    { value: "24", label: "Projects shipped" },
    { value: "14", label: "Happy clients" },
    { value: "3", label: "Continents reached" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "X / Twitter", href: "https://x.com/your-username" },
  ],

  skillGroups: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Accessibility",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "Authentication",
        "Redis",
      ],
    },
    {
      title: "Tools & craft",
      items: ["Git", "Docker", "Vercel", "Figma", "Testing", "CI/CD"],
    },
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Senior Full-Stack Developer",
      company: "Freelance",
      description:
        "Partnering with startups and studios to design and build production web apps. Leading projects from first sketch to launch, with a focus on performance and maintainability.",
    },
    {
      period: "2021 — 2023",
      role: "Frontend Developer",
      company: "Studio North",
      description:
        "Built design systems and customer-facing dashboards used by thousands of people every day. Cut page load times in half and helped grow the frontend team.",
    },
    {
      period: "2019 — 2021",
      role: "Junior Developer",
      company: "Local Agency",
      description:
        "Started with landing pages and internal tools, then moved into full product work. Learned to ship quickly without sacrificing quality.",
    },
  ],
};

export type Profile = typeof profile;
