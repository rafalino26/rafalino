"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/site";
import HeroRings from "./animations/HeroRings";
import HeroSideElements from "./animations/HeroSideElements";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-28">
      {/* Animated background */}
      <HeroRings yOffset={-50} />
      <HeroSideElements />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="py-16 md:py-20">
          
          {/* --- 3D NAME TITLE --- */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-5xl font-black tracking-[0.15em] text-white md:text-9xl"
            
            // THIS IS THE MAGIC 3D SAUCE
            style={{
              textShadow: `
                1px 1px 0px #7c3aed,   /* Light Purple */
                2px 2px 0px #6d28d9,   /* Medium Purple */
                3px 3px 0px #5b21b6,   /* Dark Purple */
                4px 4px 0px #4c1d95,   /* Darker Purple */
                5px 5px 0px #2e1065,   /* Deepest Purple */
                0px 15px 30px rgba(0,0,0,0.6) /* Soft drop shadow for float */
              `
            }}
          >
            {SITE.name.toUpperCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-center font-mono text-sm tracking-[0.22em] text-white/70 md:text-base"
          >
            SOFTWARE ENGINEER, FRONTEND & UI/UX DEVELOPER.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-center text-sm text-white/70 md:text-base"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <div className="text-center text-xs font-semibold tracking-[0.22em] text-white/60">
              AS FEATURED IN
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {["Upwork", "Frontend Mentor", "Hostinger", "CareerFoundry", "Featured"].map(
                (x) => (
                  <span
                    key={x}
                    className="
                      rounded-full border border-white/15
                      bg-[rgba(0,0,0,0.18)] px-4 py-2
                      text-xs font-semibold text-white/80
                      backdrop-blur
                    "
                  >
                    {x}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <a
              href="#experiment"
              className="
                group grid h-12 w-12 place-items-center rounded-2xl
                border border-white/15 bg-[rgba(0,0,0,0.18)]
                backdrop-blur shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                transition hover:shadow-[0_16px_55px_rgba(0,0,0,0.45)]
              "
              aria-label="Scroll"
            >
              <span className="text-white/90 transition group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}