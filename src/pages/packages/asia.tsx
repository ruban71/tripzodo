'use client';
import React, { useState } from 'react';
// @ts-expect-error: react-awesome-lightbox has no TypeScript types
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import App_layout from '@/component/layout/app-layout';
import WhyChooseUs from '@/component/common/whychooseus';
import Contactall from '@/component/common/contactall';
import GetUpdates from '@/component/common/getupdates';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/packages/asia.jpg', title: 'Bali' },
  { src: '/packages/asia.jpg', title: 'Cambodia' },
  { src: '/packages/asia.jpg', title: 'China' },
  { src: '/packages/asia.jpg', title: 'Hong Kong' },
  { src: '/packages/asia.jpg', title: 'Japan' },
  { src: '/packages/asia.jpg', title: 'Indonesia' },
  { src: '/packages/asia.jpg', title: 'Kazakhstan' },
  { src: '/packages/asia.jpg', title: 'Russia' },
  { src: '/packages/asia.jpg', title: 'South Korea' },
  { src: '/packages/asia.jpg', title: 'Malaysia' },
  { src: '/packages/asia.jpg', title: 'Singapore' },
  { src: '/packages/asia.jpg', title: 'Philippines' },
  { src: '/packages/asia.jpg', title: 'Taiwan' },
  { src: '/packages/asia.jpg', title: 'Thailand' },
  { src: '/packages/asia.jpg', title: 'Vietnam' },
  { src: '/packages/asia.jpg', title: 'Uzbekistan' },
];

function AsiaGalleryPage() {
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
          Asia Tourist Places Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out shadow-lg rounded-md overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <Image
                  src={img.src}
                  alt={img.title}
                  height={200}
                  width={200}
                  className="w-full h-64 object-cover rounded-t-md"
                />
              </div>
              <Link href="/packages/asiatour_packagecard">
                <div className="bg-white text-center py-3 font-semibold text-gray-800 text-base rounded-b-md">
                  {img.title}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            images={images.map(({ src, title }) => ({ src, title }))}
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

export default AsiaGalleryPage;
