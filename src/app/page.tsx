// src/app/page.tsx
import Hero from "@/components/hero/Hero";
import Solutions from "@/components/landing/Product";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Clients from "@/components/landing/Clients";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";
import Service from "@/components/landing/Service";
import Brand from "@/components/landing/Brand";
import Workflow from "@/components/landing/Workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <Solutions />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Brand />
      </ScrollReveal>
      <ScrollReveal>
        <Service />
      </ScrollReveal>
      <ScrollReveal>
        <Clients />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Workflow />
      </ScrollReveal>
    </main>
  );
}
