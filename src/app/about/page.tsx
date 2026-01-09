// ==========================================
// src/app/about/page.tsx
// ==========================================
import AboutHero from "@/components/about/AboutHero";
import AboutHeroVM from "@/components/about/AboutHeroVM";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutVision-Mission";
import AboutTeam from "@/components/about/AboutWhy";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutHeroVM />

      <AboutValues />
      <AboutTeam />
    </main>
  );
}
