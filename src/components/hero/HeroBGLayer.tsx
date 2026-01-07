"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import { TRANSITION_DURATION, ANIMATION_EASE } from "@/types/hero.types";

interface BackgroundLayerProps {
  imageUrl: string;
  isActive: boolean;
  zIndex: number;
}

/**
 * Individual background layer component with dissolve transition
 * Uses Next.js Image component for automatic optimization
 */
export default function BackgroundLayer({
  imageUrl,
  isActive,
  zIndex,
}: BackgroundLayerProps) {
  const containerStyle: CSSProperties = {
    opacity: isActive ? 1 : 0,
    transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(${ANIMATION_EASE.join(
      ","
    )})`,
    zIndex,
  };

  return (
    <div className="absolute inset-0" style={containerStyle} aria-hidden="true">
      <Image
        src={imageUrl}
        alt=""
        fill
        sizes="100vw"
        priority={isActive}
        quality={90}
        className="object-cover object-[100%_0.05%]"
      />
    </div>
  );
}
