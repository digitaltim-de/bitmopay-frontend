import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Overpass, Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Optimize font loading
const overpass = Overpass({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-overpass',
})

const outfit = Outfit({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
})

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Bitmopay - Global Crypto Payment Gateway",
  description:
    "Accept Bitcoin, Ethereum, USDT and more with a simple API integration. Withdraw funds automatically each billing cycle.",
  generator: 'v0.dev',
  metadataBase: new URL('https://bitmopay.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitmopay.com',
    title: 'Bitmopay - Global Crypto Payment Gateway',
    description: 'Accept Bitcoin, Ethereum, USDT and more with a simple API integration.',
    siteName: 'Bitmopay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitmopay - Global Crypto Payment Gateway',
    description: 'Accept Bitcoin, Ethereum, USDT and more with a simple API integration.',
  },
}

export const viewport: Viewport = {
  themeColor: '#10b981', // Emerald-500 from the Tailwind config
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${overpass.variable} ${outfit.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${overpass.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
