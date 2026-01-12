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
              PABX Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia delivers advanced PABX solutions to
              streamline internal communication for businesses of all sizes. Our
              systems allow seamless call routing, efficient internal transfers,
              and centralized management to ensure your team stays connected at
              all times.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With flexible configurations, our PABX systems support multiple
              extensions, voicemail, call forwarding, and automated attendants,
              enabling your organization to handle communication professionally
              while reducing operational overhead.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Beyond installation, we provide ongoing maintenance and support to
              ensure your PABX operates reliably. From troubleshooting to
              upgrades, our team ensures minimal downtime and optimal system
              performance, empowering your business with a robust and scalable
              communication infrastructure.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Business Communication
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our PABX solutions are designed to adapt to your growing business
              needs. Whether for a small office or a large enterprise, our
              systems provide consistent connectivity, efficient call handling,
              and enhanced productivity across all departments.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              By integrating modern telephony features with easy-to-manage
              interfaces, we enable your team to communicate effectively both
              internally and externally. Every solution is tailored to provide
              reliability, scalability, and a seamless user experience.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Trust PT. Kreatif System Indonesia for PABX solutions that combine
              technical expertise with customer-focused service. Our proactive
              support ensures your communication system runs smoothly, allowing
              your business to focus on what matters most—growth and
              productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
