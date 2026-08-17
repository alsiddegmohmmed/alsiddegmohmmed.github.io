import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/app/data";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { DiagramShell } from "@/components/projects/fuel-custody/shared";
import { FailureScenarios } from "@/components/projects/ledgerops/FailureScenarios";
import { ArchitectureFigure, CorrectionFigure, JournalFigure, PaymentSequence, ReconciliationFigure } from "@/components/projects/ledgerops/LedgerOpsVisuals";
import { ThreeTruthsFigure } from "@/components/projects/ledgerops/ThreeTruthsFigure";

type Props = { project: Project; previous?: Project; next?: Project };

const guarantees = [
  ["One logical request creates one financial effect.", "Tenant-scoped idempotency prevents client retries from silently creating another Payment. Message consumers also tolerate repeated delivery without applying the same business effect twice."],
  ["Completed money must balance.", "Every Ledger transaction contains debit and credit entries that balance by currency. A Payment cannot reach financial completion independently of its required Ledger posting."],
  ["History stays immutable.", "Provider Attempts, financial postings, Settlement evidence, and Corrections are preserved as historical facts. Corrections create compensating records rather than rewriting history."],
  ["Uncertainty remains uncertainty.", "Network timeouts and non-final Provider results do not become invented successes or failures. Recovery continues until authoritative evidence establishes a definitive outcome."],
  ["Tenant ownership is part of correctness.", "Tenant context is required for Tenant-owned data, and cross-Tenant financial effects are rejected rather than treated as ordinary authorization mistakes."]
] as const;

const coreEngineering = ["Transactional boundaries", "Double-entry Ledger", "Tenant-wide idempotency", "Optimistic concurrency", "Immutable financial history", "Provider recovery semantics", "Transactional outbox / inbox", "Signed Provider contracts", "Settlement Reconciliation", "Controlled Corrections"];
const operationalEngineering = ["Spring Batch processing", "Keycloak authentication", "Tenant-scoped operations UI", "Audit evidence", "OpenTelemetry tracing", "Prometheus metrics", "Grafana dashboards", "Testcontainers integration testing", "Flyway migrations", "Executable architecture boundaries"];

function SectionHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro?: string; id: string }) {
  return <div className="mb-7 grid gap-5 lg:grid-cols-[minmax(320px,0.52fr)_minmax(0,0.48fr)] lg:items-end"><div><p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-green sm:text-xs">{eyebrow}</p><h2 id={id} className="max-w-[22ch] font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">{title}</h2></div>{intro ? <p className="m-0 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{intro}</p> : null}</div>;
}

