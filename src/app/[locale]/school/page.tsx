import Contents from "@/components/projects/School/Contents";
import Hero from "@/components/projects/School/Hero";
import { Metadata } from "next";

/* ================= SEO ================= */

export const metadata: Metadata = {
  title: "School Security Solutions | PT. Kreatif System Indonesia",
  description:
    "Solusi keamanan sekolah terintegrasi: CCTV, Access Control, Alarm System, dan monitoring untuk lingkungan belajar yang aman dan modern.",
  keywords: [
    "school security solution",
    "solusi keamanan sekolah",
    "cctv sekolah",
    "access control sekolah",
    "alarm sekolah",
    "keamanan sekolah indonesia",
  ],
  openGraph: {
    title: "School Security Solutions | PT. Kreatif System Indonesia",
    description:
      "Solusi keamanan sekolah terintegrasi untuk menciptakan lingkungan belajar yang aman dan terkendali.",
    url: "https://www.kreatifsystem.com/solutions/school",
    siteName: "PT. Kreatif System Indonesia",
    images: [
      {
        url: "/images/solutions/school/og-school.webp",
        width: 1200,
        height: 630,
        alt: "School Security Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // ini MASIH nama resminya, bukan X-card
    title: "School Security Solutions",
    description:
      "Solusi keamanan sekolah terintegrasi dari PT. Kreatif System Indonesia.",
    images: ["/images/solutions/school/og-school.webp"],
  },
};

export default function School() {
  return (
    <main>
      <Hero />
      <Contents />

      {/* ========= JSON-LD Structured Data ========= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "School Security Solutions",
            provider: {
              "@type": "Organization",
              name: "PT. Kreatif System Indonesia",
              url: "https://www.kreatifsystem.com",
            },
            areaServed: {
              "@type": "Country",
              name: "Indonesia",
            },
            serviceType: [
              "CCTV System",
              "Access Control",
              "Alarm System",
              "Integrated School Security",
            ],
            description:
              "Solusi keamanan sekolah terintegrasi meliputi CCTV, Access Control, dan sistem alarm untuk menciptakan lingkungan belajar yang aman.",
            url: "https://www.kreatifsystem.com/solutions/school",
          }),
        }}
      />
    </main>
  );
}
