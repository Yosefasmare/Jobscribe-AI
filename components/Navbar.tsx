'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className='flex gap-2 justify-center items-center'>
          <span className="text-blue-800 text-lg font-bold mr-4">Jobscribe-AI</span>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          aria-label="Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex md:space-x-6 absolute  top-full left-0 md:relative md:top-auto md:left-auto w-full md:w-auto bg-white md:shadow-none shadow-md ${isOpen ? 'flex flex-col' : 'hidden'}` }>
          <Link href="/" className="hover:text-gray-500 block py-2 px-6">Home</Link>
          <Link href="/#featuers" className="hover:text-gray-500 block py-2 px-6">Features</Link>
          <Link href="/#htw" className="hover:text-gray-500 block py-2 px-6">How It Works</Link>
        </div>

        {/* CTA Button */}
        <Link href={'/upload'} className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 font-bold hover:from-pink-500 hover:to-orange-500 transition-colors">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
