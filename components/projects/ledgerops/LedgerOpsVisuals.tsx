function FlowNode({ label, detail, tone = "default" }: { label: string; detail?: string; tone?: "default" | "good" | "evidence" | "ambiguous" }) {
  const toneClass = tone === "good" ? "border-green" : tone === "evidence" ? "border-copper" : tone === "ambiguous" ? "border-copper bg-copper/10" : "border-line";
  return <div className={`grid min-h-20 content-center border-l-4 border-y border-r bg-surface px-4 py-3 ${toneClass}`}><strong className="font-mono text-[11px] leading-5 text-ink">{label}</strong>{detail ? <span className="mt-1 text-xs leading-5 text-muted">{detail}</span> : null}</div>;
}

function Arrow({ label, dashed = false }: { label?: string; dashed?: boolean }) {
  return <div className="grid min-h-8 place-items-center text-center font-mono text-[9px] font-bold uppercase text-blueprint"><span className="mb-1 text-muted">{label}</span><span className={dashed ? "opacity-60" : ""} aria-hidden="true"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span></div>;
}

export function PaymentSequence() {
  const nodes = [["CLIENT", "Create Payment"], ["PAYMENT", "approve · attempt · PROCESSING"], ["MESSAGING", "durable provider command"], ["PROVIDER", "persist signed evidence"], ["LEDGER", "post balanced Journal"], ["COMPLETED", "one shared commit"]] as const;
  return (
    <div>
      <div className="grid gap-2 md:grid-cols-[1fr_36px_1.25fr_36px_1.2fr_36px_1.2fr_36px_1.2fr_36px_1fr] md:items-stretch" role="img" aria-label="Client creates a Payment, Payment records durable intent, Provider persists evidence, and successful completion posts a balanced Ledger journal in one boundary">
        {nodes.map(([label, detail], index) => <div className="contents" key={label}><FlowNode label={label} detail={detail} tone={index === 3 ? "evidence" : index >= 4 ? "good" : "default"} />{index < nodes.length - 1 ? <Arrow dashed={index === 1 || index === 2} /> : null}</div>)}
      </div>
      <div className="mt-4 grid gap-px border border-line bg-line md:grid-cols-3">
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">The external call</strong><br />does not happen inside the Payment database transaction.</p>
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Provider responses</strong><br />become immutable evidence before affecting Payment state.</p>
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Successful completion</strong><br />and the financial posting share one boundary.</p>
      </div>
    </div>
  );
}

export function JournalFigure() {
  return (
    <div className="mx-auto max-w-3xl border border-line bg-surface p-5 md:p-7" role="img" aria-label="A balanced 500 Saudi riyal double-entry journal for Payment P-1048">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4"><div><span className="font-mono text-[10px] font-extrabold text-green">PAYMENT P-1048</span><h3 className="mb-0 mt-2 font-display text-3xl font-semibold text-ink">SAR 500.00</h3></div><span className="border border-green bg-green-soft px-3 py-2 font-mono text-[10px] font-extrabold text-green">BALANCED</span></div>
      <div className="mt-4 grid grid-cols-[1fr_auto_auto] gap-x-5 gap-y-4 text-sm"><strong>Account</strong><strong className="text-right">Debit</strong><strong className="text-right">Credit</strong><span>Provider clearing</span><span className="text-right">SAR 500.00</span><span className="text-right text-muted">—</span><span>Merchant payable</span><span className="text-right text-muted">—</span><span className="text-right">SAR 500.00</span></div>
      <div className="mt-5 grid grid-cols-[1fr_auto] gap-2 border-t border-line pt-4 font-mono text-[11px]"><span>Total debits</span><strong>SAR 500.00</strong><span>Total credits</span><strong>SAR 500.00</strong><span>Difference</span><strong className="text-green">SAR 0.00</strong></div>
    </div>
  );
}

export function ReconciliationFigure() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_70px_1.1fr_70px_1fr] lg:items-center" role="img" aria-label="Internal Payment, Provider, and Ledger facts are compared with an immutable normalized settlement file to produce a match or discrepancy Case">
      <div><p className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-green">INTERNAL FACTS</p><div className="grid gap-2"><FlowNode label="PAYMENT P-1048" detail="COMPLETED" tone="good" /><FlowNode label="PROVIDER" detail="provider_ref_7821 · SUCCESS" tone="evidence" /><FlowNode label="LEDGER" detail="Journal J-4492 · SAR 500.00" /></div></div>
      <Arrow label="compare" />
      <div className="border border-copper bg-surface p-5"><p className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-copper">EXTERNAL SETTLEMENT</p><div className="mt-4 border border-dashed border-line-strong bg-bg p-4 font-mono text-[11px] leading-6 text-ink">settlement_2026_08_12.csv<br />provider_ref_7821<br />SAR 500.00 · SETTLED</div><div className="mt-3 grid gap-2 text-center font-mono text-[9px] font-bold text-muted"><span>RAW FILE ↓ IMMUTABLE STORAGE</span><span>VALIDATION ↓ NORMALIZATION</span></div></div>
      <Arrow label="run" />
      <div><FlowNode label="RECONCILIATION RUN" detail="immutable, versioned result" /><div className="mt-2 grid gap-2"><FlowNode label="MATCHED" detail="settlement posting" tone="good" /><FlowNode label="DISCREPANCY" detail="Case → investigation" tone="ambiguous" /></div></div>
    </div>
  );
}

