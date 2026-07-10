import { SvgArrowMarker, SvgMiniLabel } from "./shared";

type NodeAccent = "blue" | "green" | "copper";

function accentColor(accent: NodeAccent) {
  if (accent === "copper") return "var(--copper)";
  if (accent === "green") return "var(--green)";
  return "var(--blueprint)";
}

function FlowNode({
  x,
  y,
  width,
  height,
  title,
  meta,
  accent = "blue"
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  meta?: string;
  accent?: NodeAccent;
}) {
  const color = accentColor(accent);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill="var(--surface)"
        stroke="var(--line-strong)"
        vectorEffect="non-scaling-stroke"
      />
      <rect x={x} y={y} width="4" height={height} fill={color} />
      <text
        x={x + 16}
        y={y + 25}
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="11.5"
        fontWeight="900"
      >
        {title}
      </text>
      {meta ? (
        <text
          x={x + 16}
          y={y + 45}
          fill="var(--muted)"
          fontFamily="var(--font-mono)"
          fontSize="9.5"
          fontWeight="700"
        >
          {meta}
        </text>
      ) : null}
    </g>
  );
}

export function OfflineFirstAuthorizationDiagram() {
  return (
    <>
      <svg
        className="hidden h-auto w-full md:block"
        viewBox="0 0 900 500"
        role="img"
        aria-labelledby="fuel-offline-title"
        aria-describedby="fuel-offline-desc"
      >
        <title id="fuel-offline-title">Offline-first authorization</title>
        <desc id="fuel-offline-desc">
          Decision tree for fueling authorization when connectivity is available or unavailable, preserving audit continuity.
        </desc>

        <defs>
          <SvgArrowMarker id="offline-blue-arrow" />
          <SvgArrowMarker id="offline-copper-arrow" color="var(--copper)" />
          <pattern id="offline-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M28 0H0V28"
              fill="none"
              stroke="rgba(13,27,30,0.04)"
              vectorEffect="non-scaling-stroke"
            />
          </pattern>
        </defs>

        <rect width="900" height="500" fill="url(#offline-grid)" />

        <SvgMiniLabel x={34} y={36} color="var(--green)">
          Edge authorization keeps station operations running during connectivity loss.
        </SvgMiniLabel>

        <FlowNode
          x={335}
          y={58}
          width={230}
          height={58}
          title="Fueling Request"
          meta="vehicle + pump + station"
          accent="blue"
        />

        <path
          d="M450 116V142"
          stroke="var(--blueprint)"
          strokeWidth="1.5"
          markerEnd="url(#offline-blue-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M450 138L552 210L450 282L348 210Z"
          fill="var(--green-soft)"
          stroke="var(--green)"
          vectorEffect="non-scaling-stroke"
        />

        <text
          x="450"
          y="204"
          fill="var(--ink)"
          fontFamily="var(--font-mono)"
          fontSize="12"
          fontWeight="900"
          textAnchor="middle"
        >
          Connection
        </text>
        <text
          x="450"
          y="224"
          fill="var(--ink)"
          fontFamily="var(--font-mono)"
          fontSize="12"
          fontWeight="900"
          textAnchor="middle"
        >
          available?
        </text>

        <text
          x="582"
          y="190"
          fill="var(--blueprint)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="900"
          letterSpacing="0.08em"
        >
          YES
        </text>

        <path
          d="M552 210C586 210 584 138 620 138"
          fill="none"
          stroke="var(--blueprint)"
          strokeWidth="1.5"
          markerEnd="url(#offline-blue-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={620}
          y={108}
          width={210}
          height={58}
          title="Cloud Authorization"
          meta="central validation"
          accent="blue"
        />

        <path
          d="M725 166V188"
          stroke="var(--blueprint)"
          strokeWidth="1.4"
          markerEnd="url(#offline-blue-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={620}
          y={190}
          width={210}
          height={58}
          title="Write Event"
          meta="central event log"
          accent="blue"
        />

        <path
          d="M725 248V270"
          stroke="var(--blueprint)"
          strokeWidth="1.4"
          markerEnd="url(#offline-blue-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={620}
          y={272}
          width={210}
          height={58}
          title="Dashboard Update"
          meta="operator visibility"
          accent="blue"
        />

        <text
          x="420"
          y="314"
          fill="var(--copper)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="900"
          letterSpacing="0.08em"
        >
          NO
        </text>

        <path
          d="M450 282V314H150V338"
          fill="none"
          stroke="var(--copper)"
          strokeWidth="1.5"
          markerEnd="url(#offline-copper-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={60}
          y={340}
          width={180}
          height={56}
          title="Local Policy Check"
          meta="edge rules"
          accent="green"
        />

        <path
          d="M240 368H258"
          stroke="var(--copper)"
          strokeWidth="1.4"
          markerEnd="url(#offline-copper-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={260}
          y={340}
          width={180}
          height={56}
          title="Queue Edge Event"
          meta="store locally"
          accent="green"
        />

        <path
          d="M440 368H458"
          stroke="var(--copper)"
          strokeWidth="1.4"
          markerEnd="url(#offline-copper-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={460}
          y={340}
          width={180}
          height={56}
          title="Retry Sync"
          meta="when online"
          accent="green"
        />

        <path
          d="M640 368H658"
          stroke="var(--copper)"
          strokeWidth="1.4"
          markerEnd="url(#offline-copper-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <FlowNode
          x={660}
          y={340}
          width={180}
          height={56}
          title="Merge Audit Trail"
          meta="central evidence"
          accent="copper"
        />

        <g transform="translate(92 448)">
          <rect
            x="0"
            y="0"
            width="716"
            height="32"
            rx="4"
            fill="rgba(255,253,248,0.72)"
            stroke="var(--line)"
            vectorEffect="non-scaling-stroke"
          />

          <circle cx="22" cy="16" r="4" fill="var(--green)" />
          <SvgMiniLabel x={36} y={20}>Local authorization</SvgMiniLabel>

          <circle cx="244" cy="16" r="4" fill="var(--copper)" />
          <SvgMiniLabel x={258} y={20}>Queued audit evidence</SvgMiniLabel>

          <circle cx="500" cy="16" r="4" fill="var(--blueprint)" />
          <SvgMiniLabel x={514} y={20}>Cloud-confirmed flow</SvgMiniLabel>
        </g>
      </svg>

      <svg
        className="block h-auto w-full md:hidden"
        viewBox="0 0 360 760"
        role="img"
        aria-labelledby="fuel-offline-mobile-title"
        aria-describedby="fuel-offline-mobile-desc"
      >
        <title id="fuel-offline-mobile-title">Offline-first authorization mobile view</title>
        <desc id="fuel-offline-mobile-desc">
          Stacked decision flow for online cloud authorization and offline local policy checks.
        </desc>

        <defs>
          <SvgArrowMarker id="offline-mobile-blue-arrow" />
          <SvgArrowMarker id="offline-mobile-copper-arrow" color="var(--copper)" />
        </defs>

        <SvgMiniLabel x={24} y={30} color="var(--green)">
          Offline-first authorization flow
        </SvgMiniLabel>

        <FlowNode
          x={62}
          y={56}
          width={236}
          height={54}
          title="Fueling Request"
          meta="vehicle + pump + station"
          accent="blue"
        />

        <path
          d="M180 110V138"
          stroke="var(--blueprint)"
          strokeWidth="1.5"
          markerEnd="url(#offline-mobile-blue-arrow)"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M180 136L268 198L180 260L92 198Z"
          fill="var(--green-soft)"
          stroke="var(--green)"
          vectorEffect="non-scaling-stroke"
        />

        <text
          x="180"
          y="194"
          fill="var(--ink)"
          fontFamily="var(--font-mono)"
          fontSize="12"
          fontWeight="900"
          textAnchor="middle"
        >
          Connection
        </text>
        <text
          x="180"
          y="214"
          fill="var(--ink)"
          fontFamily="var(--font-mono)"
          fontSize="12"
          fontWeight="900"
          textAnchor="middle"
        >
          available?
        </text>

        <SvgMiniLabel x={36} y={292} color="var(--blueprint)">
          YES / Online path
        </SvgMiniLabel>

        {[
          ["Cloud Authorization", "central validation"],
          ["Write Event", "central event log"],
          ["Dashboard Update", "operator visibility"]
        ].map(([title, meta], index) => {
          const y = 312 + index * 66;

          return (
            <g key={title}>
              <FlowNode x={52} y={y} width={256} height={48} title={title} meta={meta} accent="blue" />
              {index < 2 ? (
                <path
                  d={`M180 ${y + 48}V${y + 66}`}
                  stroke="var(--blueprint)"
                  strokeWidth="1.3"
                  markerEnd="url(#offline-mobile-blue-arrow)"
                  vectorEffect="non-scaling-stroke"
                />
              ) : null}
            </g>
          );
        })}

        <SvgMiniLabel x={36} y={528} color="var(--copper)">
          NO / Offline path
        </SvgMiniLabel>

        {[
          ["Local Policy Check", "edge rules", "green"],
          ["Queue Edge Event", "store locally", "green"],
          ["Retry Sync", "when online", "green"],
          ["Merge Audit Trail", "central evidence", "copper"]
        ].map(([title, meta, accent], index) => {
          const y = 548 + index * 48;

          return (
            <g key={title}>
              <FlowNode
                x={52}
                y={y}
                width={256}
                height={36}
                title={title}
                meta={meta}
                accent={accent as NodeAccent}
              />
              {index < 3 ? (
                <path
                  d={`M180 ${y + 36}V${y + 48}`}
                  stroke="var(--copper)"
                  strokeWidth="1.3"
                  markerEnd="url(#offline-mobile-copper-arrow)"
                  vectorEffect="non-scaling-stroke"
                />
              ) : null}
            </g>
          );
        })}

        <SvgMiniLabel x={52} y={742}>
          No silent data loss · Audit continuity
        </SvgMiniLabel>
      </svg>
    </>
  );
}