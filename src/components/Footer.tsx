import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
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
      { label: "Attendance System", href: "/solutions/attendance" },
      { label: "CCTV & Security", href: "/solutions/cctv" },
      { label: "IT Support", href: "/solutions/it-support" },
      { label: "Access Control", href: "/solutions/access-control" },
    ],
  },
];

const CONTACT_INFO = {
  email: "info@khaed.com",
  phone: "+62 812 3456 7890",
  address: "Graha Tech, Lt. 4, Jakarta, Indonesia",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Identity Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight uppercase">
              PT. Kreatif System Indonesia
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Empowering modern businesses with high-end integrated security
              technology and AI-driven surveillance infrastructure.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
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
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-zinc-500 uppercase tracking-widest">
          <p>
            &copy; {currentYear} PT. Kreatif System Indonesia. All rights
            reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
