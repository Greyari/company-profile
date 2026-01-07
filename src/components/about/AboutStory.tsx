// ==========================================
// src/components/about/AboutStory.tsx
// ==========================================

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutStory() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              PT Kreatif System Indonesia
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia was founded with a vision to provide
              cutting-edge security solutions for modern businesses. Our team of
              experienced professionals combines technical expertise with a deep
              understanding of our clients' needs, ensuring that every solution
              we provide is tailored to meet specific requirements.Since our
              establishment, we have been committed to delivering excellence in
              every project. Our team of experienced professionals combines
              technical expertise with a deep understanding of our clients'
              needs, ensuring that every solution we provide is tailored to meet
              specific requirements.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our team of experienced professionals combines technical expertise
              with a deep understanding of our clients' needs, ensuring that
              every solution we provide is tailored to meet specific
              requirements. Our team of experienced professionals combines
              technical expertise with a deep understanding of our clients'
              needs, ensuring that every
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our team of experienced professionals combines technical expertise
              with a deep understanding of our clients' needs, ensuring that
              every solution we provide is tailored to meet specific
              requirements. Our team of experienced professionals combines
              technical expertise with a deep understanding of our clients'
              needs, ensuring that every solution we provide is tailored to meet
              specific requirements. Our team of experienced professionals
              combines technical expertise with a deep understanding of our
              clients' needs, ensuring that every solution we provide is
              tailored to meet specific requirements. Our team of experienced
              professionals combines technical expertise with a deep
              understanding of our clients' needs, ensuring that every solution
              we provide is tailored to meet specific requirements.
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
                  src="/images/cctv-about.webp"
                  alt="CCTV Security System"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover object-[100%_0.5%]
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                />
                {/* Black Gradient Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/40
                    via-black/5
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-b
                    from-black/40
                    via-black/5
                    to-transparent
                  "
                />
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-r
                    from-black/40
                    via-black/5
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
                    PT Kreatif System Indonesia is a leading provider of
                    innovative technology and security solutions since 2018.
                    Committed to delivering exceptional services in CCTV
                    surveillance, IT solutions, and system integration. With a
                    focus on reliability, efficiency, and customization, we help
                    businesses and organizations enhance their security and
                    technology infrastructure.
                  </p>

                  <p>
                    As a trusted partner of globally recognized brands, we offer
                    advanced and tailored solutions designed to meet the diverse
                    and evolving needs of our clients. Our team of dedicated
                    professionals works closely with customers to ensure the
                    successful implementation of cutting-edge systems that align
                    with their operational goals.
                  </p>

                  <p>
                    Driven by a passion for excellence, PT Kreatif System
                    Indonesia continues to set the standard in security and
                    technology, providing peace of mind and empowering
                    businesses to thrive in the digital age. Our team of
                    dedicated professionals works closely with customers to
                    ensure the successful implementation of cutting-edge systems
                    that align with their operational goals.
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
