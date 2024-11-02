import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "/images/logo/Marpslogowhite.png";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-400">
      {/* Top Section */}
      <div className="container md:w-[80vw] gap-6 mx-auto grid md:grid-cols-4 my-10 md:my-14 place-items-center">
        {/* Logo and Description */}
        <div className="text-gray-300 col-span-1 justify-center">
          <div>
            <img src={logo} className="h-14" alt="Marps Logo" />
            <p className="text-gray-300">marpsafrica@gmail.com</p>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2 text-center">
          <h3 className="text-white font-semibold text-lg">Services</h3>
          <div className="md:grid lg:grid-cols-2 md:gap-4">
            <ul className="space-y-2 md:col-span-1">
              <li>
                <Link
                  to="/services/mobile-app-development"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/payment-integration"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Payment Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bulk-sms"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Bulk SMS
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 md:col-span-1">
              <li>
                <Link
                  to="/services/software-development"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/market-research"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Market Research
                </Link>
              </li>
              <li>
                <Link
                  to="/services/website-design"
                  className="hover:underline hover:text-primary-100  transition"
                >
                  Website Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Links */}
        <div className="text-center">
          <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
          <Link
            to="/contact"
            className="hover:underline hover:text-primary-100  transition "
          >
            Contact us
          </Link>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="/" className="hover:text-[#37B6FF]">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-[#37B6FF]">
              <FaTwitter />
            </a>
            <a href="/" className="hover:text-[#37B6FF]">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-[#37B6FF]">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-500 my-4" />

      {/* Bottom Section */}
      <div className="bg-[#222222]">
        <div className="text-center text-xs sm:text-sm py-4 px-6">
          <p className="text-gray-400 font-semibold">
            © 2024 MarpsAfrica. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-2">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Cookies Policy",
              "FAQ",
              "Support",
            ].map((link) => (
              <NavLink
                key={link}
                to={`/${link
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}`}
                className="hover:underline hover:text-primary-100  transition duration-300 text-primary-100  text-xs sm:text-sm font-medium"
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
