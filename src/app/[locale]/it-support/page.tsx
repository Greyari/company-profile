import Contents from "@/components/see-more/it-support/Contents";
import Hero from "@/components/see-more/it-support/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Services | PT. Kreatif System Indonesia",
  description:
    "Layanan IT Support profesional untuk jaringan, server, maintenance, dan troubleshooting sistem bisnis.",
  openGraph: {
    title: "IT Support Services",
    description: "Layanan IT Support untuk perusahaan dan industri.",
    url: "https://www.kreatifsystem.com/it-support",
  },
};
export default function ITSupport() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
