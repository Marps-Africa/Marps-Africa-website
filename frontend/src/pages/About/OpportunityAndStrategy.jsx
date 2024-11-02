import React from "react";
import { FaBuilding, FaDollarSign, FaHandHoldingUsd } from "react-icons/fa";

const OpportunityAndStrategy = () => {
  const clientele = [
    { icon: <FaBuilding className="text-2xl md:text-3xl lg:text-4xl mr-3" />, text: "Banks" },
    { icon: <FaDollarSign className="text-2xl md:text-3xl lg:text-4xl mr-3" />, text: "SACCOs" },
    { icon: <FaHandHoldingUsd className="text-2xl md:text-3xl lg:text-4xl mr-3" />, text: "Finance firms" },
  ];

  return (
    <div className="bg-gray-100 py-10 md:py-16 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 relative inline-block">
          <span className="relative inline-block">
            Opportunity and Strategy
            <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-primary-100"></span>
          </span>
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
          Interactive communication enhances the building and improving of Customer Service by also involving, recognizing and linking all business processes—including databases, employees, and client communication—into one corporate information system which enables better servicing of clients with minimal human involvement.
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
          We know our clients' brands inside and out. This assures them that they are in safe, objective hands.
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">Our clientele includes:</p>
        <div className="flex flex-col gap-4 mt-4">
          {clientele.map((item, index) => (
            <div key={index} className="flex items-center text-gray-600">
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunityAndStrategy;
