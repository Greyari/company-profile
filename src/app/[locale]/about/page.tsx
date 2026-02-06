// ==========================================
// src/app/about/page.tsx
// ==========================================
import AboutHero from "@/components/about/AboutHero";
import AboutHeroVM from "@/components/about/AboutHeroVM";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutVision-Mission";
import AboutTeam from "@/components/about/AboutWhy";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PT. Kreatif System Indonesia",
  description:
    "PT. Kreatif System Indonesia – Solusi teknologi keamanan terpercaya. Temukan visi, misi, tim ahli, dan kisah kami.",
  openGraph: {
    title: "About PT. Kreatif System Indonesia",
    description:
      "Pelajari lebih lanjut tentang visi, misi, nilai, dan tim kami di PT. Kreatif System Indonesia.",
    url: "https://www.kreatifsystem.com/about",
    images: ["/images/hero/about.webp"],
    siteName: "PT. Kreatif System Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PT. Kreatif System Indonesia",
    description:
      "Pelajari lebih lanjut tentang visi, misi, nilai, dan tim kami di PT. Kreatif System Indonesia.",
    images: ["/images/contents/112.jpg"],
  },
};

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
