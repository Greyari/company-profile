"use client";

import MotionLink from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/fadeIn";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * About Section
 * - Background image with layered gradient overlays
 * - Text content always rendered above overlays
 * - Bottom-to-top gradient includes backdrop blur
 */

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      className="
        relative min-h-screen flex items-center
        overflow-hidden
      "
    >
      <Image
        src="/images/hero/about.webp"
        alt="Hero background for About section"
        fill
        priority
        sizes="100vw"
        className="object-cover  object-[30%_20%]        
        md:object-[70%_40%]    
        lg:object-[100%_80%]"
      />
      {/* =========================
          Gradient & Blur Overlays
          ========================= */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Bottom → Top */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent " />

        {/* Top → Bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-transparent" />

        {/* Left → Right */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

        {/* Right → Left */}
        <div className="absolute inset-0 bg-linear-to-l from-black/20 via-black/10 to-transparent" />
      </div>

      {/* =========================
          Main Content (Above Overlay)
          ========================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* =========================
              Left Column – About Us
              ========================= */}
          <motion.div
            variants={fadeIn("left", { offset: 50, duration: 0.8 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:pr-36 py-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {" "}
              {t("title")}
            </h2>

            <p className="text-sm text-white/90 leading-relaxed  mb-6 max-w-md">
              {t("description")}
            </p>

            <AnimatedButton href="/about" label={t("button")} />
          </motion.div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-64 bg-white/50" />

          {/* =========================
              Right Column – Partner Info
              ========================= */}
          <motion.div
            variants={fadeIn("right", { offset: 50, duration: 0.8 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:pl-36 py-10"
          >
            <p className="text-sm text-white/80 mb-2">{t("partner.name")}</p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {t("partner.authorized")} <br />
              <span className="text-red-600">{t("partner.brand")} </span>
              {t("partner.tech")}
            </h3>

            <AnimatedButton href="/authorized" label={t("partner.button")} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable animated button component
 * Keeps motion logic in one place
 */
function AnimatedButton({ href, label }: { href: string; label: string }) {
  return (
    <MotionLink
      href={href}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        border border-white/70
        text-xs font-light text-white/70
        rounded-full
        transition-colors
        hover:bg-white
        hover:text-black
      "
    >
      {label}
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
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </motion.span>
    </MotionLink>
  );
}
