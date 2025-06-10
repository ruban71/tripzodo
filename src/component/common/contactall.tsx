import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
 
} from "react-icons/fa";
import Image from 'next/image';


const Contactall = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessageSent(true);
  setTimeout(() => setMessageSent(false), 4000);
};


  const contactDetails = [
    {
      title: 'Office Location',
      content: '55 Main Street\n2nd Floor New York',
      image: '/contact/locationn.png',
    },
    {
      title: 'Email Address',
      content: 'contact@example.com\ninfo@example.com',
      image: '/contact/emaill.png',
    },
    {
      title: 'Hotline',
      content: '+1 (307) 776-0608\n666 8888 000',
      image: '/contact/hotlinee.png',
    },
  ];

  return (
   
      
      <div className="bg-white mt-16 text-gray-800">
        {/* Hero Section */}
       
        {/* Success Message */}
        {messageSent && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-md z-50"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}

        {/* Contact Info & Form */}
        <section className="max-w-6xl mx-auto px-4">
          {/* Info Cards */}
          <div className="flex justify-center mb-8">
  <span className="bg-yellow-100 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-300">
    Contact us
  </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
  {contactDetails.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 + index * 0.2 }}
    >
      <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fed42a] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

        {/* Card Content */}
        <div className="relative z-10 p-6 flex flex-col items-center text-center h-full bg-white/80 backdrop-blur-md rounded-xl">
          <Image
            src={item.image}
            alt={item.title}
            height={200}
            width={200}
            className="object-cover rounded mb-4 transition-all duration-500 group-hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600 whitespace-pre-line">{item.content}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>



          {/* Contact Form */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-start text-left">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <span className="bg-yellow-100 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-300">
    Contact with us
  </span>
  <h3 className="text-5xl font-bold mt-5 text-gray-800 mb-4">
    Have <span className='text-[#fed42a]'>questions<span className='tetx-gray-900'></span>? Feel</span> free to write us
  </h3>
  <p className="text-gray-600 text-xl leading-relaxed">
    Reach out to us anytime. We are here to help you with any queries
    regarding our services, availability, or anything else.
  </p>

  {/* Simple Social Media Icons */}
  
 
 

<div className="flex space-x-3 mt-5 text-xl text-gray-700">
  <a href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-90">
    <FaTwitter />
  </a>
  <a href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-90">
    <FaFacebookF />
  </a>
  <a href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-90">
    <FaInstagram />
  </a>
  <a href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-90">
    <FaLinkedinIn />
  </a>
  <a href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-90">
    <FaYoutube />
  </a>
  <a href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-90">
    <FaPinterestP />
  </a>
</div>

</motion.div>


          <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <textarea
                placeholder="Write a Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#fed42a] hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md transition duration-300"
              >
                Send a Message
              </button>
            </motion.form>
          </div>
        </section>
      </div>
    
  );
};

export default Contactall;
