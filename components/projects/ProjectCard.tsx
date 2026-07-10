import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "@/app/data";
import { ProjectDiagram } from "@/components/projects/ProjectDiagram";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="motion-panel group min-h-full rounded border border-line bg-surface/90">
      <Link className="grid min-h-full grid-rows-[auto_auto_1fr] p-4" href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-extrabold uppercase text-muted">
          <span className="text-green">{project.order}</span>
          <em className="inline-flex min-h-7 items-center gap-1 rounded-sm border border-line bg-bg/60 px-2.5 not-italic">
            {project.status === "Confidential" ? <LockKeyhole size={13} aria-hidden="true" /> : null}
            {project.status}
          </em>
        </div>
        <ProjectDiagram project={project} compact />
        <div className="flex h-full flex-col items-start gap-3">
          <p className="m-0 font-mono text-[11px] font-extrabold uppercase text-copper">{project.category}</p>
          <h3 className="m-0 font-display text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
          <p className="m-0 leading-7 text-muted">{project.cardSummary}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span className="motion-chip inline-flex min-h-7 items-center rounded-full border border-line bg-surface px-3 font-mono text-[11px] font-extrabold text-muted" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <span className="mt-auto inline-flex items-center gap-2 pt-2 font-extrabold text-green">
            View case study <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
