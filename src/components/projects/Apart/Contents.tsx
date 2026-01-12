import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InnovativeSolutions from "./CardSection";

export default function Contents() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Solution for Apartment & Hotel Management
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia provides innovative solutions
              tailored for apartments and hotels, combining technology and
              operational expertise. Our systems streamline property management,
              enhance guest experiences, and improve overall efficiency. Each
              solution is carefully designed to meet the unique needs of
              hospitality and residential properties, ensuring reliable and
              scalable performance.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              From front desk management to room automation, our integrated
              systems help property managers monitor operations in real time. By
              leveraging advanced technologies, we reduce operational costs,
              improve safety, and provide actionable insights to make informed
              decisions, ensuring a seamless experience for both staff and
              guests.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              With a focus on reliability and user-friendly interfaces, our team
              ensures smooth implementation and continuous support. By
              integrating access control, surveillance, and facility management
              systems, we empower properties to maintain high standards of
              security and operational excellence. Our commitment is to deliver
              tailored, efficient, and modern solutions that help our clients
              elevate their property management capabilities.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              PT Kreatif System Indonesia
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With years of experience in hospitality and residential solutions,
              PT. Kreatif System Indonesia offers end-to-end services from
              system design to implementation and support. Our team works
              closely with clients to ensure every solution meets operational
              goals and enhances guest satisfaction, all while maintaining
              security and efficiency.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              We specialize in integrating IT systems, security networks, and
              communication platforms to create a cohesive management ecosystem.
              Each installation is optimized for both functionality and user
              experience, giving staff tools to operate efficiently while
              ensuring residents and guests enjoy a safe and convenient
              environment.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our approach prioritizes long-term reliability and adaptability,
              allowing properties to scale their systems as needs evolve. By
              focusing on innovation, quality, and client collaboration, PT.
              Kreatif System Indonesia ensures every apartment and hotel
              property benefits from modern, secure, and efficient management
              solutions that improve operational workflows and elevate the guest
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
