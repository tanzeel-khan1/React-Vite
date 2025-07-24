import React from 'react';

const Options = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      
          <h1 className="text-3xl font-bold mb-2 text-center"> Congratulations! You   Successfully Signed Up & Logged In</h1>


      <h3 className="text-lg text-gray-300 mb-6 text-center">

        Now select a product you like:
      </h3>
      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow">📱 Mobile </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow">🏏 Bat's
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow">💻 Laptop's </button>
      </div>
    </div>
  );
};

export default Options;
