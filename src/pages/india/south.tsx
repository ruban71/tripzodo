import React from 'react';
import { motion } from 'framer-motion';
import App_layout from '@/component/layout/app-layout';
import Link from 'next/link';
import Image from 'next/image';

const southPlaces = [
  {
    name: 'Tamil Nadu',
    image: '/south/tamilnadu.jpg',
    description: 'Rich in temple architecture, traditions, and classical arts.'
  },
  {
    name: 'Kerala',
    image: '/south/kerala.jpg',
    description: 'Known for backwaters, greenery, and ayurvedic wellness.'
  },
  {
    name: 'Bangalore',
    image: '/south/bangalore.jpg',
    description: 'The Silicon Valley of India with gardens and nightlife.'
  },
  {
    name: 'Hyderabad',
    image: '/south/hyderabad.jpg',
    description: 'Blend of modern tech, biryani, and historic charm.'
  },
  {
    name: 'Pondicherry',
    image: '/south/pondicherry.jpg',
    description: 'A coastal town with French colonial vibes and beaches.'
  }
];

const SouthIndia = () => {
  return (
    <div>
      <App_layout>
        <div className="min-h-screen bg-white py-16 px-6">
          <h1 className="text-3xl font-bold text-center mb-12">Top Places in South India</h1>

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {southPlaces.slice(0, 3).map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image src={place.image} alt={place.name} height={200} width={200} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">{place.description}</p>
                  <Link href="/packages/asiatour_packagecard">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition duration-300">
                    Explore
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {southPlaces.slice(3).map((place, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 3) * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/3"
              >
                <Image src={place.image} alt={place.name} height={200} width={200} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">{place.description}</p>
                   <Link href="/packages/asiatour_packagecard">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition duration-300">
                    Explore
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </App_layout>
    </div>
  );
};

export default SouthIndia;
