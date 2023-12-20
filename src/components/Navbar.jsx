import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faAngleDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  const menuItems = [
    { text: 'Home', link: '/' },
    {
      text: 'Products',
      link: '/',
      subItems: [
        { text: 'Lab Instruments', link: '/product1' },
        { text: 'Lab Meters and Probes', link: '/product2' },
        { text: 'Online Analyzers and Sensors', link: '/product2' },
        { text: 'Resins', link: '/product2' },
        { text: 'RO Membranes', link: '/product2' },
        { text: 'RO/UF/CWPT Systems', link: '/product2' },
        { text: 'Antiscalants', link: '/product/1' },
        { text: 'Chemical Dosing Pumps', link: '/product2' },
        { text: 'UV Disinfection Systems', link: '/product2' },
      ],
    },
    { text: 'Resources', link: '/resources' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'About Us', link: '/about-us' },
  ];

  return (
    <div>
      {isTopSectionVisible && (
        <div className="text-white p-2 text-center bg-blue-950">
          <span className="font-bold">Email:</span> info@hachfeld.co.ke
          <span className="font-bold pl-14">Call Now:</span> +254 750 520 179 | +254 717 520 179
          <span className="font-bold pl-14">Visit us:</span> Office 308, Lunga Lunga Square, Industrial Area, Nairobi.
        </div>
      )}

      <nav className={`flex border border-gray-300 items-center justify-between p-4 bg-white text-black ${isTopSectionVisible ? 'mt-0' : 'fixed w-full top-0 transition-all ease-in-out duration-300'}`}>
        <div className="flex items-center pl-96">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="w-full h-11" />
          </Link>
        </div>
        <ul className="flex items-center space-x-14 pr-96">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.subItems ? (
                <span className="hover:text-gray-500 cursor-pointer transition-colors duration-300 font-medium text-lg">
                  {item.text}
                  <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-sm" />
                </span>
              ) : (
                <Link to={item.link} className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">
                  {item.text}
                </Link>
              )}

              {item.subItems && (
                <ul className="absolute hidden group-hover:block bg-gray-200 text-black p-4 shadow-lg rounded-lg w-72">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2 relative">
                      <Link to={subItem.link} className="flex justify-between items-center py-2 px-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg">
                        <span>{subItem.text}</span>
                        <span className="ml-2">
                          <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

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
