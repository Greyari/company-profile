
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
              Public Address
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia delivers reliable Public Address,
              Parking Barrier, and Electrical services tailored for modern
              businesses. Our solutions are designed to improve operational
              efficiency, enhance security, and support seamless communication
              across your organization.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our Public Address systems ensure clear announcements, emergency
              alerts, and background audio for staff and visitors. Parking
              barrier solutions control vehicle access efficiently, improving
              security and traffic flow. Meanwhile, our electrical services
              provide safe, reliable, and energy-efficient power infrastructure
              for your operations.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Beyond installation, we offer ongoing maintenance and technical
              support for all services. By combining advanced technology with
              professional expertise, we ensure your systems remain stable,
              scalable, and optimized, empowering your business to focus on
              growth and productivity.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Reliable Facility & Infrastructure Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our comprehensive services are designed to meet the diverse needs
              of modern enterprises. From communication systems to security
              infrastructure and electrical installations, we provide solutions
              that integrate seamlessly into your business environment.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With proactive maintenance, technical support, and expert
              guidance, we ensure that your Public Address, Parking Barriers,
              and Electrical systems operate efficiently at all times. Our team
              works closely with your organization to deliver reliable,
              scalable, and easy-to-manage solutions.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Trust PT. Kreatif System Indonesia to provide facility and
              infrastructure services that enhance safety, productivity, and
              operational efficiency. We combine technical excellence with a
              customer-focused approach, ensuring your systems remain dependable
              and optimized for long-term performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
