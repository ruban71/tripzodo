import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import App_layout from '@/component/layout/app-layout';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import Contactall from '@/component/common/contactall';
import GetUpdates from '@/component/common/getupdates';

const testimonials = [
  {
    name: "Helene Paquet",
    role: "Advertiser",
    image: "/company/testimonial1.jpg",
    feedback: "Visually stunning output and top-notch user experience. Highly recommend!"
  },
  {
    name: "Emily Stone",
    role: "Marketing Lead",
    image: "/company/testimonial1.jpg",
    feedback: "The team delivered exactly what we envisioned. Coordination and creativity!"
  },
  {
    name: "Liam Parker",
    role: "Product Manager",
    image: "/company/testimonial1.jpg",
    feedback: "Their process is streamlined and effective. I’d gladly work with them again."
  },
  {
    name: "Sophia Kim",
    role: "UX Designer",
    image: "/company/testimonial1.jpg",
    feedback: "Absolutely amazing service! They brought our ideas to life with precision."
  },
  {
    name: "James Lee",
    role: "Founder & CEO",
    image: "/company/testimonial1.jpg",
    feedback: "Their process is streamlined and effective. I’d gladly work with them again."
  },
  {
    name: "Ava Martinez",
    role: "Creative Director",
    image: "/company/testimonial1.jpg",
    feedback: "Visually stunning output and top-notch user experience. Highly recommend!"
  }
];

const CompanyTestimonial = () => {
  return (
    <App_layout>
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Client <span className="text-[#fed42a]">Testimonial</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl shadow-xl bg-yellow-50 p-8 overflow-hidden"
            >
              {/* Gradient background bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

              {/* Card content */}
              <div className="relative z-10 flex flex-col">
  {/* Quote icon at the top */}
  <FaQuoteLeft className="text-[#fed42a] text-3xl mb-6 opacity-90" />

  <p className="text-[#3b2f2f] leading-relaxed line-clamp-3">
    {item.feedback}
  </p>

  <div className="flex items-center gap-4 mt-8">
    <Image
      src={item.image}
      alt={item.name}
      width={70}
      height={70}
      className="rounded-full object-cover"
    />

    <div>
      <div className="flex text-[#fed42a] mb-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <h4 className="font-bold text-[#3b2f2f]">{item.name}</h4>
      <p className="text-gray-600 text-sm">{item.role}</p>
    </div>
  </div>
</div>

            </motion.div>
          ))}
        </div>
      </div>

      <Contactall />
      <GetUpdates />
    </App_layout>
  );
};

export default CompanyTestimonial;
