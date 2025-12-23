"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    checkScroll()
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled || isOpen ? 'bg-black/95 backdrop-blur-sm shadow-2xl' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
          isScrolled ? 'h-16' : 'h-18'
        }`}>

          {/* Logo */}
          <div className={`font-bold transition-all duration-500 ease-in-out text-white`}>
            PT. Kreatif System Indonesia
          </div>

          {/* ===== DESKTOP MENU ===== */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/products', label: 'Our Product' },
              { href: '/contact', label: 'Contact Us' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group font-medium transition-all duration-300 ${
                  pathname === item.href ? 'text-blue-400' : 'text-white'
                }`}
              >
                <span className="group-hover:text-blue-300 transition-colors duration-300">
                  {item.label}
                </span>
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="pb-6 pt-4 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/products', label: 'Our Product' },
              { href: '/contact', label: 'Contact Us' },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`
                  flex items-center justify-between
                  px-4 py-3 rounded-xl
                  font-medium transition-all duration-300
                  hover:bg-white/10 active:scale-[0.98]
                  ${pathname === item.href ? 'bg-blue-500/20 text-blue-300' : 'text-white'}
                `}
              >
                {item.label}
                <span className="opacity-60">→</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}