import SectionHeading from "@/components/SectionHeading";
import { LEARNING, SKILLS } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Skills & Technologies"
          desc="A focused overview of tools and technologies I use to build modern products."
        />

        {/* Skill cards (borderless, neon hover accents) */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s) => (
            <div
              key={s.title}
              className="
                group
                rounded-3xl
                bg-card
                p-6
                transition
                hover:bg-[rgba(255,255,255,0.06)]
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="
                    h-11 w-11 rounded-2xl
                    bg-[rgba(255,255,255,0.04)]
                    flex items-center justify-center
                    transition
                    group-hover:bg-[rgba(0,229,168,0.10)]
                  "
                >
                  <s.icon size={18} className="text-foreground" />
                </div>

                {/* Title + desc */}
                <div className="min-w-0">
                  <p className="font-semibold truncate">{s.title}</p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {s.desc}
                  </p>

                  {/* neon underline accent */}
                  <div
                    className="
                      mt-3 h-px w-10
                      bg-[rgba(0,229,168,0.20)]
                      group-hover:w-16 group-hover:bg-[rgba(0,229,168,0.65)]
                      transition-all
                    "
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs rounded-full
                      bg-[rgba(255,255,255,0.04)]
                      px-2.5 py-1
                      text-muted
                      transition
                      group-hover:bg-[rgba(255,255,255,0.06)]
                      group-hover:text-foreground
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy (same style as About blocks) */}
        {/* Learning Philosophy — Tree layout (ONLY 2 lines kept) */}
<div className="mt-10 p-2 md:p-4">
  {/* Header */}
  <div className="flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
    <h3 className="font-semibold text-lg">{LEARNING.title}</h3>
  </div>

  {/* Tree wrapper */}
  <div className="mt-8 relative">
    {/* center vertical line (desktop only) */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(0,229,168,0.65)]" />

    <div className="space-y-6 md:space-y-10">
      {LEARNING.items.map((i, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <div
            key={i.title}
            className="relative md:grid md:grid-cols-2 md:gap-10"
          >
            {/* MOBILE (single column, compact) */}
            <div className="md:hidden relative pl-6">
              {/* neon dot */}
              <div className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full bg-neon shadow-(--glow-soft)" />

              <div className="group px-2 py-3">
                <p className="font-medium group-hover:text-neon transition-colors">
                  {i.title}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {i.desc}
                </p>

                <div
                  className="
                    mt-3 h-px w-8
                    bg-[rgba(0,229,168,0.20)]
                    group-hover:w-12 group-hover:bg-[rgba(0,229,168,0.65)]
                    transition-all
                  "
                />
              </div>
            </div>

            {/* DESKTOP LEFT */}
            <div className="hidden md:block">
              {isLeft ? (
                <div className="flex justify-end">
                  <div className="relative max-w-md">
                    {/* dot on center line */}
                    <div className="absolute -right-[22px] top-4 h-2.5 w-2.5 rounded-full bg-neon shadow-(--glow-soft)" />

                    <div className="group px-3 py-3 hover:-translate-y-0.5 transition">
                      <p className="font-medium group-hover:text-neon transition-colors">
                        {i.title}
                      </p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {i.desc}
                      </p>

                      <div
                        className="
                          mt-3 h-px w-10
                          bg-[rgba(0,229,168,0.20)]
                          group-hover:w-16 group-hover:bg-[rgba(0,229,168,0.65)]
                          transition-all
                        "
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* DESKTOP RIGHT */}
            <div className="hidden md:block">
              {!isLeft ? (
                <div className="flex justify-start">
                  <div className="relative max-w-md">
                    {/* dot on center line */}
                    <div className="absolute -left-[22px] top-4 h-2.5 w-2.5 rounded-full bg-neon shadow-(--glow-soft)" />

                    <div className="group px-3 py-3 hover:-translate-y-0.5 transition">
                      <p className="font-medium group-hover:text-neon transition-colors">
                        {i.title}
                      </p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {i.desc}
                      </p>

                      <div
                        className="
                          mt-3 h-px w-10
                          bg-[rgba(0,229,168,0.20)]
                          group-hover:w-16 group-hover:bg-[rgba(0,229,168,0.65)]
                          transition-all
                        "
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
