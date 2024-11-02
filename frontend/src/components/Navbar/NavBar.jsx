// Import necessary libraries and components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import marpslogo from "/images/logo/marpslogoblack.png"; 
import DesktopMenu from "./DesktopMenu"; 
import MobileMenu from "./MobileMenu"; 

const Navbar = () => {
  // State for controlling mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for controlling visibility of services dropdown
  const [isServicesOpen, setServicesOpen] = useState(false);

  // Provides a function to navigate programmatically between routes
  const navigate = useNavigate();

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Closes both mobile and services menus
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  // Handles click events on service links, navigating to the specified path
  // and closing all open menus
  const handleServiceClick = (path, e) => {
    e.preventDefault(); 
    navigate(path); 
    closeMenu(); 
  };

  return (
    <nav className="fixed top-0 right-0 w-full bg-white border-b border-gray-300 z-50 h-[12vh]">
      {/* Container for nav content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[12vh] ">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-12 w-auto" src={marpslogo} alt="Logo" />
            </Link>
          </div>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-end ">
            <DesktopMenu
              isServicesOpen={isServicesOpen}
              toggleServices={() => setServicesOpen(!isServicesOpen)}
              handleServiceClick={handleServiceClick}
            />
          </div>

          {/* Mobile menu button (only visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-700"
            >
              {/* Toggle between icons based on the state of isMobileMenuOpen */}
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (renders only if isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <MobileMenu
          isServicesOpen={isServicesOpen}
          toggleServices={() => setServicesOpen(!isServicesOpen)}
          handleServiceClick={handleServiceClick}
          closeMenu={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
