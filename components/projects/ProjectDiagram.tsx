import Image from "next/image";
import type { Project } from "@/app/data";

const diagramCopy: Record<Project["visual"], { title: string; nodes: string[] }> = {
  website: {
    title: "Public website structure",
    nodes: ["Public pages", "Reusable sections", "Responsive UI", "Live website"]
  },
  affiliate: {
    title: "Affiliate platform structure",
    nodes: [
      "Public website",
      "Authentication",
      "Role-based dashboards",
      "Platform workflows"
    ]
  },
  fuel: {
    title: "Confidential system visual",
    nodes: ["Field devices", "Ingestion", "Reconciliation", "Reports"]
  },
  iot: {
    title: "Confidential IoT system visual",
    nodes: ["Devices", "ThingsBoard", "APIs", "Dashboards"]
  },
  hospital: {
    title: "Confidential healthcare system visual",
    nodes: ["Registration", "Clinical work", "Pharmacy / billing", "Admin"]
  },
  cash: {
    title: "Confidential cash system visual",
    nodes: ["POS / CDM", "Edge gateway", "Cloud events", "Live dashboard"]
  }
};

type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
};

const projectImages: Partial<Record<Project["visual"], ProjectImage>> = {
  fuel: {
    src: "/assets/fuel-custody-card.png",
    alt: "Representative blueprint-style visual for the Fuel Custody and Reconciliation Platform",
    position: "center"
  },
  iot: {
    src: "/assets/inseejam-iot-card.png",
    alt: "Representative blueprint-style visual for the Inseejam IoT Operations Platform",
    position: "center"
  },
  hospital: {
    src: "/assets/hospital-operations-card.png",
    alt: "Representative blueprint-style visual for the Hospital Operations Platform",
    position: "center"
  },
  cash: {
    src: "/assets/cash-operations-card.png",
    alt: "Representative blueprint-style visual for the Real-Time Cash Management System",
    position: "center"
  }
};

export function ProjectDiagram({
  project,
  compact = false,
  featured = false
}: {
  project: Project;
  compact?: boolean;
  featured?: boolean;
}) {
  const copy = diagramCopy[project.visual];
  const title = `${copy.title} for ${project.title}`;

  const websiteImage =
  project.slug === "expand-amnads"
    ? {
        src: "/assets/expand.png",
        alt: "Expand / AmnAds public website screenshot"
      }
    : project.slug === "primus-website"
      ? {
          src: "/assets/primus.png",
          alt: "Primus Trading & Investment public website screenshot"
        }
      : null;

const systemImage = projectImages[project.visual] ?? null;

if (websiteImage) {
  return (
    <figure
      className={`${
        featured ? "m-0 p-4 md:p-5" : "my-4 p-3"
      } overflow-hidden border border-line bg-surface-muted`}
    >
      <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-extrabold uppercase tracking-[0.05em] text-green">
        <span>
          {featured ? "Figure 01 — Public project evidence" : copy.title}
        </span>

        {featured ? (
          <span className="text-muted">Live website capture</span>
        ) : null}
      </figcaption>

      <div
        className={`relative overflow-hidden border border-line bg-surface ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={websiteImage.src}
          alt={websiteImage.alt}
          fill
          className="object-cover object-top transition duration-200 group-hover:scale-[1.015] group-focus-within:scale-[1.015]"
          sizes={
            featured
              ? "(min-width: 1280px) 1120px, 94vw"
              : "(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
          }
        />
      </div>

      {featured ? (
        <p className="mb-0 mt-3 font-mono text-[11px] leading-5 text-muted">
          {project.visual === "affiliate"
            ? "Public website capture from a broader affiliate marketing platform. Private dashboard screens and internal workflows are not displayed."
            : "Publicly verifiable project screen. Open the live website for the current production experience."}
        </p>
      ) : null}
    </figure>
  );
}
  if (systemImage) {
    return (
      <figure className={`${featured ? "m-0 p-4 md:p-5" : "my-4 p-3"} overflow-hidden border border-line bg-surface-muted`}>
        <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-extrabold uppercase tracking-[0.05em] text-green">
          <span>{featured ? "Figure 01 — Representative project artifact" : copy.title}</span>
          {featured ? <span className="text-muted">Not a production screenshot</span> : null}
        </figcaption>

        <div className={`relative overflow-hidden border border-line bg-surface ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={systemImage.src}
            alt={systemImage.alt}
            fill
            className="object-cover transition duration-200 group-hover:scale-[1.015] group-focus-within:scale-[1.015]"
            style={{
              objectPosition: systemImage.position ?? "center"
            }}
            sizes={featured ? "(min-width: 1280px) 1120px, 94vw" : "(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"}
          />
        </div>

        {!compact ? (
          <p className="mt-2 font-mono text-[11px] leading-5 text-muted">
            Representative visual artifact. No client-sensitive screens or proprietary data.
          </p>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="my-4 border border-line bg-surface-muted p-3">
      <figcaption className="mb-2 font-mono text-[11px] font-extrabold uppercase tracking-[0.05em] text-green">
        {copy.title}
      </figcaption>

      <svg
        className="block h-auto w-full overflow-visible"
        viewBox="0 0 760 360"
        role="img"
        aria-labelledby={`${project.slug}-diagram-title`}
        focusable="false"
      >
        <title id={`${project.slug}-diagram-title`}>{title}</title>

        <defs>
          <marker
            id={`${project.slug}-arrow`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 10 5 0 10Z" fill="var(--blueprint)" />
          </marker>
        </defs>

        <path
          d="M42 74H718V286H42Z"
          fill="rgba(255,253,248,0.72)"
          stroke="var(--line)"
        />

        <path
          d="M42 144H718M42 214H718M196 74V286M380 74V286M564 74V286"
          fill="none"
          stroke="rgba(13,27,30,0.08)"
        />

        {copy.nodes.map((node, index) => {
          const x = 74 + index * 174;
          const y = index % 2 === 0 ? 122 : 176;

          return (
            <g key={node}>
              <rect
                x={x}
                y={y}
                width="132"
                height="76"
                rx="4"
                fill="var(--surface)"
                stroke="var(--line-strong)"
              />

              <text
                x={x + 18}
                y={y + 34}
                fill="var(--muted)"
                fontFamily="var(--font-mono)"
                fontSize="13"
                fontWeight="700"
              >
                {node}
              </text>

              <circle
                cx={x + 112}
                cy={y + 56}
                r="4"
                fill="var(--green)"
              />

              {index < copy.nodes.length - 1 ? (
                <path
                  d={`M${x + 132} ${y + 38} C${x + 166} ${y + 38} ${x + 140} ${
                    index % 2 === 0 ? 214 : 160
                  } ${x + 174} ${index % 2 === 0 ? 214 : 160}`}
                  fill="none"
                  stroke="var(--blueprint)"
                  strokeWidth="1.6"
                  markerEnd={`url(#${project.slug}-arrow)`}
                />
              ) : null}
            </g>
          );
        })}

        {!compact ? (
          <text
            x="52"
            y="326"
            fill="var(--muted)"
            fontFamily="var(--font-mono)"
            fontSize="13"
            fontWeight="700"
          >
            Representative architecture map. No client-sensitive screens or proprietary data.
          </text>
        ) : null}
      </svg>
    </figure>
  );
}
