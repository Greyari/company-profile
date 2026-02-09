// ====================
// src/components/Projects.tsx
// ====================

import { CircleArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import AnimatedContent from "../AnimatedContent";

/* ===================== DATA ===================== */
const projects = [
  {
    titleKey: "factory.title",
    descriptionKey: "factory.description",
    image: "/images/projects/factory.jpg",
    link: "/factory",
  },
  {
    titleKey: "construction.title",
    descriptionKey: "construction.description",
    image: "/images/projects/construction.jpg",
    link: "/construction",
  },
  {
    titleKey: "apartment.title",
    descriptionKey: "apartment.description",
    image: "/images/projects/apart.jpg",
    link: "/apart",
  },
  {
    titleKey: "school.title",
    descriptionKey: "school.description",
    image: "/images/projects/school.jpg",
    link: "/school",
  },
];

/**
 * Projects Section Component
 * Displays project cards in a full-width grid layout
 */
export default function Projects() {
  const t = useTranslations("projects");
  return (
    <section className="bg-white mt-30">
      <AnimatedContent distance={150}>
        <div className="text-center mb-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            {t("description")}{" "}
          </p>
        </div>
        {/* Grid Container - Full width, no gaps */}
        <div className="grid md:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              titleKey={project.titleKey}
              descriptionKey={project.descriptionKey}
              image={project.image}
              link={project.link}
              t={t}
            />
          ))}
        </div>
      </AnimatedContent>
    </section>
  );
}

/**
 * Individual Project Card Component
 */
interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  t: (key: string) => string;
}

function ProjectCard({
  titleKey,
  descriptionKey,
  image,
  link,
  t,
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="relative h-140 overflow-hidden group cursor-pointer">
        {/* Background Image */}
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

        {/* Content Container */}
        <div className="absolute bottom-10 left-0 right-0 p-6 text-white">
          {/* Title */}
          <h3 className="text-2xl font-medium mb-1">{t(titleKey)}</h3>
          <div className="flex items-center justify-between gap-4">
            {/* Description */}
            <p className="text-sm font-light text-gray-200 leading-relaxed flex-1">
              {t(descriptionKey)}
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
