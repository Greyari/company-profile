// ==========================================
// src/components/about/AboutStory.tsx
// ==========================================
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AuthorizedStory() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              PT Kreatif System Indonesia
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT Kreatif System Indonesia has established itself as a leading
              provider of innovative technology and security solutions since its
              founding in 2018. Over the years, we have consistently committed
              to delivering exceptional services across CCTV surveillance,
              comprehensive IT solutions, and seamless system integration. By
              prioritizing reliability, operational efficiency, and bespoke
              customization, we enable businesses and organizations of all sizes
              to strengthen their security measures and optimize their
              technology infrastructure, ensuring long-term sustainability and
              growth.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              As a trusted partner of globally recognized brands, we provide
              advanced, fully tailored solutions designed to accommodate the
              diverse and ever-evolving requirements of our clients. Our team of
              skilled professionals collaborates closely with customers at every
              stage, from consultation and planning to implementation and
              support. This hands-on approach guarantees that each solution is
              not only cutting-edge but also fully aligned with the specific
              operational goals, risk management standards, and strategic
              priorities of our clients, resulting in measurable improvements in
              performance and security.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Driven by a relentless passion for excellence and innovation, PT
              Kreatif System Indonesia continues to set industry benchmarks in
              the field of security and technology. We are dedicated to
              delivering solutions that provide peace of mind, enhance
              operational efficiency, and empower businesses to thrive in the
              rapidly evolving digital era. Through continuous research,
              adoption of emerging technologies, and a client-focused mindset,
              we help organizations stay ahead of potential threats while
              maximizing their digital potential and competitive advantage.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Column: Black Container Area */}

              <div
                className="
                group
                  mt-20 relative w-full
                  rounded-2xl 
                  overflow-hidden
                "
              >
                {/* Background Image */}
                <Image
                  src="/images/contents/Dahua.jpg"
                  alt="CCTV Security System"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover object-[0%_60%]
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                />
                {/* Black Gradient Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/80
                    via-black/0
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-b
                    from-black/90
                    via-black/0
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-r
                    from-black/50
                    via-black/0
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-l
                    from-black/50
                    via-black/0
                    to-transparent
                  "
                />
                {/* Box ini akan otomatis setinggi konten kanan karena items-stretch */}
              </div>

              {/* Right Column: Content Area */}
              <div className="mt-20 flex flex-col justify-center space-y-6 text-[#1a1a1a]">
                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900">
                  Innovative Technology Solutions
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p>
                    PT Kreatif System Indonesia delivers innovative technology
                    solutions that integrate security systems, IT
                    infrastructure, and smart technologies into a unified and
                    reliable ecosystem. By combining technical expertise with
                    industry insight, we help organizations build systems that
                    are not only secure, but also scalable and future-ready.
                  </p>

                  <p>
                    Our solutions are designed with flexibility and precision,
                    addressing real operational challenges across various
                    industries. From CCTV surveillance and network systems to
                    integrated IT solutions, we ensure every implementation is
                    tailored to client needs, optimized for performance, and
                    aligned with long-term business objectives.
                  </p>

                  <p>
                    Through continuous innovation and collaboration with trusted
                    global technology partners, we remain committed to
                    delivering dependable, efficient, and intelligent solutions.
                    This approach enables our clients to enhance operational
                    control, minimize risk, and confidently navigate the
                    evolving digital and security landscape.
                  </p>
                </div>
                <div className="pt-4">
                  <Link href="/products">
                    <button className="group flex items-center justify-between px-5 py-3 border border-gray-400 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:border-black min-w-50">
                      <span className="text-sm font-medium">
                        See Our Product
                      </span>
                      <ArrowRight className="ml-5" strokeWidth={1.5} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
