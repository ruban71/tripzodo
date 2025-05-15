"use client";

import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";


const tours = [
  {
    country: "Dubai – United Arab Emirates",
    title: "Dubai City Tour Package",
    duration: "3 Nights 4 Days",
    image: "/home/trending1.jpg",
    link: "#",
  },
  {
    country: "Switzerland, Zurich",
    title: "Best of Switzerland Package",
    duration: "4 Nights 5 Days",
    image: "/home/trending1.jpg",
    link: "#",
  },
  {
    country: "Singapore, Sentosa",
    title: "Amazing Singapore Tour",
    duration: "3 Nights 4 Days",
    image: "/home/trending1.jpg",
    link: "#",
  },
  {
    country: "Mauritius",
    title: "Indulge in the Magical Mauritius Tour | Itinerary",
    duration: "4 Nights 5 Days",
    image: "/home/trending1.jpg",
    link: "#",
  },
];

function TrendingTours() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Trending Tours</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <a
            key={index}
            href={tour.link}
            className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 border"
          >
            <div className="relative h-56 w-full">
              <Image
                src={tour.image}
                alt={tour.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-1" />
                {tour.country}
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                {tour.title}
              </h3>
              <div className="flex items-center text-sm text-yellow-600 font-medium">
                <FaClock className="mr-1" />
                {tour.duration}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  
    </div>
  );
}

export default TrendingTours;
