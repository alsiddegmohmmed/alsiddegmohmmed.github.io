import Link from "next/link";
import { ArrowLeft, ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "@/app/data";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { CaseStudyFlow } from "@/components/projects/CaseStudyFlow";
import { ProjectDiagram } from "@/components/projects/ProjectDiagram";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";

const confidentialNote =
  "This case study avoids client-sensitive screens, internal data, and proprietary implementation details. Visuals are representative system diagrams created to explain the workflow safely.";

type CaseStudyPageProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-8 items-center gap-1.5 rounded-sm border border-line bg-surface px-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.04em] text-muted">
      {children}
    </span>
  );
}

export function CaseStudyPage({ project, previous, next }: CaseStudyPageProps) {
  const isConfidential = project.status === "Confidential";

  return (
    <main id="main-content" className="overflow-x-clip">
      <SiteNav />

      <article className="mx-auto w-[min(1180px,calc(100%_-_44px))] py-12 md:py-14">
        <Link className="mb-9 inline-flex min-h-11 items-center gap-2 font-extrabold text-green" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
        </Link>

        <header className="border-b border-line pb-10">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">
            {project.order} / {isConfidential ? "Confidential system" : "Public project"}
          </p>

          <h1 className="max-w-[980px] font-display text-[clamp(2.6rem,13vw,3.25rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-ink md:text-[clamp(3.25rem,7vw,6.8rem)] md:leading-[0.9] md:tracking-[-0.04em]">
            {project.title}
          </h1>

          <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="m-0 max-w-[760px] text-lg leading-8 text-muted">{project.summary}</p>

            {project.liveUrl ? (
              <a
                className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded border border-green bg-green px-5 text-sm font-extrabold text-surface transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View live website <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <MetaLabel>
                <LockKeyhole size={13} aria-hidden="true" /> Confidential
              </MetaLabel>
            )}
          </div>

          <div className="mt-7">
            <ProjectDiagram project={project} featured />
          </div>

          {isConfidential ? (
            <aside className="mt-4 grid grid-cols-[22px_1fr] items-start gap-3 border border-copper/40 bg-copper/10 p-4">
              <LockKeyhole className="text-copper" size={18} aria-hidden="true" />
              <p className="m-0 leading-7 text-muted">{confidentialNote}</p>
            </aside>
          ) : null}

          <dl className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3" aria-label="Project dossier">
            <div className="bg-surface p-4">
              <dt className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted">Status</dt>
              <dd className="mb-0 mt-2 font-bold text-ink">{project.status}</dd>
            </div>
            <div className="bg-surface p-4">
              <dt className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted">Domain</dt>
              <dd className="mb-0 mt-2 font-bold text-ink">{project.category}</dd>
            </div>
            <div className="bg-surface p-4">
              <dt className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted">Project focus</dt>
              <dd className="mb-0 mt-2 font-bold text-ink">{project.subtitle}</dd>
            </div>
          </dl>
        </header>

        <section className="mt-12 grid border-y border-line lg:grid-cols-[minmax(240px,0.34fr)_minmax(0,1fr)]" aria-labelledby="brief-title">
          <div className="py-7 pr-7">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">01 / Brief</p>
            <h2 id="brief-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              Problem and responsibility
            </h2>
          </div>

          <div className="grid gap-7 border-t border-line py-7 lg:border-l lg:border-t-0 lg:pl-8">
            <article>
              <p className="mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-copper">The challenge</p>
              <p className="m-0 max-w-4xl text-lg leading-8 text-muted">{project.problem}</p>
            </article>
            <article className="border-t border-line pt-7">
              <p className="mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-copper">My role</p>
              <p className="m-0 max-w-4xl text-lg leading-8 text-muted">{project.role}</p>
            </article>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="contribution-title">
          <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">02 / Contribution</p>
              <h2 id="contribution-title" className="font-display text-4xl font-semibold leading-tight text-ink">
                What I worked on
              </h2>
            </div>
            <p className="m-0 leading-7 text-muted">
            The main areas I contributed to across the product and its supporting systems.
            </p>
          </div>

          <ol className="grid gap-px border border-line bg-line p-0 md:grid-cols-2">
            {project.contribution.map((item, index) => (
              <li className="grid min-h-44 list-none content-start gap-5 bg-surface p-6" key={item}>
                <span className="font-mono text-xs font-extrabold text-copper">{String(index + 1).padStart(2, "0")}</span>
                <p className="m-0 leading-7 text-muted">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 border-t border-line pt-12" aria-labelledby="system-context-title">
          <div className="mb-6 max-w-3xl">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">03 / System Context</p>
            <h2 id="system-context-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              How the work fits together
            </h2>
          </div>

          <CaseStudyFlow project={project} />

          <ul className="mt-4 grid gap-px border border-line bg-line p-0 md:grid-cols-2">
            {project.architecture.map((item, index) => (
              <li className="grid list-none grid-cols-[28px_1fr] gap-3 bg-surface p-5 leading-7 text-muted" key={item}>
                <span className="font-mono text-[11px] font-extrabold text-blueprint">A{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-7 border border-line bg-green-soft p-6 md:p-8 lg:grid-cols-[minmax(250px,0.42fr)_minmax(0,0.58fr)]" aria-labelledby="impact-title">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">04 / Evidence</p>
            <h2 id="impact-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              Outcome and engineering evidence
            </h2>
          </div>

          <ul className="grid gap-0 border-t border-line-strong p-0">
            {project.impact.map((item, index) => (
              <li className="grid list-none grid-cols-[34px_1fr] gap-3 border-b border-line-strong py-5 leading-7 text-muted" key={item}>
                <span className="font-mono text-[11px] font-extrabold text-green">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-4 grid gap-6 border border-line bg-surface/85 p-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)]" aria-labelledby="stack-title">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Technical environment</p>
            <h2 id="stack-title" className="font-display text-3xl font-semibold leading-tight text-ink">
              Tools used across the project.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-2">
            {project.stack.map((tech) => (
              <MetaLabel key={tech}>{tech}</MetaLabel>
            ))}
          </div>
        </section>

        <ProjectNavigation previous={previous} next={next} />
      </article>

      <SiteFooter />
    </main>
  );
}
