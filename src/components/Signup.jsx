import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; 

const Signup = () => {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axios.post("http://localhost:7000/api/auth/signup", formData);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Signup successful!");
      console.log("Server Response:", data);
      navigate("/login"); 
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Signup failed!");
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <div className="mb-4">

          <label className="block text-sm font-medium">Username</label>
<input
  type="text"
  {...register("username", {
    required: "Username is required",
    maxLength: {
      value: 3,
      message: "Username must be at most 3 characters"
    }
  })}
  className="mt-1 p-2 border w-full rounded"/>

          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required",
              maxLength: {
                value: 20,
                message: "Email must be at most 10 characters"  
              }
             })}
            className="mt-1 p-2 border w-full rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 p-2 border w-full rounded"/>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="mt-1 p-2 border w-full rounded"
            rows={3}/>
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}

        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
          {mutation.isPending ? "Signing up..." : "Signup"}
        </button>
      </form>
      
    </div>
  );
};

export default Signup;