export function LedgerOpsCaseStudy({ project, previous, next }: Props) {
  return (
    <main id="main-content" className="overflow-x-clip">
      <SiteNav />
      <article className="mx-auto w-[min(1180px,calc(100%_-_44px))] py-10 md:py-14">
        <Link className="mb-9 inline-flex min-h-11 items-center gap-2 font-extrabold text-green" href="/#work"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link>
        <header className="pb-10">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">LEDGEROPS / FINANCIAL SYSTEMS</p>
          <h1 className="max-w-[960px] font-display text-[clamp(3.25rem,11vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-ink">LedgerOps</h1>
          <p className="mb-0 mt-6 max-w-[1000px] font-display text-[clamp(1.75rem,3.6vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:mt-7">Financial operations infrastructure built for the moments when payments stop being simple.</p>
          <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-[900px] text-lg leading-8 text-muted"><p className="m-0">LedgerOps is a production-style transaction-processing and financial-operations system that connects payment lifecycle management, Provider communication, double-entry Ledgering, Settlement Reconciliation, exception handling, audit, and operational tooling.</p><p className="mb-0 mt-5">It is designed around a harder question than simply accepting a payment: <strong className="text-ink">how do you preserve one trustworthy financial history when requests are retried, messages are duplicated, Providers time out, Settlement data arrives later, and Corrections become necessary?</strong></p></div>
            <a className="inline-flex min-h-12 w-fit items-center justify-center gap-2 border border-green bg-green px-5 text-sm font-extrabold text-surface transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5" href={project.repoUrl} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> View source <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" aria-label="LedgerOps project metadata">{[["Role", "System design · Backend engineering · Frontend operations tooling"], ["Type", "Financial systems simulation"], ["Status", "Release 0.3"], ["Core stack", "Java · Spring Boot · PostgreSQL · Kafka · Next.js"]].map(([label, value]) => <div className="bg-surface p-4" key={label}><dt className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-green">{label}</dt><dd className="mb-0 mt-2 text-sm font-bold leading-6 text-ink">{value}</dd></div>)}</dl>
        </header>

        <ThreeTruthsFigure />

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="payment-processing-title">
          <SectionHeading eyebrow="01 / PAYMENT PROCESSING" id="payment-processing-title" title="What actually happens after a payment request?" intro="A Payment does not move directly from API request to “success.” LedgerOps separates the request, domain decision, Provider interaction, Provider evidence, and financial posting so each stage can fail or retry without corrupting the others." />
          <DiagramShell label="FIG 02" title="Successful Payment sequence" caption="The important boundary is not HTTP. It is financial state: external calls may fail, repeat, or return late; the internal history must still converge on one accepted outcome."><PaymentSequence /></DiagramShell>
          <div className="mt-4 grid gap-px border border-line bg-line md:grid-cols-3">{[["IMMUTABLE ATTEMPTS", "Every Provider submission attempt becomes a separate historical record instead of replacing the previous attempt."], ["DURABLE INTENT", "Payment state and the intent to contact the Provider are committed before asynchronous delivery begins."], ["EVIDENCE BEFORE EFFECT", "A Provider result is persisted and verified before it may change Payment or Ledger state."]].map(([title, text]) => <article className="bg-surface p-5" key={title}><h3 className="font-mono text-[10px] font-extrabold tracking-[0.08em] text-green">{title}</h3><p className="mb-0 mt-3 text-sm leading-6 text-muted">{text}</p></article>)}</div>
        </section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="failure-title"><SectionHeading eyebrow="02 / FAILURE BEHAVIOUR" id="failure-title" title="The interesting part begins when the happy path stops working." intro="Financial systems cannot treat every infrastructure failure as a business failure. LedgerOps explicitly models duplicate requests, duplicate messages, ambiguous Provider outcomes, and recovery instead of hiding them behind generic retries." /><FailureScenarios /></section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="ledger-title"><SectionHeading eyebrow="03 / FINANCIAL TRUTH" id="ledger-title" title="A successful payment is not complete until the books agree." intro="LedgerOps uses an immutable double-entry Ledger as the financial system of record. Every posting contains equal debit and credit effects for the same currency, and completed history is never edited in place." /><DiagramShell label="FIG 03" title="Balanced Journal" caption="If the Journal cannot be posted correctly, the Payment cannot become financially completed."><JournalFigure /></DiagramShell></section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="reconciliation-title"><SectionHeading eyebrow="04 / SETTLEMENT & RECONCILIATION" id="reconciliation-title" title="Processing says what should have happened. Settlement says what the Provider believes happened." intro="Hours or days later, external Settlement data can arrive containing the Provider's financial record. LedgerOps compares that evidence against internal Payment, Provider, and Ledger facts instead of assuming they agree." /><DiagramShell label="FIG 04" title="Settlement Reconciliation pipeline" caption="A Payment can be operationally successful while later financial evidence disagrees. Reconciliation detects that disagreement rather than silently allowing two histories to diverge."><ReconciliationFigure /></DiagramShell></section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="corrections-title"><SectionHeading eyebrow="05 / CORRECTIONS" id="corrections-title" title="Financial history is corrected. It is never rewritten." intro="The original Journal remains part of financial history. An authorised Correction creates another balanced transaction that explicitly compensates for it." /><DiagramShell label="FIG 05" title="Correction without mutation" caption="Append-only financial history preserves both the original posting and the evidence-bound compensating Journal."><CorrectionFigure /></DiagramShell></section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="operations-title">
          <SectionHeading eyebrow="06 / OPERATIONS" id="operations-title" title="The backend also has to explain itself to humans." intro="LedgerOps includes an authenticated operations application for inspecting Payment activity, Provider health, risk reviews, discrepancies, Cases, Reconciliation state, Ledger records, Tenant configuration, and audit evidence." />
          <figure className="m-0 border border-line bg-surface p-3 md:p-4">
            <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-muted sm:hidden">Swipe horizontally to inspect the interface →</p>
            <div className="overflow-x-auto overscroll-x-contain border border-line bg-bg">
              <div className="relative min-w-[760px] sm:min-w-0">
              <Image className="h-auto w-full" src="/assets/ledgerops/operations-overview.jpg" width={1280} height={720} sizes="(max-width: 640px) 760px, (max-width: 1180px) 100vw, 1140px" alt="LedgerOps Operations overview showing the active Tenant, payment metrics, work queues, Provider health, and recent Payments" />
              <span className="absolute left-[37%] top-[45%] grid h-8 w-8 place-items-center border border-surface bg-green font-mono text-[10px] font-extrabold text-surface shadow-md" aria-hidden="true">01</span>
              <span className="absolute left-[57%] top-[74%] grid h-8 w-8 place-items-center border border-surface bg-copper font-mono text-[10px] font-extrabold text-surface shadow-md" aria-hidden="true">02</span>
              <span className="absolute right-[8%] top-[73%] grid h-8 w-8 place-items-center border border-surface bg-blueprint font-mono text-[10px] font-extrabold text-surface shadow-md" aria-hidden="true">03</span>
              </div>
            </div>
            <figcaption className="mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-start"><p className="m-0 text-sm leading-6 text-muted"><strong className="text-ink">Operations overview</strong> — Tenant-scoped Payment volume, outcomes, Provider health, exceptions, and operational work queues.</p><span className="font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-muted">01 Transaction state · 02 Exception queues · 03 Provider health</span></figcaption>
          </figure>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <figure className="m-0 min-w-0 border border-line bg-surface p-3 md:p-4">
              <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-muted sm:hidden">Swipe to inspect →</p>
              <div className="w-full max-w-full overflow-x-auto overscroll-x-contain border border-line"><Image className="h-auto w-[760px] max-w-none sm:w-full sm:max-w-full" src="/assets/ledgerops/payment-investigation.jpg" width={1280} height={720} sizes="(max-width: 640px) 760px, (max-width: 1024px) 100vw, 570px" alt="LedgerOps Payment detail showing a completed Payment and its balanced Ledger evidence" /></div>
              <figcaption className="mt-4 text-sm leading-6 text-muted"><strong className="text-ink">Payment investigation</strong> — one operational record connects lifecycle state with the financial evidence behind it.</figcaption>
            </figure>
            <figure className="m-0 min-w-0 border border-line bg-surface p-3 md:p-4">
              <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-muted sm:hidden">Swipe to inspect →</p>
              <div className="w-full max-w-full overflow-x-auto overscroll-x-contain border border-line"><Image className="h-auto w-[760px] max-w-none sm:w-full sm:max-w-full" src="/assets/ledgerops/reconciliation-operations.jpg" width={1280} height={720} sizes="(max-width: 640px) 760px, (max-width: 1024px) 100vw, 570px" alt="LedgerOps Reconciliation screen showing an immutable current run with six matches, one unmatched item, and one discrepancy" /></div>
              <figcaption className="mt-4 text-sm leading-6 text-muted"><strong className="text-ink">Reconciliation operations</strong> — Settlement evidence becomes versioned runs, with discrepancies surfaced for controlled investigation.</figcaption>
            </figure>
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="architecture-title"><SectionHeading eyebrow="07 / SYSTEM DESIGN" id="architecture-title" title="The architecture follows the financial boundaries." intro="LedgerOps is deliberately built as a modular system rather than a collection of unrelated services. Modules own their data and communicate through published interfaces or durable messages, while PostgreSQL remains the transactional source of truth." /><DiagramShell label="FIG 09" title="System architecture" caption="Architecture is supporting evidence after the Payment and financial model are understood."><ArchitectureFigure /></DiagramShell></section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="guarantees-title"><SectionHeading eyebrow="08 / ENGINEERING INVARIANTS" id="guarantees-title" title="What the system refuses to get wrong." /><ol className="m-0 grid gap-px border border-line bg-line p-0">{guarantees.map(([title, body], index) => <li className="grid list-none gap-4 bg-surface p-5 md:grid-cols-[70px_0.75fr_1.25fr] md:items-start" key={title}><span className="font-mono text-sm font-extrabold text-copper">{String(index + 1).padStart(2, "0")}</span><h3 className="m-0 font-display text-2xl font-semibold leading-tight text-ink">{title}</h3><p className="m-0 leading-7 text-muted">{body}</p></li>)}</ol></section>

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="depth-title"><SectionHeading eyebrow="ENGINEERING DEPTH" id="depth-title" title="Built to keep financial operations accurate and reliable." /><div className="grid gap-px border border-line bg-line md:grid-cols-2">{[["CORE ENGINEERING", coreEngineering], ["OPERATIONAL ENGINEERING", operationalEngineering]].map(([title, items]) => <div className="bg-surface p-6" key={title as string}><h3 className="font-mono text-[11px] font-extrabold tracking-[0.08em] text-green">{title as string}</h3><ul className="mt-5 grid gap-0 p-0">{(items as readonly string[]).map((item) => <li className="list-none border-t border-line py-3 text-sm text-muted" key={item}>{item}</li>)}</ul></div>)}</div></section>

        <section className="mt-8 border border-line bg-surface p-5 sm:p-6" aria-labelledby="stack-title"><p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">TECHNOLOGY</p><h2 id="stack-title" className="max-w-[22ch] font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-tight text-ink">A restrained stack, chosen around the boundaries.</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><p className="m-0 leading-7 text-muted"><strong className="text-ink">Backend</strong><br />Java 21 · Spring Boot · Spring Modulith · Spring Data JPA</p><p className="m-0 leading-7 text-muted"><strong className="text-ink">Data and processing</strong><br />PostgreSQL · Apache Kafka · Spring Batch · MinIO · Redis</p><p className="m-0 leading-7 text-muted"><strong className="text-ink">Identity and operations</strong><br />Keycloak · OpenTelemetry · Prometheus · Grafana</p><p className="m-0 leading-7 text-muted"><strong className="text-ink">Web and verification</strong><br />Next.js · React · TypeScript · JUnit · Testcontainers · Flyway · architecture tests</p></div></section>

        <section className="mt-8 grid gap-6 border border-line bg-bg p-5 sm:p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-end" aria-labelledby="scope-title"><div><p className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-green">PROJECT SCOPE</p><h2 id="scope-title" className="mt-3 max-w-[24ch] font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-tight text-ink">Production-style simulation, clearly scoped.</h2><p className="mb-0 mt-4 max-w-4xl leading-7 text-muted">LedgerOps is a production-style financial systems simulation developed to explore backend correctness and financial operations architecture. It uses synthetic data and a separately deployed Provider Simulator. It does not process real funds, store real card credentials, or claim regulatory certification.</p></div><a className="inline-flex min-h-12 items-center justify-center gap-2 border border-green bg-green px-5 text-center font-extrabold text-surface" href={project.repoUrl} target="_blank" rel="noreferrer">Explore the implementation <ArrowUpRight size={16} aria-hidden="true" /></a></section>

        <ProjectNavigation previous={previous} next={next} />
      </article>
      <SiteFooter />
    </main>
  );
}
