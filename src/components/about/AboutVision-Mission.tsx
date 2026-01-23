// ==========================================
// src/components/about/AboutVision-Mission.tsx
// ==========================================
"use client";

import InnovativeSolutions from "./CardSection";

export default function AboutValues() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our vision is to become a leading and trusted service company in
              the information technology sector, both locally and nationally, by
              consistently delivering exceptional value and innovative
              solutions. We aim to anticipate and embrace the ever-growing
              opportunities in the IT industry, ensuring that our services
              remain relevant, forward-thinking, and capable of supporting the
              evolving needs of businesses. Through continuous learning,
              adopting the latest technological advancements, and leveraging our
              extensive experience and networks, we strive to set new standards
              of excellence in customer satisfaction and operational
              performance.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our mission is to provide our customers with tailored,
              high-quality IT services that meet their individual and
              industry-specific needs while fostering long-term partnerships
              built on trust and reliability. We are committed to constantly
              enhancing our knowledge, skills, and capabilities, enabling us to
              respond swiftly to the dynamic changes in the business and
              technology landscape. By combining a friendly, flexible approach
              with a deep understanding of emerging technologies, we ensure that
              every client receives solutions that not only solve immediate
              challenges but also support sustainable growth and continuous
              improvement.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
    </section>
  );
}
