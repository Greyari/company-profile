"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center h-[50vh] min-h-100 overflow-hidden">
      <Image
        src="/images/contents/school.jpg"
        alt="About Kreatif System"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[100%_48%]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-linear-to-l from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-transparent" />

      <motion.div
        variants={fadeIn("left", { offset: 164, duration: 1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-semibold tracking-tight leading-13 mb-2">
            School
          </h1>
          <p className="text-sm md:text-lg mb-4 text-white/70">
            Solution for managing and monitoring school facilities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
