"use client";

import { useState, useEffect, useRef } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";
import { navItems } from "@/data/heroData";

const AUTO_ROTATE_INTERVAL = 8000; // 8 seconds

/**
 * Main Hero component with auto-rotate and manual navigation
 * Auto-rotates through nav items every 8 seconds
 * Manual interaction resets the timer
 */
export default function Hero() {
  const [activeNav, setActiveNav] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeItem =
    navItems.find((item) => item.id === activeNav) || navItems[0];

  /**
   * Navigate to next item in sequence
   */
  const rotateToNext = () => {
    setActiveNav((current) => {
      const currentIndex = navItems.findIndex((item) => item.id === current);
      const nextIndex = (currentIndex + 1) % navItems.length;
      return navItems[nextIndex].id;
    });
  };

  /**
   * Handle manual navigation with timer reset
   */
  const handleManualNavigate = (id: number) => {
    setActiveNav(id);
    resetTimer();
  };

  /**
   * Clear and restart auto-rotate timer
   */
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(rotateToNext, AUTO_ROTATE_INTERVAL);
  };

  /**
   * Initialize auto-rotate on mount
   */
  useEffect(() => {
    timerRef.current = setInterval(rotateToNext, AUTO_ROTATE_INTERVAL);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background with dissolve transition */}
      <HeroBackground items={navItems} activeId={activeNav} />

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22 text-white w-full z-10">
        <div className="mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent activeItem={activeItem} />
        </div>

        <HeroNavigation
          items={navItems}
          activeNav={activeNav}
          onNavigate={handleManualNavigate}
        />
      </div>
    </section>
  );
}
