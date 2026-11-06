# Portfolio / CV site

A personal portfolio built with Next.js 16, React 19 and Tailwind CSS 4.
The homepage works as an interactive CV, and every project gets its own detail page.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint
```

## Make it yours

All content lives in two files — you never need to touch the components to update the site.

### 1. Your details — `data/profile.ts`

| Field | What it controls |
| --- | --- |
| `name`, `initials` | Name in the navbar, hero and footer |
| `role` | Job title |
| `intro` | Hero paragraph and page description |
| `about` | Paragraphs in the About section |
| `email` | Contact buttons and mailto links |
| `availability` | Badge in the hero |
| `location` | Hero code card |
| `socials` | GitHub / LinkedIn / X links |
| `stats` | The four numbers under the hero |
| `skillGroups` | Skill cards |
| `experience` | Timeline entries |

### 2. Your projects — `data/projects.ts`

Add a project to the `projects` array:

```ts
{
  slug: "my-project",              // becomes /projects/my-project
  title: "My Project",
  tagline: "One line that sells it.",
  description: "The longer story.",
  year: "2026",
  role: "What you did",
  category: "Web",                 // Web | Mobile | AI | Open source
  stack: ["Next.js", "TypeScript"],
  highlights: ["Thing you built", "Result you got"],
  links: [{ label: "Live demo", href: "https://..." }],
  gradient: "from-sky-400 via-blue-500 to-indigo-600",
  emoji: "🚀",
  featured: true,
}
```

The project page, homepage card, filters, previous/next navigation and metadata are all generated automatically.

### 3. Colors and fonts — `app/globals.css`

Light and dark palettes are plain CSS variables at the top of the file. Change `--accent` to re-theme the whole site.

## Structure

```
app/
  layout.tsx              root layout, fonts, metadata, theme script
  page.tsx                homepage (hero, work, about, experience, contact)
  projects/[slug]/page.tsx  project detail page
  not-found.tsx
components/               navbar, theme toggle, project cards, icons, footer
data/                     your content
```

## Notes

- Dark mode is the default. The toggle saves the choice in `localStorage`.
- Content is static, so the site can be deployed to Vercel, Netlify or any Node host with zero configuration.
- The site uses no external images — project covers are CSS gradients, so there is nothing to optimize or upload.
