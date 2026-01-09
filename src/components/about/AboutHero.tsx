// ==========================================
// src/components/about/AboutHero.tsx
// ==========================================
"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "vision-mission", label: "Our Vision & Mission" },
  { id: "why-choose-us", label: "Why Choose Us?" },
];

export default function AboutHero() {
  const [activeSection, setActiveSection] = useState("who-we-are");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="relative flex items-center h-[50vh] min-h-100 overflow-hidden">
        <Image
          src="/images/contents/112.jpg"
          alt="About Kreatif System"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[100%_45%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/30" />

        <motion.div
          variants={fadeIn("left", { offset: 164, duration: 1 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-semibold tracking-tight leading-13 mb-2">
              About Us
            </h1>
            <p className="text-sm md:text-lg mb-4 text-white/70">
              Your trusted partner in innovative security technology solutions
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section Navigator */}
      <nav className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative flex-1 h-full flex items-center justify-center
                  text-sm md:text-base font-medium transition-colors duration-300
                  ${
                    activeSection === section.id
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }
                  ${
                    index !== sections.length - 1
                      ? "border-r border-gray-200"
                      : ""
                  }
                `}
              >
                {section.label}
                <span
                  className={`
                    absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900
                    transition-transform duration-300 origin-left
                    ${
                      activeSection === section.id ? "scale-x-100" : "scale-x-0"
                    }
                  `}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
