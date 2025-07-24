import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignupForm from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';

const App = () => {

  return (
    
    <>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />


      </Routes>
    </>
  )
}

export default App;
