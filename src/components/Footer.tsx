import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { useTranslations } from "next-intl";
/**
 * Footer Component
 * Refactored for scalability, clean code, and industry-standard UI.
 * Features: Modular link sections, social media integration, and accessible navigation.
 */

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const t = useTranslations("navbar");
  const x = useTranslations("footer");
  const y = useTranslations("solutionLinks");

  const FOOTER_SECTIONS: FooterSection[] = [
    {
      title: x("links"),
      links: [
        { label: t("home"), href: "/" },
        { label: t("about"), href: "/about" },
        { label: t("products"), href: "/products" },
        { label: t("solutions"), href: "/factory" },
        { label: t("contact"), href: "/contact" },
      ],
    },
    {
      title: x("solutions"),
      links: [
        { label: y("accessControl"), href: "/access-control" },
        { label: y("cctv"), href: "/cctv" },
        { label: y("itSupport"), href: "/it-support" },
        { label: "PABX", href: "/pabx" },
        { label: "Public Address", href: "/public-address" },
        { label: y("alarmSafety"), href: "/alarm" },
      ],
    },
  ];

  const CONTACT_INFO = {
    email: "enquiry@kreatifsystem.com",
    phone: "+(62) 214 0088",
    address: "Ruko Palm Spring Blok B3 No.15, Batam, Kepulauan Riau, Indonesia",
  };

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Identity Section */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight uppercase">
              <img
                src="/images/logo/logo-putih.png"
                alt="PT. Kreatif System Indonesia"
                className="w-20 h-20 object-contain"
                draggable={false}
              />
              <span>PT. Kreatif System Indonesia</span>
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              {x("subtitle")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/kreasiicctvbatam"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ksibatam/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BVbS7EbYER62oi1j8lWi0vg%3D%3D"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/kreasiibatamofficial"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Dynamic Navigation Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information Section */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {x("contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-zinc-400">
                <MapPin size={18} className="shrink-0 text-white" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-zinc-400">
                <Phone size={18} className="shrink-0 text-white" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-zinc-400">
                <Mail size={18} className="shrink-0 text-white" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 mt-16 pt-8 flex justify-center items-center text-xs text-zinc-500 uppercase tracking-widest">
          <p>
            &copy; {currentYear} PT. Kreatif System Indonesia. {x("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
