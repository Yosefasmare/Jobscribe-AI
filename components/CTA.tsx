import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r h-[50vh] from-gray-100 to-white py-12">
      <div className="max-w-7xl h-full flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Ready to land your dream job?
        </h2>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/upload"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 glow"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
