'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const packages = [
  {
    title: 'Maldives Escape',
    image: '/home/popular1.jpg',
    location: 'Maldives',
    description: 'Relax in the turquoise waters of the Maldives with luxurious beach villas.',
  },
  {
    title: 'Swiss Alps Adventure',
    image: '/home/Swiss Alps Adventure.jpg',
    location: 'Switzerland',
    description: 'Explore the scenic beauty of snow-capped Alps and charming Swiss villages.',
  },
  {
    title: 'Bali Bliss',
    image: '/home/Bali Bliss.jpg',
    location: 'Indonesia',
    description: 'Enjoy tropical beaches, rice terraces, and a peaceful island lifestyle.',
  },
  {
    title: 'Romantic Paris',
    image: '/home/Romantic Paris.jpg',
    location: 'France',
    description: 'Discover art, culture, and romance in the heart of Paris.',
  },
  {
    title: 'Desert Dubai',
    image: '/home/Desert Dubai.jpg',
    location: 'UAE',
    description: 'Experience luxury, shopping, and thrilling desert safaris.',
  },
  {
    title: 'Island Thailand',
    image: '/home/Island Thailand.jpg',
    location: 'Thailand',
    description: 'Unwind on serene beaches and explore vibrant local markets.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PopularPackages = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Popular<span className='text-[#fed42a]'> Packages</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative group rounded-2xl overflow-hidden text-center shadow-xl"
          >
            {/* Image Container */}
            <div className="relative h-96 overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title Overlay - always visible */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-[#fed42a] text-center text-lg font-semibold px-4 py-2 z-10">
              {pkg.title}
            </div>

            {/* Hover Reveal - Curved Content */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
              <div className="bg-white rounded-t-[3rem] p-6 shadow-lg">
                <p className="text-lg font-bold text-gray-900 mb-1">{pkg.title}</p>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <button className="relative inline-block px-6 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded-lg overflow-hidden group transition-colors duration-300">
  <span className="absolute inset-0 bg-yellow-500 transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-out"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">View All</span>
</button>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularPackages;
