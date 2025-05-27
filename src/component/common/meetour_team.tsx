'use client';

import Image from 'next/image';
import React from 'react';

const teamMembers = [
  {
    name: 'Avery Davis',
    role: 'MARKETING EXPERT',
    image: '/company/member1.png',
  },
  {
    name: 'Cahaya Dewi',
    role: 'ADVERTISING HEAD',
    image: '/company/member2.png',
  },
  {
    name: 'Olivia Wilson',
    role: 'CONTENT CREATOR',
    image: '/company/member3.png',
  },
  {
    name: 'Sacha Dubois',
    role: 'GRAPHIC DESIGNER',
    image: '/company/member4.png',
  },
  {
    name: 'Chiaki Sato',
    role: 'CAMPAIGN LEAD',
    image: '/company/member5.png',
  },
  {
    name: 'Juliana Silva',
    role: 'INFLUENCER',
    image: '/company/member6.png',
  },
];

const MeetTheTeam = () => {
  return (
    <section className="relative bg-white text-center py-12 px-6 overflow-hidden">
      {/* Top Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900"><span className='text-[#fed42a]'>Meet Our</span> Team</h2>
        <p className="text-lg text-gray-700 mt-2">
          Behind The Creative Process Of Building Your Brand
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto z-10 relative">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-8 border-[#fed42a] overflow-hidden shadow-lg">
              <Image
                src={member.image}
                alt={member.name} height={200} width={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Background Shape */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-tr from-[#fed42a] to-white rotate-[-3deg] origin-bottom z-0"></div>
    </section>
  );
};

export default MeetTheTeam;
