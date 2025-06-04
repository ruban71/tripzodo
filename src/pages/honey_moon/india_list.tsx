import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app-layout";
import Image from "next/image";
import Link from "next/link";

export default function IndiaList() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const destinations = [
    {
      title: "Goa",
      description: "Golden beaches, vibrant nightlife, and serene sunsets await.",
      image: "/honeymoon/shimla.jpg",
      slug: "packages/indiatour_packagecard",
    },
    {
      title: "Kerala",
      description: "Backwaters, houseboats, and lush green landscapes for a dreamy escape.",
      image: "/honeymoon/shimla.jpg",
      slug: "kerala",
    },
    {
      title: "Shimla",
      description: "Snow-capped hills, colonial charm, and cozy winter vibes.",
      image: "/honeymoon/shimla.jpg",
      slug: "shimla",
    },
    {
      title: "Manali",
      description: "Romantic snowfalls, thrilling adventures, and cozy cabins.",
      image: "/honeymoon/shimla.jpg",
      slug: "manali",
    },
    {
      title: "Andaman",
      description: "Secluded beaches, clear waters, and perfect tropical romance.",
      image: "/honeymoon/shimla.jpg",
      slug: "andaman",
    },
    {
      title: "Munnar",
      description: "Tea gardens, rolling hills, and cool misty mornings.",
      image: "/honeymoon/shimla.jpg",
      slug: "munnar",
    },
    {
      title: "Kodaikanal",
      description: "Lakeside charm, foggy trails, and starlit skies.",
      image: "/honeymoon/shimla.jpg",
      slug: "kodaikanal",
    },
    {
      title: "Ooty",
      description: "Botanical gardens, mountain trains, and nostalgic moments.",
      image: "/honeymoon/shimla.jpg",
      slug: "ooty",
    },
    {
      title: "Coorg",
      description: "Coffee plantations, misty hills, and tranquil getaways.",
      image: "/honeymoon/shimla.jpg",
      slug: "coorg",
    },
  ];

  return (
    <App_layout>
      <div className="min-h-screen bg-gradient-to-b from-[#fffce0] to-[#fef3b0] py-16 mt-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Romantic Honeymoon Spots in India
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {destinations.map((item, index) => {
            const isLastSingleInRow =
              destinations.length % 3 === 1 && index === destinations.length - 1;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`${
                  isLastSingleInRow ? "lg:col-span-3 flex justify-center" : ""
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 w-full max-w-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={224}
                    width={384}
                    className="w-full object-cover"
                  />
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-900 text-base mb-4">{item.description}</p>
                    <Link
                      href={`/${item.slug}`}
                      className="inline-block mt-2 px-4 py-2 rounded-lg bg-[#fed42a] text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </App_layout>
  );
}
