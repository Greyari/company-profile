// ==========================================
// src/components/about/AboutHero.tsx
// ==========================================
"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function AuthorizedHero() {
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
          src="/images/hero/about.webp"
          alt="About Kreatif System"
          fill
          priority
          sizes="100vw"
          className="object-cover"
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
            <motion.div
              variants={fadeIn("right", { offset: 50, duration: 0.8 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-sm text-white/80 mb-2">
                PT Kreatif System Indonesia
              </p>

              <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                Authorized Partner of <br />
                <span className="text-red-600">Dahua</span> Technology
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
