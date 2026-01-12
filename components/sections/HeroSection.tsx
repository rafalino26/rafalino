import Image from "next/image";
import { SITE } from "@/data/site";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section id="top" className="pt-8 md:pt-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* RIGHT on desktop, TOP on mobile: PROFILE */}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Soft ambient glow */}
              <div
                className="absolute -inset-6 rounded-full blur-2xl opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(0,229,168,0.35), transparent 60%)",
                }}
              />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[rgba(255,255,255,0.04)]">
                <Image
                  src="/rafa.jpg"
                  alt={`${SITE.name} portrait`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Accent dot */}
              <span className="absolute bottom-3 left-10 h-2.5 w-2.5 rounded-full bg-neon shadow-(--glow-soft)" />
            </div>
          </div>

          {/* LEFT on desktop, BELOW photo on mobile: TEXT */}
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.05)] px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
              <span className="text-muted">{SITE.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Hi, I&apos;m {SITE.name}
              </h1>
              <p className="text-lg md:text-xl text-muted">{SITE.role}</p>
            </div>

            {/* Tagline */}
            <p className="text-muted max-w-xl text-center md:text-left mx-auto md:mx-0">
              {SITE.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#projects"
                className="
                  rounded-2xl px-5 py-2.5 text-sm font-semibold
                  bg-neon text-black
                  shadow-(--glow)
                  hover:opacity-90 transition
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  rounded-2xl px-5 py-2.5 text-sm font-medium
                  bg-[rgba(255,255,255,0.06)]
                  hover:bg-[rgba(255,255,255,0.10)]
                  transition
                "
              >
                Contact Me →
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center md:justify-start gap-5 text-muted">
              <a className="hover:text-foreground transition" href={SITE.social.github} aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a className="hover:text-foreground transition" href={SITE.social.linkedin} aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a className="hover:text-foreground transition" href={SITE.social.email} aria-label="Email">
                <FiMail size={20} />
              </a>
              <a className="hover:text-foreground transition" href={SITE.social.resume} aria-label="Resume">
                <FiFileText size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* STATS */}
        {/* STATS */}
<div className="mt-10 md:mt-12 w-full">
  {/* Use full container width (max-w-6xl from parent), not centered */}
  <div className="w-full">
    {/* 4 stats -> mobile becomes 2x2 */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
      {SITE.stats.map((s) => (
        <div key={s.label}>
          <p className="text-3xl md:text-4xl font-semibold">{s.value}</p>
          <p className="mt-1 text-sm text-muted">{s.label}</p>
        </div>
      ))}
    </div>

    {/* 2 highlights */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
      {SITE.highlights.map((h) => (
        <div key={h.title}>
          <p className="text-lg md:text-xl font-medium">{h.title}</p>
          <p className="mt-2 text-sm text-muted leading-relaxed">{h.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
