import { SvgArrowMarker, SvgMiniLabel } from "./shared";

export function FuelMovementLifecycle() {
  const steps = [
    {
      title: "Depot Loading",
      meta: "volume event",
      index: "01",
      accent: "green"
    },
    {
      title: "Tanker Transport",
      meta: "geo-tagged route",
      index: "02",
      accent: "blue"
    },
    {
      title: "Station Delivery",
      meta: "delivery event",
      index: "03",
      accent: "blue"
    },
    {
      title: "Tank Increase",
      meta: "ATG tank delta",
      index: "04",
      accent: "green"
    },
    {
      title: "Pump Dispensing",
      meta: "pump transaction",
      index: "05",
      accent: "green"
    },
    {
      title: "Vehicle Auth.",
      meta: "RFID / plate",
      index: "06",
      accent: "blue"
    },
    {
      title: "Reconciliation",
      meta: "audit record",
      index: "07",
      accent: "copper"
    }
  ] as const;

  const accentColor = (accent: "green" | "blue" | "copper") => {
    if (accent === "copper") return "var(--copper)";
    if (accent === "blue") return "var(--blueprint)";
    return "var(--green)";
  };

  return (
    <>
      <svg
        className="hidden h-auto w-full md:block"
        viewBox="0 0 980 300"
        role="img"
        aria-labelledby="fuel-lifecycle-title"
        aria-describedby="fuel-lifecycle-desc"
      >
        <title id="fuel-lifecycle-title">Fuel movement lifecycle</title>
        <desc id="fuel-lifecycle-desc">
          Horizontal fuel custody lifecycle showing depot loading, tanker transport, station delivery, tank increase, pump dispensing,
          vehicle authorization, and reconciliation as auditable events.
        </desc>

        <defs>
          <SvgArrowMarker id="lifecycle-arrow" />
          <SvgArrowMarker id="lifecycle-audit-arrow" color="var(--copper)" />
          <pattern id="lifecycle-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="rgba(13,27,30,0.04)" vectorEffect="non-scaling-stroke" />
          </pattern>
        </defs>

        <rect width="980" height="300" fill="url(#lifecycle-grid)" />

        <SvgMiniLabel x={34} y={36} color="var(--green)">
          Every liter becomes an auditable custody event
        </SvgMiniLabel>

        <line
          x1="68"
          y1="154"
          x2="912"
          y2="154"
          stroke="var(--line-strong)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M86 154H892"
          stroke="var(--blueprint)"
          strokeWidth="1.6"
          strokeDasharray="1 10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {steps.map((step, index) => {
          const x = 36 + index * 132;
          const isFinal = index === steps.length - 1;
          const color = accentColor(step.accent);
          const arrowId = isFinal ? "lifecycle-audit-arrow" : "lifecycle-arrow";

          return (
            <g key={step.title}>
              <circle cx={x + 58} cy="154" r="6" fill={color} />
              <circle
                className={index === 2 || isFinal ? "motion-safe:animate-pulse motion-reduce:animate-none" : ""}
                cx={x + 58}
                cy="154"
                r="11"
                fill="none"
                stroke={color}
                strokeOpacity="0.35"
                vectorEffect="non-scaling-stroke"
              />

              <rect
                x={x}
                y="82"
                width="116"
                height="58"
                rx="4"
                fill="var(--surface)"
                stroke={isFinal ? "var(--copper)" : "var(--line-strong)"}
                vectorEffect="non-scaling-stroke"
              />
              <rect x={x} y="82" width="116" height="18" rx="4" fill="rgba(255,253,248,0.96)" />
              <text
                x={x + 10}
                y="96"
                fill={color}
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                {step.index}
              </text>
              <text
                x={x + 10}
                y="118"
                fill="var(--ink)"
                fontFamily="var(--font-mono)"
                fontSize="10.5"
                fontWeight="900"
              >
                {step.title}
              </text>
              <text
                x={x + 10}
                y="134"
                fill="var(--muted)"
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                fontWeight="700"
              >
                {step.meta}
              </text>

              <line
                x1={x + 58}
                y1="140"
                x2={x + 58}
                y2="154"
                stroke="var(--line-strong)"
                vectorEffect="non-scaling-stroke"
              />

              {index < steps.length - 1 ? (
                <path
                  d={`M${x + 116} 111C${x + 130} 111 ${x + 132} 154 ${x + 154} 154`}
                  fill="none"
                  stroke={isFinal ? "var(--copper)" : "var(--blueprint)"}
                  strokeWidth="1.2"
                  markerEnd={`url(#${arrowId})`}
                  vectorEffect="non-scaling-stroke"
                />
              ) : null}

              <text
                x={x + 58}
                y="198"
                textAnchor="middle"
                fill="var(--muted)"
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                fontWeight="700"
              >
                {isFinal ? "verified" : "captured"}
              </text>
            </g>
          );
        })}

        <g transform="translate(72 238)">
          <rect x="0" y="0" width="836" height="34" rx="4" fill="rgba(255,253,248,0.72)" stroke="var(--line)" />
          <circle cx="22" cy="17" r="4" fill="var(--green)" />
          <SvgMiniLabel x={36} y={21}>Operational event</SvgMiniLabel>

          <circle cx="214" cy="17" r="4" fill="var(--blueprint)" />
          <SvgMiniLabel x={228} y={21}>Field / identity signal</SvgMiniLabel>

          <circle cx="448" cy="17" r="4" fill="var(--copper)" />
          <SvgMiniLabel x={462} y={21}>Audit evidence</SvgMiniLabel>

          <line x1="650" y1="17" x2="690" y2="17" stroke="var(--blueprint)" strokeDasharray="1 8" strokeLinecap="round" />
          <SvgMiniLabel x={706} y={21}>Custody chain</SvgMiniLabel>
        </g>
      </svg>

      <svg
        className="block h-auto w-full md:hidden"
        viewBox="0 0 360 650"
        role="img"
        aria-labelledby="fuel-lifecycle-mobile-title"
        aria-describedby="fuel-lifecycle-mobile-desc"
      >
        <title id="fuel-lifecycle-mobile-title">Fuel movement lifecycle mobile view</title>
        <desc id="fuel-lifecycle-mobile-desc">
          Vertical lifecycle showing how fuel movement becomes auditable evidence.
        </desc>

        <defs>
          <SvgArrowMarker id="lifecycle-mobile-arrow" />
          <SvgArrowMarker id="lifecycle-mobile-audit-arrow" color="var(--copper)" />
        </defs>

        <SvgMiniLabel x={26} y={30} color="var(--green)">
          Every liter becomes an auditable event
        </SvgMiniLabel>

        <line
          x1="42"
          y1="72"
          x2="42"
          y2="590"
          stroke="var(--line-strong)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {steps.map((step, index) => {
          const y = 56 + index * 78;
          const isFinal = index === steps.length - 1;
          const color = accentColor(step.accent);
          const markerId = isFinal ? "lifecycle-mobile-audit-arrow" : "lifecycle-mobile-arrow";

          return (
            <g key={step.title}>
              <circle cx="42" cy={y + 28} r="6" fill={color} />
              <circle
                className={index === 2 || isFinal ? "motion-safe:animate-pulse motion-reduce:animate-none" : ""}
                cx="42"
                cy={y + 28}
                r="11"
                fill="none"
                stroke={color}
                strokeOpacity="0.35"
                vectorEffect="non-scaling-stroke"
              />

              <rect
                x="72"
                y={y}
                width="250"
                height="58"
                rx="4"
                fill="var(--surface)"
                stroke={isFinal ? "var(--copper)" : "var(--line-strong)"}
                vectorEffect="non-scaling-stroke"
              />
              <text
                x="88"
                y={y + 18}
                fill={color}
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                {step.index}
              </text>
              <text
                x="88"
                y={y + 37}
                fill="var(--ink)"
                fontFamily="var(--font-mono)"
                fontSize="12"
                fontWeight="900"
              >
                {step.title}
              </text>
              <text
                x="222"
                y={y + 37}
                fill="var(--muted)"
                fontFamily="var(--font-mono)"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
              >
                {step.meta}
              </text>

              <path
                d={`M42 ${y + 39}V${y + 78}`}
                stroke={isFinal ? "var(--copper)" : "var(--blueprint)"}
                strokeWidth="1.4"
                strokeDasharray="1 7"
                strokeLinecap="round"
                markerEnd={index < steps.length - 1 ? `url(#${markerId})` : undefined}
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}

        <g transform="translate(72 608)">
          <circle cx="0" cy="0" r="4" fill="var(--green)" />
          <SvgMiniLabel x={12} y={4}>event</SvgMiniLabel>

          <circle cx="82" cy="0" r="4" fill="var(--blueprint)" />
          <SvgMiniLabel x={94} y={4}>signal</SvgMiniLabel>

          <circle cx="172" cy="0" r="4" fill="var(--copper)" />
          <SvgMiniLabel x={184} y={4}>audit</SvgMiniLabel>
        </g>
      </svg>
    </>
  );
}