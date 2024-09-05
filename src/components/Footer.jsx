import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="text-white p-8 bg-blue-950">
        <div className="flex flex-col md:flex-row justify-between pl-8 pr-8 md:pr-80">
          <div className="text-left mb-4 md:mb-0 md:mr-12">
          <p>Tapoyo Builders Limited</p>
            <p>P.O Box 28666 -00200</p>
            <p>Nairobi, Kenya.</p>
            <p>+254722587179</p>
            <p>info@tapoyo.com</p>
          </div>
          <div className="text-left mb-4 md:mb-0 md:mr-12">
            <h2 className="text-xl font-bold mb-4">Visit Us</h2>
            <p>Storage Central</p>
            <p>Mombasa Road</p>
            <p>Nairobi, Kenya.</p>
            <p></p>
            
          </div>
          <div className="text-left mb-4 md:mb-0 md:ml-12">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-">
              <Link to="/products"><li><a >Our Products</a></li></Link>
              <li><a href="#">Get Free Quote</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Call us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {currentYear}. Tapoyo All Rights reseverd
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer