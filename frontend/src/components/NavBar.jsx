import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

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
                src="{marpslogo}"
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
                <div className="absolute hidden group-hover:block bg-white border shadow-lg mt-2 py-2 w-[450px]">
                  <ul className="grid grid-cols-1 gap-4 p-4">
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaLaptopCode className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Software Development</h3>
                        <p className="text-gray-500 text-sm">Plan, design, and develop robust software.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaMobileAlt className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Mobile App Development</h3>
                        <p className="text-gray-500 text-sm">Cross-platform mobile applications.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-300 hover:bg-green-400">
                      <FaPalette className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Website Design</h3>
                        <p className="text-gray-500 text-sm">Aesthetic web design solutions.</p>
                      </div>
                    </li>
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
              to="/appoitment"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Book Appointment
            </NavLink>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Open Mobile Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 bg-white border-t border-gray-200 py-4">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-black font-medium"
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-700 hover:text-black font-medium"
                onClick={toggleMobileMenu}
              >
                Services
              </NavLink>
              <NavLink
                to="/resources"
                className="text-gray-700 hover:text-black font-medium"
                onClick={toggleMobileMenu}
              >
                Resources
              </NavLink>
              <NavLink
                to="/portfolio"
                className="text-gray-700 hover:text-black font-medium"
                onClick={toggleMobileMenu}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                className="text-gray-700 hover:text-black font-medium"
                onClick={toggleMobileMenu}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-black font-medium"
                onClick={toggleMobileMenu}
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
