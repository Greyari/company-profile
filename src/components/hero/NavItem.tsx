"use client";

import { motion } from "framer-motion";

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Individual navigation item with hover and active states
 */
export default function NavItem({ label, isActive, onClick }: NavItemProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-300
        ${isActive ? "text-white font-medium" : "text-white/70"}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{label}</span>

      {/* Active Indicator */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {/* Hover Underline */}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/40"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: isActive ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
