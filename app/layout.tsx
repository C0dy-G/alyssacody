import type { Metadata } from "next";
// Removed Geist and Geist_Mono, importing your specified fonts
import { Poiret_One, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

// Define the Poiret One font for headers
const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: ['400'], // Poiret One Regular typically means weight 400
  variable: '--font-poiret-one', // CSS variable name for Tailwind
  display: 'swap', // Optimizes font loading
});

// Define the Noto Sans Devanagari font for body text (as a close alternative to Shree Devanagari 714 from Google Fonts)
const shreeDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'], // Specify subset for Devanagari script
  weight: ['400'], // Assuming Regular weight for body text
  variable: '--font-shree-devanagari', // CSS variable name for Tailwind
  display: 'swap', // Optimizes font loading
});

export const metadata: Metadata = {
  title: "Alyssa & Cody - RSVP", // Updated title for your RSVP site
  description: "Wedding RSVP Page for Alyssa & Cody", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the CSS variables for the custom fonts to the body */}
      <body className={`${poiretOne.variable} ${shreeDevanagari.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
