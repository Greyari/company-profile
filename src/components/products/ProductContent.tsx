"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

/* =====================
   TYPES
===================== */
interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ProductContentProps {
  initialCategory?: string;
}

/* =====================
   CONSTANTS
===================== */
const CATEGORIES = [
  { label: "All Products", slug: null, href: "/products" },
  { label: "IP Camera", slug: "ipcamera", href: "/products/ipcamera" },
  { label: "CCTV", slug: "cctv", href: "/products/cctv" },
  { label: "HDCVI", slug: "hdcvi", href: "/products/hdcvi" },
  { label: "Audio Paging", slug: "audiopaging", href: "/products/audiopaging" },
  { label: "PABX", slug: "pabx", href: "/products/pabx" },
  { label: "DVR/NVR", slug: "dvrnvr", href: "/products/dvrnvr" },
  {
    label: "Access Control",
    slug: "accesscontrol",
    href: "/products/accesscontrol",
  },
];

const PRODUCTS_DATA: Product[] = [
  {
    id: "1",
    title: "IP Camera Series Pro",
    category: "IP Camera",
    description:
      "Ultra-high definition monitoring with AI human detection system.",
    image: "/images/product/IPCAM.png",
  },
  {
    id: "2",
    title: "PABX System",
    category: "PABX",
    description:
      "Centralized communication management for modern office infrastructure.",
    image: "/images/product/pabx.png",
  },
  {
    id: "3",
    title: "Network Switch Pro",
    category: "Network Switch",
    description:
      "High-performance managed switch for enterprise networking solutions.",
    image: "/images/product/HDCVI.png",
  },
  {
    id: "4",
    title: "HDCVI Recorder System",
    category: "HDCVI",
    description:
      "Advanced HDCVI recording system with cloud backup capabilities.",
    image: "/images/product/HDCVI.png",
  },
  {
    id: "5",
    title: "Audio Paging System",
    category: "Audio Paging",
    description: "Professional audio paging solution for large facilities.",
    image: "/images/product/audioPaging.png",
  },
  {
    id: "6",
    title: "Access Control System",
    category: "Access Control",
    description: "Biometric access control system with remote management.",
    image: "/images/product/AC.png",
  },
];

/* =====================
   ANIMATIONS
===================== */
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
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

/* =====================
   COMPONENT
===================== */
export default function ProductContent({
  initialCategory,
}: ProductContentProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Find category label from slug
  const getCategoryFromSlug = (slug: string | undefined) => {
    if (!slug) return "All Products";
    const category = CATEGORIES.find((cat) => cat.slug === slug);
    return category?.label || "All Products";
  };

  const [activeTab, setActiveTab] = useState(
    getCategoryFromSlug(initialCategory)
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Update active tab when initialCategory changes (from external navigation)
  useEffect(() => {
    setActiveTab(getCategoryFromSlug(initialCategory));
  }, [initialCategory]);

  // Handle category click with smooth transition
  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    categoryLabel: string,
    href: string
  ) => {
    e.preventDefault(); // Prevent default Link behavior

    // Update state immediately for smooth transition
    setActiveTab(categoryLabel);

    // Update URL without page reload (shallow routing)
    router.push(href, { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesTab =
        activeTab === "All Products" || product.category === activeTab;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between mb-12">
          {/* Categories */}
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
                  className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl sm:rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white"
                  }`}
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

          {/* Search */}
          <div className="relative w-full xl:w-80 xl:shrink-0 group">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl sm:rounded-full py-2.5 sm:py-3 pl-4 sm:pl-5 pr-11 sm:pr-12 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
            <div className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-900 transition-colors pointer-events-none">
              <Search size={18} strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Grid */}
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
                    href={`/products/detail/${product.id}`}
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

/* =====================
   PRODUCT CARD
===================== */
function ProductCard({
  title,
  description,
  image,
  href = "#",
}: {
  title: string;
  description: string;
  image: string;
  href?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full rounded-3xl bg-white p-6 border border-transparent shadow-none hover:shadow-xl hover:border-gray-200 transition-all duration-300"
    >
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

      <h3 className="text-xl font-bold text-black/80 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 mb-6 line-clamp-3">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-black transition-colors"
      >
        Buy now
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
