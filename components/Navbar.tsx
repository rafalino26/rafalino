"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-[rgba(5,7,10,0.70)] backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Mobile menu button (top-left) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-card hover:shadow-(--glow-soft) transition"
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>

          {/* Brand */}
          <a
            href="#top"
            className="font-semibold tracking-tight flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
            RAFALINO
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTA (hide on very small, optional) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-xl px-4 py-2 text-sm font-medium border border-border bg-card hover:shadow-(--glow-soft) transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-60 md:hidden transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`
            absolute left-0 top-0 h-full w-[78%] max-w-[320px]
            bg-[rgba(5,7,10,0.96)]
            border-r border-border
            backdrop-blur
            transition-transform
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="p-4 flex items-center justify-between border-b border-border">
            <div className="font-semibold tracking-tight flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
              RAFALINO
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 w-10 rounded-xl bg-card hover:shadow-(--glow-soft) transition inline-flex items-center justify-center"
              aria-label="Close menu"
            >
              <FiX size={20} />
            </button>
          </div>

          <nav className="p-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="
                  block rounded-xl px-4 py-3
                  text-muted hover:text-foreground
                  hover:bg-[rgba(255,255,255,0.06)]
                  transition
                "
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-4 block text-center rounded-xl px-4 py-3 font-medium
                bg-neon text-black shadow-(--glow) hover:opacity-90 transition
              "
            >
              Let’s Talk
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}
