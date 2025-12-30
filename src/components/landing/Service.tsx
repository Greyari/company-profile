"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

/* =====================
   TYPES
===================== */
interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
}

/* =====================
   CONSTANTS
===================== */
const CARD_WIDTH = 350;
const CARD_GAP = 24;
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;
const SIDE_PADDING = 10;
const IDLE_DELAY = 5000;

/* =====================
   DATA
===================== */
const solutions: Solution[] = [
  {
    id: 1,
    title: "Attendance & System Control",
    description:
      "An integrated attendance and system control solution designed to monitor activity, improve operational efficiency, and ensure secure workforce management.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "CCTV & Security System",
    description:
      "Advanced surveillance systems with real-time alerts and comprehensive coverage.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "IT Support Services",
    description:
      "Professional IT infrastructure management and technical support.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Network Solutions",
    description: "Enterprise-grade network design and optimization services.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions with robust security and monitoring.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    description: "Comprehensive protection against modern cyber threats.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
];

/* =====================
   CARD
===================== */
function SolutionCard({ solution }: { solution: Solution }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="
        relative shrink-0 w-87.5 h-112.5 rounded-2xl overflow-hidden
        border border-transparent bg-white
        shadow-none hover:shadow-xl hover:border-gray-200
        transition-all duration-300
      "
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <img
        src={solution.image}
        alt={solution.title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-end"
        animate={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7))"
            : "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Title */}
        <motion.h3
          className="text-white text-lg  mb-3"
          initial={false}
          animate={{
            textAlign: hovered ? "left" : "center",
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {solution.title}
        </motion.h3>

        <motion.p
          className="text-gray-200 text-sm leading-relaxed overflow-hidden"
          animate={{
            opacity: hovered ? 1 : 0,
            height: hovered ? "auto" : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          {solution.description}
        </motion.p>

        <motion.a
          href="#"
          className="
            mt-4 inline-flex items-center gap-2 text-sm font-medium
            text-white hover:text-gray-300 transition-colors
          "
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          Learn More
          <span className="transition-transform group-hover:translate-x-1">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

/* =====================
   MAIN
===================== */
export default function Solutions() {
  const x = useMotionValue(0);
  const idleRef = useRef(Date.now());

  const [containerWidth, setContainerWidth] = useState(0);
  const [activePage, setActivePage] = useState(0);

  /* ---------- Layout ---------- */
  useEffect(() => {
    const update = () => setContainerWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxScroll = useMemo(() => {
    const totalWidth = solutions.length * TOTAL_CARD_WIDTH;
    return -(totalWidth - containerWidth + SIDE_PADDING * 2);
  }, [containerWidth]);

  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(Math.abs(maxScroll) / TOTAL_CARD_WIDTH) + 1);
  }, [maxScroll]);

  /* ---------- Active Page ---------- */
  useEffect(() => {
    return x.on("change", (latest) => {
      const page = Math.round(Math.abs(latest) / TOTAL_CARD_WIDTH);
      setActivePage(Math.min(page, pageCount - 1));
    });
  }, [pageCount]);

  /* ---------- Auto Scroll ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - idleRef.current < IDLE_DELAY) return;

      const next = activePage + 1;
      const target =
        next >= pageCount ? 0 : Math.max(maxScroll, -next * TOTAL_CARD_WIDTH);

      animate(x, target, {
        type: "spring",
        stiffness: 120,
        damping: 26,
      });

      idleRef.current = Date.now();
    }, 1000);

    return () => clearInterval(timer);
  }, [activePage, pageCount, maxScroll]);

  /* =====================
     RENDER
  ===================== */
  return (
    <section className="py-24 bg-white overflow-hidden">
      <h2 className="text-4xl font-bold text-black text-center mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        We provide comprehensive security and IT solutions tailored to your
        business needs.
      </p>

      <motion.div
        className="flex gap-6 px-2.5 pb-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: maxScroll, right: 0 }}
        dragElastic={0.08}
        style={{ x }}
        onDragStart={() => (idleRef.current = Date.now())}
      >
        {solutions.map((s) => (
          <SolutionCard key={s.id} solution={s} />
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: pageCount }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activePage ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
