"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/fadeIn";
import { use } from "react";

export default function About() {
  return (
    <section
      className="
        relative min-h-screen flex items-center
        bg-[url('/images/cctv-hero-bg.webp')]
        bg-cover bg-no-repeat
        bg-position-[100%_0.05%]
      "
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/5 to-black/30" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: About Us */}
          <motion.div
            variants={fadeIn("left", { offset: 50, duration: 0.8 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="md:pr-35 py-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-md">
              We deliver integrated and customizable security solutions, with
              Trustworthy and supportive partner by providing excellent products
            </p>
            <motion.a
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                border border-white/70
                text-white/70 text-xs
                rounded-full font-light
                transition-colors
                hover:bg-gray-100
                hover:text-black
              "
              whileHover="hovered"
              initial="rest"
              animate="rest"
            >
              Read More
              <motion.span
                className="inline-block"
                variants={{
                  rest: { x: 0 },
                  hovered: { x: 6 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right-icon lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Garis Vertikal Tengah - Desktop Only*/}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-64 bg-white/50" />

          {/* Kolom Kanan: Partner Info */}
          <motion.div
            variants={fadeIn("right", { offset: 50, duration: 0.8 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="md:pl-35 py-10"
          >
            <p className="text-white/80 text-lg mb-2">
              PT Kreatif System Indonesia
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Authorized Partner of <br />
              <span className="text-red-600">Dahua</span> Technology
            </h3>
            <motion.a
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                border border-white/70
                text-white/70 text-xs
                rounded-full font-light
                transition-colors
                hover:bg-gray-100
                hover:text-black
              "
              whileHover="hovered"
              initial="rest"
              animate="rest"
            >
              Read More
              <motion.span
                className="inline-block"
                variants={{
                  rest: { x: 0 },
                  hovered: { x: 6 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right-icon lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
