import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ServicesDropdown from "./ServicesDropdown";

const DesktopMenu = ({ handleServiceClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay before closing the dropdown
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-8 px-6 font-poppins  text-black w-full">
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
        >
          <button className="flex items-center font-semibold  transition-all duration-300 hover:text-">
            Services
            <FaChevronDown className="ml-1 transform transition-transform duration-300" />
          </button>

          {/* Display dropdown based on hover state */}
          {isDropdownOpen && (
            <ServicesDropdown
              handleServiceClick={handleServiceClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
