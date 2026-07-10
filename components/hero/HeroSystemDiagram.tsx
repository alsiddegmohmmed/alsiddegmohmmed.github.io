const gridX = Array.from({ length: 21 }, (_, index) => 100 + index * 50);
const gridY = Array.from({ length: 16 }, (_, index) => 75 + index * 50);

function BrowserPanel({
  x,
  y,
  width,
  height,
  variant,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  variant: "donut" | "bars" | "lines" | "chart";
}) {
  return (
    <g className="atlas-browser" transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} rx="8" />
      <line x1="0" x2={width} y1="22" y2="22" />
      <circle cx="12" cy="11" r="2.1" />
      <circle cx="21" cy="11" r="2.1" />

      {variant === "donut" && (
        <>
          <path d={`M18 ${height - 28} l12 -12 11 8 14 -15`} />
          <line x1="18" x2="58" y1={height - 18} y2={height - 18} />
          <circle cx={width - 58} cy={height / 2 + 7} r="20" />
          <path d={`M${width - 58} ${height / 2 - 13} a20 20 0 0 1 17 30`} className="atlas-accent" />
          <line x1={width - 28} x2={width - 10} y1={height / 2 - 7} y2={height / 2 - 7} />
          <line x1={width - 28} x2={width - 8} y1={height / 2 + 3} y2={height / 2 + 3} />
          <line x1={width - 28} x2={width - 14} y1={height / 2 + 13} y2={height / 2 + 13} />
        </>
      )}

      {variant === "bars" && (
        <>
          <circle cx="18" cy="42" r="5" />
          <circle cx="18" cy="62" r="5" />
          <circle cx="18" cy="82" r="5" />
          <line x1="34" x2="78" y1="42" y2="42" />
          <line x1="34" x2="72" y1="62" y2="62" />
          <line x1="34" x2="82" y1="82" y2="82" />
          <line x1="96" x2="96" y1="38" y2="82" />
          <rect x="112" y="61" width="8" height="21" rx="1" />
          <rect x="126" y="50" width="8" height="32" rx="1" />
          <rect x="140" y="35" width="8" height="47" rx="1" />
          <rect x="154" y="25" width="8" height="57" rx="1" />
        </>
      )}

      {variant === "lines" && (
        <>
          <circle cx="28" cy={height / 2 + 5} r="18" />
          <path d={`M28 ${height / 2 - 13} a18 18 0 0 1 14 28`} className="atlas-accent" />
          <line x1="58" x2={width - 14} y1={height / 2 - 12} y2={height / 2 - 12} />
          <line x1="58" x2={width - 34} y1={height / 2 + 1} y2={height / 2 + 1} />
          <line x1="58" x2={width - 24} y1={height / 2 + 14} y2={height / 2 + 14} />
        </>
      )}

      {variant === "chart" && (
        <>
          <line x1="18" x2="18" y1={height - 20} y2="42" />
          <line x1="18" x2={width - 22} y1={height - 20} y2={height - 20} />
          <path d={`M22 ${height - 35} L44 ${height - 58} L67 ${height - 46} L92 ${height - 72} L118 ${height - 60}`} className="atlas-accent" />
          <rect x={width - 44} y="42" width="24" height="36" rx="12" />
          <path d={`M${width - 38} 60 l7 7 12 -15`} />
        </>
      )}
    </g>
  );
}

function SectionLabel({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} className="atlas-section-label" textAnchor="middle">
      {children}
    </text>
  );
}

function SmallCaption({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} className="atlas-small-caption" textAnchor="middle">
      {children}
    </text>
  );
}

