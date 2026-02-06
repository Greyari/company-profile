// ==========================================
// src/app/products/page.tsx

import ProductHero from "@/components/products/ProductHero";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";
import ProductCard from "@/components/products/ProductContent";
import ProductContent from "@/components/products/ProductContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | PT. Kreatif System Indonesia",
  description:
    "Jelajahi produk CCTV, Access Control, DVR/NVR, WiFi, dan solusi keamanan terintegrasi dari PT. Kreatif System Indonesia.",
  openGraph: {
    title: "Produk Keamanan | PT. Kreatif System Indonesia",
    description:
      "Produk CCTV, Access Control, dan sistem keamanan untuk bisnis dan industri.",
    url: "https://www.kreatifsystem.com/products",
    images: ["/images/hero/cctv-product.webp"],
  },
};
// ==========================================
export default function ProductsPage() {
  return (
    <main>
      <ProductHero />
      <ProductContent />
    </main>
  );
}
