import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignupForm from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Option from './components/Options';
import Sports from './components/Sports';
import Mobile from './components/Mobile'
import Cars from './components/Cars';
import Laptop from './components/Laptop';
const App = () => {

  return (
    
    <>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Option />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/cars" element={<Cars />} />
        <Route path='/laptop' element={<Laptop />} />


      </Routes>
    </>
  )
}

export default App;
