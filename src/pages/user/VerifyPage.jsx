import React, { useState } from "react";
import Logo from "../../assets/Logo.jpeg";
import { useNavigate } from "react-router-dom";


export default function VerifyPhone() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next box
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    // Here you can add OTP validation logic later if needed
    navigate("/ChoosePlan"); // ✅ Navigate to plans
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0085FF] to-[#6DDC5F]">
      <div className="bg-white w-[320px] rounded-3xl shadow-lg flex flex-col items-center py-10 relative">
        {/* Logo */}
        <div className="absolute -top-12 bg-white p-4 rounded-2xl shadow-md">
          <img src={Logo} alt="Ulwembu Connect Logo" className="w-16 h-16" />
        </div>

        {/* Content */}
        <div className="mt-12 text-center px-6">
          <h2 className="text-2xl font-bold text-[#007BFF]">Verify Your Phone</h2>
          <p className="text-gray-600 text-sm mt-2">
            We’ve sent a 6-digit code to your phone number. Enter it below to
            continue.
          </p>

          {/* OTP Boxes */}
          <div className="flex justify-center mt-6 space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength="1"
                className="w-10 h-10 border border-gray-300 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#6DDC5F] text-lg font-semibold"
              />
            ))}
          </div>

          {/* Resend text */}
          <div className="text-sm text-gray-600 mt-3">
            Didn’t receive code?{" "}
            <button className="text-[#007BFF] font-medium hover:underline">
              Resend
            </button>
          </div>

          {/* Verify button */}
          <button
            onClick={handleVerify}
            className="w-full mt-5 bg-gradient-to-r from-[#0085FF] to-[#6DDC5F] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}