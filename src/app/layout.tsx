import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/animations/scroll/smoothScroll";
import FloatingChat from "@/components/ChatBot/FloatingChat";
import SplashProvider from "@/components/providers/SplashProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PT. Kreatif System Indonesia - Security Technology Solutions",
  description: "Innovative security technology solutions for modern businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-white`}>
        <SplashProvider>
          <Navbar />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
          <FloatingChat />
        </SplashProvider>
      </body>
    </html>
  );
}
