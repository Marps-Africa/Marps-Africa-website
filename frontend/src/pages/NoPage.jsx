import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotPage = () => {
  const [dots, setDots] = useState('');

  // Dynamic effect for the dots in "Loading..." text
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-gray-200 to-gray-100">
      <div className="text-center px-6 py-10  shadow-lg rounded-lg transform transition duration-500 ">
        <h1 className="text-6xl font-extrabold text-blue-500 hover:text-blue-600 transition duration-300">
          404
        </h1>
        <p className="mt-4 text-gray-700 text-2xl font-semibold">Oops! Page not found{dots}</p>
        <p className="mt-2 text-gray-500 text-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        
        <Link to="/">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none transition duration-300 transform hover:scale-110">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotPage;
