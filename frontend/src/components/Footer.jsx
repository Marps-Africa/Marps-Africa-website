import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../public/images/logo/Marpslogowhite.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2">
          <img src={logo} className="h-20" />
          <p className="mt-2 text-gray-300">
            Our beautiful designs open the door to a realm of limitless possibilities, where imagination knows no bounds.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-2 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-[#37B6FF] transition">About Us</a></li>
              <li>
                <a href="/" className="hover:text-[#37B6FF] transition flex items-center space-x-2">
                  <span>Careers</span>
                  <span className="bg-[#37B6FF] text-white text-xs font-bold py-1 px-2 rounded-full">Hiring</span>
                </a>
              </li>
              <li><a href="/" className="hover:text-[#37B6FF] transition">Press</a></li>
              <li><a href="/" className="hover:text-[#37B6FF] transition">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Links */}
        <div className="flex flex-col items-start md:col-span-1">
          <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
          <p className="mt-4 text-gray-300">hello@company.com</p>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="/" className="hover:text-[#37B6FF]"><FaFacebook /></a>
            <a href="/" className="hover:text-[#37B6FF]"><FaTwitter /></a>
            <a href="/" className="hover:text-[#37B6FF]"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-4" />

      {/* Bottom Section */}
      <div className="bg-gray-900">
        <div className="text-center text-xs sm:text-sm py-4 px-6">
          <p className="text-gray-400 font-semibold">© 2024 MarpsAfrica. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-2">
            {["Privacy Policy", "Terms & Conditions", "Cookies Policy", "FAQ", "Support"].map((link) => (
              <NavLink
                key={link}
                to={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="hover:text-white text-[#37B6FF] text-xs sm:text-sm font-medium transition duration-300"
              >
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
