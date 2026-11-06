import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "@/components/icons";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)]"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -right-6 -top-8 size-32 rounded-full bg-white/20 blur-2xl" />
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-4 select-none font-mono text-[11px] uppercase tracking-[0.2em] text-white/70"
        >
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-lg transition duration-500 group-hover:scale-110">
          {project.emoji}
        </span>
        <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-bg/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 ? (
            <span className="rounded-full border border-line bg-bg/40 px-2.5 py-1 font-mono text-[10px] text-muted">
              +{project.stack.length - 4}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
