import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from 'react-icons/fa';
import ServicesDropdown from "./ServicesDropdown";

const DesktopMenu = ({ handleServiceClick }) => {
  const dropdownRef = useRef(null);

  return (
    <div className="flex items-center space-x-8 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 rounded-md shadow-lg text-white">
      <NavLink
        to="/"
        className="hover:text-yellow-400 font-semibold transition-all duration-300 hover:underline "
      >
        Home
      </NavLink>

      {/* Services Dropdown - Hover to display */}
      <div className="relative group" ref={dropdownRef}>
        <button className="flex items-center font-semibold transition-all duration-300 hover:text-yellow-400">
          Services
          <FaChevronDown className="ml-1 transform transition-transform duration-300 group-hover:rotate-180" />
        </button>
        
        {/* Display dropdown on hover */}
        <ServicesDropdown
          isOpen={true} // Always render but show based on hover
          handleServiceClick={handleServiceClick}
        />
      </div>

      <NavLink
        to="/about"
        className="hover:text-yellow-400 font-semibold transition-all duration-300 hover:underline"
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-yellow-400 font-semibold transition-all duration-300 hover:underline"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default DesktopMenu;
