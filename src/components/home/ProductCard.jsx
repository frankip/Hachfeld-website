import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const products = [
    {
      title: 'Lab Instruments',
      imageSrc: '/images/flask.png',
      description: 'Learn More',
    },
    {
      title: 'Lab Meters & Probes',
      imageSrc: '/images/ph-meter.png',
      description: 'Learn More',
    },
    {
      title: 'Resins',
      imageSrc: '/images/resins.png',
      description: 'Learn More',
    },
    {
      title: 'RO Membranes',
      imageSrc: '/images/lab.png',
      description: 'Learn More',
    },
    {
      title: 'RO/UF/IE Systems',
      imageSrc: '/images/filtration.png',
      description: 'Learn More',
    },
    {
      title: 'Antiscalants',
      imageSrc: '/images/medical-lab.png',
      description: 'Learn More',
    },
    {
      title: 'Online Analyzers & Sensors',
      imageSrc: '/images/microchip.png',
      description: 'Learn More',
    },
    {
      title: 'UV Disinfection Systems',
      imageSrc: '/images/humidity.png',
      description: 'Learn More',
    },
    {
      title: 'Chemical Dosing Pumps',
      imageSrc: '/images/oil-refinery.png',
      description: 'Learn More',
    },
  ];

  return (
    <div className="container mx-auto text-center">
    <div className="bg-white p-1 shadow-md">
      <h2 className="text-3xl mb-4 mt-4">What We Do</h2>
    </div>
    <p className="text-4xl font-bold mb-8 mt-6">Our Products and Solutions</p>
    <div className="grid grid-cols-3 gap-1">
      {products.map((product, index) => (
        <Link key={index} to={`/products/${index}`}>
         
          <div
            className={`p-4 rounded shadow-md aspect-1x1 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            } hover:bg-gray-200 transition duration-300`}
          >
            <img src={product.imageSrc} alt={`Icon ${index}`} className="w-16 h-16 mb-4 ml-52" />
            <h3 className="text-2xl font-bold mb-2">
           
              <Link to={`/products/${index}`}>{product.title}</Link>
            </h3>
            <Link to={`/products/${index}`}>
              <a className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                {product.description} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </Link>
          </div>
        </Link>
      ))}
    </div>


    <div>
      <Link to="/products">
        <div className="flex justify-center mt-6">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-2xl font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded active:bg-blue-500 active:text-white active:border-transparent">
            View All Products
          </button>
        </div>
      </Link>
    </div>
  </div>
);
};

export default ProductCard;