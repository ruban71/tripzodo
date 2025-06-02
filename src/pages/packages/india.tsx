'use client';
import Contactall from '@/component/common/contactall';
import GetUpdates from '@/component/common/getupdates';
import WhyChooseUs from '@/component/common/whychooseus';
import App_layout from '@/component/layout/app-layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// @ts-expect-error: react-awesome-lightbox has no TypeScript types
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

const images = [
  { src: '/packages/tajmahal.jpeg', alt: 'Taj Mahal' },
  { src: '/packages/kerala1.jpg', alt: 'Mysuru Palace' },
  { src: '/packages/kerala1.jpg', alt: 'Gateway Of India Mumbai' },
  { src: '/packages/kerala1.jpg', alt: 'Sri Harmandir Sahib' },
  { src: '/packages/kerala1.jpg', alt: 'Amber Palace' },
  { src: '/packages/kerala1.jpg', alt: 'Red Fort' },
  { src: '/packages/kerala1.jpg', alt: 'Meenakshi Amman Temple' },
  { src: '/packages/kerala1.jpg', alt: 'Goa' },
];

function IndiaGalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <App_layout>
      <div className="min-h-screen bg-white py-10 mt-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          India Tourist Places Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out shadow-lg rounded-md overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                height={200}
                width={200}
                className="w-full h-64 object-cover rounded-md"
              />
              <Link href="/packages/indiatour_packagecard">
                <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 bg-opacity-50 px-4 py-2 text-center text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  {img.alt}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            images={images}
            startIndex={currentIndex}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>

      <WhyChooseUs />
      <div className='mt-12'>
      <Contactall />
      <GetUpdates />
      </div>
    </App_layout>
  );
}

export default IndiaGalleryPage;
