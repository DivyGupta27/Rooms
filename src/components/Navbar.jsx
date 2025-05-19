import { useEffect, useState } from 'react';
import { FiSearch, FiUser, FiMapPin, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineHomeModern } from 'react-icons/hi2';
import { MdOutlineVilla } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const NavbarV2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [heart, setHeart] = useState('gray');
  const navigate = useNavigate();

  useEffect(() => {
    // This effect was not doing anything meaningful, so removed
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Nav */}
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl outline-none font-bold text-rose-500">
            <span className="bg-rose-500 text-white p-1 rounded mr-2">
              <MdOutlineVilla />
            </span>
            Make Your Trip
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/hotels"
              onClick={() => setActiveCategory('hotels')}
              className={`flex items-center px-3 py-2 rounded-lg transition ${
                activeCategory === 'hotels'
                  ? 'bg-rose-50 text-rose-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <HiOutlineHomeModern className="mr-2" />
              Hotels
            </Link>
            <Link
              to="/workspaces"
              onClick={() => setActiveCategory('workspaces')}
              className={`flex items-center px-3 py-2 rounded-lg transition ${
                activeCategory === 'workspaces'
                  ? 'bg-rose-50 text-rose-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <HiOutlineBuildingOffice2 className="mr-2" />
              Workspaces
            </Link>
            <Link
              to="/destinations"
              onClick={() => setActiveCategory('destinations')}
              className={`flex items-center px-3 py-2 rounded-lg transition ${
                activeCategory === 'destinations'
                  ? 'bg-rose-50 text-rose-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <FiMapPin className="mr-2" />
              Destinations
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiSearch className="text-gray-600" />
            </button>
            <button
              onClick={() => setHeart('red')}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {heart === 'red' ? (
                <FaHeart className="text-rose-500" />
              ) : (
                <FiHeart className="text-gray-600" />
              )}
            </button>
            <Link to='login' className="hidden md:flex items-center px-4 py-2 rounded-full bg-rose-600 text-white hover:bg-rose-700">
              <FiUser className="mr-2" />
              Login
            </Link>
            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Categories (Desktop Only) */}
        <div className="hidden md:flex justify-center space-x-2 pb-3">
          {['All', 'Luxury', 'Budget', 'Business', 'Resorts', 'Vacation'].map(
            (item) => (
              <button
                key={item}
                className="px-4 py-1 text-sm rounded-full hover:bg-gray-100"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 border-t">
            <div className="flex flex-col py-2 space-y-1">
              <Link
                to="/hotels"
                onClick={() => {
                  setActiveCategory('hotels');
                  setMobileOpen(false);
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activeCategory === 'hotels' ? 'bg-rose-50 text-rose-600' : ''
                }`}
              >
                <HiOutlineHomeModern className="mr-3" />
                Hotels
              </Link>
              <Link
                to="/workspaces"
                onClick={() => {
                  setActiveCategory('workspaces');
                  setMobileOpen(false);
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activeCategory === 'workspaces'
                    ? 'bg-rose-50 text-rose-600'
                    : ''
                }`}
              >
                <HiOutlineBuildingOffice2 className="mr-3" />
                Workspaces
              </Link>
              <Link
                to="/destinations"
                onClick={() => {
                  setActiveCategory('destinations');
                  setMobileOpen(false);
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activeCategory === 'destinations'
                    ? 'bg-rose-50 text-rose-600'
                    : ''
                }`}
              >
                <FiMapPin className="mr-3" />
                Destinations
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2 px-4 mt-4">
              {['Luxury', 'Budget', 'Business', 'Resorts'].map((item) => (
                <button
                  key={item}
                  className="px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 mt-4 rounded-lg bg-rose-600 text-white hover:bg-rose-700">
              <FiUser />
              <span>Sign In</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarV2;
