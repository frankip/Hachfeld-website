import React from 'react';

const PartnerBrandsSection = () => {
  const partnerBrands = [
    {
      title: 'Hach',
      imageUrl: '/images/hach-and-hachfeld-kenya.webp',
      description: 'Complete range of Lab and Online Water Quality Testing Solutions',
    },
    {
      title: 'Luminultra',
      imageUrl: '/images/Luminultra-1.webp',
      description: 'Rapid, Accurate and Portable Microbial Testing Solutions',
    },
    {
      title: 'LG Chem',
      imageUrl: '/images/lgchem-2.webp',
      description: 'NanoH2O™ seawater and brackish water RO Membranes',
    },
    {
      title: 'Purolite',
      imageUrl: '/images/Purolite_Life_Sciences_Logo-1.webp',
      description: 'Ion exchange, adsorbent, and specialty resin technologies',
    },
    {
      title: 'Prominent',
      imageUrl: '/images/prominent-1.webp',
      description: 'Metering Systems for Fluid Handling',
    },
    {
      title: 'Suez',
      imageUrl: '/images/suez-waters-1.webp',
      description: 'Chemical Solutions for Water Treatment',
    },
    {
      title: 'Magnetic',
      imageUrl: '/images/magnetic-logo-2.webp',
      description: 'Portable Desalination Technologies',
    },
    {
      title: 'Luminor',
      imageUrl: '/images/luminor_logo-1.webp',
      description: 'UltraViolet Water Disinfection Solutions',
    },
  ];

  return (
    <div className="fourth-section py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">We partner with leading global brands</h2>
        <p className="text-xl mb-8 mt-10">
          The provision of innovative products and high-quality after-sale services presented to our customers forms the bedrock of our business.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {partnerBrands.map((brand, index) => (
            <div
              key={index}
              className="p-4 rounded shadow-md aspect-1x1 bg-white hover:bg-gray-200 transition duration-300"
            >
              <img src={brand.imageUrl} alt={`Icon ${index}`} className="h-24 mb-4 ml-36 w-48" />
              <h3 className="text-2xl font-bold mb-2">{brand.title}</h3>
              <p className="text-lg">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerBrandsSection;
