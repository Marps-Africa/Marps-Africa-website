import React from 'react';
import marpslogo from "../assets/marpslogo.png";

const Loader = () => {
  return (
 


    <div className="loader-container">
      <div className="spinner-border">
        <div className="spinner">
          <img src={marpslogo} alt="logo" className="loader-logo" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
