"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* =====================
   CONSTANTS
===================== */
const CARD_WIDTH = 380;
const CARD_GAP = 24;
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;
const EDGE_PADDING = 40;
const IDLE_DELAY = 5000;

/* =====================
   DATA
===================== */
const solutions = [
  {
    id: 1,
    title: "IP Camera",
    description:
      "Driven by a passion for excellence, PT Kreatif System Indonesia continues to set the standard in security and technology.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Attendance System",
    description:
      "All in one system fingerprint / rfid integration system for security solutions management and efficiency.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Network Solutions",
    description:
      "Complete IT infrastructure and support services tailored to meet the diverse and evolving needs of clients.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Access Control",
    description:
      "Smart door lock and barrier gate systems providing peace of mind and empowering businesses to thrive.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Smart Home",
    description:
      "Future-proof automation for residential and commercial buildings with cutting-edge ecosystem integration.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "IT Consultancy",
    description:
      "Expert guidance for your digital transformation journey with specialized professional team support.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
];

/* =====================
   COMPONENT
===================== */
export default function Solutions() {
  const x = useMotionValue(0);
  const lastInteraction = useRef(Date.now());
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
    return -(totalWidth - containerWidth + EDGE_PADDING * 2);
  }, [containerWidth]);

  /* ---------- Pagination ---------- */
  const pageCount = useMemo(() => {
    const scrollable = Math.abs(maxScroll);
    return Math.max(1, Math.ceil(scrollable / TOTAL_CARD_WIDTH) + 1);
  }, [maxScroll]);

  /* ---------- Track Active Page ---------- */
  useEffect(() => {
    return x.on("change", (latest) => {
      const page = Math.round(Math.abs(latest) / TOTAL_CARD_WIDTH);
      setActivePage(Math.min(page, pageCount - 1));
    });
  }, [pageCount]);

  /* ---------- Auto Scroll (SMOOTH) ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current < IDLE_DELAY) return;

      const nextPage = activePage + 1;
      const target =
        nextPage >= pageCount
          ? 0
          : Math.max(maxScroll, -nextPage * TOTAL_CARD_WIDTH);

      animate(x, target, {
        type: "spring",
        stiffness: 120,
        damping: 25,
      });

      lastInteraction.current = Date.now();
    }, 1000);

    return () => clearInterval(timer);
  }, [activePage, pageCount, maxScroll]);

  /* =====================
     RENDER
  ===================== */
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-8 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our Solution
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Our products are developed as part of an integrated ecosystem
            designed to support and optimize business operations.
          </p>
        </div>

        {/* CAROUSEL */}
        <motion.div
          className="flex gap-6 pb-12 px-10 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: maxScroll, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          onDragStart={() => (lastInteraction.current = Date.now())}
        >
          {solutions.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="
                shrink-0 w-95 rounded-3xl p-6 bg-white
                 border border-transparent
                transition-all duration-300
                shadow-none hover:shadow-xl
                  hover:border-gray-200
              "
            >
              <div className="h-60 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              <h3 className="text-xl text-black/70 font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                {item.description}
              </p>

              <Link
                href="#"
                className="text-sm text-black/50 hover:text-black font-semibold inline-flex items-center gap-2"
              >
                See Details
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* PAGINATION */}
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
      </div>
    </section>
  );
}
