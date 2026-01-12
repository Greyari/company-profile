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
              Construction Site Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia delivers specialized solutions for
              construction sites, combining security, safety, and operational
              efficiency. Our experienced team implements systems tailored to
              the unique challenges of construction environments, ensuring
              project continuity, worker safety, and asset protection. Since our
              establishment, we have prioritized innovative approaches to keep
              sites secure and operations smooth.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our offerings include access control, CCTV surveillance, alarm
              systems, and workforce management solutions designed specifically
              for construction projects. Each system is integrated to provide
              real-time monitoring, automated alerts, and actionable insights to
              support decision-making and maintain a safe work environment.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              We emphasize durability, scalability, and ease of management to
              suit temporary or permanent sites. With reliable systems and
              expert support, construction sites can operate efficiently while
              minimizing risks, protecting personnel, and safeguarding critical
              assets throughout the project lifecycle.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Reliable Solutions for Construction Sites
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our construction solutions are engineered to meet the demanding
              needs of project sites. From security monitoring to worker
              management, we provide systems that enhance efficiency and safety
              while maintaining compliance with regulations and industry
              standards.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With proactive maintenance, remote monitoring, and technical
              support, our systems ensure uninterrupted operations and quick
              response to incidents. This helps reduce downtime, prevent
              accidents, and safeguard both personnel and equipment.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Trust PT. Kreatif System Indonesia to provide comprehensive
              construction site solutions, combining technology, expertise, and
              reliability. We help projects run securely, efficiently, and
              smoothly, giving stakeholders confidence and peace of mind
              throughout the construction lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
