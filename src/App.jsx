import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignupForm from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Option from './components/Options';
const App = () => {

  return (
    
    <>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Option />} />


      </Routes>
    </>
  )
}

export default App;
