import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams(); 

 
  const Products = products.filter((p) => p.id === Number(id));

  if (Products.length === 0) {
    return <div>Product not found</div>;
  }

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {Products.map((product) => (
              <div key={product.id} className="bg-white p-6">
               <Link to={`/product/${product.id}/${product.name}`}> 
            <img src={product.imageUrl} alt={product.name} className="w-full object-cover mb-4 h-96" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
          </Link>

              </div>
            ))}
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
