// src/app/page.tsx
import Hero from "@/components/hero/Hero";
import Solutions from "@/components/landing/Product";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Clients from "@/components/landing/Clients";
import Service from "@/components/landing/Service";
import Brand from "@/components/landing/Brand";
import FAQ from "@/components/landing/FAQ";

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
