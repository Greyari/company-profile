"use client";

import { useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";
import { navItems } from "@/types/heroData";

/**
 * Main Hero component with Petronas-style dissolve transition
 * Implements clean, maintainable architecture with separation of concerns
 */
export default function Hero() {
  const [activeNav, setActiveNav] = useState(5);
  const activeItem =
    navItems.find((item) => item.id === activeNav) || navItems[4];

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
          onNavigate={setActiveNav}
        />
      </div>
    </section>
  );
}
