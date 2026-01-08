"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  show: boolean;
}

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <Image
                src="/images/logo-ksi-hitam-2.png"
                alt="PT. Kreatif System Indonesia"
                fill
                priority
                className="object-contain invert"
              />
            </div>

            {/* Tagline */}
            <motion.div
              className="mt-8 text-white/60 text-sm font-light tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Security Technology Solutions
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
