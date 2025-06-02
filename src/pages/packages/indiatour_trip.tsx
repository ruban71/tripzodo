'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import App_layout from '@/component/layout/app-layout';

const dayOptions = ['3–5 Days', '6–8 Days', '9–11 Days', '12–15 Days'];

const tripOptions = [
  {
    label: 'Couple',
    image: '/packages/couple1.jpg',
  },
  {
    label: 'Family',
    image: '/packages/family.jpg',
  },
  {
    label: 'Friends',
    image: '/packages/friends.jpg',
  },
  {
    label: 'Solo',
    image: '/packages/solo.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Indiatour_trip() {
  const [selectedDays, setSelectedDays] = useState<string | null>(null);

  return (
    <App_layout>
      <div className="min-h-screen mt-16 bg-white">
        {/* Curved Hero Section */}
        <div className="relative w-full h-80 bg-yellow-400 rounded-b-[100px] overflow-hidden flex items-center justify-center text-white text-center px-4">
          <Image
            src="/packages/asia.jpg"
            alt="India Hero"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-60"
          />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Explore India</h1>
            <p className="text-base md:text-lg font-medium">Select your travel duration</p>
          </div>
        </div>

        {/* Day Buttons */}
        <div className="px-6 mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 justify-center flex-nowrap">
            {dayOptions.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDays(day)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold shadow-sm transition-all ${
                  selectedDays === day
                    ? 'bg-yellow-500 text-white'
                    : 'bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Trip Type Cards */}
        {selectedDays && (
          <div className="mt-12 px-6">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-8">
    Who are you traveling with?
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 mb-16 gap-6 justify-items-center">
    {tripOptions.map((option, index) => (
      <motion.div
        key={option.label}
        className="w-36 h-44 p-5 rounded-xl border border-yellow-300 bg-white/20 backdrop-blur-md shadow-lg cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', stiffness: 120 }}
      >
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400 mb-4 shadow-md">
          <Image
            src={option.image}
            alt={option.label}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <p className="text-yellow-700 font-semibold text-center">{option.label}</p>
      </motion.div>
    ))}
  </div>
</div>

        )}
      </div>
    </App_layout>
  );
}
