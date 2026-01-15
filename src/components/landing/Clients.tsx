"use client";

import ScrollVelocityRow from "../animations/scroll/scrollVelocityRow";

// Client logo paths grouped by rows
const clientRows = {
  rowOne: [
    "/images/logo/clients/asl.png",
    "/images/logo/clients/austin.png",
    "/images/logo/clients/BA.png",
    "/images/logo/clients/blackmagic.png",
    "/images/logo/clients/BTG.png",
    "/images/logo/clients/cicor.png",
    "/images/logo/clients/harris.png",
    "/images/logo/clients/HotelSantika.svg",
    "/images/logo/clients/kabil.png",
  ],
  rowTwo: [
    "/images/logo/clients/KTU.webp",
    "/images/logo/clients/martindo.png",
    "/images/logo/clients/nissin.png",
    "/images/logo/clients/rotary.png",
    "/images/logo/clients/ruiyang.png",
    "/images/logo/clients/sinopec.png",
    "/images/logo/clients/tathong.png",
    "/images/logo/clients/welindo.png",
  ],
};

/**
 * Clients section component with scroll-based velocity animation
 */
export default function Clients() {
  return (
    <section className="mb-18 mt-18">
      <div className="relative mx-auto">
        <div className="text-center mb-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Clients
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by companies across industries to support their operations.
          </p>
        </div>

        <div className="relative space-y-10 overflow-hidden py-4">
          {/* Left gradient fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

          {/* Right gradient fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

          <ScrollVelocityRow
            images={clientRows.rowOne}
            direction={1}
            velocity={30}
          />

          <ScrollVelocityRow
            images={clientRows.rowTwo}
            direction={-1}
            velocity={35}
          />
        </div>
      </div>
    </section>
  );
}
