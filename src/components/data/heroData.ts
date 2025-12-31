// ============================================
// FILE 2: types/heroData.ts
// ============================================

import { NavItem } from "@/types/hero.types";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Security Solutions",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1920&h=1080&fit=crop",
    title: "Integrated CCTV & Security Systems",
    subtitle:
      "Professional surveillance solutions for real-time monitoring, recording, and asset protection",
  },
  {
    id: 2,
    label: "Installation & On-Site Support",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&h=1080&fit=crop",
    title: "Professional Installation & Technical Support",
    subtitle:
      "End-to-end installation, configuration, and on-site maintenance for security and IT systems",
  },
  {
    id: 3,
    label: "Access Control",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1920&h=1080&fit=crop",
    title: "Access Control & Attendance Systems",
    subtitle:
      "Secure entry management using fingerprint, RFID, and facial recognition technology",
  },
  {
    id: 4,
    label: "Smart Security Infrastructure",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1920&h=1080&fit=crop",
    title: "Public Address, Alarm & Parking Systems",
    subtitle:
      "Integrated PA systems, alarm solutions, and parking barriers for efficient facility management",
  },
  {
    id: 5,
    label: "Future-Ready Technology",
    image: "/images/hero/cctv-hero-bg.webp",
    title: "Innovative Security Technology Solutions",
    subtitle:
      "Delivering smart, secure, and scalable digital solutions for modern and growing businesses",
  },
];

export const TRANSITION_DURATION = 1200; // ms
export const ANIMATION_EASE = [0.65, 0, 0.35, 1]; // Cubic bezier easing
