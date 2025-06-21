import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa';

function Contactphone() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
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
              placeholder="Phone Number (10 digits)"
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
    </div>
  );
}

export default Contactphone;
