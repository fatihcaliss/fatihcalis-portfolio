import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatih Calis",
  description: "Fatih Calis Portolio Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/darkfavicon.png",
        href: "/images/darkfavicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
