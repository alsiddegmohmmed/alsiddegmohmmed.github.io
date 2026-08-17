const lanes = [
  { label: "PAYMENT STATE", accent: "border-green", steps: ["REQUESTED", "APPROVED", "PROCESSING", "COMPLETED"] },
  { label: "FINANCIAL RECORD", accent: "border-blueprint", steps: ["NO FINANCIAL EFFECT", "NO FINANCIAL EFFECT", "JOURNAL PENDING", "DEBIT = CREDIT"] },
  { label: "EXTERNAL EVIDENCE", accent: "border-copper", steps: ["—", "SUBMISSION", "PROVIDER RESULT", "SETTLEMENT RECORD"] }
] as const;

export function ThreeTruthsFigure() {
  return (
    <figure className="m-0 border border-line bg-surface/90 p-4 md:p-6" aria-labelledby="three-truths-title">
      <div className="grid gap-4 border-b border-line pb-5 md:grid-cols-[auto_1fr] md:items-end">
        <div>
          <p className="mb-2 font-mono text-[10px] font-extrabold uppercase tracking-[0.1em] text-green">FIG 01 / SYSTEM MODEL</p>
          <h2 id="three-truths-title" className="m-0 font-display text-[1.75rem] font-semibold leading-tight text-ink md:text-4xl">One payment. Three versions of truth.</h2>
        </div>
        <p className="m-0 max-w-2xl text-sm leading-6 text-muted md:justify-self-end">Processing state, financial state, and external evidence evolve independently. LedgerOps keeps them consistent without pretending they are the same thing.</p>
      </div>

      <div className="mt-5 grid gap-3" role="img" aria-label="A payment moving through requested, approved, processing, provider evidence, balanced journal, settlement, and reconciliation states">
        <div className="hidden grid-cols-[170px_repeat(4,minmax(0,1fr))] gap-2 px-3 font-mono text-[9px] font-extrabold uppercase tracking-[0.08em] text-muted md:grid">
          <span /><span>01 / Intake</span><span>02 / Decision</span><span>03 / Provider</span><span>04 / Financial truth</span>
        </div>
        {lanes.map((lane) => (
          <div className="grid gap-2 border border-line bg-bg/55 p-3 md:grid-cols-[170px_repeat(4,minmax(0,1fr))] md:items-stretch" key={lane.label}>
            <div className={`flex items-center border-l-4 ${lane.accent} px-3 py-2`}><span className="font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-ink">{lane.label}</span></div>
            {lane.steps.map((step, index) => (
              <div className="ledgerops-stage relative flex min-h-14 items-center border border-line bg-surface px-3 py-2" key={`${lane.label}-${index}`}>
                <span className="font-mono text-[10px] font-bold leading-4 text-muted">{step}</span>
                {index < lane.steps.length - 1 ? <span className="absolute -right-[9px] top-1/2 z-10 hidden -translate-y-1/2 bg-surface px-0.5 font-mono text-blueprint md:block" aria-hidden="true">→</span> : null}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-px border border-line bg-line md:grid-cols-3">
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Provider result</strong><br />becomes evidence before effect.</p>
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Payment completion</strong><br />shares a boundary with Ledger.</p>
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Settlement later</strong><br />confirms or disputes the history.</p>
      </div>
    </figure>
  );
}
