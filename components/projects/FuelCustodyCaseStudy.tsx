import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import type { Project } from "@/app/data";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { confidentialityNote, contextCards, evidenceCards } from "@/components/projects/fuel-custody/content";
import { FuelCustodyOperatingMap } from "@/components/projects/fuel-custody/FuelCustodyOperatingMap";
import { FuelMovementLifecycle } from "@/components/projects/fuel-custody/FuelMovementLifecycle";
import { OfflineFirstAuthorizationDiagram } from "@/components/projects/fuel-custody/OfflineFirstAuthorizationDiagram";
import { ReconciliationLogicDiagram } from "@/components/projects/fuel-custody/ReconciliationLogicDiagram";
import { DiagramShell, Tag } from "@/components/projects/fuel-custody/shared";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";

type FuelCustodyCaseStudyProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

export function FuelCustodyCaseStudy({ project, previous, next }: FuelCustodyCaseStudyProps) {
  return (
    <main className="overflow-hidden">
      <SiteNav />
      <article className="mx-auto w-[min(1180px,calc(100%_-_44px))] py-14">
        <Link className="mb-8 inline-flex items-center gap-2 font-extrabold text-green" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
        </Link>

        <header className="border-b border-line pb-10">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">03 / Confidential System</p>

          <h1 className="max-w-[860px] font-display text-[clamp(2.35rem,12vw,3.4rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-ink sm:text-[clamp(3.4rem,8vw,7rem)] sm:leading-[0.88] sm:tracking-[-0.04em]">
            Fuel Custody &amp;{" "}
            <br className="hidden sm:block" /> Reconciliation{" "}
            <br className="hidden sm:block" />
            Platform
          </h1>

          <p className="mt-7 max-w-[700px] text-lg leading-8 text-muted">
            A full-stack fuel governance platform for tracking, authorizing, reconciling, and auditing fuel movement across
            stations, tanks, pumps, vehicles, tanker deliveries, and field devices.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>
              <LockKeyhole size={13} aria-hidden="true" /> Confidential
            </Tag>
            <Tag>Petroleum Digital Operating System</Tag>
            <Tag>Multi-tenant SaaS</Tag>
            <Tag>Offline-first field operations</Tag>
          </div>

          <p className="mt-5 max-w-[760px] font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
            Django · PostgreSQL · Redis · React · Next.js · TypeScript · Docker
          </p>

          <DiagramShell
            className="mt-10"
            label="Figure 01"
            title="Fuel Custody Operating Map"
            caption="Figure 01 — Representative operating map showing field devices, edge control, fuel events, reconciliation, alerts, reports, and audit evidence."
          >
            <FuelCustodyOperatingMap />
          </DiagramShell>
        </header>

        <aside className="my-7 grid grid-cols-[22px_1fr] items-start gap-3 border border-copper/40 bg-copper/10 p-4">
          <LockKeyhole className="text-copper" size={18} aria-hidden="true" />
          <p className="m-0 leading-7 text-muted">{confidentialityNote}</p>
        </aside>

        <section className="grid gap-4 md:grid-cols-3" aria-label="Fuel custody project context">
          {contextCards.map((card) => (
            <article className="border border-line bg-surface/85 p-6" key={card.label}>
              <p className="mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">{card.label}</p>
              <h2 className="font-display text-2xl font-semibold text-ink">{card.title}</h2>
              <p className="mt-4 leading-7 text-muted">{card.text}</p>
            </article>
          ))}
        </section>

        <div className="mt-10 grid gap-8">
          <section className="grid min-w-0 gap-6 border border-line bg-surface/60 p-5 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:p-7">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">02 / Domain Flow</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink">Fuel movement lifecycle</h2>
              <p className="mt-5 leading-8 text-muted">
                Fuel custody starts before the station transaction. The system models the lifecycle from loading and
                transport through delivery, tank movement, pump dispensing, vehicle authorization, and final reconciliation.
                This makes fuel movement itself traceable, not only the location of a truck or a manual station report.
              </p>
            </div>

            <DiagramShell
              label="02 / Domain Flow"
              title="Fuel movement lifecycle"
              caption="Figure 02 — Fuel movement lifecycle from loading to final audit record."
            >
              <FuelMovementLifecycle />
            </DiagramShell>
          </section>

          <section className="min-w-0 border border-line bg-surface/60 p-5 lg:p-7">
            <div className="mb-6 max-w-4xl">
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">03 / Rules Engine</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink">Reconciliation logic</h2>
              <p className="mt-5 leading-8 text-muted">
                Reconciliation compares independent signals instead of trusting a single source. Delivery volume is compared
                against actual tank increase, pump dispensing is compared against tank decrease, and fleet transactions are
                checked against vehicle authorization and policy limits.
              </p>
            </div>

            <DiagramShell
              label="03 / Rules Engine"
              title="Reconciliation logic"
              caption="Figure 03 — Independent signals are compared instead of trusting a single source."
            >
              <ReconciliationLogicDiagram />
            </DiagramShell>
          </section>

          <section className="grid min-w-0 gap-6 border border-line bg-surface/60 p-5 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:p-7">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">04 / Reliability Model</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink">Offline-first authorization</h2>
              <p className="mt-5 leading-8 text-muted">
                Fuel operations cannot depend on perfect connectivity. The edge layer supports local policy checks, queues
                events during interruptions, and synchronizes them back into the central audit trail when connectivity returns.
              </p>
            </div>

            <DiagramShell
              label="04 / Reliability Model"
              title="Offline-first authorization"
              caption="Figure 04 — Local authorization and queueing preserve operational continuity and audit evidence."
            >
              <OfflineFirstAuthorizationDiagram />
            </DiagramShell>
          </section>
        </div>

        <section className="mt-10" aria-labelledby="fuel-evidence-title">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Technical Contribution Evidence</p>
          <h2 id="fuel-evidence-title" className="font-display text-4xl font-semibold text-ink">
            System contribution areas
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {evidenceCards.map((card, index) => (
              <article className="grid gap-3 border border-line bg-surface/85 p-5" key={card.title}>
                <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-copper">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl font-semibold text-ink">{card.title}</h3>
                <p className="leading-7 text-muted">{card.text}</p>
                <div className="flex flex-wrap gap-2">
                  <Tag>{card.tags}</Tag>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-10 grid gap-6 border border-line bg-green-soft p-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
          aria-labelledby="stack-title"
        >
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Technical Environment</p>
            <h2 id="stack-title" className="font-display text-3xl font-semibold leading-tight text-ink">
              Stack used across the product environment.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </section>

        <section className="mt-10 border border-line bg-surface/85 p-6">
          <h2 className="font-display text-4xl font-semibold text-ink">What this project demonstrates</h2>
          <p className="mt-5 max-w-4xl leading-8 text-muted">
            This project demonstrates operational software engineering: systems where reliability, traceability, authorization,
            and domain rules matter as much as the interface. The value is not the screen alone; it is the system’s ability to
            turn field activity into trusted operational evidence.
          </p>
        </section>

        <ProjectNavigation previous={previous} next={next} />
      </article>

      <SiteFooter />
    </main>
  );
}
