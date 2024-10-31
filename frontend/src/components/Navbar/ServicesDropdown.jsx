import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaMoneyBillWave,
  FaChartBar,
  FaSms,
  FaLightbulb,
} from "react-icons/fa";

const ServicesDropdown = ({ handleServiceClick }) => {
  const services = [
    {
      path: "/services/software-development",
      label: "Software Development",
      description: "Custom software solutions for all needs",
      icon: <FaLaptopCode />,
    },
    {
      path: "/services/mobile-app-development",
      label: "Mobile App Development",
      description: "Apps for iOS and Android",
      icon: <FaMobileAlt />,
    },
    {
      path: "/services/digital-marketing",
      label: "Digital Marketing",
      description: "Boost your online presence",
      icon: <FaChartBar />,
    },
    {
      path: "/services/website-design",
      label: "Website Design",
      description: "Creative and responsive designs",
      icon: <FaPalette />,
    },
    {
      path: "/services/bulk-sms",
      label: "Bulk SMS",
      description: "Mass messaging solutions",
      icon: <FaSms />,
    },
    {
      path: "/services/payment-integration",
      label: "Payment Integration",
      description: "Secure payment systems",
      icon: <FaMoneyBillWave />,
    },
    {
      path: "/services/market-research",
      label: "Market Research",
      description: "Insights for strategic decisions",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <div className="absolute bg-white shadow-lg z-20 mt-2 rounded-lg p-6 w-80 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out">
      <div className="grid grid-cols-1 gap-4">
        {services.map(({ path, label, description, icon }) => (
          <div
            key={path}
            onClick={(e) => handleServiceClick(path, e)}
            className="flex items-start space-x-3 p-3 cursor-pointer rounded-lg transition-all hover:text-blue-600 duration-300 ease-in-out transform hover:bg-blue-50 hover:scale-105"
          >
            <div className="text-2xl text-blue-500">{icon}</div>
            <div>
              <span className="font-semibold text-gray-800">{label}</span>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;
