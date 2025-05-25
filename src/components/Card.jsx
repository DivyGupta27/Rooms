import React from 'react';
import Filters from './Filters';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="p-4 md:p-10 bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          {/* Left Text Section */}
          <div className="text-center lg:text-left max-w-md">
            <p className="font-bold text-sm text-amber-900 uppercase">Introducing</p>
            <h2 className="text-4xl font-bold uppercase text-amber-400">MYT <span className="text-amber-400">Luxe</span></h2>
            <h3 className="text-4xl font-bold capitalize text-amber-400 mb-2">Selection</h3>
            <p className="font-medium">
              Escape to the epitome of luxury, packed with signature amenities and services.
            </p>
            <button className="capitalize cursor-pointer bg-rose-600 font-medium rounded-full px-4 py-2 mt-4 text-white hover:bg-red-700 transition" onClick={() => navigate('/learnmore')}>
              Learn more
            </button>
          </div>

          {/* Image Cards Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="max-w-xs hover:-translate-y-1 hover:scale-105 transition">
              <img
                className="w-full h-48 object-cover rounded"
                src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2025/04/Top-10-Richest-Cities-in-India-March-2025-2-scaled.jpg"
                alt="Mumbai"
              />
              <p className="mt-2 text-sm">Luxury heritage, Mumbai icon, grandeur, timeless elegance.</p>
            </div>

            <div className="max-w-xs hover:-translate-y-1 hover:scale-105 transition">
              <img
                className="w-full h-48 object-cover bg-green-100 rounded"
                src="https://www.datocms-assets.com/32623/1660060831-safetravelinda_hero.jpg?auto=format"
                alt="Agra"
              />
              <p className="mt-2 text-sm">White marble, eternal love, Mughal splendor, Agra's jewel.</p>
            </div>

            <div className="max-w-xs hover:-translate-y-1 hover:scale-105 transition">
              <img
                className="w-full h-48 object-cover bg-green-100 rounded"
                src="https://s7ap1.scene7.com/is/image/incredibleindia/1-india-gate-delhi1-city-hero?qlt=82&ts=1726737112852"
                alt="Delhi"
              />
              <p className="mt-2 text-sm">War memorial, Delhi's pride, majestic arch, solemn tribute.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <Filters />
    </div>
  );
};

export default Card;
