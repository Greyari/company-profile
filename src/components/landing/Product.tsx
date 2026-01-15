"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  memo,
} from "react";
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
const THROTTLE_MS = 16; // ~60fps

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
      "Comprehensive CCTV surveillance solutions for real-time monitoring.",
    image: "/images/product/CCTV-S.png",
  },
  {
    id: 2,
    title: "PABX System",
    description:
      "Reliable PABX communication systems for businesses of all sizes.",
    image: "/images/product/PABX.png",
  },
  {
    id: 3,
    title: "HDCVI",
    description: "High Definition Composite Video Interface technology.",
    image: "/images/product/HDCVI.png",
  },
  {
    id: 4,
    title: "Audio Paging",
    description: "Integrated audio paging systems for announcements.",
    image: "/images/product/audioPaging.png",
  },
  {
    id: 5,
    title: "IP Camera",
    description: "Advanced IP camera solutions with remote access.",
    image: "/images/product/IPCAM.png",
  },
  {
    id: 6,
    title: "DVR/NVR",
    description: "Secure video storage and playback systems.",
    image: "/images/product/DVR.png",
  },
  {
    id: 7,
    title: "Access Control",
    description: "Smart access control systems with RFID and biometric.",
    image: "/images/product/AC.png",
  },
];

/* =====================
   UTILITY: Throttle
===================== */
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func(...args);
      }, delay - timeSinceLastCall);
    }
  };
};

/* =====================
   CARD (MEMOIZED)
===================== */
const SolutionCard = memo(function SolutionCard({
  item,
  isMobile,
  index,
  link,
}: {
  item: (typeof solutions)[number];
  isMobile: boolean;
  index: number;
  link: string;
}) {
  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.02 } : undefined}
      whileTap={{ scale: 0.98 }}
      className={`
        shrink-0 rounded-3xl p-6 bg-white
        border border-transparent
        transition-shadow duration-300
        ${isMobile ? "w-[85vw]" : "w-95 hover:shadow-xl hover:border-gray-200"}
      `}
    >
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

      <h3 className="text-xl text-black/70 font-bold mb-3">{item.title}</h3>

      <p className="text-sm text-gray-500 mb-6 line-clamp-3">
        {item.description}
      </p>

      <Link
        href={link}
        className="text-sm text-black/50 hover:text-black font-semibold inline-flex items-center gap-2"
        onPointerDown={(e) => e.stopPropagation()}
      >
        See More
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
});

/* =====================
   COMPONENT
===================== */
export default function Solutions() {
  const x = useMotionValue(0);
  const lastInteraction = useRef(Date.now());

  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState(0);

  /* ---------- Resize Handler (Throttled) ---------- */
  useEffect(() => {
    const updateDimensions = () => {
      setContainerWidth(window.innerWidth);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const throttledResize = throttle(updateDimensions, 150);

    updateDimensions();
    window.addEventListener("resize", throttledResize, { passive: true });
    return () => window.removeEventListener("resize", throttledResize);
  }, []);

  /* ---------- Max Scroll ---------- */
  const maxScroll = useMemo(() => {
    if (isMobile) {
      const cardWidth = containerWidth * 0.85;
      return -(solutions.length * (cardWidth + 16) - containerWidth);
    }
    return -(
      solutions.length * TOTAL_CARD_WIDTH -
      containerWidth +
      EDGE_PADDING * 2
    );
  }, [containerWidth, isMobile]);

  /* ---------- Page Count ---------- */
  const pageCount = useMemo(() => {
    return isMobile
      ? solutions.length
      : Math.max(1, Math.ceil(Math.abs(maxScroll) / TOTAL_CARD_WIDTH));
  }, [maxScroll, isMobile]);

  /* ---------- Track Page (Throttled via RAF) ---------- */
  useEffect(() => {
    let rafId = 0;
    let lastUpdate = 0;

    const unsubscribe = x.on("change", (latest) => {
      const now = performance.now();
      if (now - lastUpdate < THROTTLE_MS) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const page = isMobile
          ? Math.round(Math.abs(latest) / (containerWidth * 0.85 + 16))
          : Math.round(Math.abs(latest) / TOTAL_CARD_WIDTH);

        setActivePage(Math.min(page, pageCount - 1));
        lastUpdate = now;
      });
    });

    return () => {
      unsubscribe();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [x, isMobile, containerWidth, pageCount]);

  /* ---------- Drag End (Debounced) ---------- */
  const handleDragEnd = useCallback(() => {
    if (!isMobile) return;

    requestIdleCallback(
      () => {
        const cardWidth = containerWidth * 0.85;
        const index = Math.round(Math.abs(x.get()) / (cardWidth + 16));
        animate(x, -index * (cardWidth + 16), {
          type: "spring",
          stiffness: 300,
          damping: 30,
        });
      },
      { timeout: 100 }
    );

    lastInteraction.current = Date.now();
  }, [isMobile, containerWidth, x]);

  /* ---------- Auto Scroll ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current < IDLE_DELAY) return;

      requestIdleCallback(() => {
        const next = (activePage + 1) % pageCount;
        const target = isMobile
          ? -next * (containerWidth * 0.85 + 16)
          : Math.max(maxScroll, -next * TOTAL_CARD_WIDTH);

        animate(x, target, { type: "spring", stiffness: 120, damping: 25 });
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [activePage, pageCount, isMobile, containerWidth, maxScroll, x]);

  const getProductLink = useCallback(
    (title: string) => `/products/${CATEGORY_SLUGS[title] ?? ""}`,
    []
  );

  /* ---------- Interaction Handler ---------- */
  const handleInteraction = useCallback(() => {
    lastInteraction.current = Date.now();
  }, []);

  /* =====================
     RENDER
  ===================== */
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="text-center mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Product</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Our products are developed as part of an integrated ecosystem.
        </p>
      </div>

      <motion.div
        className="flex gap-4 md:gap-6 pb-12 px-6 md:px-10 cursor-grab"
        drag="x"
        dragConstraints={{ left: maxScroll, right: 0 }}
        dragElastic={0.08}
        dragMomentum={false}
        style={{ x }}
        onDragEnd={handleDragEnd}
        onPointerDown={handleInteraction}
      >
        {solutions.map((item, index) => (
          <SolutionCard
            key={item.id}
            item={item}
            index={index}
            isMobile={isMobile}
            link={getProductLink(item.title)}
          />
        ))}
      </motion.div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: pageCount }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === activePage ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
