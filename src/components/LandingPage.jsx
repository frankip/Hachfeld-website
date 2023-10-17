import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  
  return (
    <div className="landing-page">
      <div
        className="hero-section bg-cover bg-center text-white text-left py-48 h-96"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/257703/pexels-photo-257703.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          height: "650px",
     
        }}
      >
        <h1 className="font-bold mb-4 ml-8 text-6xl ">Supporting your Analytical Needs.</h1>
        <p className="text-4xl mb-8 ml-8 pt-6 pb-6">
        Analytical laboratory & process equipment, reagents and consumables.
        </p>
        <button className="bg-red-800 text-white hover:bg-red-700 font-bold py-2 px-6 text-xl ml-8 border-red-950 ">
          View Products
        </button></div>
       
     
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
          <div className="grid grid-cols-3 gap-1 ">
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
              <h3 className="text-2xl font-bold mb-2">RO/UF/IE Systems</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className="p-4 rounded shadow-md aspect-1x1 bg-gray-100  hover:bg-gray-200 transition duration-300">
            <img src="src/images/medical-lab.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">Antiscalants</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
            <img src="src/images/microchip.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">Online Analyzers & Sensors</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className="p-4 rounded shadow-md aspect-1x1 bg-gray-100 hover:bg-gray-200 transition duration-300">
            <img src="src/images/humidity.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">UV Disinfection Systems
</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white  hover:bg-gray-200 transition duration-300">
            <img src="src/images/oil-refinery.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-2xl font-bold mb-2">Chemical Dosing Pumps
</h3>
              <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center justify-center">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>

            </div>
            
           
            </div> 
            <Link to="/products"><div className="flex justify-center mt-6">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-2xl font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded active:bg-blue-500 active:text-white active:border-transparent">
              View All Products
            </button>
          </div></Link>
            </div>
            <div className="second-section py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">We serve diverse vertical markets</h2>
          <p className="text-xl mb-8">
          There is no denying the fact that the success of an analytical & engineering lies mostly in the services it offers. Ours is a proven record in various environments and industries.
          </p>
          <div className="grid grid-cols-4 gap-1">
          <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/5047901/pexels-photo-5047901.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Water Treatment</span>
              </div>
            </div>
            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Power Generation</span>
              </div>
            </div>
            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Contract Laboratories</span>
              </div>
            </div>
            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/3081940/pexels-photo-3081940.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Food & Beverage</span>
              </div>
            </div>
            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/5699522/pexels-photo-5699522.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Pharmaceutical Companies</span>
              </div>
            </div>

            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Academic Institutions</span>
              </div>
            </div>

            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Mining Companies</span>
              </div>
            </div>

            <div
              className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/8470810/pexels-photo-8470810.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
             
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-xl font-bold text-white">Engineering & Consultancy</span>
              </div>
            </div>


           
          </div>
          </div>
          </div>
      </div>
       
        <div className="third-section py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
        
          <div className="grid grid-cols-3 gap-4 ">
         
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:shadow-lg hover:scale-105 transition duration-300 border border-gray-300">
              <img src="src/images/quality.png" alt="Icon 1" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">Provision of Quality Products</h3>
            </div>

         
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:shadow-lg hover:scale-105 transition duration-300 border border-gray-300">
              <img src="src/images/user.png" alt="Icon 2" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">Timely Client Engagements</h3>
            </div>

            
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:shadow-lg hover:scale-105 transition duration-300 border border-gray-300">
              <img src="src/images/tag.png" alt="Icon 3" className="w-16 h-16 mb-4 ml-52" />
              <h3 className="text-xl font-bold mb-2">Local Inventory</h3>
            </div>
          </div>
          <p className="text-xl mb-8 mt-10">
            Discover the solutions we provide to make your processes efficient.
          </p>
        </div>
        </div>


     
      <div className="fourth-section py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">We partner with leading global brands
</h2>
 <p className="text-xl mb-8 mt-10">
 The provision of innovative products and high-quality after sale services presented to our customers forms the bedrock of our business.
          </p>
  
          <div className="grid grid-cols-3 gap-4">
           
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/hach-and-hachfeld-kenya.webp" alt="Icon 1" className="h-24 mb-4 ml-36 w-48" />
              <h3 className="text-2xl font-bold mb-2">Hach</h3>
              <p className='text-lg'>Complete range of Lab and Online Water Quality Testing Solutions</p>
            </div>

          
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/Luminultra-1.webp" alt="Icon 2" className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">Luminultra
</h3>
<p className='text-lg'>Rapid, Accurate and Portable Microbial Testing Solutions</p>
            </div>

            
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="src/images/lgchem-2.webp" alt="Icon 3" className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">LG Chem</h3>
              <p className='text-lg' >NanoH2O™ seawater and brackish water RO Membranes.</p>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/Purolite_Life_Sciences_Logo-1.webp" alt="Icon 3"className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">Purolite</h3>
              <p className='text-lg'>Ion exchange, adsorbent, and specialty resin technologies</p>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/prominent-1.webp" alt="Icon 3" className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">Prominent</h3>
              <p className='text-lg'>Metering Systems for Fluid Handling</p>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/suez-waters-1.webp" alt="Icon 3" className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">Suez</h3>
              <p className='text-lg'>Chemical Solutions for Water Treatment </p>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/magnetic-logo-2.webp" alt="Icon 3" className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">Magnetic</h3>
              <p className='text-lg'>Portable Desalination Technologies</p>
            </div>
            <div className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300">
              <img src="/src/images/luminor_logo-1.webp" alt="Icon 3" className="h-24 mb-4 ml-32 w-48" />
              <h3 className="text-2xl font-bold mb-2">Luminor</h3>
              <p className='text-lg'>UltraViolet Water Disinfection Solutions</p>
            </div>
          </div>

          
          

          

          

         
        </div>
      </div>
      <div className="bg-white text-black p-8 flex flex-col md:flex-row items-start md:items-center justify-between pl-72 pr-72 mt-12 mb-12">
      <div className="text-left">
        <h2 className="text-5xl font-bold mb-4 ">Ready to get started?</h2>
        <p className="text-2xl mb-8">
          Contact us today to learn how our customized plans can help grow your business.
        </p>
      </div>
      <button className="bg-red-800 text-white hover:bg-red-700 font-bold py-2 px-6 text-xl border-red-950">
        Request a Quote
      </button>
    </div>

    </div>
    
  );
};

export default LandingPage;
