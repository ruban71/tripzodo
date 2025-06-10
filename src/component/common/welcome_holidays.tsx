"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WelcomeHolidays = () => {
  return (
    <section className="relative min-h-screen w-full  overflow-hidden flex items-center justify-center">
      {/* Centered Background Container */}
      <div className="absolute inset-0 flex justify-center z-0">
        <div className="relative w-full max-w-7xl h-full">
          <Image
            src="/home/welcome.jpg" // Update with your image path
            alt="Holiday Background"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl p-8 text-center  rounded-3xl shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#fed42a] mb-4"
        >
          Welcome to Holidays
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-lg text-white"
        >
          Discover the best travel experiences with{" "}
          <span className="font-semibold text-white">Tripzodo</span>. Your journey to beautiful destinations begins here. Let&apos;s explore the world together!
        </motion.p>

        <motion.a
          href="/group/grouptour_herosection"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-6 py-3 bg-[#fed42a] hover:bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md transition-all duration-300"
        >
          Explore Packages
        </motion.a>
      </motion.div>
    </section>
  );
};

export default WelcomeHolidays;
