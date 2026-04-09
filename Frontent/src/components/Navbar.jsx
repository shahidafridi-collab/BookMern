import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useAuth } from '../authProvider/authProvider.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [authUser, setAuthUser] = useAuth(); // State to hold authenticated user info


  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");  
    if (storedUser && storedUser !== 'undefined') {
      setAuthUser(JSON.parse(storedUser));
    } else {
      setAuthUser(undefined);
    } 
  }, [setAuthUser]);

  const onSubmit = () => { 
    if (authUser) {
      localStorage.removeItem("user");
      setAuthUser(undefined);
      alert("Logout Successfully");
    } else {
      document.getElementById('my_modal_3').showModal();
    } 
  };
  


  return (
    <nav className="bg-linear-to-r from-slate-900 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:from-orange-500 hover:to-red-600 transition-all duration-300">
              BookStore
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="/course" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium">
              Course
            </a>
            <a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium">
              Contact
            </a>
            <a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium">
              About
            </a>
          </div>

          {/* Desktop Search & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 pr-4 rounded-lg bg-slate-700 text-gray-200 placeholder-gray-400 border border-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
            
            <button className="bg-linear-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            onClick={onSubmit}>
              {authUser ? 'Logout' : 'Login'}
              {!authUser && (
                <Login />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2 mb-2">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/course"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Course
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              
              {/* Mobile Search */}
              <div className="pt-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-lg bg-slate-700 text-gray-200 placeholder-gray-400 border border-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </form>
              </div>
              
              {/* Mobile Login Button */}
              <button className="w-full mt-4 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              onClick={()=>document.getElementById('my_modal_3').showModal()}>
                Login
                <Login/>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;