import React from 'react';
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  const backgroundImageUrl = `url("/images/landingpage.jpeg")`;

  return (
    <div
    className="hero-section bg-cover bg-center text-white text-left py-16 md:py-48 h-full w-full" 
    style={{
      backgroundImage: backgroundImageUrl,
      // height: "650px",
      minHeight: "400px", /* Ensure a minimum height for smaller screens */
    }}
  >
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-bold mb-4 text-4xl md:text-6xl pt-20">Supporting your Analytical Needs.</h1>
        <p className="text-xl md:text-4xl max-w-md mx-auto mb-8 md:text-center lg:flex lg:items-start lg:justify-start lg:max-w-full lg:mx-0">
          Analytical laboratory & process equipment, reagents, and consumables.
        </p>
        <Link to="/products">
          <button className="bg-blue-800 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-lg md:text-xl">
            View Products
          </button>
        </Link>
      </div>
    </div>
  </div>

  );
};

export default HeroSection;
