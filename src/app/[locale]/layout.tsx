import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/animations/scroll/smoothScroll";
import FloatingChat from "@/components/ChatBot/FloatingChat";
import SplashProvider from "@/components/providers/SplashProvider";
import ModalRoot from "@/components/ModalRoot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PT. Kreatif System Indonesia - Security Technology Solutions",
  description: "Innovative security technology solutions for modern businesses",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} font-sans bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <SplashProvider>
            <Navbar />
            <SmoothScroll>
              {children}
              <Footer />
            </SmoothScroll>
            <ModalRoot />
            <FloatingChat />
          </SplashProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
