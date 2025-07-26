import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchSports = async () => {
  const response = await axios.get("http://localhost:7000/Api/auth/cars");
  return response.data;
};

const Sports = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchSports,
  });

  if (isLoading)

    return <div className="text-center text-xl font-semibold py-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  const slicedData = data?.slice(0, 6) || [];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Car's</h2>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {slicedData.map((sport) => (
          <div
            key={sport._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4">
            
              <img   src={sport.img}
              alt={sport.name}
              className="w-full h-48 object-cover rounded-xl mb-4"/>
            <h3 className="text-xl font-semibold mb-1">{sport.name}</h3>
            <p className="text-green-600 font-bold mb-1">Rs {sport.price}</p>
            <p className="text-gray-600 text-sm">{sport.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
