import React, { useState } from 'react';

import image1 from '../assets/laptop.jpg';
import image2 from '../assets/oldman.jpeg';
import image3 from '../assets/ecommerce-site.jpeg';
import image4 from '../assets/phone-app.jpeg';
import image5 from '../assets/crm.webp';
import image6 from '../assets/dynamics-365.png';
import image7 from '../assets/handshake.png';
import image8 from '../assets/website.jpeg';
import image9 from '../assets/consult.jpeg';
import image10 from '../assets/consultation.jpeg';
import { Link } from 'react-router-dom';


const tabs = ["Development", "Woo Commerce", "CRM Solutions", "Web Designing", "IT Support"];
const content = {
    "Development": {
      images: [
        { title: "Web Development", imgSrc: image1 },
        { title: "Mobile App Development", imgSrc: image2 }
      ],
      description: `Transforming ideas into digital reality. From building sleek websites to creating powerful mobile apps, our development services are crafted to propel your business forward in the digital age.`
    },
    "Woo Commerce": {
      images: [
        { title: "WooCommerce Development", imgSrc: image3 },
        { title: "E-Commerce platforms", imgSrc: image4 },
      ],
      description: `Elevate your e-commerce game with Woo Commerce. Our tailored solutions ensure a seamless shopping experience that boosts your online presence and sales.`
    },
    "CRM Solutions": {
      images: [
        { title: "CRM Solutions", imgSrc: image5 },
        { title: "Dynamics 365", imgSrc: image6 }
      ],
      description: `Streamline your customer interactions with our CRM solutions. Enhance relationships, boost productivity, and drive growth with tools designed for efficiency and success.`
    },
    "Web Designing": {
      images: [
        { title: "Word press", imgSrc: image7 },
        { title: "Custom Design", imgSrc: image8 },
      ],
      description: `Craft stunning and user-friendly websites with our design expertise. We blend creativity with functionality to create web experiences that captivate and convert.`
    },
    "IT Support": {
      images: [
        { title: "IT Support", imgSrc: image9 },
        { title: "Consultations", imgSrc: image10 }
      ],
      description: `Keep your technology running smoothly with our IT support. From troubleshooting to proactive maintenance, we ensure your systems are always at their best.`
    }
  };
  

const TabContent = ({ selectedTab }) => {
  const { images, description } = content[selectedTab] || {};
  return (
    <div className="grid lg:grid-cols-4 gap-8 mt-8">
      {" "}
      {/* Responsive grid for large screens */}
      {/* Image Section */}
      <div className="flex flex-col md:flex-row lg:col-span-2 md:space-x-4 w-full">
        {" "}
        {/* Flexbox for responsiveness */}
        {images.map((image, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white shadow-md rounded-md p-4 mb-4 md:mb-0"
          >
            {" "}
            {/* Make items flex evenly */}
            <img
              src={image.imgSrc}
              alt={image.title}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <div className="text-center mt-4 font-semibold text-gray-700">
              {image.title}
            </div>{" "}
            {/* Added font styling */}
          </div>
        ))}
      </div>
      {/* Text Section */}
      <div className="lg:col-span-2 bg-white shadow-md rounded-md p-8 flex flex-col justify-between">
        <h2 className="text-3xl font-bold mb-4">{selectedTab}</h2>
        <p className="text-gray-600 text-md mb-4">{description}</p>
        <Link
          to="/services/software-development"
          className="self-start mt-2 bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

function HomeServices() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="bg-[#F3F6FD] ">
      <div className="w-full md:w-[90vw] lg:w-[80vw] mx-auto py-10 px-2">
        <div className="text-center">
          <h1 className="text-lg uppercase tracking-wider text-blue-400">Our Services</h1>
          <h2 className="text-4xl font-bold mt-4">Detailing of our products</h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 bg-white p-4 rounded-md shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition duration-300 ${
                selectedTab === tab ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <TabContent selectedTab={selectedTab} />
      </div>
    </section>
  );
}

export default HomeServices;
