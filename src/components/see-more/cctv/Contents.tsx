
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
              CCTV Surveillance Solutions
            </h2>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT Kreatif System Indonesia is a trusted provider of professional
              CCTV surveillance solutions in Indonesia, delivering reliable
              security systems for commercial, industrial, and institutional
              environments. Since our establishment, we have been committed to
              helping businesses enhance safety, monitor critical areas, and
              protect valuable assets through advanced video surveillance
              technology.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our CCTV surveillance solutions are designed to accommodate a wide
              range of security needs, from small offices and retail outlets to
              large-scale industrial facilities, warehouses, campuses, and
              public infrastructure. PT Kreatif System Indonesia provides a
              comprehensive, end-to-end approach, starting from site assessment
              and security planning, followed by system design, device
              selection, and professional installation. We ensure that every
              CCTV system is configured according to operational requirements,
              network conditions, and future scalability. By utilizing
              high-quality cameras, reliable recording systems, and structured
              cabling, our solutions deliver clear video monitoring, stable
              performance, and long-term reliability. This allows our clients to
              maintain continuous surveillance, reduce security risks, and
              support operational efficiency with confidence.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              With a team of experienced engineers and technicians, PT Kreatif
              System Indonesia integrates high-quality CCTV cameras, DVR/NVR
              systems, and network-based surveillance with scalable architecture
              and clear video monitoring. Our approach focuses on accuracy,
              stability, and efficiency, enabling clients to gain real-time
              visibility, improve operational control, and strengthen overall
              security management with confidence.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Reliable CCTV Surveillance Backed by Professional Expertise
            </h2>
            <p className="text-gray-600 text-justify leading-relaxed mt-4">
              Backed by experienced engineers and technical specialists, PT
              Kreatif System Indonesia focuses on system reliability and
              long-term performance in every CCTV surveillance deployment. Our
              solutions are built to operate continuously in demanding
              environments, supported by precise system configuration, optimized
              network design, and structured cabling standards. This ensures
              consistent monitoring quality, reduced downtime, and faster
              incident response across all monitored areas.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed mt-4">
              Beyond installation, we provide ongoing technical support and
              preventive maintenance to ensure that CCTV infrastructure remains
              effective as operational needs evolve. Our team continuously
              monitors system performance, conducts routine inspections, and
              performs configuration adjustments to maintain optimal video
              quality and recording reliability over time. With scalable
              architecture and flexible system integration, our surveillance
              solutions allow organizations to expand coverage, integrate
              additional cameras, recording devices, and monitoring points as
              operational demands increase. This flexibility ensures that
              security systems can grow alongside business operations without
              requiring major system overhauls or disrupting existing
              infrastructure.
              <br />
              <br />
              By emphasizing long-term usability and system continuity, PT
              Kreatif System Indonesia helps clients maintain a stable and
              future-ready CCTV surveillance environment. Our approach enables
              organizations to respond more effectively to security incidents,
              support compliance and internal control requirements, and sustain
              reliable monitoring performance while preserving system stability
              and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
