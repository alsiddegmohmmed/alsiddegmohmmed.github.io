const items = [
  ["01", "Overview", "#top"],
  ["02", "Selected Work", "#work"],
  ["03", "Capabilities", "#capabilities"],
  ["04", "Experience", "#experience"],
  ["05", "Contact", "#contact"]
];

export function SideIndex() {
  return (
    <aside
      className="relative col-start-1 hidden w-[230px] border-r border-line pl-11 pt-16 text-muted lg:block"
      aria-label="Casebook section index"
    >
      <span className="mb-9 block w-36 border-b border-line pb-5 font-mono text-xs font-extrabold uppercase tracking-[0.08em]">Atlas Index</span>
      <div className="grid gap-8">
        {items.map(([number, label, href]) => (
        <a className="grid min-h-8 grid-cols-[32px_1fr] items-center gap-3 font-mono text-xs uppercase tracking-[0.02em] text-muted" href={href} key={number}>
          <strong className="text-green">{number}</strong>
          <em className="not-italic">{label}</em>
        </a>
      ))}
      </div>
    </aside>
  );
}
