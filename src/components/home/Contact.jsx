import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="bg-white text-black p-8 flex flex-col md:flex-row items-start md:items-center justify-between mx-4 mt-12 mb-12">
    <div className="text-left">
      <h2 className="text-2xl font-bold mb-4 md:text-4xl">Ready to get started?</h2>
      <p className="text-xl mb-6 md:text-2xl">
        Contact us today to learn how our customized plans can help grow your business.
      </p>
    </div>
    <Link to="/contact">
      <button className="bg-blue-800 text-white hover:bg-blue-700 font-bold py-2 px-6 text-lg rounded-full">
        Request a Quote
      </button>
    </Link>
  </div>
  );
};

export default ContactSection;
