import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "rodal/lib/rodal.css";
import Script from "next/script";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roya Art",
  description: "Roya PortFolio Designer & Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark scroll-smooth">
      <body className="font-poppins text-[15px] text-slate-900">
        {children}
      </body>
    </html>
  );
}
