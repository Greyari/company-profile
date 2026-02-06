import Contents from "@/components/see-more/cctv/Contents";
import Hero from "@/components/see-more/cctv/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTV Security Solutions | PT. Kreatif System Indonesia",
  description:
    "Solusi CCTV profesional untuk kantor, pabrik, gedung, dan rumah. Monitoring real-time, instalasi rapi, dan support berkelanjutan.",
  openGraph: {
    title: "CCTV Security Solutions",
    description: "Solusi CCTV modern untuk keamanan bisnis dan properti.",
    url: "https://www.kreatifsystem.com/cctv",
  },
};

export default function CCTV() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
