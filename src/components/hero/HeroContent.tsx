"use client";

import { motion, AnimatePresence } from "framer-motion";
import HeroTitle from "./HeroTitle";
import { fadeIn } from "@/lib/fadeIn";
import { NavItem } from "@/types/hero.types";
import { ANIMATION_EASE } from "@/types/hero.types";
import Link from "next/link";

const MotionLink = motion(Link);

interface HeroContentProps {
  activeItem: NavItem;
}

const contentTransition = {
  duration: 0.6,
};

/**
 * Hero content section with animated title, subtitle and CTA
 */
export default function HeroContent({ activeItem }: HeroContentProps) {
  return (
    <motion.div
      variants={fadeIn("left", { offset: 164, duration: 1 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={`subtitle-${activeItem.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ...contentTransition, ease: "easeInOut" }}
          className="text-xs md:text-sm mb-1 text-white/70"
        >
          PT. Kreatif System Indonesia
        </motion.p>
      </AnimatePresence>

      {/* Animated Title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`title-${activeItem.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ...contentTransition, delay: 0.1, ease: "easeInOut" }}
        >
          <HeroTitle title={activeItem.title} />
        </motion.div>
      </AnimatePresence>

      {/* Animated Subtitle */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`subtitle-${activeItem.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ...contentTransition, delay: 0.2, ease: "easeInOut" }}
          className="text-xs md:text-sm mb-5 text-white/70"
        >
          {activeItem.subtitle}
        </motion.p>
      </AnimatePresence>

      {/* CTA Button */}
      <MotionLink
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
        Get Started
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </motion.span>
      </MotionLink>
    </motion.div>
  );
}
