import { Code2, Database, Layers3, RadioTower, ShieldCheck } from "lucide-react";
import { capabilities, techSnapshot } from "@/app/data";

const icons = [Layers3, Code2, RadioTower, ShieldCheck];

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto w-[min(1180px,calc(100%_-_44px))] scroll-mt-28 border-t border-line py-20" aria-labelledby="capabilities-title">
      <div className="mb-8 max-w-3xl">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Capabilities</p>
        <h2 id="capabilities-title" className="font-display text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-none text-ink">
          Areas of work
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability, index) => {
          const Icon = icons[index] ?? Database;
          return (
            <article className="motion-panel group grid content-start gap-3 border border-line bg-surface/80 p-5" key={capability.title}>
              <Icon className="text-green transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105" size={22} aria-hidden="true" />
              <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{capability.title}</h3>
              <p className="m-0 leading-7 text-muted">{capability.text}</p>
              <ul className="grid gap-2 p-0">
                {capability.points.map((point) => (
                  <li className="relative list-none pl-4 leading-7 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-green" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <div className="motion-panel mt-5 grid gap-6 border border-line bg-green-soft p-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
  <div>
    <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">
      Technologies
    </p>

    <h3 className="font-display text-3xl font-semibold leading-tight text-ink">
      Tools I have worked with
    </h3>
  </div>

  <div className="flex flex-wrap gap-2">
    {techSnapshot.map((tech) => (
      <span
        className="motion-chip inline-flex min-h-7 items-center rounded-full border border-line bg-surface px-3 font-mono text-[11px] font-extrabold text-muted"
        key={tech}
      >
        {tech}
      </span>
    ))}
  </div>
</div>
    </section>
  );
}
