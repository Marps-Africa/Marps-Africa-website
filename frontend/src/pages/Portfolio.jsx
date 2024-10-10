import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Africare',
    category: 'Mechanical/Electrical',
    image: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: 'The Pathology Network',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  },
  {
    title: 'Tracy Wanjiru',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(true);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on whether the entry is intersecting
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`relative h-[70vh] bg-gray-900 text-white flex flex-col justify-between transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1593642532976-1b09b0d1e7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDU3MTZ8MHwxfGFsbHwxfHx8fHx8fHwxNjg2Mjg3NDE2&ixlib=rb-1.2.1&q=80&w=1080)', // Replace with your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <nav className="w-full flex items-center justify-between p-6">
          <div className="text-2xl font-bold">// Marps-Africa</div>
        </nav>

        {/* Social Links */}
        <div className="absolute left-6 bottom-10 flex flex-col space-y-4">
          <a href="#" className="hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
              <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/>
              <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
              <path fill="#1d9bf0" d="M114.896 37.888c.078 1.129.078 2.257.078 3.396 0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435 26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42 52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"/>
            </svg>
          </a>
        </div>

        {/* Banner Content */}
        <div className="flex flex-col items-center text-center mt-auto mb-32">
          <h1 className="text-6xl md:text-8xl font-bold">Marps-Africa Portfolio</h1>
          <p className="mt-4 text-lg md:text-2xl">Here's what we have done.</p>
        </div>
      </div>

      <section ref={projectsRef} className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-15xl md:text-6xl font-bold text-center opacity-20 shadow mb-12">Portfolio</h2>
          <hr className='mb-10 opacity-20' />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden border-2 border-gray-700 rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">{project.category}</p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <a
                      href="#"
                      className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full group-hover:text-gray-800 group-hover:bg-white transition-all duration-300"
                    >
                      <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                      <span className="relative text-sm">Explore</span>
                      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
