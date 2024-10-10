import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import marpslogo from "../assets/marpslogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div
        className="w-full px-6 py-8 lg:px-12 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          background: "linear-gradient(135deg, #2d2f36, #1a1c22)",
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
        }}
      >
        {/* Logo & Intro Section */}
        <div className="footer-section text-center sm:text-left space-y-4">
          <img
            src={marpslogo}
            alt="Marps Logo"
            className="h-14 w-auto mx-auto sm:mx-0"
          />
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            Spice up your business with our cutting-edge solutions...
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-xl font-bold">
            <FaFacebookF className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" />
            <FaLinkedinIn className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Services & Products Section */}
        <div className="footer-section grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-yellow-400 text-lg sm:text-xl font-bold">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Software Development</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Training</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Digital Marketing</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">ICT Consultancy</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Mobile App Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-400 text-lg sm:text-xl font-bold">Company</h3>
            <ul className="flex flex-col space-y-2 text-gray-300 text-sm sm:text-base">
              <NavLink to="/about" className="hover:text-blue-500 cursor-pointer transition duration-300">About Us</NavLink>
              <NavLink to="/careers" className="hover:text-blue-500 cursor-pointer transition duration-300">Careers</NavLink>
              <NavLink to="/partners" className="hover:text-blue-500 cursor-pointer transition duration-300">Partners</NavLink>
              <NavLink to="/blogs" className="hover:text-blue-500 cursor-pointer transition duration-300">Blog</NavLink>
              <NavLink to="/contact" className="hover:text-blue-500 cursor-pointer transition duration-300">Contact</NavLink>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="footer-section text-center sm:text-left space-y-3">
          <h3 className="text-yellow-400 text-lg sm:text-xl font-bold">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Case Studies</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">News</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Events</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300">Webinars</li>
            </ul>
        </div>


        
      </div>

      <hr className="border-gray-600 my-0" />

      {/* Bottom Section */}
      <div className="bg-gray-800">
        <div className="text-center text-xs sm:text-sm py-4 px-6">
          <p className="text-gray-400 font-bold">© 2024 MarpsAfrica. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-2">
            <NavLink to="/privacy-policy" className="hover:text-white text-blue-500 text-xs sm:text-sm font-medium transition duration-300">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-conditions" className="hover:text-white text-blue-500 text-xs sm:text-sm font-medium transition duration-300">
              Terms & Conditions
            </NavLink>
            <NavLink to="/cookies-policy" className="hover:text-white text-blue-500 text-xs sm:text-sm font-medium transition duration-300">
              Cookies Policy
            </NavLink>
            <NavLink to="/faq" className="hover:text-white text-blue-500 text-xs sm:text-sm font-medium transition duration-300">
              FAQ
            </NavLink>
            <NavLink to="/support" className="hover:text-white text-blue-500 text-xs sm:text-sm font-medium transition duration-300">
              Support
            </NavLink>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
