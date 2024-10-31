import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from 'react-icons/fa';
import ServicesDropdown from "./ServicesDropdown";

const DesktopMenu = ({ isServicesOpen, toggleServices, handleServiceClick }) => {
  return (
    <div className="flex space-x-8">
      <NavLink to="/" className="text-gray-700 hover:text-black font-medium">
        Home
      </NavLink>

      {/* Services Dropdown */}
      <div className="relative" onClick={toggleServices}>
        <button className="flex items-center text-gray-700 hover:text-black font-medium">
          Services
          <FaChevronDown className={`ml-1 ${isServicesOpen ? "rotate-180" : ""}`} />
        </button>
        <ServicesDropdown isOpen={isServicesOpen} handleServiceClick={handleServiceClick} />
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
