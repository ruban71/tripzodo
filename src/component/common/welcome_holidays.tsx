"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WelcomeHolidays = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-white overflow-hidden">
      {/* Background Decoration Image (optional) */}
      <Image
        src="/home/welcome.jpg" // replace with your image path
        alt="Holiday Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full opacity-40 z-0"
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center p-6 max-w-3xl bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 mb-4">
          Welcome to Holidays
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Discover the best travel experiences with <span className="font-semibold text-black">Tripzodo</span>. 
          Your journey to beautiful destinations begins here. Let&apos;s explore the world together!
        </p>

        <motion.a
          href="/packages"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition"
        >
          Explore Packages
        </motion.a>
      </motion.div>
    </section>
  );
};

export default WelcomeHolidays;
