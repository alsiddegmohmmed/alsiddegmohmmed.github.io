import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteNav() {
  return (
    <>
      <MobileNav />

      <nav
        className="z-20 hidden h-[104px] w-full items-center justify-between gap-8 border-b border-dashed border-line bg-bg/85 px-[clamp(40px,4vw,56px)] backdrop-blur-sm md:flex"
        aria-label="Primary navigation"
      >
        <Link href="/#top" className="group inline-flex min-h-11 items-center gap-5" aria-label="Al Siddeg Omer home">
          <span className="grid h-[54px] w-[54px] place-items-center rounded-sm border border-green bg-green font-mono text-sm font-extrabold text-surface shadow-lift transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-[-1deg]">SO</span>
          <div>
            <strong className="block font-mono text-xl font-extrabold leading-tight text-ink">Al Siddeg Omer</strong>
            <small className="mt-1 block font-mono text-sm uppercase tracking-[0.08em] text-muted">Software Engineer</small>
          </div>
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-[clamp(24px,3vw,58px)]">
          <Link className="nav-link inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink" href="/#work">Work</Link>
          <Link className="nav-link inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink" href="/#capabilities">Capabilities</Link>
          <Link className="nav-link inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink" href="/#clients">Clients</Link>
          <Link className="nav-link inline-flex min-h-11 items-center font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink" href="/#experience">Experience</Link>
          <Link className="nav-contact group inline-flex min-h-14 items-center gap-3 rounded border border-ink/70 bg-surface/60 px-6 font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-ink" href="/#contact">
            Contact <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </>
  );
}
