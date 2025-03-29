import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "All Podcasts", path: "/all-podcasts" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-green-100 via-white to-green-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo (Always Visible) */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9043/9043096.png"
            alt="Logo"
            className="h-9 w-9"
          />
          <Link
            to="/"
            className="text-3xl font-extrabold text-green-900 tracking-wide"
          >
            ListenUp
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-gray-800 font-medium hover:text-green-800 transition-all duration-300 hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login & Signup (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-gray-700 hover:text-green-700 font-medium transition duration-300"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300 shadow-md"
          >
            Get Started Free
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Below Logo) */}
      <div
          className={`fixed top-16 left-0 w-full h-full bg-white flex flex-col items-center text-xl font-medium space-y-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden pt-5`}
      >
         {navLinks.map((item, i) => ( 
      <Link
          key={i}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="text-gray-800 hover:text-green-700 transition duration-300"
      >
         {item.name}
      </Link>
      ))}

      <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="text-gray-700 hover:text-green-700 transition duration-300"
      >
          Log In
      </Link>

      <Link
          to="/signup"
          onClick={() => setIsOpen(false)}
          className="px-5 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300 shadow-md"
      >
           Get Started Free
      </Link>
      </div>

    </nav>
  );
};

export default Navbar;
