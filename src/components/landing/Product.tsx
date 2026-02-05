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
import { useTranslations } from "next-intl";

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
  CCTV: "wifi",
  "PABX System": "pabx",
  HDCVI: "hdcvi",
  "Audio Paging": "audiopaging",
  "IP Camera": "ipcamera",
  "DVR/NVR": "dvrnvr",
  "Access Control": "accesscontrol",
};
/* ===================== DATA ===================== */
const solutions = [
  {
    id: 1,
    titleKey: "ipCamera.title",
    descriptionKey: "ipCamera.description",
    image: "/images/product/IPCamera/IP-Bullet-Cam.png",
    category: "IP Camera",
  },
  {
    id: 2,
    titleKey: "wifiCamera.title",
    descriptionKey: "wifiCamera.description",
    image: "/images/product/CCTV/Wifi-Outdoor.png",
    category: "CCTV",
  },
  {
    id: 3,
    titleKey: "hdcviCamera.title",
    descriptionKey: "hdcviCamera.description",
    image: "/images/product/HDCVI/Analog-Bullet.png",
    category: "HDCVI",
  },
  {
    id: 4,
    titleKey: "pabx.title",
    descriptionKey: "pabx.description",
    image: "/images/product/PABX.png",
    category: "PABX System",
  },
  {
    id: 5,
    titleKey: "audioPaging.title",
    descriptionKey: "audioPaging.description",
    image: "/images/product/audioPaging.png",
    category: "Audio Paging",
  },
  {
    id: 6,
    titleKey: "dvrnvr.title",
    descriptionKey: "dvrnvr.description",
    image: "/images/product/DVR.png",
    category: "DVR/NVR",
  },
  {
    id: 7,
    titleKey: "accessControl.title",
    descriptionKey: "accessControl.description",
    image: "/images/product/AC.png",
    category: "Access Control",
  },
];

/* =====================
   UTILITY: Throttle
===================== */
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
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
  t,
}: {
  item: (typeof solutions)[number];
  isMobile: boolean;
  index: number;
  link: string;
  t: (key: string) => string;
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
          alt={t(item.titleKey)}
          width={240}
          height={240}
          sizes="(max-width: 768px) 70vw, 240px"
          className="object-contain"
          draggable={false}
          priority={index < 2}
        />
      </div>

      <h3 className="text-xl text-black/70 font-bold mb-3">
        {t(item.titleKey)}
      </h3>

      <p className="text-sm text-gray-500 mb-6 line-clamp-3">
        {t(item.descriptionKey)}
      </p>

      <Link
        href={link}
        className="text-sm text-black/50 hover:text-black font-semibold inline-flex items-center gap-2"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {t("seeMore")}
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
});

/* =====================
   COMPONENT
===================== */
export default function Solutions() {
  const t = useTranslations("solutions3");
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
      { timeout: 100 },
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
    [],
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
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("title")}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          {t("description")}
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
            link={getProductLink(item.category)}
            t={t}
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
