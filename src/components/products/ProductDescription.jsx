import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import products from './Products';
import Footer from '../Footer';

const ProductDescription = () => {
  const { productName } = useParams();

  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter((p) => p.id === product.id);

  return (
    <div className="bg-gray-100 mt-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="p-4 md:w-1/3">
          <div className="mb-10 bg-gray-200 p-6 flex justify-center">
            <Link to="/contact"><button className="bg-blue-800 text-white text-2xl px-8 py-4 hover:bg-blue-700 rounded-full">
              Get a Free Quote
            </button></Link>
          </div>
        </div>
        <div className="p-4 md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-white p-6">
                <img src={product.imageUrl} alt={product.name} className="w-full object-cover mb-4 h-96" />
              </div>
              <div className="ml-4">
                <h3 className="text-4xl font-bold">{product.name}</h3>
                <p className="text-2xl mt-4">{product.description}</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-end justify-between'>

        
        <div className="p-4">
          <h2 className="text-4xl font-semibold text-left mb-4 ml-96">Description</h2>
          <div className="text-xl mt-8">
            <p className="text-2xl text-left ml-96">
              {product.details.split('. ').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-left mb-4 ml-96">Related Products</h2>
          <div className="grid gap-2">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white p-4 w-96 ml-96">
                <img src={relatedProduct.imageUrl} alt={relatedProduct.name} className="w-full object-cover mb-2 h-96" />
                <h3 className="text-xl font-semibold text-center mb-2">{relatedProduct.name}</h3>
              </div>
            ))}
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDescription;
