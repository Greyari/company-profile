import Link from "next/link"
import HeroTitle from "./HeroTitle"

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex items-center
        bg-[url('/images/cctv-hero-bg.webp')]
        bg-cover bg-no-repeat
        bg-position-[100%_0.05%]
      "
    >

      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg  tracking-normal  text-white/80">
              PT. Kreatif System Indonesia
            </p>

            <HeroTitle />

            <p className="text-sm md:text-lg mb-4 text-white/70">
             Delivering smart, secure, and scalable digital solutions for modern businesses
            </p>

           <Link
              href="/contact"
                className="
                  inline-flex items-center px-10 py-4
                  border-2 border-white/70
                  text-white/70
                  rounded-full font-medium
                  transition
                  hover:bg-gray-100
                  hover:text-black
                "
              >
              Get Started →
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
