"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const slides = [
  {
    src: "/home/hero1.jpg",
    title: "Wanderlust Dreams",
    subtitle: "Start your adventure today.",
  },
  {
    src: "/home/hero2.jpg",
    title: "Breathtaking Views",
    subtitle: "Capture every moment.",
  },
  {
    src: "/home/hero3.jpg",
    title: "Cultural Wonders",
    subtitle: "Experience the world’s heritage.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[index];

  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>TravelSite | Home</title>
      </Head>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${current.src})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Left arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <span className="w-6 h-6 text-white block">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <span className="w-6 h-6 text-white block">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {current.title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          {current.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        >
          <Link
            href="#destinations"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out"
          >
            Explore Destinations
          </Link>
         
          <Link
            href="#book"
            className="border-2 border-white px-6 py-3 rounded-xl text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Book a Tour
          </Link>
        </motion.div>
      </div>

      {/* Bottom Links */}
      <div className="absolute top-[90vh] left-0 w-full bg-black bg-opacity-70 py-4 z-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-white transition hover:scale-105"
          >
            Our Services
          </Link>
          <Link
            href="/destinations"
            className="text-gray-300 hover:text-white transition hover:scale-105"
          >
           Packages
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
