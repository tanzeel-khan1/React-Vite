import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {


  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#C0C9EE] flex flex-col justify-center items-center px-4 text-center">
     
      <h1 className="font-bold text-5xl text-blue-800 mb-6">Welcome Home</h1>

      <p className="font-semibold text-2xl text-gray-800 mb-4">This is the Home Page</p>

      <p className="font-light text-xl text-blue-800 mb-2">If you <span className="text-green-600 font-medium">Sign Up</span> & <span className="text-green-600 font-medium">Login</span></p>
   
      <p className="font-light text-xl text-blue-800 mb-2"> Then you can watch our <span className="text-green-600 font-medium">Products</span></p>
      <p className="font-light text-xl text-blue-800 mb-8">Not <span className="text-green-600 font-medium">Signed Up</span> or <span className="text-green-600 font-medium">Logged In</span> <br />Then you Not Watch our <span className="text-green-600 font-medium">Products</span></p>

      <button onClick={() => navigate('/signup')}className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white flex items-center gap-2 px-6 py-2 rounded-full shadow-md transition"> <FaArrowRight />Sign Up Now</button>
    
    
    </div>
  );
};

export default Home;
