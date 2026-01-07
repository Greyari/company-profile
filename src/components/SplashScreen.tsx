"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!(window as any).__splash_once__) {
      (window as any).__splash_once__ = true;
      setVisible(true);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 20);

      const hide = setTimeout(() => {
        setVisible(false);
      }, 2200);

      return () => {
        clearInterval(interval);
        clearTimeout(hide);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="
            fixed inset-0 z-9999
            flex items-center justify-center
            bg-black/80 backdrop-blur-sm
          "
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-32 h-32 sm:w-40 sm:h-40"
            >
              <Image
                src="/images/logo-ksi-hitam-2.png"
                alt="PT. Kreatif System Indonesia"
                fill
                priority
                className="object-contain invert"
              />
            </motion.div>

            {/* Loading bar
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-8 w-36 h-[2px] bg-white/20 overflow-hidden rounded"
            >
              <motion.div
                className="h-full bg-white/80"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: "linear" }}
              />
            </motion.div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
