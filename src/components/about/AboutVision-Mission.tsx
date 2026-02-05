// ==========================================
// src/components/about/AboutVision-Mission.tsx
// ==========================================
"use client";

import InnovativeSolutions from "./CardSection";
import { useTranslations } from "next-intl";

export default function AboutValues() {
  const t = useTranslations("aboutPage.vision");
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p1")}
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              {t("p2")}
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
    </section>
  );
}
