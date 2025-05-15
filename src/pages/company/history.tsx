import React from "react";
import Image from "next/image";
import App_layout from "@/component/layout/app-layout";
import Contactall from "@/component/common/contactall";
import GetUpdates from "@/component/common/getupdates";

const travelPackages = [
  {
    title: "Ancient Civilizations",
    subtopics: ["Egyptian Pyramids", "Machu Picchu", "Petra, Jordan"],
    img: "/home/trending1.jpg",
  },
  {
    title: "Medieval Europe",
    subtopics: ["Castles of France", "Colosseum in Rome", "Tower of London"],
    img: "/home/trending1.jpg",
  },
  {
    title: "Asian Heritage Tours",
    subtopics: ["Great Wall of China", "Angkor Wat", "Kyoto Temples"],
    img: "/home/trending1.jpg",
  },
  {
    title: "Colonial Era Journeys",
    subtopics: ["American Revolution", "British Raj", "Spanish Missions"],
    img: "/home/trending1.jpg",
  },
];

export default function History() {
  return (
    <App_layout>
      <div>
        <div className="text-gray-800">
          {/* Hero Section */}
          <div className="relative h-[450px] w-full">
            <Image
              src="/company/history1.jpg"
              alt="History Hero"
              fill
              className="object-cover mt-16"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold">History</h1>
            </div>
          </div>

          {/* Section: History of Tripzodo */}
          <div className="py-20 px-6 max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center text-yellow-600">History of Tripzodo</h2>
            <p className="text-lg text-center text-gray-700">
              Tripzodo started as a passion project by travel lovers and has grown into one of
              the leading platforms for curated travel experiences. Our mission is to make
              history come alive through immersive, thoughtfully planned journeys across the globe.
              With a focus on cultural authenticity and local insights, we strive to craft memorable
              adventures that go beyond the ordinary. Whether it's exploring ancient ruins or
              retracing historical footsteps, Tripzodo transforms every trip into a story worth telling.
            </p>
          </div>

          {/* Section: Why Tripzodo is Number 1 */}
          <div className="px-6 max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center text-yellow-600">Why Tripzodo is Number 1?</h2>
            <p className="text-lg text-center text-gray-700">
              Tripzodo stands apart by combining personalized service, deep cultural connections,
              and seamless travel logistics. Our team of experts collaborates with local guides and
              historians to deliver meaningful, story-driven experiences.
            </p>
            <p className="text-lg text-center text-gray-700">
              From luxury accommodations to off-the-beaten-path gems, every aspect of your journey
              is tailored to enrich your understanding and enjoyment of global history.
            </p>
          </div>

          {/* Section: Explore Historical Travel Packages */}
          <div className="px-6 py-9 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore Historical Travel Packages
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {travelPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 overflow-hidden"
                >
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-xl font-semibold text-yellow-600">
                      {pkg.title}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {pkg.subtopics.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Trending Images */}
          <div className="py-20 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow-600">
              Trending Travel Moments
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  img: "/home/trending1.jpg",
                  title: "Sunset in Santorini",
                  desc: "Golden skies over blue-domed churches – pure Mediterranean magic.",
                },
                {
                  img: "/home/trending1.jpg",
                  title: "Safari in Kenya",
                  desc: "Capture wildlife in their natural habitat across breathtaking savannas.",
                },
                {
                  img: "/home/trending1.jpg",
                  title: "Autumn in Kyoto",
                  desc: "Experience Japan's timeless beauty during its fiery fall foliage season.",
                },
                {
                  img: "/home/trending1.jpg",
                  title: "Historic Rome",
                  desc: "Wander the ancient streets where the Roman Empire once thrived.",
                },
                {
                  img: "/home/trending1.jpg",
                  title: "Alpine Adventures",
                  desc: "Snowy peaks, cozy chalets, and adrenaline-pumping ski trails await.",
                },
                {
                  img: "/home/trending1.jpg",
                  title: "Desert Mirage in Dubai",
                  desc: "A luxurious blend of tradition and futuristic skyline in golden sands.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-105 group"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center text-white px-4">
                    <h3 className="text-xl text-yellow-400 font-semibold mb-2">{card.title}</h3>
                    <p className="text-lg text-white">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Testimonials */}
          <div className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12 text-yellow-600">
    What Our Travelers Say
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        name: "Alice",
        image: "/home/hero1.jpg",
        message:
          "Tripzodo made my historical tour unforgettable! The guides were amazing and I learned so much. Highly recommend to all travel lovers.",
      },
      {
        name: "Brian",
        image: "/home/hero1.jpg",
        message:
          "A once-in-a-lifetime adventure. The planning and execution were flawless. Can’t wait for my next trip!",
      },
      {
        name: "Catherine",
        image: "/home/hero1.jpg",
        message:
          "Incredible experience! Tripzodo’s attention to detail made our trip seamless and enjoyable.",
      },
    ].map((traveler, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={traveler.image}
            alt={traveler.name}
            width={50}
            height={50}
            className="rounded-full h-32 w-32   "
          />
          <div>
            <h4 className="font-semibold text-lg">{traveler.name}</h4>
            <p className="text-sm text-gray-500">Verified Explorer</p>
          </div>
        </div>
        <p className="text-gray-700">"{traveler.message}"</p>
      </div>
    ))}
  </div>
</div>


        </div>
        <Contactall />
        <GetUpdates />
      </div>
    </App_layout>
  );
}
