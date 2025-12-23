import BlurText from "@/components/ui/BlurText"

export default function HeroTitle() {
  return (
    <BlurText
      text="Innovative Security Technology Solutions"
      className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6"
      delay={120}
      animateBy="words"
      direction="top"
    />
  )
}
