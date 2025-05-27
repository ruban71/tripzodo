import React, { useState } from 'react';
import { motion } from 'framer-motion';
import App_layout from '@/component/layout/app-layout';
import {
  FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP,
} from "react-icons/fa";
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{14}$/;
    const emailValid = formData.email.includes('@');

    if (!nameRegex.test(formData.name) || !nameRegex.test(formData.subject)) {
      setError("Name and Subject must contain only alphabets.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setError("Phone number must be exactly 14 digits.");
      return;
    }

    if (!emailValid) {
      setError("Email must contain '@'.");
      return;
    }

    // Simulate success message
    setSuccessMsg("📩 Message sent to 9524605488");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const contactDetails = [
    {
      title: 'Office Location',
      content: '55 Main Street\n2nd Floor New York',
      image: '/contact/location.jpg',
    },
    {
      title: 'Email Address',
      content: 'contact@example.com\ninfo@example.com',
      image: '/contact/email.jpg',
    },
    {
      title: 'Hotline',
      content: '+1 (307) 776-0608\n666 8888 000',
      image: '/contact/hotline.jpg',
    },
  ];

  return (
    <App_layout>
      <div className="bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#f0fdf4] text-gray-800">
        {/* Hero Section */}
        <div
          className="relative h-[60vh] bg-center bg-cover mt-16"
          style={{ backgroundImage: "url('/contact/contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[#fed42a] text-4xl md:text-6xl font-extrabold drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)]"
            >
              Contact Us
            </motion.h1>
          </div>
        </div>

        {/* Success/Error Messages */}
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-md z-50"
          >
            {successMsg}
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-md z-50"
          >
            ❌ {error}
          </motion.div>
        )}

        {/* Contact Info */}
        <section className="max-w-6xl mx-auto px-4 py-16">
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#fed42a] to-white opacity-0 group-hover:opacity-100 z-0"></div>
                  <div className="relative z-10 p-6 flex flex-col items-center text-center h-full bg-white/80 backdrop-blur-md rounded-xl">
                    <Image src={item.image} alt={item.title} height={200} width={200}
                      className="object-cover mb-4 rounded group-hover:scale-105 transition-all duration-500" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-yellow-100 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-300">
                Contact with us
              </span>
              <h3 className="text-4xl font-bold mt-5 text-gray-800 mb-4">
                Have <span className='text-[#fed42a]'>questions</span>? Feel free to write us
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Reach out to us anytime. We are here to help you with any queries regarding our services, availability, or anything else.
              </p>

              <div className="flex space-x-3 mt-5 text-xl text-gray-700">
                {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-900">
                    <Icon />
                  </a>
                ))}
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (14 digits)"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
    </App_layout>
  );
};

export default Contact;
