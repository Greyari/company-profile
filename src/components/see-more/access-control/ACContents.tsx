// ==========================================
// src/components/access-control/ACContents.tsx
// ==========================================

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InnovativeSolutions from "./CardSection";

export default function ACContents() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Attendance & Access Control Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT Kreatif System Indonesia provides integrated attendance and
              access control solutions designed to improve security, workforce
              management, and operational accountability. Our systems enable
              organizations to manage entry permissions while accurately
              recording attendance data through controlled access mechanisms.
              This approach ensures consistent monitoring, structured access
              policies, and reliable operational records.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our attendance solutions are built on secure authentication
              methods such as fingerprint biometrics, RFID cards, and access
              terminals integrated with centralized management systems. Each
              access event is recorded in real time, allowing organizations to
              monitor presence, track movement, and generate accurate reports
              for operational and administrative needs.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              By combining attendance tracking with access control
              infrastructure, organizations gain better visibility over
              workforce activities while maintaining controlled access to
              offices, facilities, and restricted areas. This integrated
              approach supports improved security enforcement, data accuracy,
              and compliance with internal operational policies.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Reliable System Implementation & Long-Term Support
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Backed by experienced engineers and technical specialists, PT
              Kreatif System Indonesia ensures that every attendance and access
              control system is implemented with precision and reliability. Our
              solutions are designed to operate continuously in daily
              operational environments, supported by proper system
              configuration, stable network integration, and secure device
              management.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Access control infrastructure is built using door controllers,
              biometric readers, and centralized software that allows
              administrators to define access rules, monitor activities, and
              maintain detailed audit logs. This structured system design helps
              organizations strengthen security oversight while maintaining
              transparency and traceability across access points.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Beyond installation, we provide ongoing technical support and
              system maintenance to ensure long-term performance and
              scalability. Our solutions allow organizations to expand access
              points, integrate additional authentication methods, and adapt
              system policies as operational requirements evolve, without
              compromising system stability or security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
