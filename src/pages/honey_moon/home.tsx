import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app-layout";
import Link from "next/link";

export default function Honeymoon() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  const cards = [
    {
      title: "India",
      content:
        "Experience the charm of Indian honeymoon destinations — from serene backwaters to royal palaces and hill stations.",
      route: "/honey_moon/india_list",
    },
    {
      title: "International",
      content:
        "Unveil the magic of international escapes — romantic sunsets in Bali, snowy Alps in Switzerland, and more.",
      route: "/honey_moon/international_list",
    },
  ];

  const handleCardClick = (route: string) => {
    router.push(route);
  };

  return (
    <div>
      <App_layout>
        <div className="py-16 mt-12 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#fffbe0] to-[#fff5c2]">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a3f1f] mb-12">
            Our <span className="text-[#fed42a]">Honeymoon Stories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 flex flex-col items-center justify-center text-center p-8 bg-white ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                }`}
              >
                {/* Hover Background Layer */}
                <div className="absolute inset-0 bg-[#fed42a]/30 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#4a3f1f] mb-4">{card.title}</h3>
                  <p className="text-lg text-[#4a3f1f] mb-6 max-w-md">{card.content}</p>
                 <Link href="/honey_moon/india_list">
                  <button
                    onClick={() => handleCardClick(card.route)}
                    className="relative mt-4 px-5 py-2 text-white bg-[#fed42a] font-semibold rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
                  >
                    <span className="absolute inset-0 bg-[#4a3f1f] transition-all transform scale-x-0 group-hover:scale-x-100 origin-left duration-300" />
                    <span className="relative group-hover:text-white transition-colors duration-300">
                      Explore More →
                    </span>
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </App_layout>
    </div>
  );
}
