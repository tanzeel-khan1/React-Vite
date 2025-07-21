import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const signupUser = async (form) => {
  const res = await axios.post("http://localhost:8000/api/auth/signup", form);
  return res.data;
};

function SignupForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      localStorage.setItem("signup_userId", data.userId);
      alert("Signup successful! Check your email for OTP.");
      navigate("/verify-otp");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {mutation.isError && (
        <p className="text-red-500">
          {mutation.error?.response?.data?.msg || "Signup failed"}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="username" placeholder="Username" onChange={handleChange} required className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="border p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="border p-2 rounded" />
        <input name="address" placeholder="Address" onChange={handleChange} required className="border p-2 rounded" />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
