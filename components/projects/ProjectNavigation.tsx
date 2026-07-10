import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/app/data";

type ProjectNavigationProps = {
  previous?: Project;
  next?: Project;
};

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <nav className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Adjacent project case studies">
      {previous ? (
        <Link
          className="group grid min-h-28 content-center gap-1 border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-green focus-visible:-translate-y-0.5"
          href={`/projects/${previous.slug}`}
        >
          <ArrowLeft className="transition group-hover:-translate-x-0.5" size={16} aria-hidden="true" />
          <span className="font-mono text-[11px] font-extrabold uppercase text-muted">Previous case study</span>
          <strong className="text-ink">{previous.title}</strong>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link
          className="group grid min-h-28 justify-items-end content-center gap-1 border border-line bg-surface p-5 text-right transition hover:-translate-y-0.5 hover:border-green focus-visible:-translate-y-0.5"
          href={`/projects/${next.slug}`}
        >
          <span className="font-mono text-[11px] font-extrabold uppercase text-muted">Next case study</span>
          <strong className="text-ink">{next.title}</strong>
          <ArrowRight className="transition group-hover:translate-x-0.5" size={16} aria-hidden="true" />
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
