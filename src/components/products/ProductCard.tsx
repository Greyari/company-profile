// components/products/ProductCard.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
        w-full rounded-3xl bg-white p-6
        border border-transparent
        shadow-none hover:shadow-xl hover:border-gray-200
        transition-all duration-300
      "
    >
      {/* Product image */}
      <div className="relative h-60 rounded-2xl overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={240}
          height={240}
          sizes="(max-width: 768px) 70vw, 240px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Product title */}
      <h3 className="text-xl font-bold text-black/80 mb-3">{title}</h3>

      {/* Product description */}
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>

      {/* Product specifications */}
      <div className="mb-6 space-y-2">
        {specifications.map((spec, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check
              size={16}
              className="text-green-600 mt-0.5 shrink-0"
              strokeWidth={2.5}
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              {spec}
            </span>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <Link
        href={href}
        className="
          inline-flex items-center gap-2
          text-sm font-semibold
          text-black/60 hover:text-black
          transition-colors
        "
      >
        Buy now
        <ArrowRight size={16} strokeWidth={2} />
      </Link>
    </motion.div>
  );
}
