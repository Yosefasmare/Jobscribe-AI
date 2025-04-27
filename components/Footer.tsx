import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
        <div className="flex justify-between items-center">
          <div className="text-left">
            &copy; {new Date().getFullYear()} SkillSync. All rights reserved.
          </div>
          <div className="text-center">
            <Link href="#" className="hover:text-gray-700 mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-700 mr-4">
              Terms of Service
            </Link>
            <Link href="https://github.com/Yosefasmare" className="hover:text-gray-700">
              Contact
            </Link>
          </div>
          {/* <div className="text-right">
           
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
