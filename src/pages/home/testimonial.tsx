import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Step 1: Define the testimonial type
interface TestimonialType {
  name: string;
  role: string;
  message: string;
  image: string;
}

// Step 2: Array with type
const testimonials: TestimonialType[] = [
  {
    name: 'Alice Johnson',
    role: 'Architect',
    message: 'This course transformed the way I visualize architecture!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Brian Smith',
    role: 'Interior Designer',
    message: 'Very clear instructions and stunning output.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Carlos Mendes',
    role: '3D Artist',
    message: 'I loved the workflow and project-based approach.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Diana Lee',
    role: 'Urban Planner',
    message: 'Best investment for learning visualization tools!',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Ethan Brown',
    role: 'Student',
    message: 'Easy to follow and beautifully explained concepts.',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Farah Khan',
    role: 'Architectural Intern',
    message: 'Practical, professional, and perfect for my career growth.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const visibleCards = 4;

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + visibleCards < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Our Clients Say</h2>

      <div className="relative">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: `-${startIndex * (100 / visibleCards)}%` }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            style={{
              width: `${(testimonials.length / visibleCards) * 100}%`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white shadow-xl rounded-xl px-6 py-8 text-center w-full max-w-xs shrink-0"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  height={200}
                  width={200}
                  className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 mx-auto mb-4"
                />
                <p className="text-gray-700 text-sm italic mb-4">“{t.message}”</p>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition disabled:opacity-30"
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
        </div>

        <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={next}
            disabled={startIndex + visibleCards >= testimonials.length}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition disabled:opacity-30"
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
