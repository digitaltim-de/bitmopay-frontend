import type React from "react";
import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

// Optimize font loading
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Bitmopay - Global Crypto Payment Gateway",
  description:
    "Accept Bitcoin, Ethereum, USDT and more with a simple API integration. Withdraw funds automatically each billing cycle.",
  metadataBase: new URL("https://bitmopay.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitmopay.com",
    title: "Bitmopay - Global Crypto Payment Gateway",
    description: "Accept Bitcoin, Ethereum, USDT and more with a simple API integration.",
    siteName: "Bitmopay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitmopay - Global Crypto Payment Gateway",
    description: "Accept Bitcoin, Ethereum, USDT and more with a simple API integration.",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981", // Emerald-500 from the Tailwind config
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
