// ============================================
// FILE 2: types/heroData.ts
// ============================================

import { NavItem } from "@/types/hero.types";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Security Solutions",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop",
    title: "Artificial Intelligence-Powered Security Intelligence",
    subtitle:
      "Advanced machine learning algorithms for threat detection and prevention",
  },
  {
    id: 2,
    label: "Installation & On-Site Support",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&h=1080&fit=crop",
    title: "Intelligent Infrastructure Management",
    subtitle: "Comprehensive IoT solutions for modern facility operations",
  },
  {
    id: 3,
    label: "Access Control",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop",
    title: "Enterprise-Grade Security Framework",
    subtitle:
      "Built-in security protocols ensuring maximum protection and compliance",
  },
  {
    id: 4,
    label: "Smart Security Infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    title: "Flexible Growth and Ready Solutions",
    subtitle: "Seamlessly scale your infrastructure as your business expands",
  },
  {
    id: 5,
    label: "Future-Ready Technology",
    image: "/images/cctv-hero-bg.webp",
    title: "Innovative Security Technology Solutions",
    subtitle:
      "Delivering smart, secure, and scalable digital solutions for modern businesses",
  },
];

export const TRANSITION_DURATION = 1200; // ms
export const ANIMATION_EASE = [0.65, 0, 0.35, 1]; // Cubic bezier easing
