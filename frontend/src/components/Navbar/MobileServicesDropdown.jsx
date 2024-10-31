// MobileServicesDropdown.js
import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaMoneyBillWave, FaChartBar, FaSms, FaLightbulb } from 'react-icons/fa';

const MobileServicesDropdown = ({ isOpen, handleServiceClick }) => {
  if (!isOpen) return null;

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
    <div className="pl-2">
      <div className="grid grid-cols-1 gap-2">
        {services.map(({ path, label, icon }) => (
          <div
            key={path}
            onClick={(e) => handleServiceClick(path, e)}
            className="flex items-center space-x-2 p-2 pl-5 cursor-pointer rounded-md hover:bg-gray-100 text-gray-700 hover:text-black"
          >
            <div className="text-xl text-blue-500">{icon}</div>
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileServicesDropdown;
