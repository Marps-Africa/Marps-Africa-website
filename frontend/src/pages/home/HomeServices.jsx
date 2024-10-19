import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowOutward, MdOutlineArrowForward } from "react-icons/md";

import image1 from '/images/homeimages/laptop.jpg';
import image2 from '/images/homeimages/oldman.jpeg';
import image3 from '/images/homeimages/ecommerce-site.jpeg';
import image4 from '/images/homeimages/phone-app.jpeg';
import image5 from '/images/homeimages/crm.webp';
import image6 from '/images/homeimages/dynamics-365.png';
import image7 from '/images/homeimages/handshake.png';
import image8 from '/images/homeimages/website.jpeg';
import image9 from '/images/homeimages/consult.jpeg';
import image10 from '/images/homeimages/consultation.jpeg';

const tabs = [
  "Development", 
  "Woo Commerce", 
  "CRM Solutions", 
  "Web Designing", 
  "IT Support"
];

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
      { title: "Word Press", imgSrc: image7 },
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid lg:grid-cols-4 gap-8 mt-8 mb-12">
      <div className="flex flex-col md:flex-row lg:col-span-2 md:space-x-4 w-full">
        {images.map((image, idx) => (
          <div key={idx} className="flex-1 bg-white shadow-md rounded-md p-4 mb-4 md:mb-0">
            <img src={image.imgSrc} alt={image.title} className="w-full h-[200px] object-cover rounded-md" />
            <div className="text-center mt-4 font-semibold text-gray-700">{image.title}</div>
          </div>
        ))}
      </div>
      <div className="lg:col-span-2 flex">
        <AnimatePresence>
          <motion.div
            className="bg-white shadow-md rounded-md p-8 flex flex-col justify-between min-h-[200px] w-full"
            key={selectedTab}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            <h2 className="text-3xl font-bold mb-4">{selectedTab}</h2>
            <p className="text-gray-600 text-md mb-4">{description}</p>
            <div className='flex justify-end'>
              <Link 
                to="" 
                className="self-start mt-2 bg-[#37B6FF] text-white h-10 w-10 text-center rounded-full shadow transition duration-300 flex items-center justify-center" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? <MdOutlineArrowOutward className='font-bold' /> : <MdOutlineArrowForward />}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const HomeServices = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section>
      <div className="w-full md:w-[90vw] lg:w-[80vw] mx-auto py-8 px-2 md:px-0">
        <div className="text-center">
          <h1 className="text-lg uppercase tracking-wider text-[#37B6FF]">Our Services</h1>
          <h2 className="text-4xl font-bold mt-4">Detailing of our products</h2>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-4 bg-white p-2 rounded-md shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 rounded-md font-semibold text-sm transition duration-300 ${selectedTab === tab ? "bg-black text-white " : "bg-gray-200 md:bg-white hover:bg-gray-300"}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <TabContent selectedTab={selectedTab} className=""/>
      </div>
    </section>
  );
};

export default HomeServices;
