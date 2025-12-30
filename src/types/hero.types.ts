// ============================================
// FILE 1: types/hero.types.ts
// ============================================

export interface NavItem {
  id: number;
  label: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface FadeInOptions {
  offset?: number;
  duration?: number;
}

// ============================================
// hero.constants.ts
// ============================================

export const TRANSITION_DURATION = 1200; // ms
export const ANIMATION_EASE = [0.65, 0, 0.35, 1]; // Cubic bezier easing
