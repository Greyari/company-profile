// ====================
// src/components/Clients.tsx
// ====================
import ScrollVelocityRow from "./scrollVelocity";

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-black font-bold text-center mb-16">
          Our Clients
        </h2>

        <div className="space-y-10 overflow-hidden">
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