'use client'; // This directive is necessary for client-side components in Next.js App Router

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component for potentially better image handling if needed elsewhere, though here we use background-image for simplicity

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  // Effect to update scrollY state on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Calculate opacity for the fading image: fades out as scrollY increases
  // Math.max(1 - scrollY / 300, 0) ensures opacity doesn't go below 0
  const fadeImageOpacity = Math.max(1 - scrollY / 300, 0);

  // Calculate opacity for the fading-in form: fades in as scrollY increases
  // Math.min(scrollY / 300, 1) ensures opacity doesn't go above 1
  const fadeFormOpacity = Math.min(scrollY / 300, 1);

  return (
    // Main container for the entire page, ensuring scrollability
    <div className="min-h-screen bg-white relative overflow-x-hidden font-body">
      {/* Header text (fixed on top) */}
      <div className="fixed top-20 w-full flex flex-col items-center z-20 pointer-events-none">
        {/* Black opacity block behind the header text */}
        <div className="bg-black/70 rounded-xl px-8 py-4 shadow-lg pointer-events-auto">
          <h1
            className="text-4xl md:text-5xl font-header text-white text-center drop-shadow" // Using font-header and text-white for contrast
          >
            Alyssa & Cody
          </h1>
          <h2
            className="text-xl md:text-2xl font-header text-white mt-2 text-center drop-shadow" // Using font-header and text-white for contrast
          >
            September 20, 2025 
          </h2>
        </div>
      </div>

      {/* Hero Image background (scrolls & fades out) */}
      <motion.div
        className="h-screen w-full bg-cover bg-center"
        style={{
          // Use the new hero image path
          backgroundImage: `url("/GreetingsFromSF.jpg")`,
          opacity: fadeImageOpacity,
          marginTop: "60px", // Soft margin under the fixed header
        }}
        initial={{ opacity: 1 }} // Initial state for Framer Motion animation
        animate={{ opacity: fadeImageOpacity }} // Animate to calculated opacity
        transition={{ duration: 0.3 }} // Smooth transition duration
      />

      {/* RSVP form fades in */}
      <motion.div
        className="py-12 px-6 flex flex-col items-center bg-white relative z-10 -mt-[25vh] pt-[120px]" // -mt-[25vh] creates the overlap effect
        style={{ opacity: fadeFormOpacity }} // Apply calculated opacity
        initial={{ opacity: 0 }} // Initial state for Framer Motion animation
        animate={{ opacity: fadeFormOpacity }} // Animate to calculated opacity
        transition={{ duration: 0.3 }} // Smooth transition duration
      >
        <h2
          className="text-3xl font-header text-accent mb-6 mt-4 text-center" // Using font-header and accent color
        >
          RSVP to Our Wedding
        </h2>

        {/* Google Form Container */}
        <div className="w-full max-w-2xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScbZi0cyhDrNKK4bv2IMj7RCskFyTP4K_38l-VeDTHvMoDHlw/viewform?embedded=true"
            width="100%"
            height="946" // Keep the original height for the form
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Wedding RSVP Form"
            className="rounded-lg border border-gray-200 shadow-md min-h-[800px]" // min-h added for consistency
          >
            Loading…
          </iframe>
        </div>
      </motion.div>
    </div>
  );
}
