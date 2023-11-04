import React from 'react';
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  const backgroundImageUrl = "url('https://images.pexels.com/photos/257703/pexels-photo-257703.jpeg?auto=compress&cs=tinysrgb&w=1600')";

  return (
    <div
      className="hero-section bg-cover bg-center text-white text-left py-48 h-96"
      style={{
        backgroundImage: backgroundImageUrl,
        height: "650px",
      }}
    >
      <h1 className="font-bold mb-4 ml-8 text-6xl">Supporting your Analytical Needs.</h1>
      <p className="text-4xl mb-8 ml-8 pt-6 pb-6">
        Analytical laboratory & process equipment, reagents, and consumables.
      </p>
      <Link to="/products">
        <button className="bg-blue-800 text-white hover:bg-blue-700 font-bold py-2 px-6 text-xl ml-8 border-blue-950">
          View Products
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
