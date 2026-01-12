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
              School Security System
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia is dedicated to providing advanced
              security and management solutions for educational institutions.
              Our team of professionals combines technical expertise with a deep
              understanding of school operations, ensuring that every solution
              we deliver enhances safety, communication, and administrative
              efficiency. Since our inception, we have focused on creating
              reliable systems that meet the unique needs of schools and
              campuses.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              We specialize in integrating attendance monitoring, access
              control, CCTV surveillance, and IT infrastructure to ensure
              seamless campus management. By leveraging real-time data and
              centralized controls, school administrators can make informed
              decisions, optimize resources, and maintain a secure environment
              for students and staff alike.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our solutions are designed to be scalable and adaptable to
              institutions of all sizes. From small schools to large
              universities, our systems provide reliable monitoring,
              communication, and management tools tailored to the educational
              environment. With PT Kreatif System Indonesia, schools gain peace
              of mind knowing their facilities and communities are protected by
              modern, effective, and easy-to-use technology solutions.
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              Enhancing School Management
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our commitment to educational institutions goes beyond just
              products. We offer end-to-end services including system design,
              implementation, and ongoing support to ensure that school
              management solutions operate efficiently and reliably. Every
              project is approached with a focus on security, communication, and
              operational efficiency.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              From IT infrastructure management to integrated CCTV, access
              control, and intercom systems, our solutions help schools maintain
              safety, streamline administrative tasks, and improve overall
              campus operations. We combine technical expertise with an
              understanding of educational challenges to deliver solutions that
              make a tangible difference.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              By choosing PT Kreatif System Indonesia, schools gain reliable,
              modern, and fully supported systems that enhance the safety and
              productivity of their campuses. Our scalable solutions are
              suitable for institutions of any size and ensure that
              administrators, teachers, and students benefit from advanced,
              easy-to-use technologies designed specifically for educational
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
