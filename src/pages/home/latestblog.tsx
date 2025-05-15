import Image from 'next/image';
import React from 'react';

const blogs = [
  {
    id: 1,
    image: '/home/blog1.jpg',
    title: 'Exploring the Hidden Gems of Europe',
    excerpt: 'Discover less-known places in Europe perfect for your next adventure.',
  },
  {
    id: 2,
    image: '/home/blog1.jpg',
    title: 'Top 10 Travel Tips for 2025',
    excerpt: 'Make the most of your trips with these essential travel tips.',
  },
  {
    id: 3,
    image: '/home/blog1.jpg',
    title: 'A Guide to Solo Travel',
    excerpt: 'Traveling alone? Here’s how to do it safely and joyfully.',
  },
];

const LatestBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Blogs</h2>
      <p className="text-gray-500 mb-10">Stay updated with our latest travel stories and tips.</p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image src={blog.image} alt={blog.title} height={200} width={200} className="w-full h-52 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Blogs Button */}
      <div className="mt-10">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full transition">
          More Blogs
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
