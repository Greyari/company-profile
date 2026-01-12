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
    title: "IT Support ",
    desc: "Comprehensive IT solutions to support school administration and digital learning. Our systems ensure reliable network infrastructure, smooth software integration, and robust data management, empowering staff and students to focus on education without technical interruptions.",
    isDark: true,
  },
  {
    id: 2,
    title: "Audio Paging",
    desc: "Advanced audio paging systems to streamline communication across campus. From class announcements to emergency notifications, our solution ensures messages are delivered clearly and instantly to all classrooms, corridors, and common areas, improving operational efficiency and safety.",
    isDark: false,
  },
  {
    id: 3,
    title: "CCTV",
    desc: "High-quality CCTV surveillance to enhance school safety and monitoring. Our integrated camera systems provide real-time video, scalable coverage, and secure storage, helping administrators maintain a secure environment and protect students, staff, and school assets effectively.",
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
              src="/images/contents/speaker.jpeg"
              alt="School Solution"
              fill
              priority={false}
              sizes="(min-width: 1024px) 45vw, 0px"
              className="object-cover object-[0%_0%]"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/0 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/0 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/8ser0 via-black/10 to-transparent" />
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
