import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import marpslogo from "../assets/marpslogo.png";

import { FaLaptopCode, FaMobileAlt, FaPalette, FaMoneyBillWave, FaChartBar, FaSms, FaLightbulb, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceClick = (path, e) => {
    e.preventDefault();
    setServicesOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 right-0 w-full bg-white border-b border-gray-200 z-50">
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
              <div className="relative group" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-700 hover:text-black font-medium focus:outline-none"
                >
                  Services
                  <FaChevronDown className={`ml-1 transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                <div className="fixed left-0 right-0 bg-white shadow-lg z-20 mt-2">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-blue-600 pb-2">Custom Software Solutions</h3>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/software-development", e)}
                        >
                          <div className="">
                            <FaLaptopCode className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Software Development</h3>
                            <p className="text-sm text-gray-600">Plan, design, and develop robust software solutions.</p>
                          </div>
                        </NavLink>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/mobile-app-development", e)}
                        >
                          <div className="">
                            <FaMobileAlt className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Mobile App Development</h3>
                            <p className="text-sm text-gray-600">Create cross-platform mobile applications.</p>
                          </div>
                        </NavLink>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-blue-600 pb-2">Web Services</h3>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/digital-marketing", e)}
                        >
                          <div className="">
                            <FaChartBar className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Digital Marketing</h3>
                            <p className="text-sm text-gray-600">Comprehensive digital marketing strategies and execution.</p>
                          </div>
                        </NavLink>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/website-design", e)}
                        >
                          <div className="">
                            <FaPalette className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Website Design</h3>
                            <p className="text-sm text-gray-600">Aesthetically pleasing and functional website designs.</p>
                          </div>
                        </NavLink>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-blue-600 pb-2">Special Services</h3>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/bulk-sms", e)}
                        >
                          <div className="">
                            <FaSms className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Bulk SMS</h3>
                            <p className="text-sm text-gray-600">Quick and easy integration Bulk SMS service tailored to your business needs.</p>
                          </div>
                        </NavLink>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/payment-integration", e)}
                        >
                          <div className="">
                            <FaMoneyBillWave className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Payment Integration</h3>
                            <p className="text-sm text-gray-600">Secure payment integrations for multiple modes of payment.</p>
                          </div>
                        </NavLink>
                        <NavLink
                          className="flex items-start px-4 py-2 text-sm rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
                          onClick={(e) => handleServiceClick("/services/market-research", e)}
                        >
                          <div className="">
                            <FaLightbulb className="h-6 w-6 mr-3 text-blue-600 mt-1" />
                          </div>
                          <div>
                            <h3 className="font-medium hover:underline">Research & Innovation</h3>
                            <p className="text-sm text-gray-600">Cutting-edge research and innovative solutions for your business.</p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                )}
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

          {/* Call to Action Button */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/appoitment"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Book Appointment
            </NavLink>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} aria-label="Open Mobile Menu" aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
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
                className="text-gray-700 hover:text-black font-medium px-4"
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <button
                onClick={() => setServicesOpen(!isServicesOpen)}
                className="text-left text-gray-700 hover:text-black font-medium flex items-center justify-between px-4"
              >
                Services
                <FaChevronDown className={`ml-2 transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-8 space-y-2">
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/software-development", e);
                      toggleMobileMenu();
                    }}
                  >
                    Software Development
                  </NavLink>
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/mobile-app-development", e);
                      toggleMobileMenu();
                    }}
                  >
                    Mobile App Development
                  </NavLink>
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/digital-marketing", e);
                      toggleMobileMenu();
                    }}
                  >
                    Digital Marketing
                  </NavLink>
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/website-design", e);
                      toggleMobileMenu();
                    }}
                  >
                    Website Design
                  </NavLink>
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/bulk-sms", e);
                      toggleMobileMenu();
                    }}
                  >
                    Bulk SMS
                  </NavLink>
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/payment-integration", e);
                      toggleMobileMenu();
                    }}
                  >
                    Payment Integration
                  </NavLink>
                  <NavLink
                    className="block text-gray-600 hover:text-black py-2"
                    onClick={(e) => {
                      handleServiceClick("/services/research-innovation", e);
                      toggleMobileMenu();
                    }}
                  >
                    Research & Innovation
                  </NavLink>
                </div>
              )}
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-black font-medium px-4"
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/portfolio"
                className="text-gray-700 hover:text-black font-medium px-4"
                onClick={toggleMobileMenu}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blogs"
                className="text-gray-700 hover:text-black font-medium px-4"
                onClick={toggleMobileMenu}
              >
                Our Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-black font-medium px-4"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
