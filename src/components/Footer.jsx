import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdOutlineVilla } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-white text-[#e60044] mt-10 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left */}
        <div className="flex items-center space-x-2">
          <MdOutlineVilla />
          <span className="text-lg font-semibold">Make Your Trip</span>
        </div>

        {/* Center */}
        <div className="flex space-x-4 text-sm text-[#e60044] font-medium">
          <a href="/">Hotels</a>
          <a href="/">Workspaces</a>
          <a href="/">Destinations</a>
          <a href="/">Luxury</a>
          <a href="/">Budget</a>
          <a href="/">Resorts</a>
        </div>

        {/* Right */}
        <div className="flex space-x-4 text-[#e60044]">
          <FaFacebookF className="cursor-pointer hover:text-pink-600" />
          <FaTwitter className="cursor-pointer hover:text-pink-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} Make Your Trip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
