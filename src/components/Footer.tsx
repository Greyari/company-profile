import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

/**
 * Footer Component
 * Refactored for scalability, clean code, and industry-standard UI.
 * Features: Modular link sections, social media integration, and accessible navigation.
 */

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Access Control", href: "/access-control" },
      { label: "CCTV & Security", href: "/cctv" },
      { label: "IT Support", href: "/it-support" },
      { label: "PABX", href: "/pabx" },
      { label: "Public Address", href: "/public-address" },
      { label: "Alarm & Safety", href: "/alarm" },
    ],
  },
];

const CONTACT_INFO = {
  email: "enquiry@kreatifsystem.com",
  phone: "+(62) 214 0088",
  address: "Ruko Palm Spring Blok B3 No.15, Batam, Kepulauan Riau, Indonesia",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              A trusted IT & security solutions provider serving small, medium,
              large enterprises across diverse industries.
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
              Contact Us
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
            &copy; {currentYear} PT. Kreatif System Indonesia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
