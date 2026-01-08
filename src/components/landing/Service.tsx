"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

/* =====================
   TYPES
===================== */
interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

/* =====================
   CONSTANTS
===================== */
const CARD_WIDTH = 350;
const CARD_GAP = 24;
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;
const SIDE_PADDING = 10;
const IDLE_DELAY = 5000;
const AUTO_SCROLL_INTERVAL = 5000;

/* =====================
   DATA
===================== */
const solutions: Solution[] = [
  {
    id: 1,
    title: "CCTV & Security System",
    description:
      "End-to-end CCTV and security systems providing real-time surveillance, recording, and threat monitoring to enhance safety for residential, commercial, and industrial environments.",
    image: "/images/test3.jpg",
    link: "/cctv",
  },
  {
    id: 2,
    title: "Attendance & System Control",
    description:
      "Integrated attendance and access control solutions using fingerprint, RFID, or facial recognition to accurately track workforce activity and improve operational control.",
    image: "/images/test-009.jpg",
    link: "/access-control",
  },
  {
    id: 3,
    title: "IT Support & Maintenance",
    description:
      "Reliable IT support and maintenance services covering hardware, software, and network infrastructure to ensure stable, secure, and efficient business operations.",
    image: "/images/test.jpg",
    link: "/it-support",
  },
  {
    id: 4,
    title: "Public Address, Parking Barrier & Electrical Services",
    description:
      "Integrated public address systems, automated parking barriers, and electrical services designed to improve communication, traffic management, and facility operations.",
    image: "/images/test4.jpg",
    link: "/public-address",
  },
  {
    id: 5,
    title: "PABX & Communication Systems",
    description:
      "Professional PABX and communication system solutions enabling clear, reliable internal and external communication for offices, buildings, and enterprise environments.",
    image: "/images/test-880.jpg",
    link: "/pabx",
  },
  {
    id: 6,
    title: "Alarm & Safety Solutions",
    description:
      "Comprehensive alarm and safety systems including fire alarms, intrusion detection, and emergency alert solutions to protect people, assets, and critical facilities.",
    image: "/images/test2.jpg",
    link: "/alarm",
  },
];

/* =====================
   HOOKS
===================== */
const useContainerWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

/* =====================
   CARD
===================== */
function SolutionCard({ solution }: { solution: Solution }) {
  const [hovered, setHovered] = useState(false);
  const handleTouchStart = () => setHovered(true);
  const handleTouchEnd = () => setHovered(false);

  return (
    <motion.div
      className="relative shrink-0 w-87.5 h-112.5 rounded-2xl overflow-hidden border border-transparent bg-white shadow-lg hover:shadow-2xl hover:border-gray-200 transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <img
        src={solution.image}
        alt={solution.title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Glass Morphism Overlay */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-end"
        initial={false}
        animate={{
          backdropFilter: hovered ? "blur(4px)" : "blur(0px)",
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,1.0), rgba(0,0,0,0.7), rgba(0,0,0,0.9))"
            : "linear-gradient(to top, rgba(0,0,0,1.0), rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Title */}
        <motion.h3
          className="text-white text-lg font-normal mb-3"
          initial={false}
          animate={{
            textAlign: hovered ? "left" : "center",
            y: hovered ? 0 : 40,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          {solution.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-200 text-sm leading-relaxed"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            height: hovered ? "auto" : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {solution.description}
        </motion.p>

        {/* Learn More Link */}
        <Link href={solution.link}>
          <motion.div
            className="mt-4 flex items-center justify-between text-sm font-medium text-white hover:text-gray-300 transition-colors group"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ delay: hovered ? 0.1 : 0, duration: 0.2 }}
          >
            Learn More
            <CircleArrowRight
              size={46}
              strokeWidth={1}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.div>
        </Link>
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
  const containerRef = useRef<HTMLDivElement>(null);

  const containerWidth = useContainerWidth();
  const [activePage, setActivePage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate max scroll boundary
  const maxScroll = useMemo(() => {
    const totalWidth = solutions.length * TOTAL_CARD_WIDTH;
    return -(totalWidth - containerWidth + SIDE_PADDING * 2);
  }, [containerWidth]);

  // Calculate total pages
  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(Math.abs(maxScroll) / TOTAL_CARD_WIDTH) + 1);
  }, [maxScroll]);

  // Update active page based on scroll position
  useEffect(() => {
    return x.on("change", (latest) => {
      const page = Math.round(Math.abs(latest) / TOTAL_CARD_WIDTH);
      setActivePage(Math.min(page, pageCount - 1));
    });
  }, [x, pageCount]);

  // Snap to nearest card on drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    idleRef.current = Date.now();

    const current = x.get();
    const nearest = Math.round(current / TOTAL_CARD_WIDTH) * TOTAL_CARD_WIDTH;
    const target = Math.max(maxScroll, Math.min(0, nearest));

    animate(x, target, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  // Auto scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (isDragging || Date.now() - idleRef.current < IDLE_DELAY) return;

      const next = activePage + 1;
      const target =
        next >= pageCount ? 0 : Math.max(maxScroll, -next * TOTAL_CARD_WIDTH);

      animate(x, target, {
        type: "spring",
        stiffness: 120,
        damping: 26,
      });
      idleRef.current = Date.now();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [activePage, pageCount, maxScroll, x, isDragging]);

  // Manual pagination click
  const handlePageClick = (pageIndex: number) => {
    const target = Math.max(maxScroll, -pageIndex * TOTAL_CARD_WIDTH);
    animate(x, target, {
      type: "spring",
      stiffness: 120,
      damping: 26,
    });
    idleRef.current = Date.now();
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          Our Solutions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-sm md:text-base">
          We provide comprehensive security and IT solutions tailored to your
          business needs.
        </p>
      </div>

      {/* Carousel */}
      <motion.div
        ref={containerRef}
        className="flex gap-6 px-2.5 pb-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: maxScroll, right: 0 }}
        dragElastic={0.08}
        dragMomentum={false}
        style={{ x }}
        onDragStart={() => {
          setIsDragging(true);
          idleRef.current = Date.now();
        }}
        onDragEnd={handleDragEnd}
      >
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6 px-4">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activePage ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
