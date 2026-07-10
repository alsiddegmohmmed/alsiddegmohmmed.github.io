import { SvgArrowMarker, SvgLabel, SvgMiniLabel, SvgNode, type SvgNodeProps } from "./shared";

export function FuelCustodyOperatingMap() {
  return (
    <>
      <svg
        className="hidden h-auto w-full md:block"
        viewBox="0 0 1120 520"
        role="img"
        aria-labelledby="fuel-operating-map-title"
        aria-describedby="fuel-operating-map-desc"
      >
        <title id="fuel-operating-map-title">Fuel Custody Operating Map</title>
        <desc id="fuel-operating-map-desc">
          Representative operating map with field devices, edge control, event storage, reconciliation, alerts, reports,
          dashboards, and audit evidence.
        </desc>

        <defs>
          <SvgArrowMarker id="operating-data-arrow" />
          <SvgArrowMarker id="operating-audit-arrow" color="var(--copper)" />
          <pattern id="operating-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="rgba(13,27,30,0.045)" vectorEffect="non-scaling-stroke" />
          </pattern>
        </defs>

        <rect width="1120" height="520" fill="url(#operating-grid)" />

        <rect
          x="40"
          y="70"
          width="240"
          height="340"
          rx="4"
          fill="rgba(255,253,248,0.72)"
          stroke="var(--line)"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x="330"
          y="70"
          width="460"
          height="340"
          rx="4"
          fill="rgba(255,253,248,0.78)"
          stroke="var(--line)"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x="840"
          y="70"
          width="240"
          height="340"
          rx="4"
          fill="rgba(255,253,248,0.72)"
          stroke="var(--line)"
          vectorEffect="non-scaling-stroke"
        />

        <SvgLabel x={64} y={104}>FIELD LAYER</SvgLabel>
        <SvgLabel x={358} y={104}>CONTROL + EVENT LAYER</SvgLabel>
        <SvgLabel x={864} y={104}>GOVERNANCE LAYER</SvgLabel>

        <SvgNode x={72} y={136} width={180} height={44} title="Fuel Pumps" accent="green" />
        <SvgNode x={72} y={200} width={180} height={44} title="ATG Tanks" accent="green" />
        <SvgNode x={72} y={264} width={180} height={44} title="RFID / Plate" accent="blue" />
        <SvgNode x={72} y={328} width={180} height={44} title="Tanker Sensors" accent="blue" />

        <SvgNode x={368} y={132} width={176} height={50} title="Edge Controller" accent="green" />
        <SvgNode x={582} y={132} width={176} height={50} title="Offline Queue" accent="copper" />
        <SvgNode x={368} y={214} width={176} height={50} title="Authorization" accent="green" />
        <SvgNode x={582} y={214} width={176} height={50} title="Ingest + Normalize" accent="blue" />
        <SvgNode x={368} y={310} width={176} height={50} title="Fuel Event Store" accent="blue" />
        <SvgNode x={582} y={310} width={176} height={50} title="Audit Trail" accent="copper" />

        <SvgNode x={872} y={136} width={176} height={50} title="Reconciliation" accent="green" />
        <SvgNode x={872} y={214} width={176} height={50} title="Anomaly Alerts" accent="copper" />
        <SvgNode x={872} y={292} width={176} height={50} title="Reports" accent="copper" />
        <SvgNode x={872} y={356} width={176} height={50} title="Dashboard" accent="blue" />

        <path
          d="M252 158C296 158 316 158 368 157M252 222C298 222 318 226 368 239M252 286C298 286 318 266 368 239M252 350C298 350 318 334 368 335"
          fill="none"
          stroke="var(--blueprint)"
          strokeWidth="1.4"
          strokeDasharray="6 7"
          markerEnd="url(#operating-data-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M544 157H582M544 239H582M544 335H582M670 182V214M670 264V310"
          fill="none"
          stroke="var(--blueprint)"
          strokeWidth="1.6"
          markerEnd="url(#operating-data-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M758 239C810 239 820 162 872 162M758 335C810 335 820 239 872 239"
          fill="none"
          stroke="var(--blueprint)"
          strokeWidth="1.6"
          markerEnd="url(#operating-data-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M758 335C812 342 820 317 872 317M758 335C812 370 820 381 872 381"
          fill="none"
          stroke="var(--copper)"
          strokeWidth="1.4"
          strokeDasharray="5 7"
          markerEnd="url(#operating-audit-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        {[320, 560, 820].map((cx) => (
          <circle
            key={cx}
            className="motion-safe:animate-pulse motion-reduce:animate-none"
            cx={cx}
            cy="158"
            r="4"
            fill="var(--blueprint)"
          />
        ))}

        <circle
          className="motion-safe:animate-pulse motion-reduce:animate-none"
          cx="672"
          cy="335"
          r="5"
          fill="var(--copper)"
        />

        <g transform="translate(72 462)">
          <line x1="0" y1="0" x2="44" y2="0" stroke="var(--blueprint)" strokeDasharray="6 7" vectorEffect="non-scaling-stroke" />
          <SvgMiniLabel x={56} y={4}>Data / Events</SvgMiniLabel>

          <line x1="220" y1="0" x2="264" y2="0" stroke="var(--blueprint)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
          <SvgMiniLabel x={276} y={4}>Processed Flow</SvgMiniLabel>

          <line x1="450" y1="0" x2="494" y2="0" stroke="var(--copper)" strokeDasharray="5 7" vectorEffect="non-scaling-stroke" />
          <SvgMiniLabel x={506} y={4}>Audit / Evidence</SvgMiniLabel>
        </g>
      </svg>

      <svg
        className="block h-auto w-full md:hidden"
        viewBox="0 0 360 720"
        role="img"
        aria-labelledby="fuel-operating-map-mobile-title"
        aria-describedby="fuel-operating-map-mobile-desc"
      >
        <title id="fuel-operating-map-mobile-title">Fuel Custody Operating Map mobile view</title>
        <desc id="fuel-operating-map-mobile-desc">
          Stacked representative map showing field layer, control and event layer, and governance layer.
        </desc>

        <defs>
          <SvgArrowMarker id="operating-mobile-arrow" />
          <SvgArrowMarker id="operating-mobile-audit-arrow" color="var(--copper)" />
        </defs>

        <rect width="360" height="720" fill="transparent" />

        <rect x="16" y="24" width="328" height="164" rx="4" fill="rgba(255,253,248,0.72)" stroke="var(--line)" vectorEffect="non-scaling-stroke" />
        <SvgLabel x={32} y={54}>FIELD LAYER</SvgLabel>

        {["Fuel Pumps", "ATG Tanks", "RFID / Plate", "Tanker Sensors"].map((label, index) => (
          <SvgNode
            key={label}
            x={32 + (index % 2) * 152}
            y={78 + Math.floor(index / 2) * 58}
            width={136}
            height={42}
            title={label}
            accent={index < 2 ? "green" : "blue"}
          />
        ))}

        <path
          d="M180 188V222"
          stroke="var(--blueprint)"
          strokeWidth="1.6"
          strokeDasharray="6 7"
          markerEnd="url(#operating-mobile-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <rect x="16" y="222" width="328" height="284" rx="4" fill="rgba(255,253,248,0.78)" stroke="var(--line)" vectorEffect="non-scaling-stroke" />
        <SvgLabel x={32} y={252}>CONTROL + EVENT LAYER</SvgLabel>

        {[
          ["Edge Controller", "green"],
          ["Offline Queue", "copper"],
          ["Authorization", "green"],
          ["Ingest + Normalize", "blue"],
          ["Fuel Event Store", "blue"],
          ["Audit Trail", "copper"]
        ].map(([title, accent], index) => (
          <SvgNode
            key={title}
            x={32 + (index % 2) * 152}
            y={276 + Math.floor(index / 2) * 70}
            width={136}
            height={48}
            title={title}
            accent={accent as SvgNodeProps["accent"]}
          />
        ))}

        <circle className="motion-safe:animate-pulse motion-reduce:animate-none" cx="270" cy="463" r="5" fill="var(--copper)" />

        <path
          d="M180 506V540"
          stroke="var(--blueprint)"
          strokeWidth="1.6"
          markerEnd="url(#operating-mobile-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <rect x="16" y="540" width="328" height="156" rx="4" fill="rgba(255,253,248,0.72)" stroke="var(--line)" vectorEffect="non-scaling-stroke" />
        <SvgLabel x={32} y={570}>GOVERNANCE LAYER</SvgLabel>

        {["Reconciliation", "Anomaly Alerts", "Reports", "Dashboard"].map((label, index) => (
          <SvgNode
            key={label}
            x={32 + (index % 2) * 152}
            y={594 + Math.floor(index / 2) * 56}
            width={136}
            height={40}
            title={label}
            accent={index === 1 || index === 2 ? "copper" : "blue"}
          />
        ))}

        <path
          d="M270 492C316 520 318 620 304 620"
          fill="none"
          stroke="var(--copper)"
          strokeDasharray="5 7"
          markerEnd="url(#operating-mobile-audit-arrow)"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  );
}
