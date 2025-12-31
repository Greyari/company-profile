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
    title: "CCTV Surveillance",
    description:
      "Comprehensive CCTV surveillance solutions for real-time monitoring, incident recording, and enhanced security across residential and commercial areas.",
    image: "/images/product/IPCAM.webp",
  },
  {
    id: 2,
    title: "PABX System",
    description:
      "Reliable PABX communication systems designed to optimize internal and external voice communication efficiency for businesses of all sizes.",
    image: "/images/product/PABX.webp",
  },
  {
    id: 3,
    title: "HDCVI",
    description:
      "High Definition Composite Video Interface (HDCVI) technology delivering crystal-clear video quality with long-distance transmission reliability.",
    image: "/images/product/HDCVI.webp",
  },
  {
    id: 4,
    title: "Audio Paging",
    description:
      "Integrated audio paging systems for clear announcements, emergency alerts, and efficient communication within large facilities and buildings.",
    image: "/images/product/audioPaging.webp",
  },
  {
    id: 5,
    title: "IP Camera",
    description:
      "Advanced IP camera solutions with network-based monitoring, remote access, and high-resolution imaging for modern security needs.",
    image: "/images/product/IPCAM.webp",
  },
  {
    id: 6,
    title: "DVR/NVR",
    description:
      "Digital and Network Video Recorder systems ensuring secure video storage, playback, and centralized surveillance management.",
    image: "/images/product/DVR.webp",
  },
  {
    id: 7,
    title: "Access Control",
    description:
      "Smart access control systems using card, fingerprint, or RFID technology to manage entry points and enhance security control.",
    image: "/images/product/AC.webp",
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
            Our Product
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
