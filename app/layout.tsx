import { Poiret_One } from "next/font/google";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret",
});


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alyssa & Cody",
  authors: [{ name: "Cody Gehret", url: "https://codygehret.com" }],
  description: "Join us in San Francisco to celebrate Alyssa and Cody's engagement!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@100..900&display=swap" rel="stylesheet" />
        {/* ...other head elements... */}
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
