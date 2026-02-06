import ACContents from "@/components/see-more/access-control/ACContents";
import ACHero from "@/components/see-more/access-control/ACHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Control System | PT. Kreatif System Indonesia",
  description:
    "Solusi access control untuk kantor, pabrik, dan gedung. Fingerprint, RFID, dan sistem kontrol terintegrasi.",
  openGraph: {
    title: "Access Control System",
    description: "Sistem kontrol akses profesional.",
    url: "https://www.kreatifsystem.com/access-control",
  },
};

export default function AccessControl() {
  return (
    <main>
      <ACHero />
      <ACContents />
    </main>
  );
}