function Posting({ title, reference, rows, tone = "default" }: { title: string; reference: string; rows: readonly (readonly [string, string, string])[]; tone?: "default" | "correction" }) {
  return <div className={`border bg-surface p-5 ${tone === "correction" ? "border-blueprint" : "border-line"}`}><div className="flex justify-between gap-3 border-b border-line pb-3"><div><p className="m-0 font-mono text-[10px] font-extrabold text-green">{title}</p><strong className="mt-1 block text-ink">{reference}</strong></div><span className="font-mono text-[9px] font-extrabold text-muted">POSTED / LOCKED</span></div><div className="mt-4 grid grid-cols-[1fr_auto_auto] gap-3 text-xs"><strong>Account</strong><strong>Debit</strong><strong>Credit</strong>{rows.map(([account, debit, credit]) => <div className="contents" key={account}><span>{account}</span><span>{debit}</span><span>{credit}</span></div>)}</div></div>;
}

export function CorrectionFigure() {
  const original = [["Provider clearing", "500", "—"], ["Merchant payable", "—", "500"]] as const;
  const correction = [["Merchant payable", "500", "—"], ["Provider clearing", "—", "500"]] as const;
  return <div role="img" aria-label="Original Journal J-4492 remains posted while authorized Correction C-091 creates an inverse balanced journal"><Posting title="ORIGINAL POSTING" reference="Journal J-4492 · Payment P-1048" rows={original} /><div className="grid min-h-24 place-items-center border-x border-line text-center font-mono text-[10px] font-extrabold leading-6 text-copper">SETTLEMENT DISCREPANCY<br />↓ CASE INVESTIGATION ↓<br />AUTHORISED CORRECTION</div><Posting title="AUTHORISED CORRECTION" reference="Correction C-091 compensates J-4492" rows={correction} tone="correction" /></div>;
}

export function ArchitectureFigure() {
  const domains = [
    {
      label: "PAYMENT",
      detail: "transaction lifecycle",
      items: ["Tenancy", "Merchant", "Risk", "Attempts"]
    },
    {
      label: "PROVIDER",
      detail: "external processing",
      items: ["Messaging", "Integration", "Evidence", "Recovery"]
    },
    {
      label: "FINANCIAL OPS",
      detail: "after the payment",
      items: ["Settlement", "Reconciliation", "Casework", "Audit"]
    }
  ] as const;

  const infrastructure = [
    ["POSTGRESQL", "transactional records"],
    ["KAFKA", "durable messages"],
    ["MINIO", "settlement files"],
    ["KEYCLOAK · REDIS", "identity · sessions"],
    ["OBSERVABILITY", "traces · metrics · dashboards"],
    ["PROVIDER SIMULATOR", "external boundary"]
  ] as const;

  return (
    <div
      className="mx-auto grid max-w-4xl justify-items-center"
      role="img"
      aria-label="The Operations Web connects to three LedgerOps Core domains for Payment, Provider, and Financial Operations. Those domains post to an immutable Ledger and use PostgreSQL, Kafka, MinIO, Keycloak, Redis, observability, and a Provider Simulator."
    >
      <div className="w-full max-w-xs border-l-4 border-green border-y border-r border-line bg-surface px-5 py-4 text-center">
        <strong className="font-mono text-[11px] text-ink">OPERATIONS WEB</strong>
        <span className="mt-1 block text-xs text-muted">Next.js · React · tenant-scoped workflows</span>
      </div>

      <div className="grid h-16 place-items-center text-center">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-muted">Identity / BFF</span>
        <span className="h-7 border-l border-blueprint" aria-hidden="true" />
        <span className="-mt-2 text-blueprint" aria-hidden="true">▼</span>
      </div>

      <div className="w-full border border-line-strong bg-bg p-4 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
          <strong className="font-mono text-[11px] text-green">LEDGEROPS CORE</strong>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-muted">Spring Modulith</span>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {domains.map((domain, index) => (
            <section className="border border-line bg-surface p-4" key={domain.label}>
              <div className="flex items-start justify-between gap-3 border-b border-line pb-3">
                <div>
                  <strong className="block font-mono text-[10px] text-ink">{domain.label}</strong>
                  <span className="mt-1 block text-[11px] text-muted">{domain.detail}</span>
                </div>
                <span className="font-mono text-[9px] font-extrabold text-copper">0{index + 1}</span>
              </div>
              <ul className="mb-0 mt-3 grid grid-cols-2 gap-px bg-line p-0">
                {domain.items.map((item) => (
                  <li className="list-none bg-bg px-2 py-2 text-center font-mono text-[9px] font-bold text-muted" key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mx-auto grid h-12 w-px bg-line-strong" aria-hidden="true">
          <span className="self-end text-blueprint">▼</span>
        </div>

        <div className="mx-auto max-w-xl border-l-4 border-green border-y border-r border-line-strong bg-green-soft px-5 py-4 text-center">
          <strong className="font-mono text-[11px] text-ink">IMMUTABLE LEDGER</strong>
          <span className="mt-1 block text-xs text-muted">balanced Journals · append-only Corrections · financial truth</span>
        </div>
      </div>

      <div className="grid h-14 place-items-center" aria-hidden="true">
        <span className="h-8 border-l border-blueprint" />
        <span className="-mt-2 text-blueprint">▼</span>
      </div>

      <div className="w-full max-w-3xl">
        <p className="mb-3 text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.08em] text-muted">Platform and external boundaries</p>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {infrastructure.map(([label, detail]) => (
            <div className="border border-line bg-surface px-3 py-3 text-center" key={label}>
              <strong className="block font-mono text-[9px] text-ink">{label}</strong>
              <span className="mt-1 block text-[11px] text-muted">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mb-0 mt-5 max-w-3xl border-l-4 border-blueprint bg-blueprint/5 p-4 text-sm leading-6 text-muted">
        Each domain owns its data and publishes interfaces or durable events. The Ledger remains the shared financial truth without allowing modules to query one another&apos;s tables directly.
      </p>
    </div>
  );
}
