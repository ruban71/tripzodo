import Image from "next/image";
import React from "react";
import { FaStar, FaCamera, FaWhatsapp, FaMapMarkerAlt, FaShieldAlt,
  FaWifi,
  FaSun,
  FaBiking,
  FaSwimmer,
  FaDumbbell,
  FaSpa, } from "react-icons/fa";

const data = [
  {
    id: 1,
    image: "/home/hero1.jpg",
    title: "Luxury Beach Villa",
    location: "Goa, India",
    price: "From ₹7,500",
  },
  {
    id: 2,
    image: "/home/hero2.jpg",
    title: "Mountain Retreat",
    location: "Manali, Himachal",
    price: "From ₹5,200",
  },
  {
    id: 3,
    image: "/home/hero3.jpg",
    title: "Urban City Apartment",
    location: "Mumbai, India",
    price: "From ₹6,800",
  },
  {
    id: 4,
    image: "/home/hero4.jpg",
    title: "Peaceful Forest Cabin",
    location: "Ooty, Tamil Nadu",
    price: "From ₹4,999",
  },
];
const facilities = [
  {
    title: "Best Security",
    description: "24/7 monitored surveillance to ensure your safety.",
    icon: <FaShieldAlt className="text-orange-500 text-3xl" />,
  },
  {
    title: "Free Internet",
    description: "High-speed Wi-Fi available across all areas.",
    icon: <FaWifi className="text-blue-500 text-3xl" />,
  },
  {
    title: "Solar Energy",
    description: "Eco-friendly solar-powered infrastructure.",
    icon: <FaSun className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Mountain Biking",
    description: "Thrilling trails designed for adventurous rides.",
    icon: <FaBiking className="text-green-600 text-3xl" />,
  },
  {
    title: "Swimming & Fishing",
    description: "Relax in serene waters and enjoy recreational fishing.",
    icon: <FaSwimmer className="text-cyan-500 text-3xl" />,
  },
  {
    title: "GYM and Yoga",
    description: "Well-equipped fitness center and calming yoga studio.",
    icon: (
      <div className="flex space-x-1">
        <FaDumbbell className="text-red-500 text-3xl" />
        <FaSpa className="text-purple-500 text-3xl" />
      </div>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <div>
       <div className="text-center bg-yellow-100 py-6">
  <p className="text-gray-900 text-sm uppercase tracking-wide font-medium">
    Featured Tours
  </p>
  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
    Amazing Tour Places Around the World
  </h1>
</div>
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative group rounded-xl overflow-hidden shadow-lg"
        >
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title} height={200} width={200}
            className="w-full h-64 object-cover"
          />

          {/* 30% Bottom Overlay */}
          <div className="absolute bottom-0 w-full h-[30%] bg-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out p-3">
            <div className="flex items-center justify-between text-yellow-500 text-sm mb-1">
              <div className="flex space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="flex text-gray-700 space-x-2 text-base">
                <FaCamera />
                <FaWhatsapp />
              </div>
            </div>

            <h3 className="text-gray-800 font-semibold text-sm">{item.title}</h3>

            <div className="flex items-center text-gray-600 text-xs">
              <FaMapMarkerAlt className="mr-1" />
              <span>{item.location}</span>
            </div>

            <p className="text-red-600 text-sm font-bold mt-1">{item.price}</p>
          </div>
        </div>
      ))}
    </div>


    <section className="bg-gradient-to-r from-yellow-100 via-white to-yellow-200 py-14 px-4 md:px-10">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Key Facilities</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {facilities.map((facility, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4 hover:bg-gradient-to-r hover:from-yellow-100 hover:via-yellow-200 hover:to-yellow-300 hover:shadow-xl transition duration-300 ease-in-out"
      >
         <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
        
        <div className="text-yellow-500 text-3xl">{facility.icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{facility.title}</h3>
          <p className="text-gray-600">{facility.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    
    </div>
  );
};

export default FeaturesSection;
