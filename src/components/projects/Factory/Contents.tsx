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
              Security & Operational Solutions for Factories
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia provides specialized security and
              operational solutions tailored for factories and industrial
              facilities. Our team of experts combines deep technical knowledge
              with industry experience to ensure that every system we implement
              enhances safety, efficiency, and productivity across your
              operations. Since our founding, we have focused on delivering
              reliable and innovative solutions to meet the unique challenges of
              industrial environments.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              We offer a comprehensive suite of services including alarm
              systems, access control, surveillance, and maintenance designed
              specifically for factory settings. Each solution is configured to
              integrate seamlessly with your existing infrastructure, providing
              real-time monitoring, automated alerts, and actionable insights
              that support safer and more efficient workflows.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our approach emphasizes scalability, durability, and ease of
              management, ensuring that your industrial systems continue to
              operate reliably over time. By combining cutting-edge technology
              with a hands-on understanding of factory operations, we help
              organizations optimize processes, reduce risks, and protect both
              people and assets effectively.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Reliable Solutions for Industrial Operations
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our industrial solutions are designed to meet the rigorous demands
              of factory operations. From safety monitoring to operational
              automation, we provide systems that increase efficiency while
              maintaining the highest standards of security and compliance.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With proactive maintenance, real-time monitoring, and expert
              support, we ensure that every system functions optimally and
              adapts to the evolving needs of your facility. Our goal is to help
              factories achieve smooth operations while minimizing downtime and
              risk.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Trust PT. Kreatif System Indonesia for factory solutions that
              combine technology, expertise, and reliability. We are committed
              to helping your industrial operations run safely, efficiently, and
              sustainably, allowing your business to focus on growth and
              productivity with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
