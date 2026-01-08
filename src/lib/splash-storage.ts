// This file is now optional since logic moved to SplashProvider
// Can be deleted if not used elsewhere

const SPLASH_KEY = "ksi_splash_shown";

export const splashStorage = {
  hasShown(): boolean {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SPLASH_KEY) === "true";
  },

  markAsShown(): void {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(SPLASH_KEY, "true");
  },

  reset(): void {
    if (typeof window === "undefined") return;
    sessionStorage.removeItem(SPLASH_KEY);
  },
};
