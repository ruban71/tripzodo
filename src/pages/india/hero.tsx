import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App_layout from '@/component/layout/app-layout';

interface Place {
  title: string;
  route: string;
  image: string;
  description: string;
}

const originalPlaces: Place[] = [
  {
    title: 'North India',
    route: '/india/north',
    image: '/india/east.jpg',
    description: 'Explore the Himalayas, culture, and cuisine of North India.',
  },
  {
    title: 'South India',
    route: '/india/south',
    image: '/india/east.jpg',
    description: 'Experience temples, beaches, and traditions in South India.',
  },
  {
    title: 'East India',
    route: '/india/east',
    image: '/india/east.jpg',
    description: 'Discover heritage, art, and nature of East India.',
  },
  {
    title: 'West India',
    route: '/india/west',
    image: '/india/east.jpg',
    description: 'Enjoy deserts, forts, and festivals of West India.',
  },
  {
    title: 'Spiritual',
    route: '/india/spiritual',
    image: '/india/east.jpg',
    description: 'Visit India’s most sacred and spiritual destinations.',
  },
  {
    title: 'Nature Trails',
    route: '/india/nature',
    image: '/india/east.jpg',
    description: 'Reconnect with nature through serene trails and wildlife adventures.',
  },
];

const shuffleArray = (array: Place[]): Place[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HeroSection = () => {
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>(originalPlaces);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setPlaces(shuffleArray(originalPlaces));
  }, []);

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <App_layout>
      <div className="bg-white min-h-screen py-20 mt-9 px-6">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top Indian Destinations</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover the diverse beauty of India through our curated regional highlights. From majestic mountains to spiritual sites, your journey starts here.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{place.title}</h2>
                <p className="text-gray-600">{place.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(place.route)}
                  className="inline-block mt-4 px-5 py-2 rounded-full font-semibold text-white bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </App_layout>
  );
};

export default HeroSection;
