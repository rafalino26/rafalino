import SectionHeading from "@/components/SectionHeading";
import { ABOUT } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={ABOUT.title} desc={ABOUT.intro} />

        {/* Top grid: Journey + Quick Facts */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          {/* Journey */}
          <div className="lg:col-span-7 rounded-3xl bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
              <h3 className="font-semibold text-lg">My Journey</h3>
            </div>

            <div className="mt-5 space-y-3 text-muted leading-relaxed">
              {ABOUT.journey.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="lg:col-span-5 rounded-3xl bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
              <h3 className="font-semibold text-lg">Quick Facts</h3>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {ABOUT.quickFacts.map((q) => (
                <div
                  key={q.label}
                  className="
                    group
                    rounded-2xl
                    bg-[rgba(255,255,255,0.04)]
                    p-4
                    transition
                    hover:bg-[rgba(255,255,255,0.06)]
                  "
                >
                  <p className="text-xs text-muted group-hover:text-neon transition-colors">
                    {q.label}
                  </p>
                 <p className="mt-1 font-medium group-hover:text-[rgba(0,229,168,0.95)] transition-colors">
                    {q.value}
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
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8">
          {/* Header (same style language as hero) */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-neon shadow-(--glow-soft)" />
            <h3 className="font-semibold text-2xl">My Timeline</h3>
            <div className="hidden md:block h-px flex-1 bg-neon shadow-(--glow-soft)" />
          </div>

          {/* Timeline items */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {ABOUT.timeline.map((t) => (
              <div
                key={t.year}
                className="
                  group
                  relative
                  rounded-2xl
                  px-1 py-2 md:px-2 md:py-3
                  transition
                "
              >
                {/* Accent dot + subtle vertical line (desktop) */}
                <div className="absolute -left-2 top-6 hidden md:block">
                  <div className="h-2 w-2 rounded-full bg-neon opacity-70 group-hover:opacity-100 transition" />
                </div>

                {/* “Stats-like” year */}
                <p
                  className="
                    text-3xl font-semibold tracking-tight
                    group-hover:translate-x-1 transition-transform
                  "
                >
                  {t.year}
                </p>

                {/* Title */}
                <p className="mt-2 font-medium">
                  {t.title}
                </p>

                {/* Description */}
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {t.desc}
                </p>

                {/* Hover accent underline */}
                <div
                  className="
                    mt-4 h-px w-10
                    bg-[rgba(0,229,168,0.20)]
                    group-hover:w-16 group-hover:bg-[rgba(0,229,168,0.55)]
                    transition-all
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
