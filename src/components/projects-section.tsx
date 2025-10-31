"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "./project-card";
import { Badge } from "./ui/badge";

type Project = (typeof RESUME_DATA)["projects"][number];

function uniqueTags(projects: Project[]) {
  const s = new Set<string>();
  projects.forEach((p) => p.techStack.forEach((t) => s.add(t)));
  return Array.from(s).sort();
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const tags = React.useMemo(() => uniqueTags(projects as Project[]), [projects]);

  const filtered = React.useMemo(() => {
    return projects.filter((p) => {
      const stacks = (p as any).techStack as string[];
      if (activeTag && !stacks.includes(activeTag)) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        (p.title as string).toLowerCase().includes(q) ||
        (p.description as string).toLowerCase().includes(q) ||
        stacks.join(" ").toLowerCase().includes(q)
      );
    });
  }, [projects, query, activeTag]);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm text-card-foreground placeholder:text-muted-foreground"
            aria-label="Search projects"
          />
        </div>

        <div className="flex items-center gap-2 overflow-auto">
          <button
            className={`rounded-md px-2 py-1 text-sm ${!activeTag ? "bg-accent text-accent-foreground" : "border border-input bg-card text-card-foreground"}`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`rounded-md px-2 py-1 text-sm ${activeTag === tag ? "bg-primary text-primary-foreground" : "border border-input bg-card text-card-foreground"}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="-mx-3 grid grid-cols-1 gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <div className="px-3" key={p.title}>
            <ProjectCard
              title={p.title}
              description={p.description}
              tags={p.techStack}
              link={p.link.href || undefined}
              logoUrl={(p as any).logoUrl}
              status={(p as any).status}
              slug={(p as any).slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
