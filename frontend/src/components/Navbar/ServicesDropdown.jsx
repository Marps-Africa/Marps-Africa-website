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
import { Link, NavLink } from "react-router-dom";
import ipad from "/images/homeimages/ipad.webp";

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
    <div className="fixed left-0 right-0 bg-white shadow-lg z-20 mt-2  font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl  font-openSans font-bold pb-2 ">
              Custom Software Solutions
            </h3>
            {services.slice(0, 2).map((service) => (
              <NavLink
                key={service.path}
                className="flex items-start h-20 px-4 py-2 text-sm  text-gray-700  hover:bg-slate-100"
                onClick={(e) => handleServiceClick(service.path, e)}
              >
                <div className="mr-3 text-2xl text-primary-100 ">
                  {service.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-openSans font-semibold text-lg hover:underline ">
                    {service.label}
                  </h3>
                  <p className="text-md font-openSans">{service.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-openSans font-semibold pb-2">Web Services</h3>
            {services.slice(2, 4).map((service) => (
              <NavLink
                key={service.path}
                className="flex items-start h-20 px-4 py-2 text-sm  text-gray-700  hover:bg-slate-100"
                onClick={(e) => handleServiceClick(service.path, e)}
              >
                <div className="mr-3 text-2xl text-primary-100 ">
                  {service.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-openSans font-semibold text-lg hover:underline">
                    {service.label}
                  </h3>
                  <p className="text-md">{service.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-openSans font-semibold pb-2">Special Services</h3>
            {services.slice(4).map((service) => (
              <NavLink
                key={service.path}
                className="flex items-start h-20 px-4 py-2 text-sm  text-gray-700  hover:bg-slate-100"
                onClick={(e) => handleServiceClick(service.path, e)}
              >
                <div className="mr-3 text-2xl text-primary-100 ">
                  {service.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-openSans font-semibold text-lg hover:underline">
                    {service.label}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="border-l border-l-gray-100 p-4 ">
            <div className="flex flex-col justify-center">
              <img src={ipad} alt="" />
              <h5 className="text-center font-openSans font-semibold">Our product hits </h5>
              <p className="text-center">Empowering you with premier solutions and support</p>

              <button className="flex justify-center">
                <Link
                  to="/appoitment"
                  className="bg-primary-100  hover:bg-primary-200 text-white py-2 px-5 pt-2 rounded-2xl "
                >
                  {" "}
                  Book Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
