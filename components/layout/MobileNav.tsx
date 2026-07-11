"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ComponentRef } from "react";
import styles from "./MobileNav.module.css";

const links = [
  ["Work", "/#work"],
  ["Capabilities", "/#capabilities"],
  ["Clients", "/#clients"],
  ["Experience", "/#experience"]
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<ComponentRef<"button">>(null);
  const firstLinkRef = useRef<ComponentRef<"a">>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: { key: string }) => {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.nav} aria-label="Mobile navigation">
      <div className={styles.bar}>
        <Link
          href="/#top"
          className={styles.identity}
          aria-label="Al Siddeg Omer home"
          onClick={closeMenu}
        >
          <span className={styles.mark}>SO</span>
          <span className={styles.identityText}>
            <strong>Al Siddeg Omer</strong>
            <small>Software Engineer</small>
          </span>
        </Link>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-panel"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span>Menu</span>
        </button>
      </div>

      <div
        id="mobile-navigation-panel"
        className={styles.panel}
        data-open={isOpen}
        aria-hidden={!isOpen}
      >
        <div className={styles.panelHeader} aria-hidden="true">
          <span>Atlas Navigation</span>
          <span>01—05</span>
        </div>

        <div className={styles.links}>
          {links.map(([label, href], index) => (
            <Link
              ref={index === 0 ? firstLinkRef : undefined}
              className={styles.link}
              href={href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              key={href}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
            </Link>
          ))}

          <Link
            className={styles.contact}
            href="/#contact"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            <span>05</span>
            <strong>Contact</strong>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
