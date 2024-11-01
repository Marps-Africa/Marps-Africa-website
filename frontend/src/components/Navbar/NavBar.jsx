// Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import marpslogo from "../../../public/images/logo/marpslogoblack.png";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const handleServiceClick = (path, e) => {
    e.preventDefault();
    navigate(path);
    closeMenu(); 
  };

  return (
    <nav className="fixed top-0 right-0 w-full bg-white border-b border-gray-300 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-center items-center">
            <Link to="/" className="flex items-center">
              <img className="h-12 w-auto" src={marpslogo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <DesktopMenu
              isServicesOpen={isServicesOpen}
              toggleServices={() => setServicesOpen(!isServicesOpen)}
              handleServiceClick={handleServiceClick}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-700"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
