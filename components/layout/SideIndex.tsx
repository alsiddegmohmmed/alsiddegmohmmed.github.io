"use client";

import { useEffect, useState } from "react";

const items = [
  ["01", "Overview", "#overview"],
  ["02", "Capabilities", "#capabilities"],
  ["03", "Selected Work", "#work"],
  ["04", "Clients", "#clients"],
  ["05", "Experience", "#experience"],
  ["06", "Contact", "#contact"]
] as const;

export function SideIndex() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sections = items.flatMap(([, , href]) => {
      const section = document.getElementById(href.slice(1));
      return section ? [section] : [];
    });

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let current = sections[0]?.id ?? "overview";
      let greatestVisibleHeight = 0;
      let closestCenterDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const centerDistance = Math.abs(
          (visibleTop + visibleBottom) / 2 - viewportCenter
        );

        if (
          visibleHeight > greatestVisibleHeight ||
          (visibleHeight === greatestVisibleHeight &&
            centerDistance < closestCenterDistance)
        ) {
          current = section.id;
          greatestVisibleHeight = visibleHeight;
          closestCenterDistance = centerDistance;
        }
      }

      setActiveSection((previous) =>
        previous === current ? previous : current
      );
    };

    let frameId = 0;

    const scheduleUpdate = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        frameId = 0;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true
    });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <aside
      className="fixed left-0 top-[104px] z-20 hidden h-[calc(100vh-104px)] w-[230px] border-r border-line bg-paper/95 pl-11 pt-14 text-muted backdrop-blur-[2px] lg:block"
      aria-label="Casebook section index"
    >
      <span className="mb-9 block w-36 border-b border-line pb-5 font-mono text-xs font-extrabold uppercase tracking-[0.08em]">
         Index
      </span>

      <nav className="grid gap-7" aria-label="Homepage sections">
        {items.map(([number, label, href]) => {
          const sectionId = href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              className="side-index-link group grid min-h-10 grid-cols-[32px_1fr] items-center gap-3 font-mono text-xs uppercase tracking-[0.02em] text-muted"
              data-active={isActive}
              href={href}
              key={sectionId}
              aria-current={isActive ? "location" : undefined}
            >
              <strong className="side-index-number text-green">
                {number}
              </strong>

              <em className="not-italic">{label}</em>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
