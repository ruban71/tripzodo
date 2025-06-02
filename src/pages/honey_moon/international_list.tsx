import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app-layout";
import Link from "next/link";
import Image from "next/image";

export default function InternationalList() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const destinations = [
    {
      title: "Maldives",
      description: "Overwater villas, turquoise lagoons, and romantic sunsets await you.",
      image: "/honeymoon/Maldives.jpg",
      slug: "packages/indiatour_packagecard",
    },
    {
      title: "Bali",
      description: "Tropical forests, exotic temples, and private beach stays for two.",
      image: "/honeymoon/Maldives.jpg",
      slug: "bali",
    },
    {
      title: "Mauritius",
      description: "White sand beaches and crystal-clear waters perfect for couples.",
      image: "/honeymoon/Maldives.jpg",
      slug: "mauritius",
    },
    {
      title: "Switzerland",
      description: "Snowy Alps, cozy chalets, and scenic train rides through the mountains.",
      image: "/honeymoon/Maldives.jpg",
      slug: "switzerland",
    },
    {
      title: "Italy",
      description: "Romantic gondola rides, Tuscan vineyards, and dreamy coastal towns.",
      image: "/honeymoon/Maldives.jpg",
      slug: "italy",
    },
    {
      title: "Thailand",
      description: "Vibrant culture, stunning islands, and luxury spa resorts.",
      image: "/honeymoon/Maldives.jpg",
      slug: "thailand",
    },
  ];

  return (
    <App_layout>
      <div className="min-h-screen bg-gradient-to-b from-[#fffce0] to-[#fef3b0] py-16 mt-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          International Honeymoon Spots
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {destinations.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <Image src={item.image} alt={item.title} height={200} width={200} className="h-56 w-full object-cover" />
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
          ))}
        </div>
      </div>
    </App_layout>
  );
}
