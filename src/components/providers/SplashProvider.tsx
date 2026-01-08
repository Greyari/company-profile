"use client";

import SplashScreen from "@/Client/SplashScreen";
import { ReactNode, useState, useEffect } from "react";

interface SplashProviderProps {
  children: ReactNode;
}

/**
 * Provider that blocks content rendering until splash screen completes
 */
export default function SplashProvider({ children }: SplashProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if splash should be shown
    const hasShownSplash =
      typeof window !== "undefined" &&
      sessionStorage.getItem("ksi_splash_shown") === "true";

    if (hasShownSplash) {
      // Skip splash, show content immediately
      setIsReady(true);
    } else {
      // Mark splash as shown
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ksi_splash_shown", "true");
      }

      // Wait for splash animation to complete
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SplashScreen show={!isReady} />
      {isReady && children}
    </>
  );
}
