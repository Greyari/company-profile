"use client";

import { CSSProperties } from "react";
import { TRANSITION_DURATION, ANIMATION_EASE } from "@/types/hero.types";

interface BackgroundLayerProps {
  imageUrl: string;
  isActive: boolean;
  zIndex: number;
}

/**
 * Individual background layer component with dissolve transition
 */
export default function BackgroundLayer({
  imageUrl,
  isActive,
  zIndex,
}: BackgroundLayerProps) {
  const style: CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "100% 0.05%",
    opacity: isActive ? 1 : 0,
    transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(${ANIMATION_EASE.join(
      ",",
    )})`,
    zIndex,
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={style}
      aria-hidden="true"
    />
  );
}
