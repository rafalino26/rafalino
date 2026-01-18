"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Featured Project — Tryotel App",
    desc: "Case-study layout with scroll storytelling + motion and an app-like feel.",
    tag: "UI + Motion",
  },
  {
    title: "Portfolio System",
    desc: "Component-driven system, theming, and interactive hero experiments.",
    tag: "Design System",
  },
  {
    title: "Landing Experiments",
    desc: "3D, smooth scrolling, dev nav, and micro-interactions that feel premium.",
    tag: "Creative Dev",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            My Work
          </h2>
          <p className="text-sm md:text-base text-muted">
            Make cards feel alive: depth, glow, motion—still minimalist.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-border bg-card/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(102,35,173,0.14),transparent_55%)]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-card2/70 px-3 py-1 text-xs font-semibold">
                    {p.tag}
                  </span>
                  <FiArrowUpRight className="opacity-60 transition group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <h3 className="mt-4 text-lg font-extrabold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{p.desc}</p>

                <div className="mt-6 rounded-2xl border border-border bg-card2/60 p-3 font-mono text-[11px] text-muted">
                  <div className="opacity-70">{"// preview"}</div>
                  <div className="mt-2">
                    <span className="opacity-70">motion</span>
                    <span className="opacity-50">:</span> spring(…)
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
