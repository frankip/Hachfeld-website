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
    // {
    //   title: 'Resins',
    //   imageSrc: '/images/resins.png',
    //   description: 'Learn More',
    // },
    // {
    //   title: 'RO Membranes',
    //   imageSrc: '/images/lab.png',
    //   description: 'Learn More',
    // },
    // {
    //   title: 'RO/UF/IE Systems',
    //   imageSrc: '/images/filtration.png',
    //   description: 'Learn More',
    // },
    // {
    //   title: 'Antiscalants',
    //   imageSrc: '/images/medical-lab.png',
    //   description: 'Learn More',
    // },
    // {
    //   title: 'Online Analyzers & Sensors',
    //   imageSrc: '/images/microchip.png',
    //   description: 'Learn More',
    // },
    // {
    //   title: 'UV Disinfection Systems',
    //   imageSrc: '/images/humidity.png',
    //   description: 'Learn More',
    // },
    // {
    //   title: 'Chemical Dosing Pumps',
    //   imageSrc: '/images/oil-refinery.png',
    //   description: 'Learn More',
    // },
  ];

  return (
<div className="container mx-auto px-4 md:px-0 text-center">
    <p className="text-3xl font-bold mb-6 md:mb-8 mt-4 md:mt-6">Our Products and Solutions</p>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-2">
      {products.map((product, index) => (
        <div key={index} to={`/products/${index}`}>
          <div
            className={`p-6 rounded-lg shadow-md aspect-1x1 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            } hover:bg-gray-200 transition duration-300`}
          >
            <img src={product.imageSrc} alt={`Icon ${index}`} className="w-24 h-24 mb-4 md:mb-1 inline-block"/>
            <h3 className="text-xl font-bold mb-2 md:text-2xl">
              <Link to={`/product/${index+1}`}>{product.title}</Link>
            </h3>
            <Link to={`/product/${index+1}`}>
              <a className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                {product.description} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <Link to="/products">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-6 border border-blue-700 hover:border-transparent rounded-full active:bg-blue-500 active:text-white active:border-transparent"
        >
          View All Products
        </button>
      </Link>
    </div>
  </div>
);
};

export default ProductCard;