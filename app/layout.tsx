import { Poiret_One } from "next/font/google";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret",
});


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
