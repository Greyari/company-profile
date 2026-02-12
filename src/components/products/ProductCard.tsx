// components/products/ProductCard.tsx

"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

/**
 * Product card component props
 */
export interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  specifications: string[];
  href?: string;
}

/**
 * Product card component with specifications display
 */
export default function ProductCard({
  title,
  description,
  image,
  specifications,
  href = "#",
}: ProductCardProps) {
  const t = useTranslations("productPage.card");

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
        w-full rounded-3xl bg-white p-3 sm:p-6
        border border-transparent
        shadow-none hover:shadow-xl hover:border-gray-200
        transition-all duration-300
      "
    >
      {/* Product image */}
      <div className="relative h-32 sm:h-60 rounded-2xl overflow-hidden mb-3 sm:mb-6 bg-gray-100 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={240}
          height={240}
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 45vw, 240px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Product title */}
      <h3 className="text-sm sm:text-xl font-bold text-black/80 mb-1.5 sm:mb-3 line-clamp-2">
        {title}
      </h3>

      {/* Product description — hidden on mobile to save space */}
      <p className="hidden sm:block text-sm text-gray-500 mb-4 line-clamp-2">
        {description}
      </p>

      {/* Product specifications */}
      <div className="mb-3 sm:mb-6 space-y-1 sm:space-y-2">
        {specifications.map((spec, index) => (
          <div key={index} className="flex items-start gap-1.5 sm:gap-2">
            <Check
              size={12}
              className="text-green-600 mt-0.5 shrink-0 sm:size-4"
              strokeWidth={2.5}
            />
            <span className="text-[10px] sm:text-xs text-gray-600 leading-relaxed line-clamp-1">
              {spec}
            </span>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <Link
        href={href}
        className="
          inline-flex items-center gap-1.5 sm:gap-2
          text-xs sm:text-sm font-semibold
          text-black/60 hover:text-black
          transition-colors
        "
      >
        {t("buyNow")}
        <ArrowRight size={14} className="sm:size-4" strokeWidth={2} />
      </Link>
    </motion.div>
  );
}
