import React from "react";
import image from "/images/homeimages/team-image.webp";

const BannerSection = () => {
  return (
    <div className="relative mx-auto h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: "grayscale(70%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-center p-8">
        <div className="font-sans">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-serif relative pb-2 text-white underline">
            About Us
          </h1>
          <p className="text-white text-md md:text-lg max-w-2xl">
            Explore Our Commitment to Excellence{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
