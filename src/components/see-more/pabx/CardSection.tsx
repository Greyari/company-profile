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
    title: "PABX Setup",
    desc: "Complete PABX installation and configuration for your office, enabling seamless internal and external communication. Our systems ensure efficient call routing, multi-extension support, and easy scalability for growing businesses.",
    isDark: true,
  },
  {
    id: 2,
    title: "Call Management",
    desc: "Enhance your business communication with advanced features such as voicemail, call forwarding, auto-attendants, and conference calling. Our PABX solutions help streamline daily operations and improve team productivity.",
    isDark: false,
  },
  {
    id: 3,
    title: "Maintenance & Support",
    desc: "Reliable ongoing PABX maintenance and technical support to keep your communication systems running smoothly. From troubleshooting to system upgrades, we ensure minimal downtime and consistent performance for your organization.",
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
              src="/images/contents/pabx-content.jpg"
              alt="PABX Solutions"
              fill
              priority={false}
              sizes="(min-width: 1024px) 45vw, 0px"
              className="object-cover scale-x-[-1] object-[100%_100%]"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/0 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent" />
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
