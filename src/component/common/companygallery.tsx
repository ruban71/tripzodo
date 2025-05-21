import Image from 'next/image';
import React from 'react';

const galleryImages = [
  {
    src: '/company/ga1.jpg',
    title: 'Santorini, Greece',
  },
  {
    src: '/company/ga1.jpg',
    title: 'Bali, Indonesia',
  },
  {
    src: '/company/ga1.jpg',
    title: 'Swiss Alps, Switzerland',
  },
  {
    src: '/company/ga1.jpg',
    title: 'Kyoto, Japan',
  },
  {
    src: '/company/ga1.jpg',
    title: 'Cappadocia, Turkey',
  },
  {
    src: '/company/ga1.jpg',
    title: 'Dubai, UAE',
  },
];

const CompanyGallery = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Tour Packages Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((item, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src={item.src}
              alt={item.title} height={200} width={200}
              className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyGallery;
