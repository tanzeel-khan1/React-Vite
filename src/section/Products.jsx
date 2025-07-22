
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {

  const res = await axios.get('http://localhost:7000/api/auth/product'); 

  return res.data;
};

const Products = () => {
  useEffect(() => {


    AOS.init({ duration: 800, once: true });
  }, []);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="text-center p-4">Loading products...</p>;
  if (isError) return <p className="text-center p-4 text-red-500">Failed to load products.</p>;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen w-full">
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-400">Our Products</h1>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        
        
          {data.map((product) => (
            <div

              key={product.id}

              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 flex flex-col items-center min-h-[370px] w-full max-w-xs mx-auto transition-transform duration-200 hover:scale-105">
              {product.img ? (
                <img
                  src={product.img}
                  alt={product.name || 'Product Image'}
                  className="h-32 sm:h-40 w-full object-contain mb-2 sm:mb-4 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
                  style={{ maxWidth: '100%' }}
                  onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }}/>
              ) :       (
                <div className="h-32 sm:h-40 w-full flex items-center justify-center mb-2 sm:mb-4 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <span className="text-gray-400 dark:text-gray-500">No Image</span>
                </div>
              )}           
              <h2 className="text-base sm:text-lg font-semibold text-center text-gray-900 dark:text-gray-100 line-clamp-2 min-h-[3rem]">{product.name}</h2>
              <p className="text-green-700 dark:text-white-400 font-bold  ">Rs {product.price}</p>
              <p className='text-emerald-50 mt-0.5'>{product.description}</p>
            </div>
          ))}
        </div>

      </div>


    </div>
  );
};

export default Products;
