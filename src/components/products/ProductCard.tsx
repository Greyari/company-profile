"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* =====================
   TYPES
===================== */
export interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

/* =====================
   COMPONENT
===================== */
export default function ProductCard({
  title,
  description,
  image,
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
      {/* IMAGE */}
      <div className="h-60 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-bold text-black/80 mb-3">{title}</h3>

      <p className="text-sm text-gray-500 mb-6 line-clamp-3">{description}</p>

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
