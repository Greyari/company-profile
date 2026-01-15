// components/ProductContent.tsx

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  CATEGORIES,
  PRODUCTS_DATA,
  getCategoryFromSlug,
  filterProducts,
} from "@/components/products/data/product";
import ProductCard from "@/components/products/ProductCard";

/**
 * Product content component props
 */
interface ProductContentProps {
  initialCategory?: string;
}

/**
 * Animation variants for container
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

/**
 * Animation variants for product cards
 */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

/**
 * Main product content component with filtering and search
 */
export default function ProductContent({
  initialCategory,
}: ProductContentProps) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(
    getCategoryFromSlug(initialCategory)
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Sync active tab with URL parameter
  useEffect(() => {
    setActiveTab(getCategoryFromSlug(initialCategory));
  }, [initialCategory]);

  // Handle category navigation with smooth transition
  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    categoryLabel: string,
    href: string
  ) => {
    e.preventDefault();
    setActiveTab(categoryLabel);
    router.push(href, { scroll: false });
  };

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return filterProducts(PRODUCTS_DATA, activeTab, searchQuery);
  }, [activeTab, searchQuery]);

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" max-w-3xl mx-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Product Highlight
          </h1>
          <p className="text-sm text-gray-600">
            We offer a wider range of products. The items below are highlights,
            please contact us for more available options
          </p>
        </div>
        {/* Header section with categories and search */}
        <div className="flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between mb-12">
          {/* Category navigation */}
          <nav className="flex flex-wrap border border-gray-200 rounded-2xl sm:rounded-full p-2 items-center gap-1.5 sm:gap-2 xl:flex-1">
            {CATEGORIES.map((category) => {
              const isActive = activeTab === category.label;

              return (
                <Link
                  key={category.slug ?? "all"}
                  href={category.href}
                  onClick={(e) =>
                    handleCategoryClick(e, category.label, category.href)
                  }
                  className={`
                    relative px-3 sm:px-4 py-1.5 sm:py-2 
                    text-xs sm:text-sm font-medium 
                    rounded-xl sm:rounded-full 
                    transition-all duration-300 whitespace-nowrap
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-black rounded-xl sm:rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Search input */}
          <div className="relative w-full xl:w-80 xl:shrink-0 group">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full bg-white border border-gray-200 
                rounded-2xl sm:rounded-full 
                py-2.5 sm:py-3 pl-4 sm:pl-5 pr-11 sm:pr-12 
                text-sm text-gray-900 placeholder:text-gray-400 
                outline-none transition-all duration-300 
                focus:border-gray-400 focus:ring-2 focus:ring-gray-100
              "
            />
            <div className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-900 transition-colors pointer-events-none">
              <Search size={18} strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Product grid */}
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
                    specifications={product.specifications}
                    href={`/contact`}
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
