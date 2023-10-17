import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div>
    <div className="text-white p-2 text-center bg-red-950">
  <span className="font-bold">Email:</span> info@hachfeld.co.ke
  <span className="font-bold pl-14">Call Now:</span> +254 750 520 179 | +254 717 520 179
  <span className="font-bold pl-14">Visit us:</span> Office 308, Lunga Lunga Square, Industrial Area, Nairobi.
</div>

    <nav className="flex items-center justify-between p-4 bg-white text-black">
      <div className="flex items-center pl-96">
        <img src="src/images/logo.png" alt="Logo" className="w-full h-11" />
        
      </div>
      <ul className="flex items-center space-x-14 pr-96">
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Home</Link>
        </li>
        <li className="relative group">
          <span className=" hover:text-gray-500 cursor-pointer transition-colors duration-300 font-medium text-lg">
            Products
            <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-sm" />
          </span>
          <ul className="absolute hidden group-hover:block bg-white text-black p-2">
            <li>
              <Link to="/product1" className="hover:no-underline">Product 1</Link>
            </li>
            <li>
              <Link to="/product2" className="hover:no-underline">Product 2</Link>
            </li>
            
          </ul>
        </li>
        <li>
          <Link to="/resources" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Resources</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Contact Us</Link>
        </li>
        <li className="relative group">
            <span
              className="hover:text-gray-500 cursor-pointer transition-colors duration-300 font-medium text-lg"
              onClick={toggleSearchVisibility}
            >
              {isSearchVisible ? (
                <FontAwesomeIcon icon={faTimes} className="ml-2" />
              ) : (
                <FontAwesomeIcon icon={faSearch} className="ml-2" />
              )}
             
            </span>
            {isSearchVisible && (
              <div className="absolute right-0 mt-2 bg-white p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-50 p-1 border border-gray-300"
                />
              </div>
            )}
          </li>
       
       
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
