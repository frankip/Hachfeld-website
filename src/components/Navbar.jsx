import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const [isTopSectionVisible, setIsTopSectionVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsTopSectionVisible(false);
      } else {
        setIsTopSectionVisible(true);
      }
    });
  }, []);
  return (
    <div>
    {isTopSectionVisible && (
      <div className="text-white p-2 text-center bg-red-950">
        <span className="font-bold">Email:</span> info@hachfeld.co.ke
        <span className="font-bold pl-14">Call Now:</span> +254 750 520 179 | +254 717 520 179
        <span className="font-bold pl-14">Visit us:</span> Office 308, Lunga Lunga Square, Industrial Area, Nairobi.
      </div>
    )}

<nav className={`flex items-center justify-between p-4 bg-white text-black ${isTopSectionVisible ? 'mt-0' : 'fixed w-full top-0 transition-all ease-in-out duration-1000'}`}>

      <div className="flex items-center pl-96">
        <Link to="/"><img src="src/images/logo.png" alt="Logo" className="w-full h-11" /></Link>
        
      </div>
      <ul className="flex items-center space-x-14 pr-96">
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Home</Link>
        </li>
        <Link to="/products"><li className="relative group">
          <span className=" hover:text-gray-500 cursor-pointer transition-colors duration-300 font-medium text-lg">
            Products
            <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-sm" />
          </span>
          <ul className="absolute hidden group-hover:block bg-gray-200 text-black p-4 shadow-lg rounded-lg mt-2 w-64">
  <li className="mb-2">
    <Link to="/product1" className="block  px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">Lab Instruments</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">Lab Meters and Probes</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">Online Analyzers and Sensors</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">Resins</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">RO Membranes</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">RO/UF/CWPT Systems</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">Antiscalants</Link>
  </li>
  <li className="mb-2">
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">Chemical Dosing Pumps</Link>
  </li>
  <li>
    <Link to="/product2" className="block py-2 px-6 hover:bg-gray-100 hover:text-gray-800 rounded-lg">UV Disinfection Systems</Link>
  </li>
</ul>



        </li></Link>
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
