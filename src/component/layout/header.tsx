"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  name: string;
  link?: string;
  dropdown?: string[];
  mega?: Record<string, string[]>;
};

const navItems: NavItem[] = [
  { name: "Home", link: "#" },
  {
    name: "Company",
    dropdown: ["About", "History", "Testimonials", "Careers", "Blogs", "FAQs"],
  },
  { name: "Group Tours", link: "#" },
  {
    name: "Packages",
    dropdown: ["India", "Asia", "Island"],
  },
  {
    name: "India",
    mega: {
      "North India": ["Delhi", "Agra", "Manali", "Shimla", "Jaipur"],
      "South India": ["Tamil Nadu", "Kerala", "Bangalore"],
      "West India": ["Pune", "Mumbai"],
      "East India": ["West Bengal", "Darjeeling", "Arunachal Pradesh"],
      Spiritual: ["Ayodhya", "Tirupati"],
    },
  },
  {
    name: "Honeymoon",
    mega: {
      India: [
        "Goa",
        "Kerala",
        "Shimla",
        "Manali",
        "Andaman",
        "Munnar",
        "Kodaikanal",
        "Ooty",
      ],
      International: [
        "Maldives",
        "Bali",
        "Mauritius",
        "Switzerland",
        "Italy",
        "Thailand",
      ],
    },
  },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string>("Home");

  const handleMouseEnter = (name: string) => setActiveDropdown(name);
  const handleMouseLeave = () => setActiveDropdown(null);
  const handleClick = (name: string) => setActiveMenu(name);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#fed42a] shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/home/logo1.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 relative">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
              <button
                onClick={() => handleClick(item.name)}
                className={`flex items-center gap-1 font-medium transition duration-200 ${
                  activeMenu === item.name
                    ? "text-white font-bold underline"
                    : "text-gray-800 hover:text-white"
                }`}
              >
                {item.link ? (
                  <Link href={item.link}>{item.name}</Link>
                ) : (
                  item.name
                )}
                {(item.dropdown || item.mega) && (
                  <FaChevronDown className="text-xs mt-1" />
                )}
              </button>

              {/* Simple Dropdown */}
              {item.dropdown && activeDropdown === item.name && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 bg-white border border-[#fed42a] shadow-lg rounded mt-2 py-2 w-48 z-50"
                >
                  {item.dropdown.map((sub, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-yellow-100 text-sm"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}

              {/* Mega Dropdown */}
              {item.mega && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-full bg-white shadow-xl border border-[#fed42a] rounded-lg mt-2 p-6 grid grid-cols-2 gap-8 min-w-[500px] z-50"
                >
                  {Object.entries(item.mega).map(([section, places], i) => (
                    <div key={i}>
                      <h4 className="text-sm font-bold text-gray-700 mb-2">
                        {section}
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        {places.map((place, idx) => (
                          <li key={idx}>
                            <a
                              href="#"
                              className="hover:text-blue-600 transition"
                            >
                              • {place}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Book Now Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block border-white hover:border-2 text-black px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-[#fed42a] transition duration-300"
        >
          Book Now
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
