"use client";

import BackgroundLayer from "./HeroBGLayer";
import { NavItem } from "@/types/hero.types";

interface HeroBackgroundProps {
  items: NavItem[];
  activeId: number;
}

/**
 * Container for all background layers with gradient overlays
 * Implements Petronas-style dissolve transition effect
 */
export default function HeroBackground({
  items,
  activeId,
}: HeroBackgroundProps) {
  return (
    <>
      {/* Background Layers Stack */}
      <div className="absolute inset-0">
        {items.map((item, index) => (
          <BackgroundLayer
            key={item.id}
            imageUrl={item.image}
            isActive={item.id === activeId}
            zIndex={item.id === activeId ? 2 : 1}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/5 to-black/0 pointer-events-none z-3" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-black/0 pointer-events-none z-3" />
      <div className="absolute inset-0 bg-linear-to-l from-black/5 via-black/3 to-black/0 pointer-events-none z-3" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/0 pointer-events-none z-3" />
    </>
  );
}
