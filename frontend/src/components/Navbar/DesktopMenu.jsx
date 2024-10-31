import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from 'react-icons/fa';
import ServicesDropdown from "./ServicesDropdown";

const DesktopMenu = ({ isServicesOpen, toggleServices, handleServiceClick }) => {
  const dropdownRef = useRef(null);

  // Function to close the dropdown when clicking outside
  const closeDropdown = () => {
    if (isServicesOpen) toggleServices(); // Toggle to close
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <div className="flex space-x-8" ref={dropdownRef}>
      <NavLink to="/" className="text-gray-700 hover:text-black font-medium">
        Home
      </NavLink>

      {/* Services Dropdown */}
      <div className="relative" onClick={toggleServices}>
        <button className="flex items-center text-gray-700 hover:text-black font-medium">
          Services
          <FaChevronDown className={`ml-1 ${isServicesOpen ? "rotate-180" : ""}`} />
        </button>
        <ServicesDropdown
          isOpen={isServicesOpen}
          handleServiceClick={handleServiceClick}
          closeDropdown={closeDropdown} // Pass close function
        />
      </div>

      <NavLink to="/about" className="text-gray-700 hover:text-black font-medium">
        About Us
      </NavLink>
      <NavLink to="/contact" className="text-gray-700 hover:text-black font-medium">
        Contact Us
      </NavLink>
    </div>
  );
};

export default DesktopMenu;
