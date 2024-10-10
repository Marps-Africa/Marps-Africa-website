import React from 'react';
import {
  FaMobileAlt, FaCloud, FaShieldAlt, FaCode, FaWifi,
  FaLightbulb, FaNetworkWired, FaLock, FaBuilding,
  FaDollarSign, FaHandHoldingUsd
} from 'react-icons/fa';

export default function About() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/aboutUs.jpeg')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white text-left p-6 md:p-10 lg:p-20">
          <div className="font-sans">
            <p className="text-xs md:text-sm font-thin tracking-wider">
              <a href="/" className="hover:text-gray-300 transition-colors duration-300">Home</a> &gt; 
              <a href="/about" className="hover:text-gray-300 transition-colors duration-300">About Us</a>
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight font-serif relative pb-2">
              About Us
              <span className="absolute left-0 bottom-0 w-1/4 border-t-4 border-white"></span>
            </h1>
          </div>
        </div>
      </div>

      {/* Company Description Section */}
      <div className="bg-gray-200 py-6 md:py-10 px-4 md:px-10 lg:px-20">
        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed text-center mb-6 md:mb-8 font-thin">
          MarpsAfrica Solutions is an innovative IT service provider company engaging its customer with hosted online applications and content. 
          We recognize the organic nature of IT systems and the increase in the rate of change enabled by the Mobile, Internet, and globalization. 
          We are a leading provider of CSP technology while offering customer-oriented and unique services that enable their competitive advantage.
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed text-center font-thin">
          We build long-term relationships with customers in specific vertical industry segments offering a full complement of competitive, 
          integrated, packaged offerings to which customers can benefit from the mobile channel by delivering services aimed at generating revenues, 
          improving business efficiency, and proactively managing relationships with customers through personalized interaction.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="relative mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
            <span className="relative inline-block">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-yellow-400"></span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Service Items */}
          {[{
            icon: <FaMobileAlt className="text-white text-2xl" />,
            title: 'Mobile Solutions',
            description: 'Take advantage of the various online services that can be available to you on the go.'
          }, {
            icon: <FaCloud className="text-white text-2xl" />,
            title: 'Cloud Services',
            description: 'We have partnered with Amazon to bring you the best cloud-based quality services.'
          }, {
            icon: <FaShieldAlt className="text-white text-2xl" />,
            title: 'IT Security',
            description: 'We offer design and build services for you from initial sketches to the final construction.'
          }, {
            icon: <FaCode className="text-white text-2xl" />,
            title: 'Software Solutions',
            description: 'We are a dynamic niche I.T. company that has been helping visionary financial institutions with security support.'
          }, {
            icon: <FaWifi className="text-white text-2xl" />,
            title: 'Networks & Communications',
            description: 'The ConsultingWP firm scored highest for vacation policy, hours in the office, and overall satisfaction.'
          }, {
            icon: <FaLightbulb className="text-white text-2xl" />,
            title: 'Experience',
            description: 'Engage with consumers and inspire the media – we ensure brands are seen and heard in all the right places.'
          }].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 relative">
                  <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-yellow-400"></span>
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base font-thin tracking-wider text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunity and Strategy Section */}
      <div className="bg-gray-200 py-10 md:py-16 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 relative inline-block">
            <span className="relative inline-block">
              Opportunity and Strategy
              <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-yellow-400"></span>
            </span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
            Interactive communication enhances the building and improving of Customer Service by also involving, 
            recognizing and linking all business processes—including databases, employees, and client communication—into one corporate 
            information system which enables better servicing of clients with minimal human involvement.
          </p>
          <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
            We know our clients' brands inside and out. This assures them that they are in safe, objective hands.
          </p>
          <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
            Our clientele includes:
          </p>
          <div className="flex flex-col gap-4 mt-4">
            {[{
              icon: <FaBuilding className="text-2xl md:text-3xl lg:text-4xl mr-3" />,
              text: 'Banks'
            }, {
              icon: <FaDollarSign className="text-2xl md:text-3xl lg:text-4xl mr-3" />,
              text: 'SACCOs'
            }, {
              icon: <FaHandHoldingUsd className="text-2xl md:text-3xl lg:text-4xl mr-3" />,
              text: 'Finance firms'
            }].map((item, index) => (
              <div key={index} className="flex items-center text-gray-600">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

    
        <div className="lg:w-1/2 bg-blue-200 py-10 md:py-16 px-4 md:px-10 lg:px-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 relative inline-block">
            <span className="relative inline-block">
              Our Expertise
              <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-yellow-400"></span>
            </span>
          </h2>
          <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
            {[{
              icon: <FaMobileAlt className="text-white text-2xl mr-3" />,
              title: 'Mobile Solutions',
              percentage: '97%'
            }, {
              icon: <FaCloud className="text-white text-2xl mr-3" />,
              title: 'Cloud Computing Services',
              percentage: '95%'
            }, {
              icon: <FaLock className="text-white text-2xl mr-3" />,
              title: 'IT Security',
              percentage: '93%'
            }, {
              icon: <FaNetworkWired className="text-white text-2xl mr-3" />,
              title: 'Networking',
              percentage: '90%'
            }].map((item, index) => (
              <div key={index} className="flex flex-col mb-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{item.percentage}</p>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between text-xs font-medium text-gray-600">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  <div className="relative flex items-center w-full bg-gray-400 h-2 rounded">
                    <div className="absolute top-0 left-0 h-2 bg-yellow-400 rounded" style={{ width: item.percentage }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
