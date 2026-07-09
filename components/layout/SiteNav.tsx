import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteNav() {
  return (
    <nav
      className="z-20 flex h-[104px] w-full items-center justify-between gap-8 border-b border-dashed border-line bg-bg/85 px-[clamp(40px,4vw,56px)] backdrop-blur-sm max-md:h-auto max-md:flex-wrap max-md:py-5"
      aria-label="Primary navigation"
    >
      <Link href="/#top" className="inline-flex min-h-11 items-center gap-5" aria-label="Al Siddeg Omer home">
        <span className="grid h-[54px] w-[54px] place-items-center rounded-sm border border-green bg-green font-mono text-sm font-extrabold text-surface shadow-lift">SO</span>
        <div>
          <strong className="block font-mono text-xl font-extrabold leading-tight text-ink">Al Siddeg Omer</strong>
          <small className="mt-1 block font-mono text-sm uppercase tracking-[0.08em] text-muted">Software Engineer</small>
        </div>
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-[clamp(24px,3vw,58px)]">
        <Link className="inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink hover:text-green" href="/#work">Work</Link>
        <Link className="inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink hover:text-green" href="/#capabilities">Capabilities</Link>
        <Link className="inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink hover:text-green" href="/#experience">Experience</Link>
        <Link className="inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink hover:text-green" href="/#contact">About</Link>
        <Link className="inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink hover:text-green" href="/#work">Notes</Link>
        <Link className="inline-flex min-h-14 items-center gap-3 rounded border border-ink/70 bg-surface/60 px-6 font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink hover:bg-green-soft hover:text-green" href="/#contact">
          Contact <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}
