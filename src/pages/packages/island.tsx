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
  { src: '/packages/island.jpg', title: 'Madagascar' },
  { src: '/packages/island.jpg', title: 'Maldives' },
  { src: '/packages/island.jpg', title: 'Mauritius' },
  { src: '/packages/island.jpg', title: 'Reunion' },
  { src: '/packages/island.jpg', title: 'Sri Lanka' },
  { src: '/packages/island.jpg', title: 'Bora Bora' },
  { src: '/packages/island.jpg', title: 'Fiji' },
  { src: '/packages/island.jpg', title: 'Seychelles' },
];

function IslandGalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <App_layout>
      <div className="min-h-screen bg-gradient-to-b from-[#b3ecff] to-[#ffffff] py-12 px-4 md:px-16 mt-16">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12 drop-shadow-lg">
          Island Tourist Places
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out shadow-xl rounded-2xl overflow-hidden border-2 border-white"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <Image
                  src={img.src} alt='image' height={200} width={200}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
               
              </div>
              <Link href="/packages/islandtour_packagecard">
              <div className="bg-white text-center py-3 font-semibold text-gray-800 text-base rounded-b-2xl">
                {img.title}
              </div>
              </Link>
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            images={images.map(({ src }) => ({ src }))}
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

export default IslandGalleryPage;
