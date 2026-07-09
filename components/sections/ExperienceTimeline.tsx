import { ArrowUpRight } from "lucide-react";
import { contact, timeline } from "@/app/data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto w-[min(1180px,calc(100%_-_44px))] border-t border-line py-20" aria-labelledby="experience-title">
      <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.55fr)] lg:items-end">
        <div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Experience Timeline</p>
          <h2 id="experience-title" className="font-display text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-none text-ink">
            From client websites to enterprise systems.
          </h2>
        </div>
        <a className="inline-flex items-center gap-2 font-extrabold text-green" href={`mailto:${contact.email}`}>
          Request CV <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="relative grid gap-3 before:absolute before:bottom-5 before:left-2 before:top-5 before:w-px before:bg-line-strong">
        {timeline.map((item) => (
          <article className="relative grid gap-4 border border-line bg-surface/80 py-5 pl-9 pr-5 md:grid-cols-[170px_1fr]" key={`${item.company}-${item.period}`}>
            <span className="absolute left-1 top-7 h-3 w-3 rounded-full border-2 border-surface bg-green shadow-[0_0_0_1px_var(--green)]" aria-hidden="true" />
            <p className="m-0 font-mono text-xs font-extrabold uppercase text-copper">{item.period}</p>
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{item.company}</h3>
              <strong className="mt-2 block text-green">{item.role}</strong>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
