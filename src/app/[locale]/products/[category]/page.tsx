// src/app/[locale]/products/[category]/page.tsx

import ProductHero from "@/components/products/ProductHero";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";
import ProductContent from "@/components/products/ProductContent";
import { notFound } from "next/navigation";
import Script from "next/script";

import { PRODUCTS_DATA, CATEGORIES } from "@/components/products/data/product";
import { routing } from "@/i18n/routing";

const VALID_CATEGORIES = [
  "ipcamera",
  "hdcvi",
  "wifi",
  "dvrnvr",
  "accesscontrol",
  "pabx",
  "audiopaging",
] as const;

interface PageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category, locale } = await params;

  if (!VALID_CATEGORIES.includes(category as any)) {
    notFound();
  }

  const categoryObj = CATEGORIES.find((c) => c.slug === category);

  if (!categoryObj) {
    notFound();
  }

  const products = PRODUCTS_DATA.filter(
    (p) => p.category.toLowerCase().replace(/\s/g, "") === category,
  );

  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      image: `https://www.kreatifsystem.com${p.image}`,
      description: p.description,
      url: `https://www.kreatifsystem.com/${locale}/products/${category}`,
    })),
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.kreatifsystem.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.kreatifsystem.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryObj.label,
        item: `https://www.kreatifsystem.com/${locale}/products/${category}`,
      },
    ],
  };

  return (
    <main>
      <ProductHero />
      <ScrollReveal>
        <ProductContent initialCategory={category} />
      </ScrollReveal>

      <Script
        id="product-category-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }}
      />

      <Script
        id="product-category-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    VALID_CATEGORIES.map((category) => ({
      locale,
      category,
    })),
  );
}

interface CategoryPageParams {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageParams) {
  const { locale, category: categorySlug } = await params;

  if (!categorySlug || !VALID_CATEGORIES.includes(categorySlug as any)) {
    return {
      title: "Category Not Found | PT. Kreatif System Indonesia",
      robots: { index: false, follow: false },
    };
  }

  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: "Category Not Found | PT. Kreatif System Indonesia",
      robots: { index: false, follow: false },
    };
  }

  const products = PRODUCTS_DATA.filter(
    (p) => p.category.toLowerCase().replace(/\s/g, "") === categorySlug,
  );

  const productNames = products.map((p) => p.title).join(", ");
  const firstProductImage =
    products[0]?.image || "/images/hero/cctv-product.webp";

  return {
    title: `${category.label} | PT. Kreatif System Indonesia`,
    description: `Lihat koleksi ${category.label} kami, termasuk ${productNames}.`,
    openGraph: {
      title: category.label,
      description: `Koleksi ${category.label} lengkap dengan spesifikasi, harga, dan produk terbaru.`,
      images: [firstProductImage],
      url: `https://www.kreatifsystem.com/${locale}/products/${categorySlug}`,
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: category.label,
      description: `Koleksi ${category.label} lengkap`,
      images: [firstProductImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.kreatifsystem.com/${locale}/products/${categorySlug}`,
      languages: {
        "id-ID": `https://www.kreatifsystem.com/id/products/${categorySlug}`,
        "en-US": `https://www.kreatifsystem.com/en/products/${categorySlug}`,
      },
    },
  };
}
