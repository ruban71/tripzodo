"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  name: string;
  link?: string;
  dropdown?: { name: string; link: string }[];
  mega?: Record<string, { name: string; link: string }[]>;
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  {
    name: "Company",
    dropdown: [
      { name: "About", link: "/company/about_us" },
      { name: "History", link: "/company/history" },
      { name: "Testimonials", link: "/company/company_testimonial" },
      { name: "Careers", link: "/company/careers" },
      { name: "Blogs", link: "/company/companyblog" },
      { name: "FAQs", link: "/company/faqsection" },
    ],
  },
  { name: "Group Tours", link: "/group/grouptour_herosection" },
  {
    name: "Packages",
    dropdown: [
      { name: "India", link: "/packages/india" },
      { name: "Asia", link: "/packages/asia" },
      { name: "Island", link: "/packages/island" },
    ],
  },
  {
    name: "India",
    mega: {
      "North India": [
        { name: "Delhi", link: "/india/north/delhi" },
        { name: "Agra", link: "/india/north/agra" },
        { name: "Manali", link: "/india/north/manali" },
        { name: "Shimla", link: "/india/north/shimla" },
        { name: "Jaipur", link: "/india/north/jaipur" },
      ],
      "South India": [
        { name: "Tamil Nadu", link: "/india/south/tamil-nadu" },
        { name: "Kerala", link: "/india/south/kerala" },
        { name: "Bangalore", link: "/india/south/bangalore" },
      ],
      "West India": [
        { name: "Pune", link: "/india/west/pune" },
        { name: "Mumbai", link: "/india/west/mumbai" },
      ],
      "East India": [
        { name: "West Bengal", link: "/india/east/west-bengal" },
        { name: "Darjeeling", link: "/india/east/darjeeling" },
        { name: "Arunachal Pradesh", link: "/india/east/arunachal-pradesh" },
      ],
      Spiritual: [
        { name: "Ayodhya", link: "/india/spiritual/ayodhya" },
        { name: "Tirupati", link: "/india/spiritual/tirupati" },
      ],
    },
  },
  {
    name: "Honeymoon",
    mega: {
      India: [
        { name: "Goa", link: "/honeymoon/india/goa" },
        { name: "Kerala", link: "/honeymoon/india/kerala" },
        { name: "Shimla", link: "/honeymoon/india/shimla" },
        { name: "Manali", link: "/honeymoon/india/manali" },
        { name: "Andaman", link: "/honeymoon/india/andaman" },
        { name: "Munnar", link: "/honeymoon/india/munnar" },
        { name: "Kodaikanal", link: "/honeymoon/india/kodaikanal" },
        { name: "Ooty", link: "/honeymoon/india/ooty" },
      ],
      International: [
        { name: "Maldives", link: "/honeymoon/international/maldives" },
        { name: "Bali", link: "/honeymoon/international/bali" },
        { name: "Mauritius", link: "/honeymoon/international/mauritius" },
        { name: "Switzerland", link: "/honeymoon/international/switzerland" },
        { name: "Italy", link: "/honeymoon/international/italy" },
        { name: "Thailand", link: "/honeymoon/international/thailand" },
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
              {item.link ? (
                <Link
                  href={item.link}
                  onClick={() => handleClick(item.name)}
                  className={`flex items-center gap-1 font-medium transition duration-200 ${
                    activeMenu === item.name
                      ? "text-white font-bold underline"
                      : "text-gray-800 hover:text-white"
                  }`}
                >
                  {item.name}
                  {(item.dropdown || item.mega) && (
                    <FaChevronDown className="text-xs mt-1" />
                  )}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(item.name)}
                  className={`flex items-center gap-1 font-medium transition duration-200 ${
                    activeMenu === item.name
                      ? "text-white font-bold underline"
                      : "text-gray-800 hover:text-white"
                  }`}
                >
                  {item.name}
                  {(item.dropdown || item.mega) && (
                    <FaChevronDown className="text-xs mt-1" />
                  )}
                </button>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 bg-white border border-[#fed42a] shadow-lg rounded mt-2 py-2 w-48 z-50"
                >
                  {item.dropdown.map((sub, i) => (
                    <li key={i}>
                      <Link
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-yellow-100 text-sm"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}

              {/* Mega Menu */}
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
                            <Link
                              href={place.link}
                              className="hover:text-blue-600 transition"
                            >
                              • {place.name}
                            </Link>
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
