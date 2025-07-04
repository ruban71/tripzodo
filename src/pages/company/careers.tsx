import Contactall from '@/component/common/contactall';
import GetUpdates from '@/component/common/getupdates';
import App_layout from '@/component/layout/app-layout';
import Image from 'next/image';
import React from 'react';

const departments = [
  {
    title: 'Travel Consultant',
    image: '/company/careers.jpg',
    description:
      'Help clients plan the perfect vacation, providing expert guidance on tour packages, destinations, and travel logistics.',
  },
  {
    title: 'Marketing Specialist',
    image: '/company/careers.jpg',
    description: 'Create campaigns and content that inspire travelers to book unforgettable journeys with us.',
  },
  {
    title: 'Tour Operations Manager',
    image: '/company/careers.jpg',
    description:
      'Oversee and optimize the end-to-end tour delivery experience, ensuring smooth and joyful travel.',
  },
  {
    title: 'Customer Support Executive',
    image: '/company/careers.jpg',
    description:
      'Assist customers with inquiries, bookings, and support before, during, and after their trips.',
  },
  {
    title: 'Tour Guide',
    image: '/company/careers.jpg',
    description:
      'Lead groups on exciting adventures, sharing knowledge and stories that bring destinations to life.',
  },
  {
    title: 'Content Creator',
    image: '/company/careers.jpg',
    description:
      'Capture stories, write engaging blogs, and create stunning visuals to showcase our tour experiences online.',
  },
];

const Careers = () => {
  return (
    <App_layout>
      {/* Hero Section */}
      <div className="relative w-full h-[450px]">
        <Image
          src="/company/careers1.jpg"
          alt="Tour Careers"
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">Careers</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Join our passionate travel team and help craft unforgettable tour experiences worldwide.
          </p>
        </div>
      </div>

      {/* Departments Section */}
      <section className="py-12 px-4 md:px-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"><span className='text-[#fed42a]'>Explore Career</span> Opportunities</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative w-full h-96">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-2xl"
                />
              </div>

              {/* Title on image - hidden on hover */}
              <div className="absolute bottom-0 left-4 right-4 flex justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
                <span className="bg-gray-900 text-[#fed42a] w-full px-4 py-2 rounded-md text-xl font-semibold drop-shadow-md">
                  {dept.title}
                </span>
              </div>

              {/* Hover curved white panel */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  h-[33%] bg-white rounded-t-[3rem]
                  p-6
                  transform translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300 ease-in-out
                  shadow-lg
                  text-left
                  "
              >
                <h3 className="text-gray-800 text-center text-xl font-semibold mb-2">{dept.title}</h3>
                <p className="text-gray-600 text-center text-sm">{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contactall />
      <GetUpdates />
    </App_layout>
  );
};

export default Careers;
