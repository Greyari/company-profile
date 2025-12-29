"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// =========================
// TYPE DEFINITIONS
// =========================

interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
}

// =========================
// CONSTANTS
// =========================

const CARD_WIDTH = 350;
const CARD_GAP = 24;
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;

const solutions: Solution[] = [
  {
    id: 1,
    title: "Attendance & System Control",
    description:
      "An integrated attendance and system control solution designed to monitor activity, improve operational efficiency, and ensure secure, accurate workforce management.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "CCTV & Security System",
    description:
      "Advanced surveillance and security monitoring systems with real-time alerts, recording capabilities, and comprehensive coverage for your facilities.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "IT Support Services",
    description:
      "Professional IT infrastructure management, troubleshooting, and technical support to keep your systems running smoothly and efficiently.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Network Solutions",
    description:
      "Enterprise-grade network design, implementation, and optimization services ensuring reliable connectivity and seamless data flow.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions with robust security, automated backups, and 24/7 monitoring to support your growing business needs.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive protection against cyber threats with advanced firewall systems, intrusion detection, and security audits.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
];

// =========================
// SOLUTION CARD COMPONENT
// =========================

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative shrink-0 w-87.5 h-112.5 rounded-2xl overflow-hidden active:cursor-grabbing"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content Container with Dynamic Gradient */}
        <motion.div
          className="absolute inset-0 p-8 flex flex-col justify-end"
          initial={false}
          animate={{
            background: isHovered
              ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7))"
              : "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Card Title */}
          <motion.h3
            className="text-white text-lg font-medium mb-3"
            initial={false}
            animate={{
              textAlign: isHovered ? "left" : "center",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {solution.title}
          </motion.h3>

          {/* Card Description - Shown on Hover */}
          <motion.p
            className="text-gray-200 text-sm leading-relaxed overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {solution.description}
          </motion.p>

          {/* Learn More Button - Shown on Hover */}
          <motion.div
            className="mt-4 inline-flex items-center gap-2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="text-sm font-medium">Learn More</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// =========================
// NAVIGATION ARROW COMPONENT
// =========================

interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

const NavigationArrow = ({
  direction,
  onClick,
  disabled = false,
}: NavigationArrowProps) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute top-1/2 -translate-y-1/2 z-20
        ${isLeft ? "left-4" : "right-4"}
        w-12 h-12 rounded-full bg-white/90 shadow-lg
        flex items-center justify-center
        transition-all duration-300
        ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:scale-110"}
      `}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        className={`w-6 h-6 text-gray-800 ${isLeft ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

// =========================
// PAGINATION DOTS COMPONENT
// =========================

// interface PaginationDotsProps {
//   total: number;
//   activeIndex: number;
//   onDotClick: (index: number) => void;
// }

// const PaginationDots = ({ total, activeIndex, onDotClick }: PaginationDotsProps) => {
//   return (
//     <div className="flex justify-center mt-8 gap-2" role="tablist" aria-label="Carousel navigation">
//       {Array.from({ length: total }).map((_, index) => (
//         <button
//           key={index}
//           onClick={() => onDotClick(index)}
//           className={`
//             w-2 h-2 rounded-full transition-all duration-300
//             ${index === activeIndex ? "bg-gray-800 w-8" : "bg-gray-300 hover:bg-gray-400"}
//           `}
//           aria-label={`Go to slide ${index + 1}`}
//           aria-selected={index === activeIndex}
//           role="tab"
//         />
//       ))}
//     </div>
//   );
// };

// =========================
// MAIN SOLUTIONS COMPONENT
// =========================

export default function Solutions() {
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);

  // Calculate maximum scroll distance
  const maxScroll = -(
    solutions.length * TOTAL_CARD_WIDTH -
    containerWidth +
    100
  );

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => setContainerWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate active index based on scroll position
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const index = Math.round(-latest / TOTAL_CARD_WIDTH);
      setActiveIndex(Math.max(0, Math.min(index, solutions.length - 1)));
    });
    return unsubscribe;
  }, [x]);

  // Navigate to specific card
  const scrollToIndex = (index: number) => {
    const targetX = -index * TOTAL_CARD_WIDTH;
    const clampedX = Math.max(maxScroll, Math.min(0, targetX));
    x.set(clampedX);
  };

  // Navigation handlers
  const handlePrevious = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < solutions.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden mt-30">
      <div className="mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-black text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-800 text-center mb-12 max-w-3xl mx-auto">
          We provide comprehensive security solutions tailored to your business
          needs
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Fade Gradient */}
          {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" /> */}

          {/* Right Fade Gradient */}
          {/* <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" /> */}

          {/* Navigation Arrows */}
          <NavigationArrow
            direction="left"
            onClick={handlePrevious}
            disabled={activeIndex === 0}
          />
          <NavigationArrow
            direction="right"
            onClick={handleNext}
            disabled={activeIndex === solutions.length - 1}
          />

          {/* Draggable Cards Container */}
          <motion.div
            className="flex gap-6 pb-8  active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: maxScroll,
              right: 0,
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            style={{ x }}
          >
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        {/* <PaginationDots 
          total={solutions.length}
          activeIndex={activeIndex}
          onDotClick={scrollToIndex}
        /> */}
      </div>
    </section>
  );
}
