'use client'; // This directive is necessary for client-side components in Next.js App Router

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  // Reference for the main scroll container
  const scrollRef = useRef(null);

  // Get scroll progress from the document (or a specific ref if you have a scrollable div)
  const { scrollYProgress } = useScroll({
    target: scrollRef, // Target the scroll container
    offset: ['start start', 'end start'] // When the start of the target hits the start of the viewport, and when the end of the target hits the start of the viewport
  });

  // Transform scroll progress into opacity for the hero image
  // It goes from 1 (fully visible) to 0 (fully transparent) over the scroll range
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]); // Fades out over 75% of the scroll target
  const heroTranslateY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']); // Optionally move the hero image up slightly

  // Transform scroll progress into opacity for the form container
  // It goes from 0 (fully transparent) to 1 (fully visible)
  const formOpacity = useTransform(scrollYProgress, [0.25, 1], [0, 1]); // Fades in starting at 25% of the scroll target

  return (
    // Main container. The 'ref' here is for Framer Motion's useScroll to track.
    // min-h-[200vh] ensures there's enough scroll space for the animation. Adjust as needed.
    <div
      ref={scrollRef}
      className="relative min-h-[200vh] overflow-x-hidden bg-white text-gray-800 font-body"
    >
      {/* Fixed Headers (Alyssa & Cody, September 20, 2025) */}
      <div className="fixed inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-header text-white drop-shadow-lg text-center">
          Alyssa & Cody
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-header text-white drop-shadow-lg mt-4 text-center">
          September 20, 2025
        </h2>
      </div>

      {/* Hero Image Section - fades out */}
      <motion.div
        style={{ opacity: heroOpacity, translateY: heroTranslateY }}
        className="relative w-full h-[100vh] overflow-hidden" // Full viewport height for hero
      >
        <Image
          src="/GreetingsFromSF.jpg" // Updated hero image URL
          alt="Wedding Hero Image"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Covers the area without distortion
          priority // Prioritize loading for LCP
          className="w-full h-full"
        />
        {/* Overlay for tint or gradient, matching accent color potentially */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </motion.div>

      {/* Google Form Section - fades in and overlaps */}
      <motion.div
        style={{ opacity: formOpacity }}
        // Position relative to the parent scrolling container.
        // -mt-[25vh] makes it overlap the bottom 25% of the hero image section.
        // bg-white for the form background, rounded-xl for aesthetics, shadow-lg for depth.
        className="relative -mt-[25vh] z-20 p-8 pt-20 bg-white rounded-xl shadow-xl max-w-4xl mx-auto mb-20 flex flex-col items-center justify-center border-t-8 border-accent"
      >
        <h3 className="text-3xl font-header text-accent mb-6 text-center">
          RSVP Here!
        </h3>
        <p className="text-lg text-gray-700 font-body mb-8 text-center max-w-2xl">
          Please let us know if you can make it by filling out the form below. We can&apos;t wait to celebrate with you!
        </p>
        <div className="w-full max-w-full overflow-hidden rounded-lg shadow-md">
            {/* Google Form Iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScbZi0cyhDrNKK4bv2IMj7RCskFyTP4K_38l-VeDTHvMoDHlw/viewform?embedded=true"
              width="100%" // Make it responsive
              height="1147" // Fixed height as per Google's recommendation for forms
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="RSVP Form"
              className="min-h-[800px]" // Ensure minimum height for smaller forms
            >
              Loading…
            </iframe>
        </div>
      </motion.div>
    </div>
  );
}
