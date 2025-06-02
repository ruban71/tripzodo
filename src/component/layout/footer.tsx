import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* GoWilds Description + Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">GoWilds</h2>
          <p className="text-sm text-gray-400 mb-4">
            To take trivial example which us ever undertakes laborious physica
            exercise except obsome.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pages</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#">About us</a></li>
            <li><a href="#">Community Blog</a></li>
            <li><a href="#">Work with Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            Newsletter <span className="ml-2 text-[#fed42a]">›</span>
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe our newsletter to get our latest update & news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 w-full rounded-l-md bg-white text-black"
            />
            <button className="bg-[#fed42a] hover:bg-yellow-600 text-white p-3 rounded-r-md">
              <FaPaperPlane />
            </button>
          </div>
          <label className="flex items-center text-sm text-gray-400 mt-2">
            <FaCheck className="mr-2 text-[#fed42a]" />
            I agree to all terms and policies
          </label>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#fed42a] mr-3" />
              +00 (123) 456 889
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#fed42a] mr-3" />
              contact@example.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#fed42a] mr-3" />
              583 Main Street, NY, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4 px-4">
        © 2023 Copyrights by GoWilds. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
