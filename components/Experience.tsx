"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "Frontend Portfolio v1",
    desc: "Creative UI + motion experiments shipped to Vercel.",
  },
  {
    year: "2025",
    title: "Community Web Projects",
    desc: "Real-world UX, admin dashboards, and deployments.",
  },
  {
    year: "2024",
    title: "UI/UX Deep Dive",
    desc: "Design systems, component libraries, and layout mastery.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          Experience
        </h2>

        <div className="mt-10 space-y-4">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-border bg-card/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-muted">
                    {t.year}
                  </div>
                  <div className="text-lg font-extrabold">{t.title}</div>
                </div>

                <div className="h-2 w-28 rounded-full bg-border/70 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-neon" />
                </div>
              </div>

              <p className="mt-3 text-sm text-muted">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
