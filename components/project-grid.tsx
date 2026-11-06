"use client";

import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

type Filter = "All" | ProjectCategory;

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectCategories.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line bg-surface/50 text-muted hover:border-accent/50 hover:text-ink"
              }`}
            >
              {category}
              <span className="ml-2 font-mono text-[10px] opacity-60">
                {category === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category)
                      .length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-line p-10 text-center text-sm text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
