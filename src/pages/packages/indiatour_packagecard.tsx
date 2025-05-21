'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import App_layout from '@/component/layout/app-layout';
import Image from 'next/image';
import WhyChooseUs from '@/component/common/whychooseus';
import Contactall from '@/component/common/contactall';
import GetUpdates from '@/component/common/getupdates';

interface PackageProps {
  image: string;
  title: string;
  nights: string;
  rating: string;
  activities: number;
  transfer: boolean;
  concierge: boolean;
  price: string;
}

const packageList: PackageProps[] = [
  {
    image: '/packages/island.jpg',
    title: 'Heritage Trail 1: Hampi & Badami',
    nights: '5 nights: Hampi (3N), Badami (2N)',
    rating: '4★',
    activities: 5,
    transfer: true,
    concierge: true,
    price: '19999',
  },
  {
    image: '/packages/kerala1.jpg',
    title: 'Heritage Trail 2: Jaipur & Udaipur',
    nights: '6 nights: Jaipur (3N), Udaipur (3N)',
    rating: '4★',
    activities: 6,
    transfer: true,
    concierge: false,
    price: '20499',
  },
  {
    image: '/packages/tajmahal.jpeg',
    title: 'Heritage Trail 3: Kerala Backwaters',
    nights: '5 nights: Kochi (2N), Alleppey (3N)',
    rating: '4★',
    activities: 5,
    transfer: true,
    concierge: true,
    price: '20999',
  },
  {
    image: '/packages/asia.jpg',
    title: 'Heritage Trail 4: Golden Triangle',
    nights: '6 nights: Delhi (2N), Agra (2N), Jaipur (2N)',
    rating: '4★',
    activities: 7,
    transfer: true,
    concierge: false,
    price: '21499',
  },
  {
    image: '/packages/island.jpg',
    title: 'Heritage Trail 5: Rann of Kutch',
    nights: '5 nights: Bhuj (2N), Kutch (3N)',
    rating: '4★',
    activities: 5,
    transfer: true,
    concierge: true,
    price: '21999',
  },
  {
    image: '/packages/kerala1.jpg',
    title: 'Heritage Trail 6: Tamil Nadu Temples',
    nights: '6 nights: Chennai (2N), Madurai (2N), Thanjavur (2N)',
    rating: '4★',
    activities: 6,
    transfer: true,
    concierge: false,
    price: '22499',
  },
  {
    image: '/packages/tajmahal.jpeg',
    title: 'Heritage Trail 7: Northeast Discovery',
    nights: '7 nights: Shillong (4N), Kaziranga (3N)',
    rating: '4★',
    activities: 7,
    transfer: true,
    concierge: true,
    price: '22999',
  },
  {
    image: '/packages/asia.jpg',
    title: 'Heritage Trail 8: Goa Culture & Beach',
    nights: '5 nights: North Goa (2N), South Goa (3N)',
    rating: '4★',
    activities: 4,
    transfer: true,
    concierge: false,
    price: '23499',
  },
  {
    image: '/packages/tajmahal.jpeg',
    title: 'Heritage Trail 9: Andaman Islands',
    nights: '6 nights: Port Blair (3N), Havelock (3N)',
    rating: '4★',
    activities: 6,
    transfer: true,
    concierge: true,
    price: '23999',
  },
  {
    image: '/packages/kerala1.jpg',
    title: 'Heritage Trail 10: Ladakh Expedition',
    nights: '7 nights: Leh (4N), Nubra (3N)',
    rating: '4★',
    activities: 8,
    transfer: true,
    concierge: false,
    price: '24499',
  },
];

const IndiaTourPackagePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowPopup(window.scrollY < 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <App_layout>
      <div className="mt-20 p-4 space-y-8">
        {/* 🔝 Intro Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
              Plan your hassle-free holiday starts now!
            </h2>
            <p className="text-gray-600 mt-1">
              Talk to our travel experts and curate an itinerary to your dream destination.
            </p>
          </div>
          <button
            onClick={() => router.push('/plan-trip')}
            className="mt-4 lg:mt-0 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 text-sm font-medium"
          >
            Connect Us
          </button>
        </div>

        {/* 🟨 Highlight Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white border border-gray-200 p-6 rounded-xl shadow text-center">
          <div>
            <p className="text-sm text-gray-500">IDEAL DURATION</p>
            <p className="text-lg font-semibold text-gray-800">5 - 6 Days</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">STARTING PRICE</p>
            <p className="text-lg font-semibold text-gray-800">₹20,413</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">OUR EXPERTISE</p>
            <div className="flex justify-center items-center gap-1">
              <span className="text-lg font-semibold text-gray-800">4.1</span>
              <span className="text-yellow-500 text-base">★</span>
              <span className="text-sm text-gray-600">from 5.2k travellers</span>
            </div>
          </div>
        </div>

        {/* 🔻 Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="space-y-6 sticky top-24">
              {/* Budget Filter */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
                <h4 className="font-semibold text-gray-800 mb-2">Budget</h4>
                {[
                  'Below ₹ 50k',
                  '₹ 50k – ₹ 75k',
                  '₹ 75k – ₹ 1L',
                  '₹ 1L – ₹ 1.5L',
                  '₹ 1.5L – ₹ 2L',
                  'Above ₹ 2L',
                ].map((budget, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <input type="checkbox" className="accent-yellow-500" />
                    <label>{budget}</label>
                  </div>
                ))}
              </div>

              {/* Hotel Rating Filter */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
                <h4 className="font-semibold text-gray-800 mb-2">Hotel Ratings</h4>
                {['5 star', '4 star', '3 star'].map((rating, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <input type="checkbox" className="accent-yellow-500" />
                    <label>{rating}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour Packages List */}
          <div className="w-full lg:w-3/4 max-h-[80vh] overflow-y-auto pr-2 space-y-6">
            {packageList.map((pkg, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row rounded-xl shadow-md border border-gray-200 overflow-hidden bg-white"
              >
                {/* Image */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <Image
                    src={pkg.image}
                    alt={`Tour ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Details */}
                <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{pkg.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{pkg.nights}</p>
                    <ul className="text-sm text-gray-700 mt-3 space-y-1">
                      <li>✅ {pkg.rating} Hotels</li>
                      <li>✅ {pkg.activities} Activities</li>
                      {pkg.transfer && <li>✅ Shared Transfer</li>}
                      {pkg.concierge && <li>✅ 24x7 Concierge</li>}
                    </ul>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <p className="text-lg font-bold text-gray-800">₹{pkg.price}</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 text-sm rounded-md hover:bg-green-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Popup */}
      {showPopup && (
       <div className="fixed bottom-6 right-0 z-50 w-full px-4 sm:px-6 flex justify-center">
  <div className="bg-white border flex items-baseline gap-3 border-yellow-300 shadow-xl rounded-2xl p-5 w-[75%] sm:w-[75%] md:w-[50%] lg:w-[40%] animate-fade-in">
    <h3 className="text-base sm:text-sm font-semibold text-gray-800">
      Build Your Perfect Travel Itinerary in Minutes
    </h3>
   
    <button
      onClick={() => router.push('/packages/indiatour_trip')}
      className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 text-sm rounded-md w-32"
    >
      Plan Your Trip
    </button>
  </div>
</div>


      )}

      <WhyChooseUs />
      <Contactall />
      <GetUpdates />
    </App_layout>
  );
};

export default IndiaTourPackagePage;
