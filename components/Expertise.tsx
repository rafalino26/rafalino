"use client";

import { motion } from "framer-motion";
import { FiLayout, FiCode, FiSmartphone } from "react-icons/fi";

const cards = [
  {
    title: "Software Development",
    icon: FiCode,
    accent: "rgba(102,35,173,0.9)", // --neon
    text:
      "Typescript-first, clean structure, reusable components, and pragmatic UI engineering.",
    chips: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
  },
  {
    title: "Frontend / UI Engineering",
    icon: FiLayout,
    accent: "rgba(122,59,209,0.85)", // --neon-2
    text:
      "Design systems, responsive layouts, micro-interactions, and motion that stays fast.",
    chips: ["Framer Motion", "UX", "A11y", "Performance"],
  },
  {
    title: "App-like Experiences",
    icon: FiSmartphone,
    accent: "rgba(102,35,173,0.55)",
    text:
      "SPA/PWA vibes, transitions, scroll storytelling, and interactive demos with product taste.",
    chips: ["RSC/CSR", "PWA", "Animations", "3D/Canvas"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            My Expertise
          </h2>
          <p className="hidden md:block max-w-md text-sm text-muted">
            Developer framing, but with fun motion and depth—still clean.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="absolute -top-24 -right-24 h-52 w-52 rounded-fullopacity-60"
                  style={{ background: c.accent }}
                />

                <div className="relative flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-card2/80">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold leading-tight">
                      {c.title}
                    </p>
                    <div className="mt-1 h-0.75 w-24 rounded-full bg-border/60 overflow-hidden">
                      <div
                        className="h-full w-1/2 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{ background: c.accent }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-l border-border pl-4 text-sm text-muted">
                  {c.text}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border bg-card2/70 px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute bottom-5 right-5 font-mono text-[10px] text-muted/40">
                  {"<section />"}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
