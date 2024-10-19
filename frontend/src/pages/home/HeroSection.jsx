import React, { useState, useEffect } from 'react';

import image1 from '/images/homeimages/phone-app.jpeg';
import image2 from '/images/homeimages/oldman.jpeg';
import image3 from '/images/homeimages/team-image.webp';

// Image data for the carousel
const images = [
  {
    src: image1,
    h3: "// Full Cycle Software Development",
    heading: "From Vision to Reality",
    subheading: "Empowering Your Ideas with Our Expertise",
    buttonText: "LEARN MORE",
  },
  {
    src: image2,
    h3: "// We Create Leading Digital Products",
    heading: "End-to-End Digital Solutions",
    subheading: "Crafting Innovative Products with Proven Excellence",
    buttonText: "LEARN MORE",
  },
  {
    src: image3,
    h3: "// Only High Quality Services",
    heading: "Premier IT Outsourcing",
    subheading: "Delivering Top-Quality Software Solutions Tailored to You",
    buttonText: "LEARN MORE",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative h-[90vh] overflow-hidden mt-9'>
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].heading}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 space-y-4">
          <h3 className="text-xl text-white">{images[currentIndex].h3}</h3>
          <h1 className="text-5xl text-white font-bold">
            {images[currentIndex].heading}
          </h1>
          <p className="text-lg text-white">
            {images[currentIndex].subheading}
          </p>
          <button className="mt-2 bg-[#37B6FF] text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-500 transition duration-300">
        Learn More
        </button>

        </div>
      </div>

      {/* Image Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
