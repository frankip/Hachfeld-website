import React, { useState } from 'react';
import Footer from './Footer';

const countries = [
  { value: 'us', label: 'United States', flag: '🇺🇸', prefix: '+1' },
  { value: 'ca', label: 'Canada', flag: '🇨🇦', prefix: '+1' },
  { value: 'gb', label: 'United Kingdom', flag: '🇬🇧', prefix: '+44' },
  
];

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumberPrefix, setPhoneNumberPrefix] = useState('');

  const handleCountryChange = (e) => {
    const selectedValue = e.target.value;
    const selectedCountry = countries.find((country) => country.value === selectedValue);
    setSelectedCountry(selectedCountry);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const fullPhoneNumber = `${selectedCountry.prefix} ${phoneNumberPrefix}`;

  return (
    <><div className="flex flex-col md:flex-row justify-center items-center">
      <div className="p-8">
        <section className="bg-white flex flex-col items-center">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-left text-gray-900">Hello Let's Get in touch</h2>
            <form action="#" className="space-y-2">
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-gray-900">First Name</label>
                  <input type="text" id="first_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div className="w-1/2 px-2">
                  <label htmlFor="last_name" className="block mb-2 text-lg font-medium text-gray-900">Last Name</label>
                  <input type="text" id="last_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-lg font-medium text-gray-900">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder={`E.g., 0712345678`}
                  required
                />
              </div>
            
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg">Submit Form</button>
            </form>
          </div>
        </section>
      </div>
      <div className="p-8">
      <div className="bg-gray-200 p-4 md:p-8 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">You can find us at</h2>
          <p className="text-2xl mt-6">Self Storage Center</p>
            <p className="text-2xl mt-6">Mombasa Road</p>
          <p className="text-xl">Nairobi, Kenya</p>
          <p className="text-xl">254722587179</p>
          <p className="text-3xl mt-6 font-bold">Opening hours</p>
          <p className="text-xl mt-4">Monday – Friday</p>
          <p className="text-xl">9.00 AM – 5.30 PM</p>
          <p className="text-3xl mt-6 font-bold mb-4">Call us now</p>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
    
  );
};

export default Contact;
