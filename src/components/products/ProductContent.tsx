"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

/**
 * Product data structure interface
 */
interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const CATEGORIES = [
  "All Product",
  "IP Camera",
  "CCTV Video",
  "HDCVI",
  "Audio Paging",
  "PABX",
  "Access Control",
];

const PRODUCTS_DATA: Product[] = [
  {
    id: "1",
    title: "IP Camera Series Pro",
    category: "IP Camera",
    description:
      "Ultra-high definition monitoring with AI human detection system.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
  },
  {
    id: "2",
    title: "Smart Hub Controller",
    category: "PABX",
    description:
      "Centralized communication management for modern office infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: "3",
    title: "Network Switch Pro",
    category: "Network Switch",
    description:
      "High-performance managed switch for enterprise networking solutions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    id: "4",
    title: "HDCVI Recorder System",
    category: "HDCVI",
    description:
      "Advanced HDCVI recording system with cloud backup capabilities.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
  },
  {
    id: "5",
    title: "Audio Paging System",
    category: "Audio Paging",
    description: "Professional audio paging solution for large facilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: "6",
    title: "Access Control Terminal",
    category: "Access Control",
    description: "Biometric access control system with remote management.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
];

/**
 * Animation variants for grid and cards
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function ProductContent() {
  const [activeTab, setActiveTab] = useState("All Product");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesTab =
        activeTab === "All Product" || product.category === activeTab;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12">
          {/* Categories Navigation */}
          <nav className="flex flex-wrap border border-gray-200 rounded-4xl p-2.5 items-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeTab === category
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </nav>

          {/* Search Field */}
          <div className="relative w-full  lg:w-80 group">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-4.5 pl-5 pr-12 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-900 transition-colors pointer-events-none">
              <Search size={18} strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    href={`/products/${product.id}`}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 text-center"
              >
                <p className="text-gray-400 font-medium text-base">
                  No products found in this category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
