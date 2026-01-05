// ====================
// src/components/Projects.tsx
// ====================

import { CircleArrowRight } from "lucide-react";

// Project data configuration
const projects = [
  {
    title: "Factory",
    description:
      "Educational institute and vocational engineering for students of SMKN 8 Malang.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
  {
    title: "Construction Site",
    description:
      "Warehouse area that provides industrial, residential and office building.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    title: "Apartment & Hotel",
    description:
      "Located in the heart of our city Malang, a residential building.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    title: "School",
    description:
      "Educational institution and science laboratory for students of Andalusia.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  },
];

/**
 * Projects Section Component
 * Displays project cards in a full-width grid layout
 */
export default function Projects() {
  return (
    <section className="bg-white mt-30">
      {/* Grid Container - Full width, no gaps */}
      <div className="grid md:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
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
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
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
  );
}
