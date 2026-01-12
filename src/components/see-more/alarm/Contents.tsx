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
              Alarm & Safety Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia delivers reliable Alarm and Safety
              solutions to protect your people, assets, and facilities. Our
              systems are designed to detect potential threats, provide early
              warnings, and ensure rapid response in any emergency situation.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our advanced alarm systems cover intrusion, fire, and emergency
              alerts, giving you real-time notifications to safeguard
              operations. Safety solutions include hazard monitoring, emergency
              planning, and compliance support, helping your organization
              maintain a secure and protected environment.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Beyond installation, we provide continuous monitoring,
              integration, and maintenance to ensure your systems operate
              reliably. By combining modern technology with professional
              expertise, we deliver scalable, efficient, and dependable
              solutions for long-term safety and peace of mind.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Protection for Every Business
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our solutions are tailored to meet the unique safety requirements
              of your organization. From small offices to large facilities, we
              provide alarms and safety systems that integrate seamlessly with
              your operations, enhancing security and operational efficiency.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With proactive maintenance, real-time monitoring, and expert
              support, we ensure your Alarm and Safety systems perform optimally
              at all times. Our team works closely with your organization to
              deliver reliable, scalable, and easy-to-manage solutions.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Trust PT. Kreatif System Indonesia for Alarm & Safety solutions
              that combine technical excellence with a customer-focused
              approach, providing peace of mind and a secure environment for
              your business to grow and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
