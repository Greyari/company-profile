// src/app/products/[category]/page.tsx

import ProductHero from "@/components/products/ProductHero";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";
import ProductContent from "@/components/products/ProductContent";
import { notFound } from "next/navigation";

const VALID_CATEGORIES = [
  "ipcamera",
  "cctv",
  "hdcvi",
  "audiopaging",
  "pabx",
  "dvrnvr",
  "accesscontrol",
];

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  // Validate category
  if (!VALID_CATEGORIES.includes(category)) {
    notFound();
  }

  return (
    <main>
      <ProductHero />
      <ScrollReveal>
        <ProductContent initialCategory={category} />
      </ScrollReveal>
    </main>
  );
}

// Generate static params for build optimization
export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category,
  }));
}
