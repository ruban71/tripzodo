import Image from 'next/image';
import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const tours = [
  {
    title: 'Historic Europe Tour',
    description: 'Visit iconic European cities with guided experiences.',
    image: '/home/group1.jpg',
  },
  {
    title: 'Tropical Island Escape',
    description: 'Relax on pristine beaches and crystal waters.',
    image: '/home/group1.jpg',
  },
  {
    title: 'Desert Safari Adventure',
    description: 'Thrill through sand dunes and starlit nights.',
    image: '/home/group1.jpg',
  },
  {
    title: 'Asian Heritage Trail',
    description: 'Explore rich traditions across Asia.',
    image: '/home/group1.jpg',
  },
  {
    title: 'Amazon Rainforest Trek',
    description: 'Immerse in nature’s wild heart.',
    image: '/home/group1.jpg',
  },
  {
    title: 'Canadian Rockies Ride',
    description: 'Scenic trails, wildlife, and mountain air.',
    image: '/home/group1.jpg',
  },
];

const GroupTours = () => {
  return (
    <div className="py-14 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Premium Group Tours</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
          >
            {/* Tour Image */}
            <Image
              src={tour.image}
              alt={tour.title} height={200} width={200}
              className="w-full  h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">{tour.title}</h3>
              <p className="text-gray-200 text-sm mt-1">{tour.description}</p>
              <div className="mt-3">
                <FaArrowUpRightFromSquare className="text-white text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupTours;
