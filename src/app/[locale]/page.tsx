import Hero from "@/components/hero/Hero";
import Solutions from "@/components/landing/Product";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Clients from "@/components/landing/Clients";
import Service from "@/components/landing/Service";
import Brand from "@/components/landing/Brand";
import FAQ from "@/components/landing/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT. Kreatif System Indonesia - Home | Security Solutions",
  description:
    "PT. Kreatif System Indonesia menyediakan solusi keamanan modern, CCTV, Access Control, Audio Paging, dan integrasi sistem profesional untuk bisnis Anda.",
  openGraph: {
    title: "PT. Kreatif System Indonesia - Security Solutions",
    description:
      "Solusi keamanan lengkap: CCTV, Access Control, Audio Paging, sistem terintegrasi untuk bisnis modern.",
    images: ["/images/hero/about.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Kreatif System Indonesia - Security Solutions",
    description:
      "Solusi keamanan lengkap: CCTV, Access Control, Audio Paging, sistem terintegrasi untuk bisnis modern.",
    images: ["/images/hero/about.webp"],
  },
};
export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <Solutions />
      <Brand />
      <Projects />
      <Clients />
      <FAQ />
    </main>
  );
}
