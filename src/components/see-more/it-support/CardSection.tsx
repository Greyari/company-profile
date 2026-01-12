
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
    title: "IT Infrastructure",
    desc: "Comprehensive IT setup and maintenance services to ensure your network, servers, and devices operate efficiently and securely, reducing downtime and boosting productivity.",
    isDark: true,
  },
  {
    id: 2,
    title: "Technical Support",
    desc: "Responsive helpdesk and on-site assistance for hardware, software, and network issues, ensuring quick resolution and minimal disruption to your business operations.",
    isDark: false,
  },
  {
    id: 3,
    title: "Preventive Maintenance",
    desc: "Proactive system checks, updates, and performance optimization to extend the lifespan of your IT assets, prevent unexpected failures, and maintain business continuity.",
    isDark: false,
  },
];

const InnovativeSection = memo(function InnovativeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Image */}
        <div className="hidden lg:flex lg:w-[45%] lg:items-center">
          <div className="relative w-full h-150">
            <Image
              src="/images/contents/Budi.jpg"
              alt="IT Support Solutions"
              fill
              priority={false}
              sizes="(min-width: 1024px) 45vw, 0px"
              className="object-cover object-[100%_70%]"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/0 to-transparent" />
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full lg:w-[55%] flex items-center">
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
                    href="#"
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
