import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CloudOff,
  Database,
  Fuel,
  LockKeyhole,
  RadioTower,
  ShieldCheck,
  Workflow
} from "lucide-react";
import type { Project } from "@/app/data";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";

const confidentialityNote =
  "Selected details are generalized to protect confidential product and client information. Visuals are representative system diagrams, not production screenshots.";

type FuelCustodyCaseStudyProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-7 items-center gap-1 rounded-sm border border-line bg-surface px-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.04em] text-muted">
      {children}
    </span>
  );
}

function DiagramShell({
  label,
  title,
  caption,
  children
}: {
  label: string;
  title: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="overflow-hidden border border-line bg-surface/85 p-4">
      <figcaption className="mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">
        {label} — {title}
      </figcaption>
      <div className="overflow-x-auto">
        {children}
      </div>
      <p className="mt-3 border-t border-line pt-3 font-mono text-[11px] leading-5 text-muted">{caption}</p>
    </figure>
  );
}

function SvgText({ x, y, children, size = 13, weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; weight?: number }) {
  return (
    <text x={x} y={y} fill="var(--ink)" fontFamily="var(--font-mono)" fontSize={size} fontWeight={weight}>
      {children}
    </text>
  );
}

function nodeLines(lines: readonly string[], x: number, y: number) {
  return lines.map((line, index) => (
    <text key={line} x={x} y={y + index * 18} fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700">
      {line}
    </text>
  ));
}

function FuelSystemMap() {
  const nodes = [
    ["Field Devices", ["Pumps", "ATG Tanks", "RFID / Plate", "Tanker Sensors"]],
    ["Edge Control", ["Industrial controller", "Offline queue", "Local authorization"]],
    ["Ingestion Layer", ["Validate", "Normalize", "Tenant context"]],
    ["Fuel Event Store", ["Transactions", "Tank readings", "Vehicle events", "Audit trail"]],
    ["Reconciliation", ["Pump vs tank", "Delivery matching", "Policy checks"]],
    ["Operational Outputs", ["Alerts", "Reports", "Dashboard", "ERP integration"]]
  ] as const;

  return (
    <svg className="h-auto min-w-[920px] w-full motion-reduce:animate-none" viewBox="0 0 1120 420" role="img" aria-labelledby="fuel-system-title" aria-describedby="fuel-system-desc">
      <title id="fuel-system-title">Representative fuel custody system map</title>
      <desc id="fuel-system-desc">A left-to-right architecture map connecting field devices, edge control, ingestion, event storage, reconciliation, and operational outputs.</desc>
      <rect width="1120" height="420" fill="transparent" />
      <path d="M58 94H1062M58 210H1062M58 326H1062" stroke="rgba(13,27,30,0.07)" />
      {nodes.map(([title, labels], index) => {
        const x = 48 + index * 176;
        return (
          <g key={title}>
            <rect x={x} y="130" width="150" height="150" rx="4" fill="var(--surface)" stroke="var(--line-strong)" />
            <SvgText x={x + 14} y={158}>{title}</SvgText>
            {nodeLines(labels, x + 14, 188)}
            {index < nodes.length - 1 ? (
              <path d={`M${x + 150} 205H${x + 176}`} stroke="var(--blueprint)" strokeWidth="1.8" markerEnd="url(#fuel-arrow)" />
            ) : null}
          </g>
        );
      })}
      <defs>
        <marker id="fuel-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 10 5 0 10Z" fill="var(--blueprint)" />
        </marker>
      </defs>
      {["DATA IN", "RULES", "EVIDENCE", "OPERATORS"].map((label, index) => (
        <g key={label}>
          <circle className="motion-safe:animate-pulse motion-reduce:animate-none" cx={112 + index * 294} cy={78} r="4" fill={index === 2 ? "var(--copper)" : "var(--blueprint)"} />
          <SvgText x={126 + index * 294} y={83} size={11}>{label}</SvgText>
        </g>
      ))}
      <circle cx="758" cy="252" r="5" fill="var(--copper)" />
    </svg>
  );
}

