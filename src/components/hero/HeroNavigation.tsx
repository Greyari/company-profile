"use client";

import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { fadeIn } from "@/lib/fadeIn";
import { NavItem as NavItemType } from "@/types/hero.types";

interface HeroNavigationProps {
  items: NavItemType[];
  activeNav: number;
  onNavigate: (id: number) => void;
}

/**
 * Navigation bar with interactive items
 */
export default function HeroNavigation({
  items,
  activeNav,
  onNavigate,
}: HeroNavigationProps) {
  return (
    <motion.nav
      variants={fadeIn("down", { duration: 1 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="flex justify-between mt-45 text-sm flex-wrap gap-4"
      role="navigation"
      aria-label="Hero navigation"
    >
      {items.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          isActive={activeNav === item.id}
          onClick={() => onNavigate(item.id)}
        />
      ))}
    </motion.nav>
  );
}
