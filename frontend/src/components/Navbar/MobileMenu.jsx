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
      closeMenu();
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
      className="fixed left-0 h-full w-3/4 bg-gray-200 border-t border-gray-200 py-4 overflow-y-auto z-50 transition-transform transform -translate-x-full animate-slide-in"
    >
      <NavLink
        to="/"
        className="text-gray-700 hover:text-black font-medium px-4 transition-colors duration-300"
        onClick={closeMenu}
      >
        Home
      </NavLink>

      {/* Services Dropdown */}
      <button
        onClick={toggleServices}
        className="flex items-center text-left text-gray-700 hover:text-black font-medium px-4 transition-colors duration-300"
      >
        <span className="text-lg">Services</span>
        <BiSolidRightArrowSquare
          className={`ml-2 text-lg transition-transform duration-300 ${
            isServicesOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      <MobileServicesDropdown
        isOpen={isServicesOpen}
        handleServiceClick={handleServiceClick}
      />

      <NavLink
        to="/about"
        className="text-gray-700 hover:text-black font-medium px-4 transition-colors duration-300"
        onClick={closeMenu}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className="text-gray-700 hover:text-black font-medium px-4 transition-colors duration-300"
        onClick={closeMenu}
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default MobileMenu;
