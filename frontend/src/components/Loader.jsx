import React from 'react';
import marpsxlogo2 from "../assets/marpsxlogo2.jpeg";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner-border">
        <div className="spinner">
          <img src={marpsxlogo2} alt="logo" className="loader-logo" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
