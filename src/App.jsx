import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignupForm from './section/SignupForm';
import OtpVerifyForm from './section/OtpVerifyForm';
import Products from './section/Products';

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);


  const navigate = useNavigate();

  const handleSignupClick = () => {


             navigate('/signup');
  };

  const handleSignupSuccess = () => {
    setIsSignedUp(true); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center justify-center text-white p-4">

      {!isSignedUp && (
        <>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                  Welcome! Sign Up & Discover Amazing Products
          </h1>
          <button
            onClick={handleSignupClick}
            className="bg-white cursor-pointer text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-indigo-100 transition duration-300">
            Sign Up Now </button>
        </>
      )}

      <Routes>
        <Route path="/signup" element={<SignupForm onSignupSuccess={handleSignupSuccess} />} />
        <Route path="/verify" element={<OtpVerifyForm />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;

