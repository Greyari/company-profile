// ====================
// src/components/Clients.tsx
// ====================
import ScrollVelocityRow from "../animations/scroll/scrollVelocity";

export default function Brands() {
  return (
    <section className="mb-28">
      <div className="relative  mx-auto">
        <div className="text-center mb-14 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Brands
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            {" "}
            Trusted by companies across industries to support their operations.
          </p>
        </div>

        <div className="relative space-y-10 overflow-hidden">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

          <ScrollVelocityRow
            src="/images/logo/client.png"
            direction={1}
            velocity={100}
          />

          <ScrollVelocityRow
            src="/images/logo/client-2.png"
            direction={-1}
            velocity={100}
          />
        </div>
      </div>
    </section>
  );
}
