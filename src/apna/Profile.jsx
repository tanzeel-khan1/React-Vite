import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Profile = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "Guest User";
  const email = localStorage.getItem("email") || "Not provided";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };
useEffect(() => {
  if (!localStorage.getItem("userName")) {
    navigate("/");   
  }
}, []);


  return (
    <div className="w-[80%] mx-auto mt-[3rem] p-[2rem] bg-[#f0f0f0] rounded-[10px] shadow">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">User Profile</h1>
      <div className="text-lg text-gray-800 space-y-3">
        <p><strong>Name:</strong> {userName}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
