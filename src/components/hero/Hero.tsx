import Link from "next/link"
import HeroTitle from "./HeroTitle"

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex items-center
        bg-[url('/images/cctv-hero-bg.webp')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider mb-4 text-blue-200">
              PT. Kreatif System Indonesia
            </p>

            {/* 🔥 ANIMATED TITLE */}
            <HeroTitle />

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Delivering smart, secure, and scalable digital solutions.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
