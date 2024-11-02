import React from 'react'

function PageName({image, title, caption}) {
  return (
    <div>
        <div className="relative mx-auto h-[60vh] overflow-hidden ">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            filter: "grayscale(70%)", // Optional: makes the image black and white
          }}
        >
          {/* This container will have the image */}
        </div>

        {/* Overlay with Dark Background and Opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl  font-montserrat font-bold relative pb-2 text-white  ">
              {title}
            </h1>
            <p className="text-white text-md md:text-xl  max-w-2xl font-montserrat">
                {caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageName