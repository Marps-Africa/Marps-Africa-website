import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from 'react-icons/fa';
import ServicesDropdown from "./ServicesDropdown";

const DesktopMenu = ({ handleServiceClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-8 px-6 py-4 text-black w-full">
        <NavLink
          to="/"
          className="hover:text-primary-100 font-semibold transition-all duration-300 hover:underline"
        >
          Home
        </NavLink>

        {/* Services Dropdown - Hover to display */}
        <div 
          className="relative group" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <button className="flex items-center font-semibold transition-all duration-300 hover:text-primary-100">
            Services
            <FaChevronDown className="ml-1 transform transition-transform duration-300" />
          </button>

          {/* Display dropdown based on hover state */}
          {isDropdownOpen && (
            <ServicesDropdown
              handleServiceClick={handleServiceClick}
            />
          )}
        </div>

        <NavLink
          to="/about"
          className="hover:text-primary-100 font-semibold transition-all duration-300 hover:underline"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-primary-100 font-semibold transition-all duration-300 hover:underline"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default DesktopMenu;
