import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <div className=" text-white p-8 bg-blue-950">
      <div className="flex flex-col md:flex-row items-start justify-between pl-80 pr-80">
        <div className="text-left">
          <h2 className="text-xl font-bold mb-4">Visit Us</h2>
          <p>Office 308, Lunga Lunga Square,</p>
            <p>Industrial Area,</p>
            <p>Nairobi, Kenya.</p>
          
        </div>
        <div className="text-left mt-6 md:mt-0 md:ml-12">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <Link to="/products"><li><a >Our Products</a></li></Link>
            <li><a href="#">Get Free Quote</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Call us</a></li>
          </ul>
        </div>
        <div className="text-left mt-6 md:mt-0 md:ml-12">
          <h2 className="text-xl font-bold mb-4">Call us</h2>
          <p>+254 750 520 179</p>
          <p>+254 717 520 179</p>
        </div>
        <div className="text-left mt-6 md:mt-0 md:ml-12">
          <h2 className="text-xl font-bold mb-4">Email us</h2>
          <p>sales@hachfeld.co.ke</p>
          <p>info@hachfeld.co.ke</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center ">
        <p className="text-sm ">
          &copy; 2023. Hachfeld Limited. All rights reserved. Website by Teknezi
        </p>
      </div>
    </div>
  

    </div>
  )
}

export default Footer