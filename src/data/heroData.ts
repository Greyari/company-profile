// ============================================
// FILE 1: types/heroData.ts
// ============================================

import { NavItem } from "@/types/hero.types";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Security Solutions",
    image: "/images/hero/cctv-hero-bg.webp",
    title: "Integrated CCTV & Security Systems",
    subtitle:
      "Professional surveillance solutions for real-time monitoring, recording, and asset protection",
  },
  {
    id: 2,
    label: "Installation & On-Site Support",
    image: "/images/Security.webp",
    title: "Professional Installation & Technical Support",
    subtitle:
      "End-to-end installation, configuration, and on-site maintenance for security and IT systems",
  },
  {
    id: 3,
    label: "Access Control",
    image: "/images/ac-hero.webp",
    title: "Access Control & Attendance Systems",
    subtitle:
      "Secure entry management using fingerprint, RFID, and facial recognition technology",
  },
  {
    id: 4,
    label: "Smart Security Infrastructure",
    image: "/images/smart-secure.webp",
    title: "Public Address, Alarm & Parking Systems",
    subtitle:
      "Integrated PA systems, alarm solutions, and parking barriers for efficient facility management",
  },
  {
    id: 5,
    label: "Future-Ready Technology",
    image: "/images/future.webp",
    title: "Innovative Security Technology Solutions",
    subtitle:
      "Delivering smart, secure, and scalable digital solutions for modern and growing businesses",
  },
];

export const TRANSITION_DURATION = 1200;
export const ANIMATION_EASE = [0.65, 0, 0.35, 1];
