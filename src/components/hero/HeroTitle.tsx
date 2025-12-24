import BlurText from "@/components/ui/BlurText"

export default function HeroTitle() {
  return (
    <BlurText
      text="Innovative Security Technology Solutions"
      className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-13 mb-2"
      delay={120}
      animateBy="words"
      direction="top"
    />
  )
}
