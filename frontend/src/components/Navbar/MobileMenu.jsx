// MobileMenu.js
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import MobileServicesDropdown from "./MobileServicesDropdown";

const MobileMenu = ({
  isServicesOpen,
  toggleServices,
  handleServiceClick,
  closeMenu,
}) => {
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu(); // Function to close the menu
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed flex space-y-5 flex-col left-0 h-full w-3/4 bg-gray-200 border-t border-gray-200 py-4 overflow-y-auto z-50"
    >
      <NavLink
        to="/"
        className="text-gray-700 hover:text-black font-medium px-4"
        onClick={closeMenu} // Close menu on click
      >
        Home
      </NavLink>

      {/* Services Dropdown */}
        <button
            onClick={toggleServices}
            className="flex items-center text-left text-gray-700 hover:text-black font-medium px-4"
            >
            <span className="text-lg">Services</span>
            <BiSolidRightArrowSquare 
                className={`ml-2 text-lg ${isServicesOpen ? "rotate-90" : ""}`} 
            />
        </button>
      <MobileServicesDropdown
        isOpen={isServicesOpen}
        handleServiceClick={handleServiceClick}
      />

      <NavLink
        to="/about"
        className="text-gray-700 hover:text-black font-medium px-4"
        onClick={closeMenu} // Close menu on click
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className="text-gray-700 hover:text-black font-medium px-4"
        onClick={closeMenu} // Close menu on click
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default MobileMenu;
