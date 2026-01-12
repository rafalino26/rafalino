"use client";

import SectionHeading from "@/components/SectionHeading";
import { PROJECTS, type ProjectCategory } from "@/data/project";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const filters: Array<"All" | ProjectCategory> = ["All", "Web", "Mobile"];

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const items = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          desc="A curated selection of projects. Use filters to explore by category."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm border transition",
                "border-[rgb(var(--border))]",
                f === active
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "bg-[rgb(var(--card))] text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {items.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[rgb(var(--muted))]">{p.category}</p>
                  <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    className="h-10 w-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] flex items-center justify-center hover:shadow-sm transition"
                    aria-label={`Open ${p.title}`}
                  >
                    <FiArrowUpRight />
                  </a>
                ) : null}
              </div>

              <p className="mt-3 text-[rgb(var(--muted))]">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2.5 py-1 text-[rgb(var(--muted))]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
