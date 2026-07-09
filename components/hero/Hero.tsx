import { ArrowUpRight } from "lucide-react";
import { contact } from "@/app/data";
import { HeroSystemDiagram } from "@/components/hero/HeroSystemDiagram";

export function Hero() {
  return (
    <section
      className="grid min-h-[calc(100vh-108px)] grid-cols-1 items-center gap-12 overflow-visible px-6 py-14 scroll-mt-28 md:px-10 lg:grid-cols-[minmax(440px,590px)_minmax(720px,1fr)] lg:gap-[clamp(56px,5vw,96px)] lg:px-0 lg:py-0 lg:pl-[clamp(64px,5vw,88px)] lg:pr-[clamp(32px,4vw,56px)]"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[590px] justify-self-start">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">
          Systems Engineer · Builder · Problem Solver
        </p>
        <h1
          id="hero-title"
          className="max-w-[590px] font-display text-[clamp(56px,3.33vw,64px)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink"
        >
          <span className="block">I build systems</span>
          <span className="block">that solve real</span>
          <span className="block">problems at scale.</span>
        </h1>
        <p className="mt-6 font-mono text-sm font-extrabold uppercase text-green">
          Systems thinking. <span className="text-copper">Measurable impact.</span>
        </p>
        <p className="mt-6 max-w-[560px] text-lg leading-8 text-muted">
          I build full-stack software across frontend, backend, real-time workflows, and cloud-connected platforms for industries where reliability matters.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-green bg-green px-5 text-sm font-extrabold text-surface transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            href="#work"
          >
            Explore my work <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded border border-line-strong bg-surface px-5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            href="#experience"
          >
            View experience
          </a>
        </div>
        <dl className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Profile summary">
          <div className="border border-line bg-surface/70 p-4">
            <dt className="mb-1 font-mono text-[11px] font-extrabold uppercase text-muted">Based in</dt>
            <dd className="m-0 font-extrabold text-ink">{contact.location}</dd>
          </div>
          <div className="border border-line bg-surface/70 p-4">
            <dt className="mb-1 font-mono text-[11px] font-extrabold uppercase text-muted">Focus</dt>
            <dd className="m-0 font-extrabold text-ink">Full-stack operational software</dd>
          </div>
        </dl>
      </div>
      <HeroSystemDiagram />
    </section>
  );
}
