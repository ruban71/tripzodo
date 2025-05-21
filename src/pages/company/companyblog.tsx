import Blogtypes from '@/component/common/blogtypes';
import CompanyGallery from '@/component/common/companygallery';
import Contactall from '@/component/common/contactall';
import GetUpdates from '@/component/common/getupdates';
import App_layout from '@/component/layout/app-layout';
import Image from 'next/image';
import React from 'react';
import LatestBlog from '../home/latestblog';

const CompanyBlog = () => {
  return (
    <App_layout>
        <div>
    <div className="relative w-full h-96 md:h-[450px]">
      {/* Background Image */}
      <Image
        src="/company/blogone.jpg" // Replace with your desired blog bg image
        alt="Blog Background" height={200} width={200}
        className="w-full h-full object-cover mt-16"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Absolute Blog Text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-lg">
        Blog
      </h1>
    </div>
    </div>
    <CompanyGallery/>
    <Blogtypes/>
   <LatestBlog/> 
    <Contactall/>
    <GetUpdates/>
    </App_layout>
  );
};

export default CompanyBlog;
