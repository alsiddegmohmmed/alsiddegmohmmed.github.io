import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { projects } from "@/app/data";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { FuelCustodyCaseStudy } from "@/components/projects/FuelCustodyCaseStudy";
import { ProjectDiagram } from "@/components/projects/ProjectDiagram";
import { getAdjacentProjects, getProjectBySlug } from "@/lib/projects";
import { projectMetadata } from "@/lib/seo";

const confidentialNote =
  "This case study avoids client-sensitive screens, internal data, and proprietary implementation details. Visuals are representative system diagrams created to explain the workflow safely.";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return projectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const isFuelCustodyProject = project.slug === "fuel-custody-reconciliation-platform";

  if (isFuelCustodyProject) {
    return <FuelCustodyCaseStudy project={project} previous={previous} next={next} />;
  }

  return (
    <main className="overflow-hidden">
      <SiteNav />
      <article className="mx-auto w-[min(1180px,calc(100%_-_44px))] py-14">
        <Link className="mb-8 inline-flex items-center gap-2 font-extrabold text-green" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
        </Link>

        <header className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-start">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">{project.order} / {project.category}</p>
            <h1 className="font-display text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[0.94] text-ink">{project.title}</h1>
            <p className="my-6 text-lg leading-8 text-muted">{project.summary}</p>
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[11px] font-extrabold uppercase text-muted" aria-label="Project metadata">
              <span className="inline-flex items-center gap-1">{project.status === "Confidential" ? <LockKeyhole size={14} aria-hidden="true" /> : null}{project.status}</span>
              <span>{project.subtitle}</span>
            </div>
            {project.liveUrl ? (
              <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-green bg-green px-5 text-sm font-extrabold text-surface transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5" href={project.liveUrl} target="_blank" rel="noreferrer">
                View live website <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>
          <ProjectDiagram project={project} />
        </header>

        {project.status === "Confidential" ? (
          <aside className="my-7 grid grid-cols-[22px_1fr] items-start gap-3 border border-copper/40 bg-copper/10 p-4">
            <LockKeyhole size={18} aria-hidden="true" />
            <p className="m-0 leading-7 text-muted">{confidentialNote}</p>
          </aside>
        ) : null}

        <section className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label={`${project.title} case study details`}>
          <div className="min-h-56 border border-line bg-surface/85 p-6">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Overview</p>
            <p className="m-0 leading-7 text-muted">{project.problem}</p>
          </div>
          <div className="min-h-56 border border-line bg-surface/85 p-6">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Role</p>
            <p className="m-0 leading-7 text-muted">{project.role}</p>
          </div>
          <div className="border border-line bg-surface/85 p-6 md:col-span-2">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">What I worked on</p>
            <ul className="grid gap-2 p-0">
              {project.contribution.map((item) => (
                <li className="relative list-none pl-4 leading-7 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-green" key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="min-h-56 border border-line bg-surface/85 p-6">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Architecture / System Context</p>
            <ul className="grid gap-2 p-0">
              {project.architecture.map((item) => (
                <li className="relative list-none pl-4 leading-7 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-green" key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="min-h-56 border border-line bg-surface/85 p-6">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Impact</p>
            <ul className="grid gap-2 p-0">
              {project.impact.map((item) => (
                <li className="relative list-none pl-4 leading-7 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-green" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-7 grid gap-6 border border-line bg-green-soft p-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]" aria-labelledby="stack-title">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Stack</p>
            <h2 id="stack-title" className="font-display text-3xl font-semibold leading-tight text-ink">Technical environment</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span className="inline-flex min-h-7 items-center rounded-full border border-line bg-surface px-3 font-mono text-[11px] font-extrabold text-muted" key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <nav className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Adjacent project case studies">
          {previous ? (
            <Link className="grid min-h-24 content-center gap-1 border border-line bg-surface p-5" href={`/projects/${previous.slug}`}>
              <ArrowLeft size={16} aria-hidden="true" />
              <span className="font-mono text-[11px] font-extrabold uppercase text-muted">Previous</span>
              <strong className="text-ink">{previous.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link className="grid min-h-24 justify-items-end content-center gap-1 border border-line bg-surface p-5 text-right" href={`/projects/${next.slug}`}>
              <span className="font-mono text-[11px] font-extrabold uppercase text-muted">Next</span>
              <strong className="text-ink">{next.title}</strong>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : <span />}
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
