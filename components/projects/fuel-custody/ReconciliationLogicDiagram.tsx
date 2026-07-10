type ReconciliationRule = {
  index: string;
  title: string;
  scope: string;
  description: string;
  evidenceA: string;
  evidenceAMeta: string;
  evidenceB: string;
  evidenceBMeta: string;
  output: string;
  outputMeta: string;
  accent: "green" | "blue" | "copper";
};

const reconciliationRules: readonly ReconciliationRule[] = [
  {
    index: "01",
    title: "Delivery reconciliation",
    scope: "Tanker delivery vs station tank receiving",
    description:
      "Compares the delivery volume reported by the tanker against the actual increase recorded by the station tank system. If the difference is outside the allowed tolerance, the system surfaces it as an investigation item.",
    evidenceA: "Reported tanker delivery",
    evidenceAMeta: "Delivery volume from tanker record",
    evidenceB: "Actual tank increase",
    evidenceBMeta: "Tank-level change from ATG reading",
    output: "Variance alert / investigation record",
    outputMeta: "Used by operators to review delivery mismatch",
    accent: "copper"
  },
  {
    index: "02",
    title: "Station reconciliation",
    scope: "Pump dispensing vs tank movement",
    description:
      "Compares the volume dispensed by pumps against the expected decrease in tank level. This helps detect shrinkage, meter mismatch, leakage, manual reporting gaps, or suspicious station activity.",
    evidenceA: "Pump dispensed volume",
    evidenceAMeta: "Pump transaction / totalizer reading",
    evidenceB: "Tank level decrease",
    evidenceBMeta: "Expected tank movement from ATG",
    output: "Daily reconciliation report",
    outputMeta: "Used for station review and operational reporting",
    accent: "blue"
  },
  {
    index: "03",
    title: "Fleet authorization",
    scope: "Vehicle identity vs fueling policy",
    description:
      "Checks whether the vehicle identity and fueling transaction match the allowed fleet policy. This helps prevent unauthorized fueling, card misuse, and uncontrolled fleet consumption.",
    evidenceA: "Vehicle identity",
    evidenceAMeta: "RFID tag / license-plate recognition",
    evidenceB: "Fueling transaction",
    evidenceBMeta: "Pump event linked to vehicle",
    output: "Fleet fuel record / policy exception",
    outputMeta: "Used for fleet consumption and audit history",
    accent: "green"
  }
] as const;

function getAccentColor(accent: ReconciliationRule["accent"]) {
  if (accent === "copper") return "var(--copper)";
  if (accent === "blue") return "var(--blueprint)";
  return "var(--green)";
}

function EvidenceBox({
  label,
  meta,
  accentColor
}: {
  label: string;
  meta: string;
  accentColor: string;
}) {
  return (
    <div className="min-h-24 border border-line bg-surface p-4">
      <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: accentColor }}>
        Evidence source
      </p>
      <h4 className="mt-3 font-mono text-sm font-extrabold leading-5 text-ink">{label}</h4>
      <p className="mt-2 text-sm leading-6 text-muted">{meta}</p>
    </div>
  );
}

export function ReconciliationLogicDiagram() {
  return (
    <div className="grid gap-5">
      <div className="border border-line bg-surface/70 p-5">
        <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">
          Reconciliation model
        </p>
        <p className="mt-3 max-w-3xl leading-7 text-muted">
          The platform does not trust one source of truth. It compares independent records from field devices, tanks,
          pumps, vehicles, and delivery events. When those records do not match, the system produces an operational
          output for review, reporting, or audit.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3" aria-label="Reconciliation rule models">
        {reconciliationRules.map((rule) => {
          const accentColor = getAccentColor(rule.accent);

          return (
            <article className="relative overflow-hidden border border-line bg-surface/85 p-5" key={rule.title}>
              <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: accentColor }} />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: accentColor }}>
                    {rule.index} / Rule model
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">{rule.title}</h3>
                </div>

                <span className="border border-line bg-surface px-2 py-1 font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted">
                  Check
                </span>
              </div>

              <p className="mt-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-muted">
                {rule.scope}
              </p>

              <p className="mt-4 leading-7 text-muted">{rule.description}</p>

              <div className="mt-6 border-t border-line pt-5">
                <p className="mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">
                  Evidence compared
                </p>

                <div className="grid gap-3">
                  <EvidenceBox label={rule.evidenceA} meta={rule.evidenceAMeta} accentColor={accentColor} />

                  <div className="flex items-center gap-3 px-1 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-muted">
                    <span className="h-px flex-1 bg-line" />
                    Compared with
                    <span className="h-px flex-1 bg-line" />
                  </div>

                  <EvidenceBox label={rule.evidenceB} meta={rule.evidenceBMeta} accentColor={accentColor} />
                </div>
              </div>

              <div className="mt-5 border border-line bg-green-soft/60 p-4">
                <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: accentColor }}>
                  Output
                </p>
                <h4 className="mt-2 font-mono text-sm font-extrabold leading-5 text-ink">{rule.output}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{rule.outputMeta}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}