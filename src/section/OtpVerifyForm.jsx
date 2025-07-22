import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";



const verifyOtp = async ({ userId, otp }) => {
  const res = await axios.post("http://localhost:8000/api/auth/verify-otp", {
    userId,
    otp,
  });
  return res.data;
};
function OtpVerifyForm() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("signup_userId");

  const mutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      toast.success(data.message || "OTP Verified Successfully ");
      localStorage.removeItem("signup_userId");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "OTP verification failed ❌");
    },
  });



  const handleVerify = () => {
    if (!userId) {
      toast.error("User ID not found in localStorage");
      return;
    }
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    mutation.mutate({ userId, otp });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-800">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-400 drop-shadow">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border-none p-3 rounded-lg w-full mb-5 bg-gray-800/80 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 shadow-sm"
          required
          disabled={mutation.isPending}/>

        <button
          onClick={handleVerify}
          className="bg-green-500 hover:bg-green-600 cursor-pointer text-white py-3 w-full rounded-lg font-semibold shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Verifying..." : "Verify"}
        </button>
      </div>
    </div>
  );
}
export default OtpVerifyForm