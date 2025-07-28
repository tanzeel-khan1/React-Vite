import React from 'react';
import { useNavigate } from 'react-router-dom';

const Options = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      
          <h1 className="text-3xl font-bold mb-2 text-center"> Congratulations! You   Successfully Signed Up & Logged In</h1>
      <h3 className="text-lg text-gray-300 mb-6 text-center">

        Now select a product you like:
      </h3>
      <div className="flex flex-wrap gap-4">
        <button onClick={() => navigate("/sports")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow cursor-pointer">Sport's </button>
        <button onClick={() => navigate("/mobile")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow cursor-pointer">Mobile's
        </button>
        <button onClick={() => navigate("/cars")} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow cursor-pointer">Car's </button>
              <button onClick={() => navigate("/laptop")} className="bg-[#00809D] hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow cursor-pointer">Laptop's </button>

      </div>
    </div>
  );
};

export default Options;
