// ==========================================
// src/components/sections/access-control/ACHero.tsx
// ==========================================
"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ACHero() {
  const t = useTranslations("seeMore.accessControl");
  return (
    <section className="relative flex items-center h-[50vh] min-h-100 overflow-hidden">
      <Image
        src="/images/contents/AC-Contents.jpg"
        alt="About Kreatif System"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[40%_15%]
        md:object-[70%_40%]    
        lg:object-[100%_15%]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-transparent" />

      <motion.div
        variants={fadeIn("left", { offset: 164, duration: 1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight leading-tight mb-2 text-white">
            {t("title")}
          </h1>
          <p className="text-xs md:text-sm mb-5 text-white/70">
            {t("description")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
