import type { ReactNode } from "react";

type DiagramShellProps = {
  label: string;
  title: string;
  caption: string;
  children: ReactNode;
  className?: string;
};

export type SvgNodeProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  sublabel?: string;
  accent?: "green" | "blue" | "copper";
};

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-7 items-center gap-1 rounded-sm border border-line bg-surface px-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.04em] text-muted">
      {children}
    </span>
  );
}

export function DiagramShell({ label, title, caption, children, className = "" }: DiagramShellProps) {
  return (
    <figure className={`relative m-0 min-w-0 border border-line bg-surface/85 p-4 md:p-5 ${className}`}>
      <figcaption className="mb-4 font-mono text-[11px] font-extrabold uppercase tracking-[0.08em] text-green">
        {label} — {title}
      </figcaption>
      <div className="relative overflow-hidden">{children}</div>
      <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] leading-5 text-muted">{caption}</p>
    </figure>
  );
}

export function SvgLabel({
  x,
  y,
  children,
  color = "var(--green)"
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      fill={color}
      fontFamily="var(--font-mono)"
      fontSize="12"
      fontWeight="800"
      letterSpacing="0.08em"
    >
      {children}
    </text>
  );
}

export function SvgMiniLabel({
  x,
  y,
  children,
  color = "var(--muted)"
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
}) {
  return (
    <text x={x} y={y} fill={color} fontFamily="var(--font-mono)" fontSize="11" fontWeight="700">
      {children}
    </text>
  );
}

export function SvgNode({ x, y, width, height, title, sublabel, accent = "green" }: SvgNodeProps) {
  const accentColor =
    accent === "copper" ? "var(--copper)" : accent === "blue" ? "var(--blueprint)" : "var(--green)";

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
      <rect x={x} y={y} width="4" height={height} fill={accentColor} />
      <text x={x + 14} y={y + 26} fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="12" fontWeight="800">
        {title}
      </text>
      {sublabel ? (
        <text x={x + 14} y={y + 44} fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="700">
          {sublabel}
        </text>
      ) : null}
    </g>
  );
}

export function SvgArrowMarker({ id, color = "var(--blueprint)" }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 10 5 0 10Z" fill={color} />
    </marker>
  );
}
