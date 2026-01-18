"use client";

import { SITE } from "@/data/site";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.5rem] border border-border bg-card/70 p-8 md:p-12 shadow-[var(--glow-soft)]"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted">
            If you want a portfolio that feels like a product demo (not a PDF on
            a website), let’s build it.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={SITE.links.email}
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background shadow-[var(--glow)]"
            >
              <FiMail /> Email me
            </a>

            <a
              href={SITE.links.github}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card2/85 px-4 py-3 text-sm font-semibold hover:shadow-[var(--glow-soft)] transition"
            >
              <FiGithub /> GitHub
            </a>

            <a
              href={SITE.links.linkedin}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card2/85 px-4 py-3 text-sm font-semibold hover:shadow-[var(--glow-soft)] transition"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>

          <div className="mt-10 text-xs text-muted font-mono">
            {"// dark mode later: <body data-theme='dark' />"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
