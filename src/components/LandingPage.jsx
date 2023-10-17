import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = () => {
  
  return (
    <div className="landing-page">
      <div
        className="hero-section bg-cover bg-center text-white text-left py-48 h-96"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/257703/pexels-photo-257703.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          height: "650px" 
        }}
      >
        <h1 className="text-5xl font-bold mb-4 ml-8 ">Supporting your Analytical Needs.</h1>
        <p className="text-xl mb-8 ml-8">
        Analytical laboratory & process equipment, reagents and consumables.
        </p>
        <button className="bg-red-800 text-white hover:bg-red-700 font-bold py-2 px-6 text-xl ml-8">
          View Products
        </button>
      </div>
      <div className="landing-content text-center mt-8">
        <p className="text-xl">
        Hachfeld Limited is an equipment, reagents and consumables distribution company in Nairobi, Kenya.
        </p>
<p className="text-xl mt-6 pl-6 pr-5">
Through strategic partnerships with leading global manufacturers. We help municipal and industrial customers produce reliable testing results, optimize processes, maximize returns at a competitive cost through expertise, technologies and local footprint.
        </p>
      </div>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className='bg-white p-1  shadow-md'><h2 className="text-3xl mb-4">What We Do</h2></div>
          <p className="text-4xl font-bold mb-8 mt-6">
          Our Products and Solutions
          </p>
          <div className="grid grid-cols-3 gap-4 ">
          <div className="bg-white p-4 rounded shadow-md aspect-1x1 hover:bg-gray-200 transition duration-300">
          <img src="src/images/flask.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">Lab Instruments</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

          
            <div className="p-4 rounded shadow-md aspect-1x1 bg-gray-100  hover:bg-gray-200 transition duration-300">
            <img src="src/images/ph-meter.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">Lab Meters & Probes</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

           
            <div className="bg-white p-4 rounded shadow-md aspect-1x1  hover:bg-gray-200 transition duration-300">
            <img src="src/images/resins.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">Resins</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className=" p-4 rounded shadow-md aspect-1x1 bg-gray-100  hover:bg-gray-200 transition duration-300">
            <img src="src/images/lab.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">RO Membranes</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            
            <div className="bg-white p-4 rounded shadow-md aspect-1x1 hover:bg-gray-200 transition duration-300">
            <img src="src/images/filtration.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">RO/UF/IE Systems</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className="p-4 rounded shadow-md aspect-1x1 bg-gray-100  hover:bg-gray-200 transition duration-300">
            <img src="src/images/medical-lab.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">Antiscalants</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
            <img src="src/images/microchip.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">Online Analyzers & Sensors</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className="p-4 rounded shadow-md aspect-1x1 bg-gray-100 hover:bg-gray-200 transition duration-300">
            <img src="src/images/humidity.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">UV Disinfection Systems
</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white  hover:bg-gray-200 transition duration-300">
            <img src="src/images/oil-refinery.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">Chemical Dosing Pumps
</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>

            </div>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
  View All Products
</button>
            </div>
            </div>
      </div>
    </div>
    
  );
};

export default LandingPage;