function FuelLifecycleDiagram() {
  const steps = [
    ["Depot / Loading", "volume event"],
    ["Tanker Transport", "geo-tag"],
    ["Station Delivery", "tank delta"],
    ["Tank Increase", "tank delta"],
    ["Pump Dispensing", "pump transaction"],
    ["Vehicle Authorization", "RFID / plate"],
    ["Reconciliation", "audit record"]
  ] as const;

  return (
    <svg className="h-auto min-w-[880px] w-full" viewBox="0 0 1040 300" role="img" aria-labelledby="fuel-life-title" aria-describedby="fuel-life-desc">
      <title id="fuel-life-title">Fuel movement lifecycle</title>
      <desc id="fuel-life-desc">A domain flow from depot loading through transport, delivery, storage, dispensing, authorization, and reconciliation.</desc>
      <defs>
        <marker id="life-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 10 5 0 10Z" fill="var(--blueprint)" />
        </marker>
      </defs>
      <path d="M80 150H950" stroke="var(--blueprint)" strokeWidth="1.5" strokeDasharray="6 8" />
      {steps.map(([title, checkpoint], index) => {
        const x = 40 + index * 142;
        return (
          <g key={title}>
            <rect x={x} y="88" width="116" height="86" rx="4" fill="var(--surface)" stroke="var(--line-strong)" />
            <SvgText x={x + 12} y={118} size={12}>{title}</SvgText>
            <text x={x + 12} y="148" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">{checkpoint}</text>
            <circle className="motion-safe:animate-pulse motion-reduce:animate-none" cx={x + 58} cy="206" r="4" fill={index === steps.length - 1 ? "var(--copper)" : "var(--green)"} />
            {index < steps.length - 1 ? <path d={`M${x + 116} 130H${x + 140}`} stroke="var(--blueprint)" strokeWidth="1.5" markerEnd="url(#life-arrow)" /> : null}
          </g>
        );
      })}
    </svg>
  );
}

