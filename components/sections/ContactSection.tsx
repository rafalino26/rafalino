import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/data/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-16 md:pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={CONTACT.title} desc={CONTACT.desc} />

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="mt-4 space-y-3">
              {CONTACT.cards.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4"
                >
                  <p className="text-xs text-[rgb(var(--muted))]">{c.label}</p>
                  <p className="mt-1 font-medium">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
            <h3 className="font-semibold">Send me a message</h3>

            {/* UI-only form (no backend yet) */}
            <form className="mt-4 grid gap-4">
              <input
                className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-3 outline-none"
                placeholder="Full Name"
              />
              <input
                className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-3 outline-none"
                placeholder="Email Address"
              />
              <textarea
                className="min-h-35 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-3 outline-none"
                placeholder="Your Message"
              />
              <button
                type="button"
                className="rounded-2xl px-5 py-3 text-sm font-medium text-white
                bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:opacity-90 transition"
              >
                Send Message
              </button>
              <p className="text-xs text-[rgb(var(--muted))]">
                (We can connect this form to email / API later.)
              </p>
            </form>
          </div>
        </div>

        <footer className="mt-10 text-sm text-[rgb(var(--muted))] flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rafalino. Built with Next.js & Tailwind.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-[rgb(var(--fg))]">About</a>
            <a href="#skills" className="hover:text-[rgb(var(--fg))]">Skills</a>
            <a href="#projects" className="hover:text-[rgb(var(--fg))]">Projects</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
