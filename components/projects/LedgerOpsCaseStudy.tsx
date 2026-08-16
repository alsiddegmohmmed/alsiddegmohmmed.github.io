import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Github,
  RefreshCcw,
  Scale,
  ShieldCheck
} from "lucide-react";
import type { Project } from "@/app/data";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { DiagramShell, Tag } from "@/components/projects/fuel-custody/shared";

type LedgerOpsCaseStudyProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

const contextCards = [
  {
    label: "01 / System Question",
    title: "What happens after the happy path?",
    text: "LedgerOps starts with the failures that invalidate financial systems: concurrent requests, duplicate messages, ambiguous Provider outcomes, partial commits, and conflicting settlement evidence."
  },
  {
    label: "02 / Design Position",
    title: "Correctness before throughput",
    text: "Every important action has an owner, stable identity, transaction boundary, replay contract, failure state, and executable test. Infrastructure choices follow those constraints."
  },
  {
    label: "03 / Delivery Scope",
    title: "An inspectable operations product",
    text: "The result connects Payment, Risk, Provider, Ledger, Reversal, Reconciliation, Casework, authorization, audit, reporting, and an Operations Web application."
  }
] as const;

const invariants = [
  {
    icon: RefreshCcw,
    title: "One logical Payment",
    text: "Equivalent concurrent retries converge through PostgreSQL. Changed content under the same Tenant and key is an explicit conflict."
  },
  {
    icon: Scale,
    title: "One balanced effect",
    text: "A Payment reaches COMPLETED only when its exact two-entry Ledger posting commits in the same PostgreSQL transaction."
  },
  {
    icon: ShieldCheck,
    title: "Unknown is not failed",
    text: "A Provider timeout preserves ambiguity. Status recovery resolves evidence before any safe resubmission is allowed."
  },
  {
    icon: Database,
    title: "History is immutable",
    text: "Reversal and correction append constrained compensating entries. Posted financial records are never silently rewritten."
  }
] as const;

const evidence = [
  { value: "740", label: "backend tests", detail: "0 failed, errored, or skipped" },
  { value: "V45", label: "Flyway schema", detail: "clean install + upgrade verified" },
  { value: "100k", label: "record gates", detail: "ingestion + Reconciliation" },
  { value: "12", label: "browser scenarios", detail: "across three Playwright runs" }
] as const;

const tradeoffs = [
  {
    decision: "Modular monolith",
    reason: "Preserves explicit ownership while keeping the valuable local Payment-to-Ledger transaction boundary."
  },
  {
    decision: "At-least-once delivery",
    reason: "Uses stable identity, idempotent effects, and exact replay instead of making an end-to-end exactly-once claim."
  },
  {
    decision: "Deterministic matching",
    reason: "Turns ambiguous settlement relationships into discrepancies and Cases rather than automatic financial truth."
  },
  {
    decision: "Constrained correction",
    reason: "Allows only evidence-bound compensation instead of exposing arbitrary journal administration."
  }
] as const;

