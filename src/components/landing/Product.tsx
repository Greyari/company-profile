"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
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
const MOBILE_BREAKPOINT = 768;

/* =====================
   CATEGORY MAPPING
===================== */
const CATEGORY_SLUGS: Record<string, string> = {
  CCTV: "cctv",
  "PABX System": "pabx",
  HDCVI: "hdcvi",
  "Audio Paging": "audiopaging",
  "IP Camera": "ipcamera",
  "DVR/NVR": "dvrnvr",
  "Access Control": "accesscontrol",
};

/* =====================
   DATA
===================== */
const solutions = [
  {
    id: 1,
    title: "CCTV",
    description:
      "Comprehensive CCTV surveillance solutions for real-time monitoring, incident recording, and enhanced security across residential and commercial areas.",
    image: "/images/product/CCTV-S.png",
  },
  {
    id: 2,
    title: "PABX System",
    description:
      "Reliable PABX communication systems designed to optimize internal and external voice communication efficiency for businesses of all sizes.",
    image: "/images/product/PABX.png",
  },
  {
    id: 3,
    title: "HDCVI",
    description:
      "High Definition Composite Video Interface (HDCVI) technology delivering crystal-clear video quality with long-distance transmission reliability.",
    image: "/images/product/HDCVI.png",
  },
  {
    id: 4,
    title: "Audio Paging",
    description:
      "Integrated audio paging systems for clear announcements, emergency alerts, and efficient communication within large facilities and buildings.",
    image: "/images/product/audioPaging.png",
  },
  {
    id: 5,
    title: "IP Camera",
    description:
      "Advanced IP camera solutions with network-based monitoring, remote access, and high-resolution imaging for modern security needs.",
    image: "/images/product/IPCAM.png",
  },
  {
    id: 6,
    title: "DVR/NVR",
    description:
      "Digital and Network Video Recorder systems ensuring secure video storage, playback, and centralized surveillance management.",
    image: "/images/product/DVR.png",
  },
  {
    id: 7,
    title: "Access Control",
    description:
      "Smart access control systems using card, fingerprint, or RFID technology to manage entry points and enhance security control.",
    image: "/images/product/AC.png",
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
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  /* ---------- Layout & Responsive ---------- */
  useEffect(() => {
    const update = () => {
      setContainerWidth(window.innerWidth);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------- Calculate Max Scroll ---------- */
  const maxScroll = useMemo(() => {
    if (isMobile) {
      const cardWidth = containerWidth * 0.85;
      const gap = 16;
      const totalWidth = solutions.length * (cardWidth + gap);
      return -(totalWidth - containerWidth);
    }
    const totalWidth = solutions.length * TOTAL_CARD_WIDTH;
    return -(totalWidth - containerWidth + EDGE_PADDING * 2);
  }, [containerWidth, isMobile]);

  /* ---------- Pagination ---------- */
  const pageCount = useMemo(() => {
    if (isMobile) {
      return solutions.length;
    }
    const scrollable = Math.abs(maxScroll);
    return Math.max(1, Math.ceil(scrollable / TOTAL_CARD_WIDTH) + 1);
  }, [maxScroll, isMobile]);

  /* ---------- Track Active Page ---------- */
  useEffect(() => {
    return x.on("change", (latest) => {
      if (isMobile) {
        const cardWidth = containerWidth * 0.85;
        const gap = 16;
        const page = Math.round(Math.abs(latest) / (cardWidth + gap));
        setActivePage(Math.min(page, solutions.length - 1));
      } else {
        const page = Math.round(Math.abs(latest) / TOTAL_CARD_WIDTH);
        setActivePage(Math.min(page, pageCount - 1));
      }
    });
  }, [pageCount, x, isMobile, containerWidth]);

  /* ---------- Snap to Center on Mobile ---------- */
  const handleDragEnd = () => {
    if (!isMobile) return;

    const cardWidth = containerWidth * 0.85;
    const gap = 16;
    const currentX = x.get();
    const nearestIndex = Math.round(Math.abs(currentX) / (cardWidth + gap));
    const clampedIndex = Math.max(
      0,
      Math.min(nearestIndex, solutions.length - 1)
    );
    const targetX = -clampedIndex * (cardWidth + gap);

    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });

    lastInteraction.current = Date.now();
  };

  /* ---------- Auto Scroll ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current < IDLE_DELAY) return;

      const nextPage = activePage + 1;

      if (isMobile) {
        const cardWidth = containerWidth * 0.85;
        const gap = 16;
        const target =
          nextPage >= solutions.length ? 0 : -nextPage * (cardWidth + gap);

        animate(x, target, {
          type: "spring",
          stiffness: 120,
          damping: 25,
        });
      } else {
        const target =
          nextPage >= pageCount
            ? 0
            : Math.max(maxScroll, -nextPage * TOTAL_CARD_WIDTH);

        animate(x, target, {
          type: "spring",
          stiffness: 120,
          damping: 25,
        });
      }

      lastInteraction.current = Date.now();
    }, 1000);

    return () => clearInterval(timer);
  }, [activePage, pageCount, maxScroll, x, isMobile, containerWidth]);

  /* ---------- Get Product Link ---------- */
  const getProductLink = (title: string) => {
    const slug = CATEGORY_SLUGS[title];
    return slug ? `/products/${slug}` : "/products";
  };

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
          className="flex gap-4 md:gap-6 pb-12 px-6 md:px-10 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: maxScroll, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          onDragStart={() => (lastInteraction.current = Date.now())}
          onDragEnd={handleDragEnd}
        >
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              onTapStart={() => setActiveCard(item.id)}
              onTap={() => setActiveCard(null)}
              onTapCancel={() => setActiveCard(null)}
              className={`
                shrink-0 rounded-3xl p-6 bg-white
                border border-transparent
                transition-all duration-300
                shadow-none
                ${
                  isMobile
                    ? "w-[85vw]"
                    : "w-95 hover:shadow-xl hover:border-gray-200"
                }
                ${activeCard === item.id ? "shadow-xl border-gray-200" : ""}
              `}
            >
              {/* Image */}
              <div className="relative h-48 md:h-60 rounded-2xl overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={240}
                  sizes="(max-width: 768px) 70vw, 240px"
                  className="object-contain"
                  draggable={false}
                  priority={index < 2}
                />
              </div>

              <h3 className="text-xl text-black/70 font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                {item.description}
              </p>

              <Link
                href={getProductLink(item.title)}
                className="text-sm text-black/50 hover:text-black font-semibold inline-flex items-center gap-2 transition-colors"
                onPointerDown={(e) => e.stopPropagation()}
              >
                See More
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
