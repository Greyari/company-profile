
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
              IT Support & Maintenance
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              At PT. Kreatif System Indonesia, our IT Support & Maintenance
              services are designed to keep your business systems running
              smoothly. We provide proactive monitoring, timely troubleshooting,
              and routine maintenance, ensuring that downtime is minimized and
              productivity stays high. Our experts tailor each support plan to
              align with your operational needs.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our team understands that technology challenges can disrupt daily
              operations. That’s why we offer flexible, responsive support
              solutions—from hardware and software troubleshooting to network
              optimization—so your business can operate without interruption. We
              aim to resolve issues efficiently while providing guidance to
              prevent future problems.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Beyond reactive support, we focus on preventive maintenance to
              extend the lifespan of your IT infrastructure. Regular updates,
              system checks, and performance tuning are part of our approach,
              keeping your environment secure, stable, and scalable. Partnering
              with us means gaining a reliable IT backbone that empowers your
              business to thrive without worrying about technical setbacks.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Reliable IT Support for Modern Businesses
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              We recognize that every business has unique IT needs. Our
              specialists work closely with your team to understand your
              infrastructure, anticipate challenges, and deliver support that
              fits seamlessly with your workflow. Our goal is not just fixing
              problems but enabling long-term IT efficiency.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              With our comprehensive maintenance plans, you gain more than just
              a service provider—you gain a technology partner. We keep systems
              updated, optimize performance, and offer insights to enhance your
              digital operations. Every interaction is guided by
              professionalism, precision, and commitment to your business
              success.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Trust PT. Kreatif System Indonesia for IT Support & Maintenance
              that prioritizes your uptime and efficiency. From small businesses
              to large enterprises, our solutions adapt to your scale and
              requirements, ensuring your IT environment is always ready to meet
              today’s demands and tomorrow’s growth. We combine technical
              expertise with a customer-first approach, delivering peace of mind
              with every service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