function ArchitectureMap() {
  const layers = [
    {
      label: "Experience",
      accent: "text-green",
      items: ["Operations Web", "Sandbox API", "Reports + live activity"]
    },
    {
      label: "Core modules",
      accent: "text-blueprint",
      items: ["Payment + Risk", "Provider + Messaging", "Ledger + Reversal", "Reconciliation + Cases"]
    },
    {
      label: "Transactional truth",
      accent: "text-copper",
      items: ["PostgreSQL schemas", "Immutable evidence", "Stable identities + constraints"]
    },
    {
      label: "External boundaries",
      accent: "text-green",
      items: ["Kafka", "Provider Simulator", "Keycloak + Redis", "MinIO"]
    }
  ] as const;

  return (
    <div className="grid gap-3" role="img" aria-label="LedgerOps system boundary map from experience surfaces through Core modules and transactional truth to external infrastructure">
      {layers.map((layer, index) => (
        <div className="relative grid gap-3 border border-line bg-bg/55 p-4 md:grid-cols-[150px_1fr] md:items-center" key={layer.label}>
          <div>
            <span className={`font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] ${layer.accent}`}>
              L{index + 1}
            </span>
            <p className="mb-0 mt-1 font-mono text-xs font-extrabold uppercase text-ink">{layer.label}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {layer.items.map((item) => (
              <span className="grid min-h-14 place-items-center border border-line bg-surface px-3 text-center font-mono text-[11px] font-bold leading-5 text-muted" key={item}>
                {item}
              </span>
            ))}
          </div>
          {index < layers.length - 1 ? (
            <span className="absolute -bottom-3 left-8 z-10 grid h-6 w-6 place-items-center border border-line bg-surface font-mono text-blueprint" aria-hidden="true">
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function AtomicCompletionFlow() {
  const steps = [
    ["01", "Lock Payment", "Tenant-scoped row"],
    ["02", "Verify evidence", "Confirmed Provider success"],
    ["03", "Post Ledger", "Debit clearing / credit payable"],
    ["04", "Complete Payment", "One shared commit"]
  ] as const;

  return (
    <ol className="grid gap-4 p-0 lg:grid-cols-4" aria-label="Atomic Payment and Ledger completion flow">
      {steps.map(([number, title, detail], index) => (
        <li className="relative grid min-h-36 list-none content-between border border-line bg-bg/55 p-4" key={number}>
          <span className="font-mono text-[11px] font-extrabold text-copper">{number}</span>
          <div>
            <strong className="block font-display text-xl text-ink">{title}</strong>
            <span className="mt-2 block text-sm leading-6 text-muted">{detail}</span>
          </div>
          {index < steps.length - 1 ? (
            <span className="absolute -bottom-[18px] left-1/2 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center bg-surface font-mono text-blueprint lg:-right-[18px] lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0" aria-hidden="true">
              <span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function RecoveryMap() {
  const paths = [
    {
      trigger: "Duplicate delivery",
      evidence: "Outbox + inbox identity",
      result: "Return the existing effect"
    },
    {
      trigger: "Provider timeout",
      evidence: "Attempt + status recovery",
      result: "Resolve UNKNOWN safely"
    },
    {
      trigger: "Settlement mismatch",
      evidence: "Immutable run + discrepancy",
      result: "Investigate through a Case"
    }
  ] as const;

  return (
    <div className="grid gap-3" role="img" aria-label="Failure recovery map showing how duplicate delivery, Provider timeout, and settlement mismatch become durable evidence and safe outcomes">
      <div className="hidden grid-cols-[0.9fr_40px_1fr_40px_1fr] px-4 font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted md:grid">
        <span>Observed condition</span><span /><span>Durable evidence</span><span /><span>Safe result</span>
      </div>
      {paths.map((path) => (
        <div className="grid gap-2 border border-line bg-bg/55 p-3 md:grid-cols-[0.9fr_40px_1fr_40px_1fr] md:items-center" key={path.trigger}>
          <strong className="border-l-4 border-copper bg-surface p-4 text-ink">{path.trigger}</strong>
          <ArrowRight className="mx-auto hidden text-blueprint md:block" size={18} aria-hidden="true" />
          <span className="border border-line bg-surface p-4 font-mono text-xs font-bold text-muted">{path.evidence}</span>
          <ArrowRight className="mx-auto hidden text-blueprint md:block" size={18} aria-hidden="true" />
          <span className="border-l-4 border-green bg-surface p-4 font-bold text-ink">{path.result}</span>
        </div>
      ))}
    </div>
  );
}

export function LedgerOpsCaseStudy({ project, previous, next }: LedgerOpsCaseStudyProps) {
  return (
    <main id="main-content" className="overflow-x-clip">
      <SiteNav />

      <article className="mx-auto w-[min(1180px,calc(100%_-_44px))] py-12 md:py-14">
        <Link className="mb-9 inline-flex min-h-11 items-center gap-2 font-extrabold text-green" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
        </Link>

        <header className="border-b border-line pb-10">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">
            07 / Public engineering case study
          </p>

          <h1 className="max-w-[960px] font-display text-[clamp(3rem,15vw,4.25rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-ink sm:text-[clamp(4.25rem,9vw,8rem)]">
            LedgerOps
          </h1>

          <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="m-0 max-w-[800px] text-xl leading-9 text-muted">
                Engineering one defensible financial outcome when requests race, messages repeat, Providers time out, workers crash, and settlement evidence disagrees.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Tag>Independent portfolio project</Tag>
                <Tag>Financial correctness</Tag>
                <Tag>Open-source repository</Tag>
              </div>
            </div>

            <a
              className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded border border-green bg-green px-5 text-sm font-extrabold text-surface transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} aria-hidden="true" /> View source repository <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <DiagramShell
            className="mt-10"
            label="Figure 01"
            title="System boundary map"
            caption="Figure 01 — The modular Core keeps financial transactions local while durable handoffs cross Provider, messaging, identity, object-storage, and browser-session boundaries."
          >
            <ArchitectureMap />
          </DiagramShell>

          <dl className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" aria-label="LedgerOps release evidence">
            {evidence.map((item) => (
              <div className="bg-surface p-5" key={item.label}>
                <dt className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted">{item.label}</dt>
                <dd className="mb-0 mt-3 font-display text-4xl font-semibold text-ink">{item.value}</dd>
                <p className="mb-0 mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </div>
            ))}
          </dl>
        </header>

        <aside className="my-7 grid grid-cols-[22px_1fr] items-start gap-3 border border-blueprint/30 bg-blueprint/5 p-4">
          <CheckCircle2 className="text-blueprint" size={18} aria-hidden="true" />
          <p className="m-0 leading-7 text-muted">
            LedgerOps is a simulation and learning project. It uses synthetic data and a Provider Simulator, does not process real money, and does not claim regulatory certification.
          </p>
        </aside>

        <section className="grid gap-4 md:grid-cols-3" aria-label="LedgerOps project context">
          {contextCards.map((card) => (
            <article className="border border-line bg-surface/85 p-6" key={card.label}>
              <p className="mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">{card.label}</p>
              <h2 className="font-display text-2xl font-semibold text-ink">{card.title}</h2>
              <p className="mt-4 leading-7 text-muted">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="ledgerops-invariants-title">
          <div className="mb-6 max-w-4xl">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">02 / Correctness Contracts</p>
            <h2 id="ledgerops-invariants-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              The invariants shaped the architecture.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Technology choices came after defining what the system could not violate. Each rule is protected through domain behavior, transaction ownership, database constraints, stable identity, and focused tests.
            </p>
          </div>

          <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {invariants.map((invariant) => {
              const Icon = invariant.icon;
              return (
                <article className="grid min-h-64 content-between gap-8 bg-surface p-6" key={invariant.title}>
                  <Icon className="text-green" size={24} strokeWidth={1.7} aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{invariant.title}</h3>
                    <p className="mt-4 leading-7 text-muted">{invariant.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 grid gap-6 border border-line bg-surface/60 p-5 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:p-7" aria-labelledby="atomic-completion-title">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">03 / Financial Boundary</p>
            <h2 id="atomic-completion-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              Completion and accounting commit together.
            </h2>
            <p className="mt-5 leading-8 text-muted">
              Provider success alone is insufficient. Payment owns one short transaction; Ledger joins it, validates the exact template and replay shape, and either both records commit or neither does.
            </p>
            <div className="mt-5 border-l-4 border-copper bg-bg/60 p-4 font-mono text-xs font-bold leading-6 text-muted">
              DEBIT PROVIDER_CLEARING<br />
              CREDIT MERCHANT_PAYABLE<br />
              full Payment amount + currency
            </div>
          </div>

          <DiagramShell
            label="Figure 02"
            title="Atomic Payment-to-Ledger completion"
            caption="Figure 02 — Payment completion and the exact balanced Ledger posting share one PostgreSQL commit and rollback boundary."
          >
            <AtomicCompletionFlow />
          </DiagramShell>
        </section>

        <section className="mt-6 border border-line bg-surface/60 p-5 lg:p-7" aria-labelledby="recovery-title">
          <div className="mb-7 grid gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">04 / Recovery Model</p>
              <h2 id="recovery-title" className="font-display text-4xl font-semibold leading-tight text-ink">
                Failure becomes durable evidence, not guessed state.
              </h2>
            </div>
            <p className="m-0 leading-8 text-muted">
              Kafka may redeliver, a Provider may accept before an HTTP timeout, and settlement files may disagree with Core. LedgerOps records the evidence needed to replay, recover, or investigate without fabricating a result.
            </p>
          </div>

          <DiagramShell
            label="Figure 03"
            title="Failure and recovery paths"
            caption="Figure 03 — Repeated delivery, ambiguous Provider outcomes, and settlement mismatches converge through different evidence and ownership boundaries."
          >
            <RecoveryMap />
          </DiagramShell>
        </section>

        <section className="mt-12" aria-labelledby="contribution-title">
          <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">05 / Engineering Work</p>
              <h2 id="contribution-title" className="font-display text-4xl font-semibold leading-tight text-ink">
                From transactional core to financial operations.
              </h2>
            </div>
            <p className="m-0 leading-7 text-muted">
              The implementation grew in release-sized vertical slices, with domain, persistence, failure behavior, observability, tests, and documentation completed together.
            </p>
          </div>

          <ol className="grid gap-px border border-line bg-line p-0 md:grid-cols-2">
            {project.contribution.map((item, index) => (
              <li className="grid min-h-48 list-none content-start gap-5 bg-surface p-6" key={item}>
                <span className="font-mono text-xs font-extrabold text-copper">{String(index + 1).padStart(2, "0")}</span>
                <p className="m-0 leading-7 text-muted">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 grid gap-7 border border-line bg-green-soft p-6 md:p-8 lg:grid-cols-[minmax(250px,0.38fr)_minmax(0,0.62fr)]" aria-labelledby="tradeoff-title">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">06 / Engineering Judgment</p>
            <h2 id="tradeoff-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              Deliberate tradeoffs, not technology collection.
            </h2>
          </div>

          <div className="grid gap-0 border-t border-line-strong">
            {tradeoffs.map((tradeoff, index) => (
              <article className="grid gap-2 border-b border-line-strong py-5 sm:grid-cols-[32px_180px_1fr]" key={tradeoff.decision}>
                <span className="font-mono text-[11px] font-extrabold text-green">0{index + 1}</span>
                <strong className="text-ink">{tradeoff.decision}</strong>
                <p className="m-0 leading-7 text-muted">{tradeoff.reason}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-6 border border-line bg-surface/85 p-6 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1.52fr)]" aria-labelledby="stack-title">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Technical environment</p>
            <h2 id="stack-title" className="font-display text-3xl font-semibold leading-tight text-ink">
              Tools with defined responsibilities.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-6 border border-line bg-surface/85 p-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]" aria-labelledby="result-title">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">07 / Result</p>
            <h2 id="result-title" className="font-display text-4xl font-semibold leading-tight text-ink">
              Failures stay bounded, visible, and financially safe.
            </h2>
          </div>
          <div>
            <p className="m-0 text-lg leading-8 text-muted">
              LedgerOps demonstrates a complete chain of financial reasoning: accept a request once, evaluate Risk reproducibly, communicate across an unreliable boundary, record one accounting result, reconcile it against external evidence, and correct only through controlled compensation.
            </p>
            <a className="mt-6 inline-flex min-h-11 items-center gap-2 font-extrabold text-green" href={project.repoUrl} target="_blank" rel="noreferrer">
              Explore the implementation and decision records <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <ProjectNavigation previous={previous} next={next} />
      </article>

      <SiteFooter />
    </main>
  );
}
