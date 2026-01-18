import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>

      <footer className="py-10 text-center text-xs text-muted">
        Built with Next.js • Motion • 3D • Tailwind v4
      </footer>
    </>
  );
}
