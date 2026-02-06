import Contents from "@/components/projects/Apart/Contents";
import Hero from "@/components/projects/Apart/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartment Security System | PT. Kreatif System Indonesia",
  description:
    "Solusi sistem keamanan apartemen dengan CCTV, access control, dan monitoring terintegrasi.",
  openGraph: {
    title: "Apartment Security System",
    description: "Keamanan apartemen dengan sistem terintegrasi.",
    url: "https://www.kreatifsystem.com/apart",
  },
};
export default function Apartment() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
