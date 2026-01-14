"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center h-[50vh] min-h-100 overflow-hidden">
      <Image
        src="/images/contents/pabx.jpg"
        alt="About Kreatif System"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_85%]
        
        md:object-[70%_40%]    
        lg:object-[100%_85%]
        "
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-linear-to-l from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/10 to-transparent" />

      <motion.div
        variants={fadeIn("left", { offset: 164, duration: 1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight leading-tight mb-2 text-white">
            Private Automatic Branch Exchange (PABX) Systems
          </h1>
          <p className="text-xs md:text-sm mb-5 text-white/70">
            Solutions to enhance your business operational communication
          </p>
        </div>
      </motion.div>
    </section>
  );
}
