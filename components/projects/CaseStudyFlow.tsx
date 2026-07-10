import type { Project } from "@/app/data";

const flowNodes: Record<Project["visual"], readonly string[]> = {
  website: ["Public pages", "Reusable sections", "Responsive UI", "Live website"],
  fuel: ["Field devices", "Ingestion", "Reconciliation", "Reports"],
  iot: ["Sites / branches", "Edge devices", "ThingsBoard", "APIs / streams", "Operations UI"],
  hospital: ["Registration", "Clinical queue", "Lab / pharmacy", "Billing", "Admin / reports"],
  cash: ["POS / CDM", "Edge gateway", "Local buffer", "Cloud events", "Live dashboard"]
};

export function CaseStudyFlow({ project }: { project: Project }) {
  const nodes = flowNodes[project.visual];
  const desktopColumns = nodes.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";

  return (
    <figure className="m-0 border border-line bg-surface/85 p-4 md:p-5">
      <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">
        <span>Representative system flow</span>
        <span className="text-muted">Direction of operation</span>
      </figcaption>

      <ol className={`grid gap-4 p-0 ${desktopColumns}`} aria-label={`${project.title} representative system flow`}>
        {nodes.map((node, index) => (
          <li className="relative grid min-h-28 list-none content-between border border-line bg-bg/60 p-4" key={node}>
            <span className="font-mono text-[11px] font-extrabold text-copper">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="max-w-32 font-mono text-xs uppercase leading-5 text-ink">{node}</strong>

            {index < nodes.length - 1 ? (
              <>
                <span
                  className="absolute -bottom-[17px] left-1/2 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center bg-surface font-mono text-sm text-blueprint lg:hidden"
                  aria-hidden="true"
                >
                  ↓
                </span>
                <span
                  className="absolute -right-[17px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 place-items-center bg-surface font-mono text-sm text-blueprint lg:grid"
                  aria-hidden="true"
                >
                  →
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="mb-0 mt-4 border-t border-line pt-3 font-mono text-[11px] leading-5 text-muted">
        {project.status === "Confidential"
          ? "Generalized to communicate system context without exposing client-sensitive implementation details."
          : "Simplified to show how the public-facing implementation moves from content structure to production delivery."}
      </p>
    </figure>
  );
}