export function HeroSystemDiagram() {
  return (
    <figure className="m-0 w-full max-w-[780px] justify-self-center self-center lg:w-[min(48vw,820px)] lg:max-w-full">
      <svg
        className="hero-system-atlas"
        viewBox="0 0 1200 900"
        width="1200"
        height="900"
        role="img"
        aria-labelledby="hero-atlas-title hero-atlas-description"
        focusable="false"
      >
        <title id="hero-atlas-title">Operational systems atlas</title>
        <desc id="hero-atlas-description">
          Animated system diagram showing data entering edge, data, service, and application layers before becoming operator decisions and measurable outcomes.
        </desc>

        <defs>
          <linearGradient id="atlas-paper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fffdf8" stopOpacity="0.97" />
            <stop offset="1" stopColor="#f7f4ed" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="atlas-cube-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbfaf5" />
            <stop offset="1" stopColor="#e6e2d8" />
          </linearGradient>
          <linearGradient id="atlas-cube-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0f5b4c" />
            <stop offset="1" stopColor="#083c34" />
          </linearGradient>
          <linearGradient id="atlas-cube-right" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0a483f" />
            <stop offset="1" stopColor="#062e2a" />
          </linearGradient>
          <pattern id="atlas-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#7d8b85" strokeOpacity="0.105" strokeWidth="1" />
          </pattern>
          <marker id="atlas-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10Z" fill="#1e5b88" />
          </marker>
          <filter id="atlas-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#213732" floodOpacity="0.18" />
          </filter>

          <symbol id="atlas-icon-dashboard" viewBox="0 0 42 42">
            <rect x="5" y="6" width="32" height="27" rx="3" />
            <line x1="5" x2="37" y1="13" y2="13" />
            <path d="M11 27l6-7 5 4 8-9" />
          </symbol>
          <symbol id="atlas-icon-tools" viewBox="0 0 42 42">
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <rect x="24" y="6" width="12" height="12" rx="2" />
            <rect x="6" y="24" width="12" height="12" rx="2" />
            <rect x="24" y="24" width="12" height="12" rx="2" />
          </symbol>
          <symbol id="atlas-icon-view" viewBox="0 0 42 42">
            <rect x="5" y="6" width="32" height="28" rx="3" />
            <path d="M10 28l7-8 6 4 9-10" />
            <circle cx="17" cy="20" r="1.6" />
            <circle cx="23" cy="24" r="1.6" />
            <circle cx="32" cy="14" r="1.6" />
          </symbol>
          <symbol id="atlas-icon-api" viewBox="0 0 42 42">
            <rect x="5" y="6" width="32" height="28" rx="3" />
            <path d="M17 15l-6 6 6 6M25 15l6 6-6 6M23 12l-4 18" />
          </symbol>
          <symbol id="atlas-icon-flow" viewBox="0 0 42 42">
            <circle cx="11" cy="21" r="4" />
            <circle cx="30" cy="11" r="4" />
            <circle cx="30" cy="31" r="4" />
            <path d="M15 20l11-7M15 23l11 6" />
          </symbol>
          <symbol id="atlas-icon-filter" viewBox="0 0 42 42">
            <rect x="5" y="6" width="32" height="28" rx="3" />
            <path d="M12 13h18l-7 8v7l-4 2v-9z" />
          </symbol>
          <symbol id="atlas-icon-storage" viewBox="0 0 42 42">
            <ellipse cx="21" cy="11" rx="11" ry="5" />
            <path d="M10 11v18c0 3 5 5 11 5s11-2 11-5V11M10 20c0 3 5 5 11 5s11-2 11-5" />
          </symbol>
          <symbol id="atlas-icon-state" viewBox="0 0 42 42">
            <path d="M21 7l14 8-14 8-14-8zM7 21l14 8 14-8M7 27l14 8 14-8" />
          </symbol>
          <symbol id="atlas-icon-device" viewBox="0 0 42 42">
            <rect x="8" y="14" width="26" height="18" rx="3" />
            <circle cx="15" cy="23" r="2" />
            <circle cx="27" cy="23" r="2" />
            <path d="M21 14v-4M16 10c2-3 8-3 10 0M13 7c4-6 12-6 16 0" />
          </symbol>
          <symbol id="atlas-icon-gateway" viewBox="0 0 42 42">
            <rect x="6" y="11" width="30" height="21" rx="3" />
            <path d="M12 18h7M12 24h11M29 16v11M26 20h6" />
          </symbol>
          <symbol id="atlas-icon-sensor" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="3" />
            <path d="M13 14a10 10 0 0 0 0 14M29 14a10 10 0 0 1 0 14M8 9a17 17 0 0 0 0 24M34 9a17 17 0 0 1 0 24" />
          </symbol>
        </defs>

        {/* <rect width="1200" height="900" fill="url(#atlas-paper)" opacity="0.78" /> */}
        <rect className="atlas-grid" x="60" y="45" width="1080" height="810" fill="url(#atlas-grid)" />

        <g className="atlas-construction atlas-reveal-1">
          {gridX.map((x) => (
            <line key={`x-${x}`} x1={x} x2={x} y1="64" y2="836" />
          ))}
          {gridY.map((y) => (
            <line key={`y-${y}`} x1="82" x2="1118" y1={y} y2={y} />
          ))}
          <path d="M160 82V818M1040 82V818M94 145H1106M94 782H1106" className="atlas-construction-strong" />
          <path d="M150 145h20M160 135v20M1030 145h20M1040 135v20M150 782h20M160 772v20M1030 782h20M1040 772v20" />
        </g>

        <g className="atlas-orbits atlas-reveal-2">
          <path id="orbit-a" d="M195 310C260 120 495 110 632 278S1010 412 1018 218" />
          <path id="orbit-b" d="M210 465C265 210 410 195 600 328S965 540 1010 312" />
          <path id="orbit-c" d="M170 552C276 388 408 366 600 480S935 705 1028 560" />
          <path id="orbit-d" d="M265 690C330 550 510 535 650 648S886 805 948 688" />
          <path id="orbit-e" d="M285 230C365 375 500 412 650 334S895 186 990 255" />
          <path id="orbit-f" d="M240 642C365 788 555 772 688 654S903 478 1010 505" />
        </g>

        <g className="atlas-plane atlas-plane-apps">
          <path className="atlas-plane-fill" d="M600 108L870 238L600 358L330 238Z" />
          <path className="atlas-plane-line atlas-draw atlas-delay-1" pathLength="1" d="M600 108L870 238L600 358L330 238Z" />
          <path className="atlas-plane-grid atlas-draw atlas-delay-2" pathLength="1" d="M400 205L600 300L800 205M455 177L655 272M545 177L745 272M600 108V358" />
          <SectionLabel x={600} y={174}>APPLICATIONS</SectionLabel>
          <g className="atlas-icon-node" transform="translate(448 194)">
            <use href="#atlas-icon-dashboard" width="42" height="42" />
            <SmallCaption x={21} y={58}>Dashboards</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(579 194)">
            <use href="#atlas-icon-tools" width="42" height="42" />
            <SmallCaption x={21} y={58}>Tools</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(710 194)">
            <use href="#atlas-icon-view" width="42" height="42" />
            <SmallCaption x={21} y={58}>Views</SmallCaption>
          </g>
        </g>

        <g className="atlas-plane atlas-plane-services">
          <path className="atlas-plane-fill" d="M600 238L870 368L600 488L330 368Z" />
          <path className="atlas-plane-line atlas-draw atlas-delay-2" pathLength="1" d="M600 238L870 368L600 488L330 368Z" />
          <path className="atlas-plane-grid atlas-draw atlas-delay-3" pathLength="1" d="M400 335L600 430L800 335M455 307L655 402M545 307L745 402M600 238V488" />
          <SectionLabel x={600} y={304}>SERVICES</SectionLabel>
          <g className="atlas-icon-node" transform="translate(448 324)">
            <use href="#atlas-icon-api" width="42" height="42" />
            <SmallCaption x={21} y={58}>APIs</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(579 324)">
            <use href="#atlas-icon-flow" width="42" height="42" />
            <SmallCaption x={21} y={58}>Workflows</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(710 324)">
            <use href="#atlas-icon-filter" width="42" height="42" />
            <SmallCaption x={21} y={58}>Rules</SmallCaption>
          </g>
        </g>

        <g className="atlas-plane atlas-plane-data">
          <path className="atlas-plane-fill" d="M600 430L870 560L600 680L330 560Z" />
          <path className="atlas-plane-line atlas-draw atlas-delay-3" pathLength="1" d="M600 430L870 560L600 680L330 560Z" />
          <path className="atlas-plane-grid atlas-draw atlas-delay-4" pathLength="1" d="M400 527L600 622L800 527M455 499L655 594M545 499L745 594M600 430V680" />
          <text x="438" y="565" className="atlas-section-label">DATA LAYER</text>
          <text x="716" y="565" className="atlas-section-label">DATA LAYER</text>
          <g className="atlas-icon-node" transform="translate(446 570)">
            <use href="#atlas-icon-storage" width="42" height="42" />
            <SmallCaption x={21} y={58}>Storage</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(712 570)">
            <use href="#atlas-icon-state" width="42" height="42" />
            <SmallCaption x={21} y={58}>State</SmallCaption>
          </g>
        </g>

        <g className="atlas-plane atlas-plane-edge">
          <path className="atlas-plane-fill" d="M600 558L870 688L600 808L330 688Z" />
          <path className="atlas-plane-line atlas-draw atlas-delay-4" pathLength="1" d="M600 558L870 688L600 808L330 688Z" />
          <path className="atlas-plane-grid atlas-draw atlas-delay-5" pathLength="1" d="M400 655L600 750L800 655M455 627L655 722M545 627L745 722M600 558V808" />
          <SectionLabel x={600} y={646}>EDGE LAYER</SectionLabel>
          <g className="atlas-icon-node" transform="translate(448 675)">
            <use href="#atlas-icon-device" width="42" height="42" />
            <SmallCaption x={21} y={58}>Devices</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(579 675)">
            <use href="#atlas-icon-gateway" width="42" height="42" />
            <SmallCaption x={21} y={58}>Gateways</SmallCaption>
          </g>
          <g className="atlas-icon-node" transform="translate(710 675)">
            <use href="#atlas-icon-sensor" width="42" height="42" />
            <SmallCaption x={21} y={58}>Sensors</SmallCaption>
          </g>
        </g>

        <g className="atlas-data-paths atlas-reveal-4">
          <path id="data-route-left" d="M128 430H238Q258 430 258 452V482Q258 500 278 500H470" markerEnd="url(#atlas-arrow-blue)" />
          <path id="data-route-right" d="M730 500H922Q942 500 942 480V448Q942 428 962 428H1080" markerEnd="url(#atlas-arrow-blue)" />
          <path id="data-route-down" d="M600 738V828" markerEnd="url(#atlas-arrow-blue)" />
          <circle className="atlas-path-node" cx="354" cy="500" r="6" />
          <circle className="atlas-path-node" cx="934" cy="500" r="6" />
        </g>

        <g className="atlas-side-copy atlas-reveal-4">
          <text x="96" y="405" className="atlas-side-heading">DATA IN</text>
          <line x1="96" x2="188" y1="420" y2="420" />
          <circle cx="193" cy="420" r="2.8" />
          <text x="122" y="452">Events</text>
          <text x="122" y="486">Telemetry</text>
          <text x="122" y="520">Transactions</text>
          <path d="M98 447h17M102 441l5 6-5 6M98 481c5 0 6-12 11-12s5 12 10 12M99 511h16v16H99M104 506l7 7-7 7" />

          <text x="1014" y="405" className="atlas-side-heading">OPERATORS</text>
          <line x1="1014" x2="1103" y1="420" y2="420" />
          <circle cx="1108" cy="420" r="2.8" />
          <text x="1055" y="452">People</text>
          <text x="1055" y="486">Decisions</text>
          <text x="1055" y="520">Actions</text>
          <circle cx="1028" cy="448" r="8" />
          <path d="M1022 463c3-7 9-7 12 0M1028 437v4" />
          <circle cx="1028" cy="482" r="9" />
          <path d="M1024 482l3 3 6-7" />
          <circle cx="1028" cy="516" r="9" />
          <path d="M1026 511l6 5-6 5z" />

          <text x="952" y="662" className="atlas-side-heading">OUTCOMES</text>
          <line x1="952" x2="1050" y1="677" y2="677" />
          <circle cx="1055" cy="677" r="2.8" />
          <text x="985" y="710">Reliability</text>
          <text x="985" y="744">Traceability</text>
          <text x="985" y="778">Control</text>
          <path d="M959 698l9 4v8c0 7-4 11-9 13-5-2-9-6-9-13v-8zM955 709l3 3 5-7" />
          <circle cx="959" cy="741" r="3" />
          <circle cx="950" cy="752" r="3" />
          <circle cx="968" cy="752" r="3" />
          <path d="M957 744l-5 6M961 744l5 6" />
          <path d="M950 770h18M954 777h10M958 764v12M964 770v12" />
        </g>

        <g className="atlas-cube" filter="url(#atlas-shadow)">
          <g className="atlas-cube-layer atlas-cube-layer-1">
            <path d="M600 505L520 468V510L600 548Z" fill="url(#atlas-cube-left)" />
            <path d="M600 505L680 468V510L600 548Z" fill="url(#atlas-cube-right)" />
          </g>
          <g className="atlas-cube-layer atlas-cube-layer-2">
            <path d="M600 465L520 428V470L600 508Z" fill="url(#atlas-cube-left)" />
            <path d="M600 465L680 428V470L600 508Z" fill="url(#atlas-cube-right)" />
          </g>
          <g className="atlas-cube-layer atlas-cube-layer-3">
            <path d="M600 425L520 388V430L600 468Z" fill="url(#atlas-cube-left)" />
            <path d="M600 425L680 388V430L600 468Z" fill="url(#atlas-cube-right)" />
          </g>
          <path className="atlas-cube-top" d="M600 350L680 388L600 426L520 388Z" fill="url(#atlas-cube-top)" />
          <ellipse cx="600" cy="388" rx="31" ry="20" />
          <ellipse cx="600" cy="388" rx="11" ry="8" className="atlas-copper-fill" />
          <path d="M520 388V510L600 548L680 510V388L600 426Z" className="atlas-cube-outline" />
          {[416, 456, 496].map((y) => (
            <g key={y}>
              <circle cx="536" cy={y} r="2.3" className="atlas-cube-port" />
              <circle cx="664" cy={y} r="2.3" className="atlas-cube-port" />
            </g>
          ))}
        </g>

        <g className="atlas-connectors atlas-reveal-3">
          <path className="atlas-draw atlas-delay-5" pathLength="1" d="M470 315v35q0 18 18 26l32 14M600 304v44M730 315v35q0 18-18 26l-32 14" />
          <path className="atlas-draw atlas-delay-5" pathLength="1" d="M470 442v32q0 18 18 25l32 13M730 442v32q0 18-18 25l-32 13" />
          <circle cx="470" cy="315" r="3" />
          <circle cx="600" cy="304" r="3" />
          <circle cx="730" cy="315" r="3" />
          <circle cx="470" cy="442" r="3" />
          <circle cx="730" cy="442" r="3" />
        </g>

        <g className="atlas-outer-nodes atlas-reveal-5">
          <circle className="atlas-node atlas-node-green atlas-node-a" cx="600" cy="78" r="6" />
          <circle className="atlas-node atlas-node-green atlas-node-b" cx="470" cy="128" r="6" />
          <circle className="atlas-node atlas-node-green atlas-node-c" cx="730" cy="132" r="7" />
          <circle className="atlas-node atlas-node-blue atlas-node-d" cx="198" cy="267" r="6" />
          <circle className="atlas-node atlas-node-copper atlas-node-e" cx="1003" cy="265" r="7" />
          <circle className="atlas-node atlas-node-green atlas-node-f" cx="196" cy="552" r="6" />
          <circle className="atlas-node atlas-node-blue atlas-node-g" cx="997" cy="552" r="6" />
          <circle className="atlas-node atlas-node-muted atlas-node-h" cx="235" cy="747" r="6" />
          <circle className="atlas-node atlas-node-copper atlas-node-i" cx="814" cy="797" r="6" />
          <circle className="atlas-node atlas-node-green atlas-node-j" cx="600" cy="638" r="5" />
        </g>

        <g className="atlas-browser-panels atlas-reveal-5">
          <BrowserPanel x={230} y={92} width={155} height={82} variant="donut" />
          <BrowserPanel x={815} y={92} width={155} height={82} variant="bars" />
          <BrowserPanel x={155} y={616} width={125} height={72} variant="lines" />
          <BrowserPanel x={920} y={616} width={125} height={72} variant="lines" />
          <BrowserPanel x={530} y={805} width={140} height={74} variant="chart" />
        </g>

        <g className="atlas-metric-lines atlas-reveal-5">
          <path d="M288 175C380 165 456 197 535 240" />
          <path d="M812 175C760 168 705 192 666 226" />
          <path d="M280 650C345 622 400 598 454 564" />
          <path d="M920 650C850 620 801 595 744 564" />
          <path d="M600 805V738" />
        </g>

        <g className="atlas-motion-only" aria-hidden="true">
          <circle r="4.5" className="atlas-moving-dot atlas-moving-dot-blue">
            <animateMotion dur="7.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-a" />
            </animateMotion>
          </circle>
          <circle r="4" className="atlas-moving-dot atlas-moving-dot-green">
            <animateMotion dur="9s" begin="-3s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-c" />
            </animateMotion>
          </circle>
          <circle r="4" className="atlas-moving-dot atlas-moving-dot-copper">
            <animateMotion dur="10s" begin="-6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-f" />
            </animateMotion>
          </circle>
        </g>
      </svg>
    </figure>
  );
}