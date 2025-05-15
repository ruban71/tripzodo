import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import App_layout from '@/component/layout/app-layout'
import { FaQuoteLeft } from 'react-icons/fa'
import Contactall from '@/component/common/contactall'
import GetUpdates from '@/component/common/getupdates'

const testimonials = [
  {
    name: "Emily Stone",
    role: "Marketing Lead",
    image: "/company/testimonial1.jpg",
    feedback: "The team delivered exactly what we envisioned. Superb coordination and creativity!"
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
    feedback: "They delivered results beyond expectations. A professional and timely service."
  },
  {
    name: "Ava Martinez",
    role: "Creative Director",
    image: "/company/testimonial1.jpg",
    feedback: "Visually stunning output and top-notch user experience. Highly recommend!"
  },
  {
    name: "Noah Patel",
    role: "Operations Head",
    image: "/company/testimonial1.jpg",
    feedback: "Efficient, responsive, and very creative. They were a pleasure to work with!"
  }
]

const CompanyTestimonial = () => {
  return (
    <App_layout>
      <div className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <h2 className="text-4xl font-bold text-center text-yellow-600 mb-16">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-yellow-50 border border-yellow-100 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />

              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{item.feedback}"
              </p>

              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Contactall/>
      <GetUpdates/>
    </App_layout>
  )
}

export default CompanyTestimonial
