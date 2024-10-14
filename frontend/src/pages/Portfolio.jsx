import React from 'react';
import {motion} from 'framer-motion';
import { FadeUp, FadeDown } from '../utility/Animation';

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mt-12 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300 transform hover:scale-110 cursor-pointer">

      <motion.a
       href="/">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      </motion.a>

    </div>
      <motion.div
      variants={FadeDown(0.5)}
      initial="hidden"
      animate="visible"
      className="text mb-5 mt-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Projects we've made trying to put <br /> our dent in the universe.
        </h1>
        <span className='text-base sm:text-lg md:text-xl'>
          <p>Explore some of our past and recent successful projects.</p>
        </span>
        <br className='mb-4'/>
        
      </motion.div>

      <motion.div
      variants={FadeUp(0.9)}
      initial="hidden"
      animate="visible"
      className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  ].map((image, index) => (
    <a
      key={index}
      href="#"
      className="relative block overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8 transition-transform duration-300 hover:scale-105 hover:border-[#37B6FF] hover:border-2 hover:shadow-lg"
    >
      <img
        alt=""
        src={image}
        className="h-48 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-56 md:h-64 lg:h-72"
      />

      <div className="mt-4 flex flex-row justify-between">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          Project Title
        </h3>

      </div>
      <div className="description">
      <p className="mt-1 text-sm text-gray-600">Description</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
      <div className="flex flex-col-reverse">
      <a href="https://www.google.com" 
        className='border-2 border-[#37B6FF] rounded-lg text-[#37B6FF] hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-300 ease-in-out'>
        Explore
      </a>


      </div>

      </dl>
    </a>
  ))}
</motion.div>

    </div>
  );
};

export default Portfolio;
