"use client";

import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

type ScrollVelocityRowProps = {
  images: string[];
  direction?: 1 | -1;
  velocity?: number;
};

/**
 * Calculate total width of content for seamless wrapping
 */
function useContentWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

/**
 * Animated row component with scroll-based velocity
 */
export default function ScrollVelocityRow({
  images,
  direction = 1,
  velocity = 50,
}: ScrollVelocityRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const singleItemWidth = useContentWidth(wrapperRef);

  const x = useTransform(baseX, (v) => {
    if (singleItemWidth === 0) return 0;
    const wrapped = ((v % singleItemWidth) + singleItemWidth) % singleItemWidth;
    return -wrapped;
  });

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (singleItemWidth === 0) return;

    let moveBy =
      directionFactor.current * velocity * direction * (delta / 1000);

    const currentVelocity = velocityFactor.get();
    if (currentVelocity < 0) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * currentVelocity;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <motion.div
        ref={wrapperRef}
        style={{ x }}
        className="flex will-change-transform items-center gap-8 md:gap-12 lg:gap-16"
      >
        {images.map((imagePath, index) => (
          <div
            key={`first-${index}`}
            className="flex shrink-0 items-center justify-center"
          >
            <div className="relative h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-48 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={imagePath}
                alt={`Brand ${index + 1}`}
                fill
                className="object-contain drop-shadow-sm"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>
          </div>
        ))}
        {images.map((imagePath, index) => (
          <div
            key={`second-${index}`}
            className="flex shrink-0 items-center justify-center"
          >
            <div className="relative h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-48 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={imagePath}
                alt={`Brand ${index + 1}`}
                fill
                className="object-contain drop-shadow-sm"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
