import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CopyEmail } from "@/components/copy-email";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
} from "@/components/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
          >
            <ArrowLeft className="size-4 transition group-hover:-translate-x-0.5" />
            All projects
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className="rounded-full border border-line bg-surface/60 px-3 py-1 text-accent">
                {project.category}
              </span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {project.tagline}
            </p>

            {project.links?.length ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      index === 0
                        ? "group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
                        : "inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-2.5 text-sm font-medium transition hover:border-accent/60"
                    }
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            ) : null}
          </header>

          {/* Cover */}
          <div
            className={`relative mt-10 aspect-[16/8] overflow-hidden rounded-3xl border border-line bg-gradient-to-br sm:aspect-[16/6] ${project.gradient}`}
          >
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="absolute -left-10 -top-10 size-48 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-16 right-0 size-64 rounded-full bg-black/20 blur-3xl" />
            <span
              aria-hidden="true"
              className="absolute bottom-5 left-6 font-mono text-xs uppercase tracking-[0.25em] text-white/70"
            >
              {String(currentIndex + 1).padStart(2, "0")} — {project.year}
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-8xl drop-shadow-2xl">
              {project.emoji}
            </span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_0.8fr]">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {project.description}
              </p>

              <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                What I built
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-2xl border border-line bg-surface/50 p-4 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-surface/60 p-6">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Role
                    </dt>
                    <dd className="mt-1 text-sm">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Year
                    </dt>
                    <dd className="mt-1 text-sm">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Category
                    </dt>
                    <dd className="mt-1 text-sm">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Stack
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-line bg-bg/50 px-2.5 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`Question about ${project.title}`)}`}
                  className="mt-6 flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium transition hover:border-accent/60 hover:bg-surface"
                >
                  <Mail className="size-4" />
                  Ask about this project
                </a>
              </div>

              <div className="mt-4 rounded-2xl border border-line bg-surface/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  More work
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {projects
                    .filter((item) => item.slug !== project.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/projects/${item.slug}`}
                        className="group flex items-center justify-between gap-3 text-sm text-muted transition hover:text-ink"
                      >
                        <span className="flex items-center gap-2">
                          <span aria-hidden="true">{item.emoji}</span>
                          {item.title}
                        </span>
                        <ArrowRight className="size-3.5 shrink-0 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Prev / next */}
          <nav
            aria-label="Project navigation"
            className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
          >
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group rounded-2xl border border-line bg-surface/40 p-5 transition hover:border-accent/50"
            >
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" />
                Previous
              </span>
              <span className="mt-2 block text-sm font-medium">
                {previousProject.title}
              </span>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group rounded-2xl border border-line bg-surface/40 p-5 text-right transition hover:border-accent/50"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Next
                <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
              </span>
              <span className="mt-2 block text-sm font-medium">
                {nextProject.title}
              </span>
            </Link>
          </nav>

          {/* CTA */}
          <div className="mt-14 rounded-3xl border border-line bg-surface/60 p-8 text-center">
            <p className="font-display text-2xl font-semibold tracking-tight">
              Like what you see?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              I&apos;m always up for a good problem. Tell me about yours.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
              >
                <Mail className="size-4" />
                Get in touch
              </a>
              <CopyEmail email={profile.email} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
