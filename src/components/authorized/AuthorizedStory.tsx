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
              PT Kreatif System Indonesia is an Authorized Partner of Dahua
              Technology, committed to delivering reliable and high-quality
              security solutions by utilizing original Dahua products and
              cutting-edge technologies. As a trusted local partner, we align
              with Dahua’s global standards in providing innovative, efficient,
              and scalable security systems tailored to various environments,
              from residential properties to commercial and industrial
              facilities.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              We specialize in integrated security solutions including CCTV
              surveillance, alarm systems, access control, and other advanced
              security technologies fully supported by official Dahua
              warranties. Our certified and experienced team ensures
              professional consultation, precise system design, and seamless
              installation, delivering solutions that are not only
              technologically advanced but also aligned with each client’s
              operational needs and security objectives.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Backed by responsive after-sales support and competitive pricing,
              PT Kreatif System Indonesia focuses on long-term partnership and
              customer satisfaction. Through continuous innovation and close
              collaboration with Dahua Technology, we provide smart, up-to-date,
              and dependable security systems that offer peace of mind and help
              our clients stay protected in an ever-evolving security landscape.
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
                    object-cover md:object-[0%_60%] lg:object-[0%_40%]
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
                  Innovative Security Solutions
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p>
                    As an Authorized Partner of Dahua Technology, PT Kreatif
                    System Indonesia delivers innovative security solutions
                    built on Dahua’s advanced and proven technologies. We
                    integrate intelligent CCTV systems, access control, alarms,
                    and smart security platforms into a unified ecosystem
                    designed for reliability, scalability, and real-world
                    performance.
                  </p>

                  <p>
                    Our Dahua-based solutions are engineered to address
                    practical operational challenges across residential,
                    commercial, and industrial sectors. From high-definition
                    video surveillance and AI-powered analytics to secure
                    network infrastructure, every system is carefully designed,
                    customized, and optimized to meet specific security
                    requirements and long-term operational goals.
                  </p>

                  <p>
                    By working closely with Dahua Technology and continuously
                    adopting the latest innovations, we ensure our clients
                    receive dependable, future-ready security systems with
                    official product warranties and professional implementation.
                    This commitment enables organizations to improve situational
                    awareness, minimize risk, and maintain full control in an
                    increasingly complex security environment.
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
