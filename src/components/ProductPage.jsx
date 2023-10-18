import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1.',
      price: 30.99,
      imageUrl: 'https://example.com/product1-image.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2.',
      price: 45.99,
      imageUrl: 'https://example.com/product2-image.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 2.',
      price: 45.99,
      imageUrl: 'https://example.com/product2-image.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 2.',
      price: 45.99,
      imageUrl: 'https://example.com/product2-image.jpg',
    },
   
  ];

  return (
    <div className="bg-gray-100 mt-16 ">
      <div className="flex flex-col sm:flex-row ml-80 mr-96">
        <div className="sm:w-1/3 p-4  ml-4 sm:ml-0">
          <div className="mb-10 bg-gray-200 p-6 flex justify-center">
            <button className="bg-red-800 text-white text-2xl px-4 py-4 hover:bg-red-700">
              Get a Free Quote
            </button>
          </div>
          <div className="bg-gray-200 p-12 h-96">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-black text-lg">Office 308, Lunga Lunga</p>
            <p className="text-black text-lg">Square,</p>
            <p className="text-lg mb-4">Industrial Area,</p>
            <p className="text-lg">+254 750 520 179</p>
            <p className="text-lg mb-4">+254 717 520 179</p>
            <p className="text-lg">info@hachfeld.co.ke</p>
            <p className="text-lg">sales@hachfeld.co.ke</p>
            <p className="text-lg">www.hachfeld.co.ke</p>
          </div>
        </div>
        <div className="sm:w-2/3 p-4">
          <h2 className="text-6xl font-bold">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6">
                <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover mb-4" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
                <Link to={`/product/${product.id}`} className="text-indigo-600 hover:underline mt-2">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
