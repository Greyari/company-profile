// ==========================================
// src/components/products/ProductHero.tsx
// ==========================================
"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "vision-mission", label: "Our Vision & Mission" },
  { id: "why-choose-us", label: "Why Choose Us?" },
];

export default function ProductHero() {
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
      <section
        className="
          relative flex items-center
          bg-[url('/images/cctv-product.webp')]
          bg-cover bg-no-repeat
          h-[50vh] min-h-100
        bg-position-[100%_45%]

        "
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-linear-to-l from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={fadeIn("left", { offset: 164, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-13 mb-2">
              Our Products
            </h1>
            <p className="text-sm md:text-lg mb-4 text-white/70">
              Your trusted partner in innovative security technology solutions
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
