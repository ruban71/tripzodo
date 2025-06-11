import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const gallerySections = [
  {
    title: 'Breathtaking Beach Escapes',
    description: 'Explore stunning coastal destinations with crystal-clear waters and golden sands.',
    images: ['/company/gtype1.jpg', '/company/gtype1.jpg', '/company/gtype1.jpg'],
  },
  {
    title: 'Majestic Mountain Adventures',
    description: 'Discover thrilling hikes, scenic views, and peaceful retreats in high-altitude wonderlands.',
    images: ['/company/gtype2.jpg', '/company/gtype2.jpg', '/company/gtype2.jpg'],
  },
  {
    title: 'Cultural Heritage Tours',
    description: 'Dive into rich history, ancient architecture, and vibrant local traditions around the world.',
    images: ['/company/gtype3.jpg', '/company/gtype3.jpg', '/company/gtype3.jpg'],
  },
  {
    title: 'Romantic Getaways & Honeymoons',
    description: 'Perfect packages for couples seeking dreamy destinations and unforgettable moments.',
    images: ['/company/gtype4.jpg', '/company/gtype4.jpg', '/company/gtype4.jpg'],
  },
  {
    title: 'Exotic Wildlife & Nature Safaris',
    description: 'Experience close encounters with nature and wildlife in lush jungles and open savannahs.',
    images: ['/company/gtype5.jpg', '/company/gtype5.jpg', '/company/gtype5.jpg'],
  },
];

const Blogtypes = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-8 bg-white">
      {gallerySections.map((section, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className=""
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl mt-12 font-bold text-gray-800">{section.title}</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">{section.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg group"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <Image
                  src={img}
                  alt={`${section.title} ${i + 1}`}
                  height={200}
                  width={200}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blogtypes;
