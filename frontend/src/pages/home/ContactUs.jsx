import React from 'react';
import { Link } from 'react-router-dom'; 
import image4 from '/images/homeimages/teams.jpg'; 

function ContactUs() {
  return (
    <section className="p-2 md:p-10">
      <div className="relative md:w-[80vw] mx-auto h-[50vh] rounded-lg overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image4})`,
            filter: 'grayscale(100%)', // Optional: makes the image black and white
          }}
        >
          {/* This container will have the image */}
        </div>
        {/* Overlay with Dark Background and Opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-8">
          <div className="p-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              We Carry More Than Just Good Coding Skills
            </h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
              Let's Build Your Website!
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#37B6FF]  rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
