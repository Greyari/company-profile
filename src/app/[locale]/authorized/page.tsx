// ==========================================
// src/app/about/page.tsx
// ==========================================

import AuthorizedContents from "@/components/authorized/AuthorizedContents";
import AuthorizedHero from "@/components/authorized/AuthorizedHero";
import AuthorizedStory from "@/components/authorized/AuthorizedStory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Partner Dahua Technology | PT. Kreatif System Indonesia",
  description:
    "PT. Kreatif System Indonesia adalah Authorized Partner resmi Dahua Technology, menyediakan solusi CCTV dan sistem keamanan terpercaya dengan standar global.",
  openGraph: {
    title: "Authorized Partner Dahua Technology",
    description:
      "Partner resmi Dahua Technology untuk solusi keamanan profesional di Indonesia.",
    url: "https://www.kreatifsystem.com/authorized",
  },
};
export default function AuthorizedPage() {
  return (
    <main>
      <AuthorizedHero />
      <AuthorizedStory />
      <AuthorizedContents />
    </main>
  );
}
