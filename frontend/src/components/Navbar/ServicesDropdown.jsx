import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaMoneyBillWave, FaChartBar, FaSms, FaLightbulb } from 'react-icons/fa';

const ServicesDropdown = ({ handleServiceClick }) => {
  const services = [
    { path: "/services/software-development", label: "Software Development", icon: <FaLaptopCode /> },
    { path: "/services/mobile-app-development", label: "Mobile App Development", icon: <FaMobileAlt /> },
    { path: "/services/digital-marketing", label: "Digital Marketing", icon: <FaChartBar /> },
    { path: "/services/website-design", label: "Website Design", icon: <FaPalette /> },
    { path: "/services/bulk-sms", label: "Bulk SMS", icon: <FaSms /> },
    { path: "/services/payment-integration", label: "Payment Integration", icon: <FaMoneyBillWave /> },
    { path: "/services/market-research", label: "Market Research", icon: <FaLightbulb /> }
  ];

  return (
    <div className="absolute bg-white shadow-lg z-20 mt-2 rounded-lg p-4 w-64 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out">
      <div className="grid grid-cols-1 gap-4">
        {services.map(({ path, label, icon }) => (
          <div
            key={path}
            onClick={(e) => handleServiceClick(path, e)}
            className="flex items-center space-x-2 p-2 cursor-pointer rounded-md transition-all hover:text-primary-100 duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105"
          >
            <div className="text-xl text-blue-500">{icon}</div>
            <span className="font-medium text-gray-700 hover:text-primary-100">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;
