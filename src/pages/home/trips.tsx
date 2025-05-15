import React from 'react';
import { FaUmbrellaBeach, FaMountain, FaCity } from 'react-icons/fa';

const Trips = () => {
  const tripData = [
    {
      icon: <FaUmbrellaBeach className="text-3xl text-sky-500" />,
      title: 'Beach Getaway',
      description: 'Relax on sunny beaches with golden sands and clear waters.',
    },
    {
      icon: <FaMountain className="text-3xl text-emerald-500" />,
      title: 'Mountain Adventure',
      description: 'Explore scenic mountains and enjoy thrilling hikes.',
    },
    {
      icon: <FaCity className="text-3xl text-purple-500" />,
      title: 'City Escape',
      description: 'Discover vibrant cities full of culture, food, and nightlife.',
    },
  ];

  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Top Trip Types</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tripData.map((trip, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center">
              {trip.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{trip.title}</h3>
              <p className="text-sm text-gray-600">{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
