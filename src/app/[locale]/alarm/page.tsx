import Contents from "@/components/see-more/alarm/Contents";
import Hero from "@/components/see-more/alarm/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alarm System Solutions | PT. Kreatif System Indonesia",
  description:
    "Solusi alarm keamanan untuk gedung, kantor, dan properti bisnis. Deteksi dini dan respon cepat.",
  openGraph: {
    title: "Alarm System Solutions",
    description: "Sistem alarm keamanan profesional.",
    url: "https://www.kreatifsystem.com/alarm",
  },
};

export default function Alarm() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
