// ==========================================
// src/components/about/AboutHero.tsx
// ==========================================
"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function AboutHeroVM() {
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
      <section className="mt-10 mb-20 relative flex items-center h-[60vh] min-h-100 overflow-hidden">
        <Image
          src="/images/contents/0001.jpg"
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
              Vision & Mission
            </h1>
            <p className="text-sm md:text-lg mb-4 text-white/70">
              Your trusted partner in innovative security technology solutions
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
