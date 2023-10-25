import React from 'react'
import { useState } from 'react';
import Select from 'react-select';
import Footer from './Footer';

const Contact = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [phoneNumberPrefix, setPhoneNumberPrefix] = useState('');
    const countries = [
        { value: 'us', label: 'United States', flag: '🇺🇸', prefix: '+1' },
        { value: 'ca', label: 'Canada', flag: '🇨🇦', prefix: '+1' },
        { value: 'gb', label: 'United Kingdom', flag: '🇬🇧', prefix: '+44' },
        // Add more countries with their prefixes as needed
      ];
  return (
    <><section className="bg-white ">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-left text-gray-900 ">Hello Let's Get in touch</h2>
     
      <form action="#" className="space-y-2">
      <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-gray-900 ">First Name</label>
              <input type="text" id="first_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="John" required />
            </div>
            <div className="w-1/2 px-2">
              <label htmlFor="last_name" className="block mb-2 text-lg font-medium text-gray-900 ">Last Name</label>
              <input type="text" id="last_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Doe" required />
            </div>
          </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 ">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
       
  <div>
    <label htmlFor="phoneNumber" className="block mb-2 text-lg font-medium text-gray-900 ">Phone Number</label>
    <input
      type="tel"
      id="phoneNumber"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
      placeholder={`E.g., ${phoneNumberPrefix} 123-456-7890`}
      required
    />
  </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900 ">Subject</label>
          <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 ">Your message</label>
          <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit"  className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg" >Send message</button>
        
      </form>
    </div>
  </section>
  < Footer />
  </>
    
  )
}

export default Contact