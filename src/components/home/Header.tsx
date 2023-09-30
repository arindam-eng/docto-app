/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-blue-300 text-white py-1'>
      <div className='md:container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src='https://freepngimg.com/thumb/categories/1677.png' // Replace with your logo image path
            alt='Logo'
            className='w-10 h-10 mr-2' // Adjust the width and height as needed
          />
          <h1 className='text-2xl font-semibold'>Find Doctors Near You</h1>
        </div>

        {/* Sign-In and Register Buttons */}
        <div className='space-x-2'>
          <a
            href='#'
            className='bg-white text-blue-500 hover:bg-blue-600 text-sm px-3 py-1 rounded-md'
          >
            Sign In
          </a>

          <Link
            href='/'
            className='bg-blue-500 text-white hover:bg-blue-600 text-sm px-3 py-1 rounded-md'
          >
            Home
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
