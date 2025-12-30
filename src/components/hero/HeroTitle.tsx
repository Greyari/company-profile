"use client";

interface HeroTitleProps {
  title: string;
}

export default function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight leading-tight mb-2">
      {title}
    </h1>
  );
}
