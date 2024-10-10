import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaShieldAlt, FaChartBar, FaSms, FaLightbulb, FaIndustry } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="h-[10vh] bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="logo.png" alt="Logo" />
            </div>

            <div className="hidden md:flex space-x-8 ml-10">
              <NavLink to="/" className="text-gray-700 hover:text-black font-medium" activeClassName="text-black">
                Home
              </NavLink>
              <div className="relative group">
                <NavLink to="/services" className="text-gray-700 hover:text-black font-medium">Services</NavLink>
                <div className="absolute hidden group-hover:block bg-white border shadow-lg mt-2 py-2 w-[600px]">
                  <ul className="grid grid-cols-2 gap-4 p-4">
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaLaptopCode className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Software Development</h3>
                        <p className="text-gray-500 text-sm">We plan, design and develop robust software.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaMobileAlt className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Mobile App Development</h3>
                        <p className="text-gray-500 text-sm">We develop cross-platform mobile applications.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-300 hover:bg-green-400">
                      <FaPalette className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Website Design</h3>
                        <p className="text-gray-500 text-sm">Aesthetically pleasing website designs.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaChartBar className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Digital Marketing</h3>
                        <p className="text-gray-500 text-sm">Premier provider of digital marketing.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaShieldAlt className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Cybersecurity</h3>
                        <p className="text-gray-500 text-sm">Secure your digital platforms.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaSms className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Bulk SMS</h3>
                        <p className="text-gray-500 text-sm">Quick and easy integration Bulk SMS service.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaLightbulb className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Research & Innovations</h3>
                        <p className="text-gray-500 text-sm">We help companies to conduct extensive research and innovations.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-2 bg-green-100 hover:bg-green-200">
                      <FaIndustry className="h-6 w-6 mr-2 text-green-700" />
                      <div>
                        <h3 className="font-bold text-black">Industry Training</h3>
                        <p className="text-gray-500 text-sm">Professional training on digital solutions.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <NavLink to="/resources" className="text-gray-700 hover:text-black font-medium" activeClassName="text-black">
                Resources
              </NavLink>
              <NavLink to="/portfolio" className="text-gray-700 hover:text-black font-medium" activeClassName="text-black">
                Portfolio
              </NavLink>
              <NavLink to="/blog" className="text-gray-700 hover:text-black font-medium" activeClassName="text-black">
                Blog
              </NavLink>
              <NavLink to="/contact" className="text-gray-700 hover:text-black font-medium" activeClassName="text-black">
                Contact
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* <a
              href="tel:+254114266430"
              className="hidden md:inline-block border border-black text-black px-3 py-1 rounded hover:bg-gray-100"
            >
              Call: +254 114 266 430
            </a> */}
            <NavLink
              to="/appointment"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Book Appointment
            </NavLink>
          </div>

          <div className="md:hidden">
            <button type="button" className="text-black focus:outline-none">
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
    </nav>
  );
};

export default Navbar;
