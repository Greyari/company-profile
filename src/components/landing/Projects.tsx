// ====================
// src/components/Projects.tsx
// ====================

import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
// Project data configuration
const projects = [
  {
    title: "Factory",
    description:
      "Integrated IT and security solutions for factories, supporting operational monitoring, and infrastructure management.",
    image: "/images/projects/factory.jpg",
    link: "/factory",
  },
  {
    title: "Construction Site",
    description:
      "Technology and security systems for construction sites to support project monitoring, and site operations.",
    image: "/images/projects/construction.jpg",
    link: "/construction",
  },
  {
    title: "Apartment & Hotel",
    description:
      "Comprehensive IT and security solutions for apartments and hotels, including access systems, and facility management.",
    image: "/images/projects/apart.jpg",
    link: "/apart",
  },
  {
    title: "School",
    description:
      "IT infrastructure and security solutions for schools to support safety, communication, and daily operations.",
    image: "/images/projects/school.jpg",
    link: "/school",
  },
];

/**
 * Projects Section Component
 * Displays project cards in a full-width grid layout
 */
export default function Projects() {
  return (
    <section className="bg-white mt-30">
      <div className="text-center mb-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Our Solutions
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          {" "}
          Trusted by companies across industries to support their operations.
        </p>
      </div>
      {/* Grid Container - Full width, no gaps */}
      <div className="grid md:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Individual Project Card Component
 */
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="relative h-140 overflow-hidden group cursor-pointer">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

        {/* Content Container */}
        <div className="absolute bottom-10 left-0 right-0 p-6 text-white">
          {/* Title */}
          <h3 className="text-2xl font-medium mb-1">{title}</h3>

          <div className="flex items-center justify-between gap-4">
            {/* Description */}
            <p className="text-sm font-light text-gray-200 leading-relaxed flex-1">
              {description}
            </p>
            <button
              className="
              group
              w-12 h-12
              flex items-center justify-center
              shrink-0
            "
            >
              <CircleArrowRight
                size={48}
                strokeWidth={1}
                className="
                transition-transform duration-300 ease-out
                group-hover:translate-x-1.5
              "
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
