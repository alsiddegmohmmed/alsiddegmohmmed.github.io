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
      className="fixed left-0 top-[104px] z-20 hidden h-[calc(100vh-104px)] w-[230px] border-r border-line bg-paper/95 pl-11 pt-14 text-muted backdrop-blur-[2px] lg:block"
      aria-label="Casebook section index"
    >
      <span className="mb-9 block w-36 border-b border-line pb-5 font-mono text-xs font-extrabold uppercase tracking-[0.08em]">Atlas Index</span>
      <nav className="grid gap-7" aria-label="Homepage sections">
        {items.map(([number, label, href]) => (
          <a
            className="group grid min-h-9 grid-cols-[32px_1fr] items-center gap-3 font-mono text-xs uppercase tracking-[0.02em] text-muted transition hover:text-ink focus-visible:text-ink"
            href={href}
            key={number}
          >
            <strong className="text-green transition group-hover:text-ink group-focus-visible:text-ink">{number}</strong>
            <em className="not-italic">{label}</em>
          </a>
        ))}
      </nav>
    </aside>
  );
}
