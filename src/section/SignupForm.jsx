import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

const signupUser = async (form) => {
  const res = await axios.post("http://localhost:8000/api/auth/signup", form);
  return res.data;
};

function SignupForm({ onSignupSuccess }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const [backendMsg, setBackendMsg] = useState("");

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      localStorage.setItem("signup_userId", data.userId);
      setBackendMsg(data?.msg || "Signup successful! Check your email for OTP.");
      toast.success(data?.msg || "Signup successful! Check your email for OTP.");
      onSignupSuccess();
      navigate("/verify");
    },
    onError: (error) => {
      setBackendMsg(error?.response?.data?.msg || "Signup failed.");
      toast.error(error?.response?.data?.msg || "Signup failed.");
      console.error(error);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBackendMsg("");
    mutation.mutate(form);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 flex items-center justify-center">
      
      <div className="w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-800">
      
      
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-400 drop-shadow">Signup</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            disabled={mutation.isPending}
            className="border-none p-3 rounded-lg bg-gray-800/80 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"/>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            disabled={mutation.isPending}
            className="border-none p-3 rounded-lg bg-gray-800/80 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"/>

               <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            pattern=".{6,}"
            title="At least 6 characters"
            disabled={mutation.isPending}
            className="border-none p-3 rounded-lg bg-gray-800/80 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"/>

                  <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            disabled={mutation.isPending}
            className="border-none p-3 rounded-lg bg-gray-800/80 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"/>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            disabled={mutation.isPending}>
            {mutation.isPending ? "Signing up..." : "Signup"}
          </button>
        </form>
        {backendMsg && (
          <div className={`mt-6 text-center text-sm font-semibold ${backendMsg.toLowerCase().includes('success') ? 'text-green-400' : 'text-red-400'}`}>
            {backendMsg}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupForm;
