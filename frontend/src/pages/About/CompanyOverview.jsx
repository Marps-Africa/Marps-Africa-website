import React from "react";
import { FaMobileAlt, FaCloud, FaShieldAlt, FaCode, FaWifi, FaLightbulb } from "react-icons/fa";

const CompanyOverview = () => {
  const services = [
    {
      icon: <FaMobileAlt className="text-white text-2xl" />,
      title: "Mobile Solutions",
      description: "Take advantage of the various online services that can be available to you on the go.",
    },
    {
      icon: <FaCloud className="text-white text-2xl" />,
      title: "Cloud Services",
      description: "We have partnered with Amazon to bring you the best cloud-based quality services.",
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: "IT Security",
      description: "We offer design and build services for you from initial sketches to the final construction.",
    },
    {
      icon: <FaCode className="text-white text-2xl" />,
      title: "Software Solutions",
      description: "We are a dynamic niche I.T. company that has been helping visionary financial institutions with security support.",
    },
    {
      icon: <FaWifi className="text-white text-2xl" />,
      title: "Networks & Communications",
      description: "The ConsultingWP firm scored highest for vacation policy, hours in the office, and overall satisfaction.",
    },
    {
      icon: <FaLightbulb className="text-white text-2xl" />,
      title: "Experience",
      description: "Engage with consumers and inspire the media – we ensure brands are seen and heard in all the right places.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 md:py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
        <span className="relative inline-block">
          About MarpsAfrica Solutions
          <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-[#37B6FF]"></span>
        </span>
      </h2>
      <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed text-center mb-6 md:mb-8 font-thin">
        MarpsAfrica Solutions is an innovative IT service provider, delivering hosted online applications and content. We adapt to the evolving IT landscape driven by mobile, internet, and globalization, offering unique CSP technology that enhances customer competitiveness.
      </p>
      <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-thin">
        We foster long-term relationships with customers in specific industries, providing integrated packages that enhance mobile service delivery, boost business efficiency, and enable personalized customer interactions.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 relative">
                <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-[#37B6FF]"></span>
                {service.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base font-thin tracking-wider text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyOverview;
