"use client";

import ScrollVelocityRow from "../animations/scroll/scrollVelocityRow";

// Brand image paths grouped by rows
const brandRows = {
  rowOne: [
    "/images/logo/brands/Belden.png",
    "/images/logo/brands/colan.png",
    "/images/logo/brands/CommScope.png",
    "/images/logo/brands/dahua-wisualarm.png",
    "/images/logo/brands/dahua.png",
    "/images/logo/brands/DSPPA.png",
    "/images/logo/brands/ezviz.png",
    "/images/logo/brands/fortinet.png",
    "/images/logo/brands/furukawa.svg",
    "/images/logo/brands/H3C.webp",
  ],
  rowTwo: [
    "/images/logo/brands/Hikvision.png",
    "/images/logo/brands/hilook.png",
    "/images/logo/brands/huawei.png",
    "/images/logo/brands/omada.png",
    "/images/logo/brands/Ruijie.png",
    "/images/logo/brands/seagate.svg",
    "/images/logo/brands/toshiba.svg",
    "/images/logo/brands/TP-Link.png",
    "/images/logo/brands/VIGI.png",
    "/images/logo/brands/WD.png",
    "/images/logo/brands/ZKT.png",
  ],
};

/**
 * Brands section component with scroll-based velocity animation
 */
export default function Brands() {
  return (
    <section className="mb-18">
      <div className="relative mx-auto">
        <div className="text-center mb-5 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Our Brands
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Several of our collaboration partners.
          </p>
        </div>

        <div className="relative space-y-10 overflow-hidden py-4">
          {/* Left gradient fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

          {/* Right gradient fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

          <ScrollVelocityRow
            images={brandRows.rowOne}
            direction={1}
            velocity={30}
          />

          <ScrollVelocityRow
            images={brandRows.rowTwo}
            direction={-1}
            velocity={35}
          />
        </div>
      </div>
    </section>
  );
}
