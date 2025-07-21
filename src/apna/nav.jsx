import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserLarge,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Practice from "../apna/Practice";

function Nav({ cartCount }) {
  const navigate = useNavigate();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

  const handleUserClick = () => {
    if (!userName) {
      setShowAuthModal(true);
    } else {
      navigate('/profile'); 
    }
  };

  const handleLoginSuccess = (name) => {
    setUserName(name);
    localStorage.setItem("userName", name);
    setShowAuthModal(false);
  };

  return (
    <>
      <nav className="h-[5rem] w-[90%] bg-[#C0C9EE] ml-[3.3rem] mt-[1rem] rounded-[10px] flex items-center">
        <a href="#" className="flex font-normal ml-[3rem] text-[1.3rem] text-[#131D4F]">
          Apna<h1 className="font-black text-blue-400 ">X</h1>Hai
        </a>

        <ul className="flex gap-[2rem] ml-[3rem]">
          <li onClick={() => navigate('/')} className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">Home</li>
          <li className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">About</li>
          <li className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">Contact</li>
          <li className="cursor-pointer text-gray-700 hover:underline hover:text-blue-600">Email</li>
        </ul>

        <div className="h-[2rem] w-[30%] bg-[#9EC6F3] rounded-[10px] ml-[2rem] flex items-center px-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-700" />
          <input
            type="text"
            className="ml-[1rem] h-[1.5rem] w-full rounded-[10px] bg-white text-blue-700 px-2"
            placeholder="Search Here..."
          />
        </div>

        <section className="relative ml-[3rem] cursor-pointer">
          <FontAwesomeIcon
            icon={faUserLarge}
            className="text-[2rem] text-blue-900 hover:text-[gold]"
            onClick={handleUserClick}   
          />
          {userName && (
            <span className="absolute top-[2.3rem] left-1/2 -translate-x-1/2 text-sm text-blue-800 font-semibold">
              {userName}
            </span>
          )}
        </section>

        <section className="relative ml-[3rem]">
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => navigate('/cart')}
            className="text-[2rem] text-blue-900 cursor-pointer hover:text-[gold]"
          />
          {cartCount > 0 && (
            <span className="absolute top-0 left-[1.8rem] bg-red-500 text-white rounded-full px-2 text-xs">
              {cartCount}
            </span>
          )}
        </section>

        <section className="ml-[3rem]">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[2rem] text-blue-900 cursor-pointer hover:text-[gold]"
          />
        </section>
      </nav>

      <div className="h-[8rem] w-[90%] bg-[#FFC107] ml-[3.3rem] mt-[3rem] rounded-[10px] flex justify-between items-center px-[3rem]">
        <div>
          <h1 className="text-[brown] text-2xl font-bold">
            Own a Legacy with 10% off
          </h1>
          <p className="text-[brown]">
            Save on select watches from Rolex, OMEGA, and more. |
            <span className="font-semibold "> Ends 6/24. Max $700 off orders $500+. 2x use.</span>
          </p>


        </div>
        <button className="h-[2rem] w-[10rem] bg-[brown] text-[#FFC107] font-bold rounded-[10px]">
               Get the coupon
        </button>
      </div>

      {showAuthModal && (
        <Practice
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

export default Nav;
