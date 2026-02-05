// ==========================================
// src/components/about/AboutStory.tsx
// ==========================================
"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AboutStory() {
  const t = useTranslations("aboutPage");
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              PT Kreatif System Indonesia
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Column: Black Container Area */}

              <div
                className="
                group
                  mt-20 relative w-full
                  rounded-2xl 
                  overflow-hidden
                "
              >
                {/* Background Image */}
                <Image
                  src="/images/contents/111.jpg"
                  alt="CCTV Security System"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover object-[100%_60%]
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                />
                {/* Black Gradient Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/40
                    via-black/5
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-b
                    from-black/40
                    via-black/5
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-r
                    from-black/40
                    via-black/5
                    to-transparent
                  "
                />
                {/* Box ini akan otomatis setinggi konten kanan karena items-stretch */}
              </div>

              {/* Right Column: Content Area */}
              <div className="mt-20 flex flex-col justify-center space-y-6 text-[#1a1a1a]">
                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900">
                  {t("title-2")}
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p>{t("p4")}</p>

                  <p>{t("p5")}</p>

                  <p>{t("p6")}</p>
                </div>
                <div className="pt-4">
                  <Link href="/products">
                    <button className="group flex items-center justify-between px-5 py-3 border border-gray-400 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:border-black min-w-50">
                      <span className="text-sm font-medium">{t("button")}</span>
                      <ArrowRight className="ml-5" strokeWidth={1.5} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
