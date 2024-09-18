import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import marpslogo from "../assets/marpslogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 w-full h-[10vh] bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-28 w-auto"
                src={marpslogo}
                alt="Logo"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 ml-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${
                    isActive ? "text-black" : ""
                  }`
                }
              >
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative group">
                <NavLink
                  to="/services"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  Services
                </NavLink>
                <div className="absolute hidden group-hover:block bg-white border shadow-lg mt-2 py-2 w-[600px]">
                  <ul className="grid grid-cols-2 gap-4 p-4">
                    {/* Services list */}
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaLaptopCode className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">
                          Software Development
                        </h3>
                        <p className="text-gray-500 text-sm">
                          We plan, design, and develop robust software.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaMobileAlt className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">
                          Mobile App Development
                        </h3>
                        <p className="text-gray-500 text-sm">
                          We develop cross-platform mobile applications.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-300 hover:bg-green-400">
                      <FaPalette className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Website Design</h3>
                        <p className="text-gray-500 text-sm">
                          Aesthetically pleasing website designs.
                        </p>
                      </div>
                    </li>
                    {/* More services... */}
                  </ul>
                </div>
              </div>

              {/* Other links */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${
                    isActive ? "text-black" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${
                    isActive ? "text-black" : ""
                  }`
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${
                    isActive ? "text-black" : ""
                  }`
                }
              >
                Our Blogs
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${
                    isActive ? "text-black" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Call to Action & Mobile Button */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/appointment"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Book Appointment
            </NavLink>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} aria-label="Open Mobile Menu">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-black font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-700 hover:text-black font-medium"
              >
                Services
              </NavLink>
              <NavLink
                to="/resources"
                className="text-gray-700 hover:text-black font-medium"
              >
                Resources
              </NavLink>
              <NavLink
                to="/portfolio"
                className="text-gray-700 hover:text-black font-medium"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blogs"
                className="text-gray-700 hover:text-black font-medium"
              >
                Our Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-black font-medium"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
