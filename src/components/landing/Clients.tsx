// ====================
// src/components/Clients.tsx
// ====================
import ScrollVelocityRow from "../animations/scroll/scrollVelocity";

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="relative  mx-auto">
        <h2 className="text-4xl text-black font-bold text-center mb-16">
          Our Clients
        </h2>

        <div className="relative space-y-10 overflow-hidden">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

          <ScrollVelocityRow
            src="/images/client.png"
            direction={1}
            velocity={100}
          />

          <ScrollVelocityRow
            src="/images/client-2.png"
            direction={-1}
            velocity={100}
          />
        </div>
      </div>
    </section>
  );
}
