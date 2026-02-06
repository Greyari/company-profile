import Contents from "@/components/see-more/pabx/Contents";
import Hero from "@/components/see-more/pabx/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PABX System | PT. Kreatif System Indonesia",
  description:
    "Solusi sistem PABX profesional untuk kantor, pabrik, dan gedung bisnis. Instalasi, konfigurasi, dan support terpercaya.",
  openGraph: {
    title: "PABX System",
    description:
      "Solusi sistem telepon PABX untuk kebutuhan komunikasi bisnis.",
    url: "https://www.kreatifsystem.com/pabx",
  },
};
export default function PABX() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
