import ContactContents from "@/components/contacts/ContactContents";
import ContactHero from "@/components/contacts/ContactHero";
import { Metadata } from "next";

/* ================= SEO ================= */

export const metadata: Metadata = {
  title: "Contact Us | PT. Kreatif System Indonesia",
  description:
    "Hubungi PT. Kreatif System Indonesia untuk solusi CCTV, Access Control, dan sistem keamanan terintegrasi. Konsultasi gratis untuk kebutuhan bisnis Anda.",
  keywords: [
    "contact kreatif system indonesia",
    "hubungi penyedia cctv batam",
    "jasa cctv batam",
    "security system batam",
    "konsultasi cctv",
  ],
  openGraph: {
    title: "Contact PT. Kreatif System Indonesia",
    description:
      "Hubungi tim kami untuk konsultasi solusi keamanan dan teknologi terintegrasi.",
    url: "https://www.kreatifsystem.com/contact",
    siteName: "PT. Kreatif System Indonesia",
    images: [
      {
        url: "/images/contact/og-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact PT. Kreatif System Indonesia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PT. Kreatif System Indonesia",
    description:
      "Hubungi tim PT. Kreatif System Indonesia untuk solusi keamanan dan teknologi.",
    images: ["/images/contact/og-contact.webp"],
  },
};

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactContents />

      {/* ========= JSON-LD Structured Data ========= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PT. Kreatif System Indonesia",
            url: "https://www.kreatifsystem.com",
            logo: "https://www.kreatifsystem.com/images/logo/logo-putih.png",
            telephone: "+622140088",
            email: "enquiry@kreatifsystem.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Ruko Palm Spring Blok B3 No.15, Batam, Kepulauan Riau",
              addressLocality: "Batam",
              addressRegion: "Kepulauan Riau",
              addressCountry: "ID",
            },
            areaServed: "Indonesia",
            sameAs: [
              "https://www.instagram.com/kreasiicctvbatam",
              "https://www.linkedin.com/company/ksibatam/",
              "https://www.facebook.com/kreasiibatamofficial",
            ],
            openingHours: "Mo-Fr 09:00-17:00",
          }),
        }}
      />
    </main>
  );
}
