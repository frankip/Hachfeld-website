import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="bg-white text-black p-8 flex flex-col md:flex-row items-start md:items-center justify-between pl-72 pr-72 mt-12 mb-12">
      <div className="text-left">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-2xl mb-8">
          Contact us today to learn how our customized plans can help grow your business.
        </p>
      </div>
      <Link to="/contact">
        <button className="bg-blue-800 text-white hover:bg-blue-700 font-bold py-2 px-6 text-xl border-blue-950">
          Request a Quote
        </button>
      </Link>
    </div>
  );
};

export default ContactSection;
