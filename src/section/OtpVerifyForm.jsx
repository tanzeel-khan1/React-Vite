import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OtpVerifyForm() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    const userId = localStorage.getItem("signup_userId");


    if (!userId) return setMessage("User ID not found.");


    try {
      const res = await axios.post(" http://localhost:8000/api/auth/verify-otp", {
        userId,

        otp,

      });
      setMessage(res.data.message);
      
      localStorage.removeItem("signup_userId");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setMessage(err?.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button onClick={handleVerify} className="bg-green-600 text-white py-2 w-full rounded">
        Verify
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default OtpVerifyForm;
