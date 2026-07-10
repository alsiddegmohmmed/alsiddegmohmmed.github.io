"use client";

import { useEffect, useState } from "react";

const items = [
  ["01", "Overview", "#overview"],
  ["02", "Capabilities", "#capabilities"],
  ["03", "Selected Work", "#work"],
  ["04", "Experience", "#experience"],
  ["05", "Contact", "#contact"]
] as const;

export function SideIndex() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sections = items.flatMap(([, , href]) => {
      const section = document.getElementById(href.slice(1));
      return section ? [section] : [];
    });

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.38;
      let current = sections[0]?.id ?? "overview";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      }

      setActiveSection(current);
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateActiveSection();
        frame = 0;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside
      className="fixed left-0 top-[104px] z-20 hidden h-[calc(100vh-104px)] w-[230px] border-r border-line bg-paper/95 pl-11 pt-14 text-muted backdrop-blur-[2px] lg:block"
      aria-label="Casebook section index"
    >
      <span className="mb-9 block w-36 border-b border-line pb-5 font-mono text-xs font-extrabold uppercase tracking-[0.08em]">Atlas Index</span>
      <nav className="grid gap-7" aria-label="Homepage sections">
        {items.map(([number, label, href]) => (
          <a
            className="side-index-link group grid min-h-10 grid-cols-[32px_1fr] items-center gap-3 font-mono text-xs uppercase tracking-[0.02em] text-muted"
            data-active={activeSection === href.slice(1)}
            href={href}
            key={number}
            aria-current={activeSection === href.slice(1) ? "location" : undefined}
          >
            <strong className="side-index-number text-green">{number}</strong>
            <em className="not-italic">{label}</em>
          </a>
        ))}
      </nav>
    </aside>
  );
}
