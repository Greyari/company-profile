// ==========================================
// src/components/about/AboutTeam.tsx
// ==========================================
"use client";

import { useTranslations } from "next-intl";

export default function AboutTeam() {
  const t = useTranslations("aboutPage.why");
  const x = useTranslations("aboutContents");
  return (
    <section className="mt-10 bg-white mb-35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center ">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              {x("title")}
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p1")}
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p2")}
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              {t("p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
