
// ====================
// src/components/Hero.tsx
// ====================
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-teal-700">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider mb-4">
            PT. Kreatif System Indonesia
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Innovative Security Technology Solutions
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Delivering smart, secure, and scalable digital solutions for modern businesses.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative camera image placeholder */}
      <div className="absolute right-10 bottom-20 w-64 h-64 bg-white/10 rounded-full hidden lg:block"></div>
    </section>
  )
}