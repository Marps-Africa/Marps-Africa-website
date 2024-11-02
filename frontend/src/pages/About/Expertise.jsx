import React from "react";
import { FaMobileAlt, FaCloud, FaLock, FaNetworkWired } from "react-icons/fa";

const Expertise = () => {
  const expertiseItems = [
    { icon: <FaMobileAlt className="text-white text-2xl mr-3" />, title: "Mobile Solutions", percentage: "97%" },
    { icon: <FaCloud className="text-white text-2xl mr-3" />, title: "Cloud Computing Services", percentage: "95%" },
    { icon: <FaLock className="text-white text-2xl mr-3" />, title: "IT Security", percentage: "93%" },
    { icon: <FaNetworkWired className="text-white text-2xl mr-3" />, title: "Network Design & Support", percentage: "96%" },
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
        <span className="relative inline-block">
          Our Expertise
          <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-[#37B6FF]"></span>
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertiseItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">{item.title}</h3>
            <p className="text-xs md:text-sm lg:text-base font-thin text-gray-600">{item.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
