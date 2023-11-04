import React from 'react';

const VerticalMarketsSection = () => {
  const verticalMarkets = [
    {
      title: 'Water Treatment',
      imageUrl: 'https://images.pexels.com/photos/5047901/pexels-photo-5047901.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Oil & Gas',
      imageUrl: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Contract Laboratories',
      imageUrl: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Food & Beverage',
      imageUrl: 'https://images.pexels.com/photos/3081940/pexels-photo-3081940.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Pharmaceutical Companies',
      imageUrl: 'https://images.pexels.com/photos/5699522/pexels-photo-5699522.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Academic Institutions',
      imageUrl: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Mining Companies',
      imageUrl: 'https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Engineering & Consultancy',
      imageUrl: 'https://images.pexels.com/photos/8470810/pexels-photo-8470810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">We serve diverse vertical markets</h2>
      <p className="text-xl mb-8">
        There is no denying the fact that the success of an analytical & engineering lies mostly in the services it offers. Ours is a proven record in various environments and industries.
      </p>
      <div className="grid grid-cols-4 gap-1">
        {verticalMarkets.map((market, index) => (
          <div
            key={index}
            className="relative p-4 rounded shadow-md hover:bg-gray-200 transition duration-300"
            style={{
              backgroundImage: `url(${market.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-xl font-bold text-white">{market.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalMarketsSection;
