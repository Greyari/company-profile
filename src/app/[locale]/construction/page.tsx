import Contents from "@/components/projects/Construction/Contents";
import Hero from "@/components/projects/Construction/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Site Security | PT. Kreatif System Indonesia",
  description:
    "Solusi keamanan proyek konstruksi dengan CCTV, monitoring, dan sistem pengawasan modern.",
  openGraph: {
    title: "Construction Site Security",
    description: "Keamanan proyek konstruksi profesional.",
    url: "https://www.kreatifsystem.com/construction",
  },
};
export default function Construction() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
