import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rdpackers.in"),
  title: {
    default: "RD Packers And Carriers | Professional Packers & Movers",
    template: "%s | RD Packers And Carriers",
  },
  description: "Reliable, secure, and professional packers and movers services for household relocation, office shifting, and vehicle transportation. Verified GSTIN: 18AISPD0403G1ZL.",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RD Packers And Carriers | Professional Packers & Movers",
    description: "Reliable, secure, and professional packers and movers services for household relocation, office shifting, and vehicle transportation.",
    url: "https://rdpackers.in",
    siteName: "RD Packers And Carriers",
    images: [
      {
        url: "/gallery/image-9.jpeg",
        width: 1200,
        height: 630,
        alt: "RD Packers And Carriers Shifting Truck",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Packers And Carriers | Professional Packers & Movers",
    description: "Reliable, secure, and professional packers and movers services for household relocation, office shifting, and vehicle transportation.",
    images: ["/gallery/image-9.jpeg"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidgets from "@/components/WhatsAppWidgets";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#fcfcfc] text-[#212120]" suppressHydrationWarning>
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppWidgets />
      </body>
    </html>
  );
}
