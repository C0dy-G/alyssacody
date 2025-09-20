"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeImageOpacity = Math.max(1 - scrollY / 300, 0);
  const fadeFormOpacity = Math.min(scrollY / 300, 1);

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-x-hidden">
      {/* Header text (fixed on top) */}
      <div className="fixed top-8 w-full flex flex-col items-center z-20 pointer-events-none">
        <div className="bg-black/80 rounded-xl px-8 py-4 shadow pointer-events-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#F9F6F3] text-center"
            style={{ fontFamily: "'Poiret One'" }}
          >
            Alyssa & Cody
          </h1>
          <h2
            className="text-xl md:text-2xl font-light text-[#F9F6F3] mt-2 text-center"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            September 20, 2025 · 5–8pm
          </h2>
        </div>
      </div>

      {/* Image background (scrolls & fades out) */}
      <motion.div
        className="h-screen w-full bg-contain bg-center sm:bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/GreetingsFromSF.jpg")`,
          opacity: fadeImageOpacity,
          marginTop: "-60px",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeImageOpacity }}
        transition={{ duration: 0.6}}
      />

      {/* RSVP section with sidebar */}
      <motion.div
        className="py-12 px-6 flex flex-col lg:flex-row items-start lg:items-stretch justify-center relative z-10 -mt-[33vh] pt-[-40px] max-w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeFormOpacity }}
        transition={{ duration: 0.3 }}
      >
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:mr-12">
         <div className="bg-black p-4 rounded-lg border border-[#155703]">
           <div className="bg-[#F9F6F3] p-6 rounded-lg shadow">
            <h3
              className="text-2xl font-semibold text-[#01110B] mb-4"
              style={{ fontFamily: "'Poiret One', cursive" }}
            >
              Venue Information
            </h3>
            <a
              href="https://sparksocialsf.com/faq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#155703] underline hover:text-[#0e3e02]"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              View Spark Social FAQ
            </a>

            <h3
              className="text-2xl font-semibold text-[#01110B] mt-8 mb-4"
              style={{ fontFamily: "'Poiret One', cursive" }}
            >
              Registry
            </h3>
            <a
              href="https://www.zola.com/registry/alyssaandcodyoctober16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#155703] underline hover:text-[#0e3e02]"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              Visit Our Registry
            </a>
          </div>
          </div>
        </aside>

        {/* without RSVP form */}
               <div className="w-full lg:w-2/3">
          <div className="bg-black p-4 rounded-lg border border-[#155703]">
            <div className="bg-[#F9F6F3] p-6 rounded-lg shadow">
              <p
                className="text-lg text-[#01110B]"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                We are so excited to have you come celebrate with us! <br /><br />
                Food and drinks will be provided, with a variety of options to accommodate different dietary needs. <br /><br />
                We can't wait to see you there! <br /><br />  
                Please reach out to Alyssa or Cody for reservation changes.
              </p>
            </div>
          </div>
          <div className="h-80"></div>
        </div>
       
      </motion.div>
    </div>
  );
}
