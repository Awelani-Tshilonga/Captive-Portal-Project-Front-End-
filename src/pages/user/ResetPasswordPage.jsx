import React, { useState } from "react";
import Logo from "../../assets/Logo.jpeg"; 
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

export default function ResetPassword() {
  const [name, setName] = useState(""); // ✅ Track user name
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Check who is logging in
    if (name.trim().toLowerCase() === "thandi mukwebho".toLowerCase()) {
      navigate("/Redirected"); // Paid user
    } else if (name.trim().toLowerCase() === "lukhanyo omalu".toLowerCase()) {
      navigate("/ad"); // Not paid
    } else {
      alert("User not recognized. Please enter a valid name.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0085FF] to-[#6DDC5F]">
      <div className="bg-white w-[320px] rounded-3xl shadow-lg flex flex-col items-center py-10 relative">
        {/* Logo */}
        <div className="absolute -top-12 bg-white p-4 rounded-2xl shadow-md">
          <img src={Logo} alt="Ulwembu Connect Logo" className="w-16 h-16" />
        </div>

        {/* Content */}
        <div className="mt-12 text-center px-6 w-full">
          <h2 className="text-2xl font-bold text-[#007BFF]">Reset Password</h2>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6DDC5F]"
                required
              />
            </div>

            {/* New Password */}
            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-700 font-semibold mb-1">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6DDC5F]"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-700 font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6DDC5F]"
                required
              />
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0085FF] to-[#6DDC5F] text-white font-semibold py-2 rounded-md mt-2 hover:opacity-90 transition"
            >
              Log in
            </button>
          </form>

          {/* Back to Log in */}
          <p className="text-sm text-gray-600 mt-4">
            <a href="/login" className="hover:underline">
              Back to Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}