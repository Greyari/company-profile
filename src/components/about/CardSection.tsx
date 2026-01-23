// ==========================================
// src/components/access-control/CardSection.tsx
// ==========================================

"use client";

import React, { memo } from "react";
import Image from "next/image";

type Card = {
  id: number | string;
  title: string;
  desc: string;
  isDark: boolean;
};

const CARDS: Card[] = [
  {
    id: 1,
    title: "Wide Range of Products",
    desc: "An integrated attendance and workforce management solution designed to improve operational efficiency and employee data accuracy. The system supports real-time attendance tracking through multiple authentication methods...",
    isDark: true,
  },
  {
    id: 2,
    title: "Expert Advices & Support",
    desc: "An integrated attendance and workforce management solution designed to improve operational efficiency and employee data accuracy. The system supports real-time attendance tracking through multiple authentication methods...",
    isDark: false,
  },
  {
    id: 3,
    title: "Competitive Prices & Discounts",
    desc: "An integrated attendance and workforce management solution designed to improve operational efficiency and employee data accuracy. The system supports real-time attendance tracking through multiple authentication methods...",
    isDark: false,
  },
];

const InnovativeSection = memo(function InnovativeSection() {
  return (
    <section className="py-10 mt-15 bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Image */}
        <div className="hidden lg:flex lg:w-[45%] lg:items-center">
          <div className="relative w-full h-150">
            <Image
              src="/images/contents/cctv-about.webp"
              alt="Security Solution"
              fill
              priority={false}
              sizes="(min-width: 1024px) 45vw, 0px"
              className="object-cover object-[100%_35%]"
            />
            {/* Black Gradient Overlay */}
            <div
              className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/90
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
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          {/* New Header */}
          <div id="why-choose-us" className="ml-10 mb-5 ">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900  px-4 md:px-8 lg:px-0">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-sm mb-4 text-justify leading-relaxed">
              Reliable solutions, Expert support, Competitive prices and
              discounts.
            </p>
          </div>

          <div
            className="
              w-full flex flex-col md:flex-row gap-6
              px-4 md:px-8 lg:px-0
              lg:-ml-32 z-10
              py-8 lg:py-0
            "
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className={`flex-1 p-8 rounded-2xl shadow-xl flex flex-col min-h-112.5
                transition-transform duration-300 will-change-transform hover:-translate-y-2
                ${
                  card.isDark
                    ? "bg-[#121212] text-white"
                    : "bg-white text-gray-800 border border-gray-100"
                }`}
              >
                <h3 className="text-xl font-bold mb-8 text-center">
                  {card.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-8 grow ${
                    card.isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {card.desc}
                </p>

                <div className="mt-auto">
                  <a
                    href="/products"
                    className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors ${
                      card.isDark
                        ? "text-white hover:text-gray-300"
                        : "text-gray-900 hover:text-gray-600"
                    }`}
                  >
                    See Products <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default InnovativeSection;
