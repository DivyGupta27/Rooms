import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdOutlineVilla } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-[#e60044] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <MdOutlineVilla className="text-xl" />
            <span className="text-lg font-semibold">Make Your Trip</span>
          </div>

          {/* Navigation Links - Stack on mobile, row on desktop */}
          <div className="grid grid-cols-3 gap-4 text-center sm:flex sm:space-x-4 sm:gap-0">
            <a href="/hotels" className="text-sm font-medium hover:text-pink-600 px-2 py-1">Hotels</a>
            <a href="/workspaces" className="text-sm font-medium hover:text-pink-600 px-2 py-1">Workspaces</a>
            <a href="/destinations" className="text-sm font-medium hover:text-pink-600 px-2 py-1">Destinations</a>
            <a href="/luxury" className="text-sm font-medium hover:text-pink-600 px-2 py-1">Luxury</a>
            <a href="/budget" className="text-sm font-medium hover:text-pink-600 px-2 py-1">Budget</a>
            <a href="/resorts" className="text-sm font-medium hover:text-pink-600 px-2 py-1">Resorts</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <FaFacebookF className="text-lg cursor-pointer hover:text-pink-600 transition-colors" />
            <FaTwitter className="text-lg cursor-pointer hover:text-pink-600 transition-colors" />
            <FaInstagram className="text-lg cursor-pointer hover:text-pink-600 transition-colors" />
          </div>
        </div>

        {/* Copyright - Always centered */}
        <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 pt-4 border-t border-gray-100">
          © {new Date().getFullYear()} Make Your Trip. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;