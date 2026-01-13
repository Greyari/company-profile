"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import successAnimation from "@/lotties/Success.json";
import failedAnimation from "@/lotties/Failed.json";

type ModalStatus = "success" | "error";

export default function ModalRoot() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<ModalStatus>("success");

  useEffect(() => {
    (globalThis as any).openResultModal = (result: ModalStatus) => {
      setStatus(result);
      setOpen(true);
    };
  }, []);

  const handleAnimationComplete = () => {
    // Memberikan sedikit delay setelah animasi lottie selesai sebelum modal tertutup
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-64 h-64">
              <Lottie
                animationData={
                  status === "success" ? successAnimation : failedAnimation
                }
                loop={false}
                onComplete={handleAnimationComplete}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4"
            >
              <h2 className="text-2xl font-semibold text-zinc-900">
                {status === "success" ? "Success" : "Failed"}
              </h2>
              <p className="mt-2 text-zinc-500">
                {status === "success"
                  ? "Message sent successfully."
                  : "Failed to send message, make sure all fields are filled correctly."}
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
