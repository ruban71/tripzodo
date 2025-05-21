'use client';

import Image from 'next/image';
import React from 'react';
import {
  FaBullseye,
  FaChartLine,
  FaSearch,
  FaDatabase,
  FaBullhorn,
  FaPhoneAlt,
  FaGlobe,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#f8f8f8] text-black py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Top White Shape */}
      <div className="absolute left-0 w-full h-40 bg-[#f8f8f8]  z-0 rounded-t-2xl" />

      {/* Angled Yellow Gradient Background Design */}
      <div className="absolute bottom-0 left-0 w-full h-44 z-0">
        <div className="w-full h-full bg-gradient-to-tr from-[#fbd82f] via-[#fed42a] to-[#e6b300] clip-path-bottom-shape" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/company/whychoose.jpg" // Replace with actual logo
            alt="Borcell Company" height={200} width={200}
            className="w-12 h-12 mb-2"
          />
          <h2 className="text-4xl font-extrabold">
            Why <span className="text-[#fed42a]">Should You Choose Us?</span>
          </h2>
          <p className="text-gray-700 mt-2 italic">
            As Your Business Expert Digital Marketing Solution
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center my-10">
          <div className="flex flex-col items-center gap-2">
            <FaBullseye className="text-[#fed42a] text-3xl" />
            <p className="font-semibold">Targeted Marketing Strategies</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaChartLine className="text-[#fed42a] text-3xl" />
            <p className="font-semibold">Increased Online Visibility</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaSearch className="text-[#fed42a] text-3xl" />
            <p className="font-semibold">Expert SEO Services</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaDatabase className="text-[#fed42a] text-3xl" />
            <p className="font-semibold">Data-Driven Insights</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaBullhorn className="text-[#fed42a] text-3xl" />
            <p className="font-semibold">Comprehensive Campaign Management</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <h4 className="text-xl font-semibold mb-2">Visit Us For More</h4>
          <div className="flex justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#fed42a]" />
              <span>+91 9500093383</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-[#fed42a]" />
              <span>www.tripzodo.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom clip-path CSS */}
      <style jsx>{`
        .clip-path-bottom-shape {
          clip-path: polygon(0 60%, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
