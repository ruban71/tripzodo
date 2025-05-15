import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const tags = [
  "Family Camping",
  "Wild Camping",
  "Fishing",
  "Mountain Biking",
  "Luxury Cabin",
  "Couple Camping",
];

function TravelIntro() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-yellow-100 text-gray-900 text-lg font-medium px-4 py-1 rounded-full mb-4">
            Welcome to Gowilds
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            We are most funning company about travel and adventure
          </h1>
          <p className="text-gray-500 mb-6">
            Sit amet consectetur velit integer tincidunt sceleries nodalesry
            volutpat neque fermentum malesuada sceleris quecy massa lacus ultrices
            eget leo cras odio blandit rhoncus eues feugiat.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-xl text-sm font-medium"
              >
                <FaCheckCircle className="text-[#fed42a]" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full">
          <div className="rounded-[150px] overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/home/welcome1.jpg"
              alt="Travel" height={200} width={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelIntro;
