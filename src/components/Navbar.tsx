"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/fadeIn";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronDown, ChevronRight, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/routing";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const t = useTranslations("navbar");
  const tProducts = useTranslations("products");
  const tSolutions = useTranslations("solutions");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    timelineRef.current = gsap.timeline({ paused: true }).to(nav, {
      yPercent: -100,
      duration: 0.3,
      ease: "power2.inOut",
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      setIsScrolled(currentScrollY > 50);

      if (scrollDelta > 0 && currentScrollY > 100) {
        timelineRef.current?.play();
      } else if (scrollDelta < 0) {
        timelineRef.current?.reverse();
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavMouseEnter = () => {
    setIsNavbarHovered(true);
    if (timelineRef.current) {
      timelineRef.current.pause();
      gsap.to(navRef.current, {
        yPercent: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleNavMouseLeave = () => {
    setIsNavbarHovered(false);
    if (timelineRef.current && window.scrollY > 100) {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      if (scrollDelta > 0) timelineRef.current.play();
    }
  };

  const handleDropdownEnter = (itemHref: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(itemHref);
    setOpenDropdown(itemHref);
  };

  const handleDropdownLeave = () => {
    setHoveredItem(null);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpenDropdown(null);
  };

  const isWhiteBg = isScrolled || isOpen || isNavbarHovered;

  const dropdownItems = {
    "/products": [
      { label: tProducts("all"), href: "/products" },
      { label: tProducts("ipCamera"), href: "/products/ipcamera" },
      { label: tProducts("hdcvi"), href: "/products/hdcvi" },
      { label: tProducts("wifi"), href: "/products/wifi" },
      { label: tProducts("recorder"), href: "/products/dvrnvr" },
      { label: tProducts("accessControl"), href: "/products/accesscontrol" },
      { label: tProducts("pabx"), href: "/products/pabx" },
      { label: tProducts("audioPaging"), href: "/products/audiopaging" },
    ],
    "/factory": [
      { label: tSolutions("factory"), href: "/factory" },
      { label: tSolutions("construction"), href: "/construction" },
      { label: tSolutions("apartment"), href: "/apart" },
      { label: tSolutions("school"), href: "/school" },
    ],
  };

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
      className={`
        fixed w-full z-50 transition-all duration-500 ease-in-out
        ${
          isWhiteBg
            ? "bg-white/95 backdrop-blur-sm shadow-2xl"
            : "bg-transparent"
        }
      `}
    >
      <motion.div
        variants={fadeIn("up", { offset: 50, duration: 0.8 })}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center transition-all duration-500 ease-in-out h-16">
            <div
              className={`flex items-center gap-2 font-bold text-lg transition-all duration-500 ease-in-out ${
                isWhiteBg ? "text-black" : "text-white"
              }`}
            >
              <img
                src={
                  isWhiteBg
                    ? "/images/logo/logo-warna.png"
                    : "/images/logo/logo-putih.png"
                }
                alt="KREASII Logo"
                className="w-10 h-10 object-contain"
                draggable={false}
              />
              <span>KREASII</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {[
                { href: "/", label: t("home"), hasDropdown: false },
                { href: "/about", label: t("about"), hasDropdown: false },
                { href: "/products", label: t("products"), hasDropdown: true },
                { href: "/factory", label: t("solutions"), hasDropdown: true },
                { href: "/contact", label: t("contact"), hasDropdown: false },
              ].map((item) => {
                const isActive = pathname === item.href;
                const isItemHovered = hoveredItem === item.href;
                const hasAnyHover = hoveredItem !== null;
                const isDropdownOpen = openDropdown === item.href;

                let textColor = "";
                if (!isWhiteBg) {
                  textColor = "text-white";
                } else if (hasAnyHover) {
                  textColor = isItemHovered ? "text-black" : "text-gray-400";
                } else {
                  textColor = "text-black";
                }

                return (
                  <div
                    key={item.href}
                    className="relative h-16 flex items-center"
                    onMouseEnter={() => {
                      if (item.hasDropdown) handleDropdownEnter(item.href);
                      else setHoveredItem(item.href);
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) handleDropdownLeave();
                      else setHoveredItem(null);
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-label={`Go to ${item.label}`}
                      className={`relative text-sm group font-normal transition-all duration-300 ${textColor} flex items-center gap-1`}
                    >
                      <span className="transition-colors duration-300">
                        {item.label}
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          strokeWidth={1.5}
                          className={`transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-current transition-all duration-300 ${
                          isItemHovered
                            ? "w-full"
                            : isActive && !hasAnyHover
                              ? "w-full"
                              : "w-0"
                        }`}
                      />
                    </Link>

                    {item.hasDropdown && isDropdownOpen && (
                      <div
                        role="menu"
                        aria-label={`${item.label} submenu`}
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                        }}
                        className="absolute top-full left-0 mt-0 min-w-50 bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn"
                      >
                        {dropdownItems[
                          item.href as keyof typeof dropdownItems
                        ]?.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            href={dropItem.href}
                            role="menuitem"
                            aria-label={`Go to ${dropItem.label}`}
                            className="group flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200"
                          >
                            <span>{dropItem.label}</span>
                            <ChevronRight
                              size={16}
                              strokeWidth={1.5}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div
                className="relative h-16 flex items-center"
                onMouseEnter={() => handleDropdownEnter("language")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  aria-label="Change language"
                  aria-haspopup="listbox"
                  aria-expanded={openDropdown === "language"}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    isWhiteBg ? "text-black" : "text-white"
                  }`}
                >
                  <Globe size={24} strokeWidth={2} />
                  <span className="font-medium">{locale.toUpperCase()}</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${
                      openDropdown === "language" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === "language" && (
                  <div
                    role="listbox"
                    aria-label="Select language"
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    className="absolute top-full right-0 w-32 bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn"
                  >
                    {[
                      { code: "id", label: "Indonesia" },
                      { code: "en", label: "English" },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm transition-all hover:bg-gray-50 ${
                          locale === lang.code ? "bg-gray-100 font-medium" : ""
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-all duration-300 hover:scale-110 ${
                isWhiteBg ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-6 pt-4 space-y-2">
              {[
                { href: "/", label: t("home"), hasDropdown: false },
                { href: "/about", label: t("about"), hasDropdown: false },
                { href: "/products", label: t("products"), hasDropdown: true },
                { href: "/factory", label: t("solutions"), hasDropdown: true },
                { href: "/contact", label: t("contact"), hasDropdown: false },
              ].map((item) => {
                const isOpenDropdown = mobileDropdown === item.href;

                return (
                  <div key={item.href} className="px-2">
                    {!item.hasDropdown && (
                      <Link
                        href={item.href}
                        aria-label={`Go to ${item.label}`}
                        onClick={() => setIsOpen(false)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-gray-200 text-black"
                            : "text-gray-800"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          size={18}
                          strokeWidth={1.5}
                          className="opacity-60"
                        />
                      </Link>
                    )}

                    {item.hasDropdown && (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.href)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            mobileDropdown === item.href
                              ? "bg-gray-100 text-black"
                              : "text-gray-800"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            strokeWidth={1.5}
                            className={`transition-transform duration-300 ${
                              mobileDropdown === item.href ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileDropdown === item.href && (
                          <div
                            role="menu"
                            aria-label={`${item.label} submenu`}
                            className="mt-1 ml-4 space-y-1"
                          >
                            {dropdownItems[
                              item.href as keyof typeof dropdownItems
                            ]?.map((dropItem) => (
                              <Link
                                key={dropItem.href}
                                href={dropItem.href}
                                role="menuitem"
                                aria-label={`Go to ${dropItem.label}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition-all"
                              >
                                {dropItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
              {/* Mobile language */}
              <div className="px-2 pt-2 border-t border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium text-gray-600">
                    {t("language")}
                  </span>
                  <div className="flex gap-2">
                    {[
                      { code: "id", label: "ID" },
                      { code: "en", label: "EN" },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          locale === lang.code
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
