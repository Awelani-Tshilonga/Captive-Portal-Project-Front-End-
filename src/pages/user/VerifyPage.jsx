// src/pages/user/VerifyOTPPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateOtp = () => {
    if (!otp.trim()) {
      setError("OTP is required.");
      return false;
    } else if (!/^\d{6}$/.test(otp)) {
      setError("OTP must be a 6-digit number.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateOtp()) {
      alert("OTP verified successfully!");
      navigate("/payment"); // redirect after verification
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-green-400 p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Verify OTP</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter the 6-digit code sent to your email or phone.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">OTP Code</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className={`w-full rounded-lg p-2 focus:ring-2 outline-none ${
                error
                  ? "border border-red-500 focus:ring-red-400"
                  : otp
                  ? "border border-green-400 focus:ring-green-400"
                  : "border border-gray-300"
              }`}
              placeholder="Enter 6-digit OTP"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
