import { useContext, useState } from 'react';
import { FiSearch, FiUser, FiMapPin, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineHomeModern } from 'react-icons/hi2';
import { MdOutlineVilla, MdOutlineDashboard } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import RoomContext from '../contextApi/RoomContext.js';

const NavbarV2 = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { setFind } = useContext(RoomContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [heart, setHeart] = useState('gray');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    closeMobileMenu();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Nav */}
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl md:text-2xl outline-none font-bold text-rose-500"
            onClick={closeMobileMenu}
          >
            <span className="bg-rose-500 text-white p-1 rounded mr-2">
              <MdOutlineVilla />
            </span>
            Make Your Trip
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            <Link
              to="/hotels"
              onClick={() => setActiveCategory('hotels')}
              className={`flex items-center hover:bg-gray-100 px-3 py-2 rounded-lg transition ${activeCategory === 'hotels' ? 'bg-rose-50 text-rose-600' : ''
                }`}
            >
              <HiOutlineHomeModern className="mr-2" />
              Hotels
            </Link>
            <Link
              to="/workspaces"
              onClick={() => setActiveCategory('workspaces')}
              className={`flex items-center px-3 py-2 rounded-lg transition ${activeCategory === 'workspaces' ? 'bg-rose-50 text-rose-600' : 'hover:bg-gray-100'
                }`}
            >
              <HiOutlineBuildingOffice2 className="mr-2" />
              Workspaces
            </Link>
            <Link
              to="/destinations"
              onClick={() => setActiveCategory('destinations')}
              className={`flex items-center hover:bg-gray-100 px-3 py-2 rounded-lg transition ${activeCategory === 'destinations' ? 'bg-rose-50 text-rose-600' : ''
                }`}
            >
              <FiMapPin className="mr-2" />
              Destinations
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Bar - Hidden on small mobile, shown on larger screens */}
            <div className="hidden sm:flex py-1 bg-gray-200 rounded-full px-3 hover:bg-gray-300 items-center">
              <div className='flex items-center'>
                <input
                  type="text"
                  placeholder='Search city...'
                  className='outline-none bg-transparent w-20 md:w-32 text-sm'
                  onChange={(e) => setFind(e.target.value)}
                />
                <FiSearch className="text-gray-600 ml-1" />
              </div>
            </div>

            {/* Mobile Search Button */}
            {showMobileSearch ? (
              <div className="absolute top-16 left-0 right-0 bg-white px-4 py-2 shadow-md md:hidden">
                <div className="flex items-center bg-gray-200 rounded-full px-3 py-1">
                  <input
                    type="text"
                    placeholder="Search city..."
                    className="outline-none bg-transparent w-full text-sm"
                    onChange={(e) => setFind(e.target.value)}
                  />
                  <FiSearch className="text-gray-600 ml-1" />
                  <button
                    onClick={() => setShowMobileSearch(false)}
                    className="ml-2 text-gray-500"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="sm:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setShowMobileSearch(true)}
              >
                <FiSearch className="text-gray-600" />
              </button>
            )}

            <button
              onClick={() => navigate('/userdashboard')}
              title='userDashboard'
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <MdOutlineDashboard />
            </button>

            <button
              onClick={() => setHeart(heart === 'red' ? 'gray' : 'red')}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {heart === 'red' ? (
                <FaHeart className="text-rose-500" />
              ) : (
                <FiHeart className="text-gray-600" />
              )}
            </button>

            {localStorage.getItem('token') ? (
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center px-3 md:px-4 py-2 rounded-full bg-rose-600 text-white hover:bg-rose-700 text-sm md:text-base"
              >
                <FiUser className="mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to='/login'
                className="hidden md:flex items-center px-3 md:px-4 py-2 rounded-full bg-rose-600 text-white hover:bg-rose-700 text-sm md:text-base"
              >
                <FiUser className="mr-2" />
                Login
              </Link>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Categories (Desktop Only) */}
        <div className="hidden md:flex justify-center space-x-1 md:space-x-2 pb-3 overflow-x-auto">
          {['All', 'Luxury', 'Budget', 'Business', 'Resorts', 'Vacation'].map((category) => (
            <NavLink
              key={category}
              to={`/${category.toLowerCase() === 'all' ? '' : category.toLowerCase()}`}
              className={({ isActive }) =>
                `px-3 md:px-4 py-1 text-xs md:text-sm rounded-full hover:bg-gray-100 whitespace-nowrap ${isActive ? 'bg-rose-50 text-rose-600' : ''
                }`
              }
            >
              {category}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 border-t">
            <div className="flex flex-col py-2 space-y-1">
              <Link
                to="/hotels"
                onClick={() => {
                  setActiveCategory('hotels');
                  closeMobileMenu();
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${activeCategory === 'hotels' ? 'bg-rose-50 text-rose-600' : ''
                  }`}
              >
                <HiOutlineHomeModern className="mr-3" />
                Hotels
              </Link>
              <Link
                to="/workspaces"
                onClick={() => {
                  setActiveCategory('workspaces');
                  closeMobileMenu();
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${activeCategory === 'workspaces' ? 'bg-rose-50 text-rose-600' : ''
                  }`}
              >
                <HiOutlineBuildingOffice2 className="mr-3" />
                Workspaces
              </Link>
              <Link
                to="/destinations"
                onClick={() => {
                  setActiveCategory('destinations');
                  closeMobileMenu();
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${activeCategory === 'destinations' ? 'bg-rose-50 text-rose-600' : ''
                  }`}
              >
                <FiMapPin className="mr-3" />
                Destinations
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2 px-4 mt-4">
              {['Luxury', 'Budget', 'Business', 'Resorts', 'Vacation'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className="px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 text-center"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="px-4 mt-4">
              {localStorage.getItem('token') ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-rose-600 text-white hover:bg-rose-700"
                >
                  <FiUser />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-rose-600 text-white hover:bg-rose-700"
                >
                  <FiUser />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarV2;