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
    image: '/home/popular1.jpg',
    location: 'Switzerland',
    description: 'Explore the scenic beauty of snow-capped Alps and charming Swiss villages.',
  },
  {
    title: 'Bali Bliss',
    image: '/home/popular1.jpg',
    location: 'Indonesia',
    description: 'Enjoy tropical beaches, rice terraces, and a peaceful island lifestyle.',
  },
  {
    title: 'Romantic Paris',
    image: '/home/popular1.jpg',
    location: 'France',
    description: 'Discover art, culture, and romance in the heart of Paris.',
  },
  {
    title: 'Desert Dubai',
    image: '/home/popular1.jpg',
    location: 'UAE',
    description: 'Experience luxury, shopping, and thrilling desert safaris.',
  },
  {
    title: 'Island Thailand',
    image: '/home/popular1.jpg',
    location: 'Thailand',
    description: 'Unwind on serene beaches and explore vibrant local markets.',
  },
];

// Card animation variants
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
    <div className="py-16 px-6 bg-gradient-to-br from-sky-100 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Popular Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title} height={200} width={200}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
           {/* Content */}
<div className="p-5 flex flex-col space-y-4">
  <div>
    <h3 className="text-xl font-semibold mb-1">{pkg.title}</h3>
    <p className="text-sm text-gray-500 mb-1">{pkg.location}</p>
    <p className="text-sm text-gray-600">{pkg.description}</p>
  </div>

  {/* Read More Button */}
  <button
    className="self-start px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors duration-300"
  >
    Read More
  </button>


            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularPackages;
