import Contents from "@/components/projects/Factory/Contents";
import Hero from "@/components/projects/Factory/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory Security Solutions | PT. Kreatif System Indonesia",
  description:
    "Solusi keamanan dan sistem teknologi terintegrasi untuk pabrik dan kawasan industri.",
  openGraph: {
    title: "Factory Security Solutions",
    description: "Sistem CCTV, access control, dan keamanan pabrik.",
    url: "https://www.kreatifsystem.com/factory",
  },
};
export default function Factory() {
  return (
    <main>
      <Hero />
      <Contents />
    </main>
  );
}