function ReconciliationRulesDiagram() {
  const lanes = [
    ["Delivery Reconciliation", ["Reported Delivery", "Actual Tank Increase", "Variance Detection", "Alert / Investigation"]],
    ["Station Reconciliation", ["Pump Dispensed", "Tank Level Decrease", "Shrinkage Check", "Daily Report"]],
    ["Fleet Authorization", ["Vehicle Identity", "Fueling Transaction", "Policy / Limit Check", "Fleet Record"]]
  ] as const;

  return (
    <svg className="h-auto min-w-[820px] w-full" viewBox="0 0 980 430" role="img" aria-labelledby="fuel-rules-title" aria-describedby="fuel-rules-desc">
      <title id="fuel-rules-title">Reconciliation rules engine</title>
      <desc id="fuel-rules-desc">Three reconciliation lanes compare delivery, station, and fleet authorization signals against independent records.</desc>
      <defs>
        <marker id="rules-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 10 5 0 10Z" fill="var(--blueprint)" />
        </marker>
      </defs>
      {lanes.map(([lane, boxes], laneIndex) => {
        const y = 42 + laneIndex * 126;
        return (
          <g key={lane}>
            <rect x="36" y={y} width="908" height="96" rx="4" fill="rgba(255,253,248,0.65)" stroke="var(--line)" />
            <SvgText x={58} y={y + 28} size={12}>{lane}</SvgText>
            {boxes.map((box, index) => {
              const x = 248 + index * 170;
              return (
                <g key={box}>
                  <rect x={x} y={y + 26} width="130" height="42" rx="3" fill="var(--surface)" stroke="var(--line-strong)" />
                  <SvgText x={x + 12} y={y + 52} size={10}>{box}</SvgText>
                  {index < boxes.length - 1 ? <path d={`M${x + 130} ${y + 47}H${x + 168}`} stroke="var(--blueprint)" strokeWidth="1.4" markerEnd="url(#rules-arrow)" /> : null}
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

function OfflineFirstDiagram() {
  return (
    <svg className="h-auto min-w-[760px] w-full" viewBox="0 0 900 420" role="img" aria-labelledby="fuel-offline-title" aria-describedby="fuel-offline-desc">
      <title id="fuel-offline-title">Offline-first authorization flow</title>
      <desc id="fuel-offline-desc">A fueling request branches based on connection availability, with cloud authorization or local policy checks and later audit sync.</desc>
      <defs>
        <marker id="offline-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 10 5 0 10Z" fill="var(--blueprint)" />
        </marker>
      </defs>
      <rect x="58" y="178" width="142" height="58" rx="4" fill="var(--surface)" stroke="var(--line-strong)" />
      <SvgText x={82} y={213}>Fueling Request</SvgText>
      <path d="M200 207H286" stroke="var(--blueprint)" strokeWidth="1.5" markerEnd="url(#offline-arrow)" />
      <path d="M360 146 432 207 360 268 288 207Z" fill="var(--green-soft)" stroke="var(--green)" />
      <SvgText x={326} y={203} size={11}>Connection</SvgText>
      <SvgText x={334} y={220} size={11}>available?</SvgText>
      <path d="M432 207H540" stroke="var(--blueprint)" strokeWidth="1.5" markerEnd="url(#offline-arrow)" />
      <text x="464" y="194" fill="var(--green)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="800">YES</text>
      {["Cloud authorization", "Write event", "Dashboard update"].map((label, index) => (
        <g key={label}>
          <rect x={548 + index * 112} y="178" width="96" height="58" rx="4" fill="var(--surface)" stroke="var(--line-strong)" />
          <SvgText x={558 + index * 112} y={211} size={10}>{label}</SvgText>
          {index < 2 ? <path d={`M${644 + index * 112} 207H${660 + index * 112}`} stroke="var(--blueprint)" strokeWidth="1.5" markerEnd="url(#offline-arrow)" /> : null}
        </g>
      ))}
      <path d="M360 268V318H462" stroke="var(--blueprint)" strokeWidth="1.5" markerEnd="url(#offline-arrow)" />
      <text x="374" y="302" fill="var(--copper)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="800">NO</text>
      {["Local policy check", "Queue event on edge", "Retry sync", "Merge into audit trail"].map((label, index) => (
        <g key={label}>
          <rect x={470 + index * 98} y="292" width="84" height="58" rx="4" fill="var(--surface)" stroke="var(--line-strong)" />
          <SvgText x={478 + index * 98} y={324} size={9}>{label}</SvgText>
          {index < 3 ? <path d={`M${554 + index * 98} 321H${568 + index * 98}`} stroke="var(--blueprint)" strokeWidth="1.4" markerEnd="url(#offline-arrow)" /> : null}
        </g>
      ))}
      <text x="92" y="330" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="12" fontWeight="800">No silent data loss</text>
      <text x="92" y="352" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="12" fontWeight="800">Audit continuity</text>
    </svg>
  );
}

const sections = [
  {
    label: "01 / Architecture",
    title: "System map",
    text: "The system connects station hardware, edge controllers, ingestion services, event storage, reconciliation rules, alerts, reports, and dashboards. The purpose is not only to display transactions, but to create an auditable chain of custody across fuel movement.",
    diagram: <FuelSystemMap />,
    caption: "Figure 01 — Representative system map for fuel custody, field ingestion, reconciliation, alerts, and audit visibility."
  },
  {
    label: "02 / Domain Flow",
    title: "Fuel movement lifecycle",
    text: "This view explains the domain flow: fuel is loaded, transported, delivered, stored, dispensed, authorized, and reconciled. The important point is that the system tracks fuel movement itself, not only the location of a truck or a manual station report.",
    diagram: <FuelLifecycleDiagram />,
    caption: "Figure 02 — Sanitized domain flow showing how fuel movement becomes auditable evidence."
  },
  {
    label: "03 / Rules Engine",
    title: "Reconciliation logic",
    text: "Reconciliation compares independent signals instead of trusting a single source. Delivery volume is compared against tank increase, pump dispensing is compared against tank decrease, and vehicle transactions are checked against authorization and policy limits.",
    diagram: <ReconciliationRulesDiagram />,
    caption: "Figure 03 — Representative reconciliation lanes for delivery, station, and fleet checks."
  },
  {
    label: "04 / Reliability",
    title: "Offline-first authorization",
    text: "Fuel operations cannot stop because internet connectivity is unstable. The edge layer should continue to authorize allowed transactions, queue events locally, and sync back into the central audit trail when the connection returns.",
    diagram: <OfflineFirstDiagram />,
    caption: "Figure 04 — Offline-first behavior for authorization, queueing, retry, and audit continuity."
  }
];

const evidenceCards = [
  ["Backend workflows", "API-connected flows for authorization, loyalty/wallet behavior, OTP authentication, RFID/license-plate integrations, event visibility, and reconciliation-related workflows."],
  ["Event visibility", "Fuel events are treated as auditable records: transaction context, device source, vehicle identity, station context, timestamps, and reconciliation status."],
  ["Offline-first reliability", "Edge-side buffering and local authorization thinking supports continued station operations during connectivity interruptions."],
  ["Operational dashboards", "Dashboard and reporting views translate raw field events into actionable exceptions, compliance records, and management visibility."],
  ["Governance and audit", "Representative workflows emphasize traceability, anomaly detection, compliance-ready logs, and defensible reporting."],
  ["System boundaries", "Separate field ingestion, backend rules, event storage, dashboards, and integration points so the platform can scale across stations and tenants."]
] as const;

export function FuelCustodyCaseStudy({ project, previous, next }: FuelCustodyCaseStudyProps) {
  return (
    <main className="overflow-hidden">
      <SiteNav />
      <article className="mx-auto w-[min(1180px,calc(100%_-_44px))] py-14">
        <Link className="mb-8 inline-flex items-center gap-2 font-extrabold text-green" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
        </Link>

        <header className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(460px,1.18fr)] lg:items-start">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">03 / Confidential System</p>
            <h1 className="font-display text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[0.94] text-ink">{project.title}</h1>
            <p className="my-6 text-lg leading-8 text-muted">
              A full-stack fuel governance platform for tracking, authorizing, reconciling, and auditing fuel movement across stations, tanks, pumps, vehicles, tanker deliveries, and field devices.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              <Tag><LockKeyhole size={13} aria-hidden="true" /> Confidential</Tag>
              <Tag>Petroleum Digital Operating System</Tag>
              <Tag>Multi-tenant SaaS</Tag>
              <Tag>Offline-first field operations</Tag>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
            </div>
          </div>
          <DiagramShell label="Figure 01" title="System map" caption="Figure 01 — Representative system map for fuel custody, field ingestion, reconciliation, alerts, and audit visibility.">
            <FuelSystemMap />
          </DiagramShell>
        </header>

        <aside className="my-7 grid grid-cols-[22px_1fr] items-start gap-3 border border-copper/40 bg-copper/10 p-4">
          <LockKeyhole className="text-copper" size={18} aria-hidden="true" />
          <p className="m-0 leading-7 text-muted">{confidentialityNote}</p>
        </aside>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ["What the product is", "An operational control platform for fuel stations, tanker deliveries, fleet fueling, authorization, reconciliation, and compliance reporting. The system connects field devices with backend workflows so raw fuel events become trusted operational evidence."],
            ["Why it matters", "Fuel operations lose money when pump transactions, tank readings, deliveries, vehicle authorization, and audit trails are disconnected. The platform closes those gaps by making every liter traceable, authorized, geo-tagged, reconciled, and reviewable."],
            ["My role", "Contributed as a software engineer across backend and frontend modules within a larger product team, supporting API-connected workflows, event visibility, reconciliation/reporting flows, authentication, and operational dashboard behavior."]
          ].map(([title, text]) => (
            <section className="border border-line bg-surface/85 p-6" key={title}>
              <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </section>
          ))}
        </section>

        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section className="grid gap-6 border border-line bg-surface/60 p-5 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)] lg:p-7" key={section.title}>
              <div>
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">{section.label}</p>
                <h2 className="font-display text-4xl font-semibold leading-tight text-ink">{section.title}</h2>
                <p className="mt-5 leading-8 text-muted">{section.text}</p>
              </div>
              <DiagramShell label={section.label} title={section.title} caption={section.caption}>
                {section.diagram}
              </DiagramShell>
            </section>
          ))}
        </div>

        <section className="mt-10" aria-labelledby="fuel-evidence-title">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Technical Evidence</p>
          <h2 id="fuel-evidence-title" className="font-display text-4xl font-semibold text-ink">System contribution areas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {evidenceCards.map(([title, text], index) => {
              const Icon = [Workflow, Database, CloudOff, RadioTower, ShieldCheck, Fuel][index] ?? Workflow;
              return (
                <article className="grid gap-3 border border-line bg-surface/85 p-5" key={title}>
                  <Icon className="text-green" size={20} aria-hidden="true" />
                  <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
                  <p className="leading-7 text-muted">{text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 border border-line bg-green-soft p-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]" aria-labelledby="stack-title">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Stack</p>
            <h2 id="stack-title" className="font-display text-3xl font-semibold leading-tight text-ink">Technical environment</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
          </div>
        </section>

        <section className="mt-10 border border-line bg-surface/85 p-6">
          <h2 className="font-display text-4xl font-semibold text-ink">What this project demonstrates</h2>
          <p className="mt-5 max-w-4xl leading-8 text-muted">
            This project demonstrates the kind of engineering I want the portfolio to communicate: operational software where reliability, traceability, authorization, and domain rules matter as much as the interface. The value is not a screen alone; it is the system’s ability to turn field activity into trusted operational evidence.
          </p>
        </section>

        <nav className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Adjacent project case studies">
          {previous ? (
            <Link className="grid min-h-24 content-center gap-1 border border-line bg-surface p-5" href={`/projects/${previous.slug}`}>
              <ArrowLeft size={16} aria-hidden="true" />
              <span className="font-mono text-[11px] font-extrabold uppercase text-muted">Previous</span>
              <strong className="text-ink">{previous.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link className="grid min-h-24 justify-items-end content-center gap-1 border border-line bg-surface p-5 text-right" href={`/projects/${next.slug}`}>
              <span className="font-mono text-[11px] font-extrabold uppercase text-muted">Next</span>
              <strong className="text-ink">{next.title}</strong>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : <span />}
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
