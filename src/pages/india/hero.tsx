import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import App_layout from '@/component/layout/app-layout';
import Image from 'next/image';

const originalPlaces = [
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
];

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HeroSection = () => {
  const router = useRouter();
  const [places, setPlaces] = React.useState(originalPlaces);

  React.useEffect(() => {
    setPlaces(shuffleArray(originalPlaces));
  }, []);

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <App_layout>
      <div className="bg-white min-h-screen px-6 mt-16 py-12 space-y-20">
        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {places.slice(0, 3).map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative w-full min-h-[400px] bg-yellow-50 flex items-center justify-center overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Description Bottom Right */}
              <div className="absolute bottom-20 right-6 max-w-sm z-10">
                <p className="text-lg font-medium text-gray-900 w-28 drop-shadow-md">
                  {place.description}
                </p>
              </div>

              {/* Title Top Left */}
              <div className="absolute top-6 left-6 z-10">
                <h1 className="text-3xl font-bold text-gray-900 w-20 drop-shadow-md">
                  {place.title}
                </h1>
              </div>

              {/* Merged Images */}
              <div className="relative h-80 w-80">
                <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden">
                  <Image src={place.image} alt={`${place.title} Top`} fill />
                </div>
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-2xl overflow-hidden">
                  <Image src={place.image} alt={`${place.title} Bottom`} fill />
                </div>
              </div>

              {/* Read More Button */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(place.route)}
                  className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {places.slice(3).map((place, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.1, duration: 0.5 }}
              className="relative w-full min-h-[400px] bg-yellow-50 flex items-center justify-center overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Description Bottom Right */}
              <div className="absolute bottom-20 right-6 max-w-sm z-10">
                <p className="text-lg font-medium text-gray-900 w-28 drop-shadow-md">
                  {place.description}
                </p>
              </div>

              {/* Title Top Left */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h1 className="text-3xl font-bold text-gray-900 drop-shadow-md">
                  {place.title}
                </h1>
              </div>

              {/* Merged Images */}
              <div className="relative w-80 h-80">
                <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden">
                  <Image src={place.image} alt={`${place.title} Top`} fill />
                </div>
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden">
                  <Image src={place.image} alt={`${place.title} Bottom`} fill />
                </div>
              </div>

              {/* Read More Button */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(place.route)}
                  className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
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
