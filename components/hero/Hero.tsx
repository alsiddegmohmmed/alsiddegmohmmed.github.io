import { ArrowUpRight } from "lucide-react";
import { contact } from "@/app/data";
import { HeroSystemDiagram } from "@/components/hero/HeroSystemDiagram";

export function Hero() {
  return (
    <section
      id="overview"
      className="grid min-h-[calc(100vh-108px)] grid-cols-1 items-center gap-12 overflow-hidden px-6 py-14 scroll-mt-28 md:px-10 lg:grid-cols-[minmax(350px,0.9fr)_minmax(0,1.1fr)] lg:gap-[clamp(40px,4vw,72px)] lg:px-0 lg:py-0 lg:pl-[clamp(48px,4vw,72px)] lg:pr-[clamp(28px,3vw,48px)] xl:grid-cols-[minmax(430px,590px)_minmax(0,1fr)]"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[590px] justify-self-start">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">
          Software Engineer · Saudi Arabia
        </p>

        <h1
          id="hero-title"
          className="max-w-[590px] font-display text-[clamp(2.75rem,14vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink md:text-[clamp(56px,3.33vw,64px)] md:tracking-[-0.04em]"
        >
          <span className="block">I’m Siddeg Omer,</span>
          <span className="block">a full-stack</span>
          <span className="block">software engineer.</span>
        </h1>

        <p className="mt-6 max-w-[560px] text-lg leading-8 text-muted">
          I work across frontend and backend development, including interfaces,
          application logic, APIs, databases, real-time features, and
          integrations. This portfolio presents a selection of the products and
          systems I have worked on.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-green bg-green px-5 text-sm font-extrabold text-surface transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            href="#work"
          >
            View selected work
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <a
            className="inline-flex min-h-12 items-center justify-center rounded border border-line-strong bg-surface px-5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            href="#experience"
          >
            View experience
          </a>
        </div>

        <dl
          className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
          aria-label="Profile summary"
        >
          <div className="motion-panel border border-line bg-surface/70 p-4">
            <dt className="mb-1 font-mono text-[11px] font-extrabold uppercase text-muted">
              Based in
            </dt>
            <dd className="m-0 font-extrabold text-ink">
              {contact.location}
            </dd>
          </div>

          <div className="motion-panel border border-line bg-surface/70 p-4">
            <dt className="mb-1 font-mono text-[11px] font-extrabold uppercase text-muted">
             Work Experience
            </dt>
            <dd className="m-0 font-extrabold text-ink">
              3+ years in software development
            </dd>
          </div>
        </dl>
      </div>

      <HeroSystemDiagram />
    </section>
  );
}
