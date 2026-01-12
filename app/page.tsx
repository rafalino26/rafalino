import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function Page() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Hero usually appears immediately (no need to reveal), but you can if you want */}
        <HeroSection />

        {/* Wave reveal for the rest */}
        <RevealGroup>
          <Reveal>
            <AboutSection />
          </Reveal>

          <Reveal>
            <SkillsSection />
          </Reveal>

          <Reveal>
            <ProjectsSection />
          </Reveal>

          <Reveal>
            <ContactSection />
          </Reveal>
        </RevealGroup>
      </main>
    </div>
  );
}
