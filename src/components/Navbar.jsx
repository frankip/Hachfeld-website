import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faAngleDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const [isTopSectionVisible, setIsTopSectionVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsTopSectionVisible(false);
      } else {
        setIsTopSectionVisible(false);
      }
    });
  }, []);

  const menuItems = [
    { text: 'Home', link: '/' },
    {
      text: 'Products',
      link: '/',
      subItems: [
        { text: 'Lab Instruments', link: '/product/1' },
        { text: 'Lab Meters and Probes', link: '/product/2' },
        // { text: 'Online Analyzers and Sensors', link: '/product2' },
        // { text: 'Resins', link: '/product2' },
        // { text: 'RO Membranes', link: '/product2' },
        // { text: 'RO/UF/CWPT Systems', link: '/product2' },
        // { text: 'Antiscalants', link: '/product/1' },
        // { text: 'Chemical Dosing Pumps', link: '/product2' },
        // { text: 'UV Disinfection Systems', link: '/product2' },
      ],
    },
    // { text: 'Resources', link: '/resources' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'About Us', link: '/about-us' },
  ];

  return (
    <div>
      <nav className={`flex items-center justify-between p-4 bg-white text-black ${isTopSectionVisible ?'mt-0' : 'fixed w-full top-0 transition-all ease-in-out duration-300'}`}>
        <div className="flex items-center">
          <Link to="/">
            {/* <img src="logo.png" alt="Logo" className="w-full h-11" /> */}
            <h1 className="font-medium text-green">TAPOYO</h1>
          </Link>
        </div>
        <div className="md:hidden block">
        <button
          className="flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
      </div>
        <ul className="hidden md:flex items-center space-x-8 md:space-x-14">
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
      <div
      className={`fixed top-0 left-0 h-full w-full bg-gray-800 text-white z-50 overflow-y-auto transition-all ease-in-out duration-300 transform -translate-x-full md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : ''
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
      <ul className="block md:flex items-center space-x-8 md:space-x-14">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
             {item.subItems ? (
                <span className="hover:text-gray-500 cursor-pointer transition-colors duration-300 font-medium text-lg">
                  {item.text}
                  <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-sm" />
                </span>
              ) : (
                <Link to={item.link} className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg" onClick={toggleMobileMenu}>
                  {item.text}
                </Link>
              )}
              {item.subItems && (
                <ul className="absolute hidden group-hover:block bg-gray-200 text-black p-4 shadow-lg rounded-lg w-72">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2 relative">
                      <Link to={subItem.link} className="flex justify-between items-center py-2 px-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg" onClick={toggleMobileMenu}>
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

          </ul>
          <div className="flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700" onClick={toggleMobileMenu}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </div>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
