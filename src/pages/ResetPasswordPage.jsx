// src/pages/ResetPasswordPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      {/* Outer Gradient Card */}
      <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-400 shadow-lg text-center">
        {/* Logo */}
        <div className="p-6">
          <img
            src={ulwembulogo}
            alt="ULWEMBU CONNECT Logo"
            className="w-20 h-20 mb-2 mx-auto rounded-full"
          />
          <h1 className="text-xl font-bold text-white">ULWEMBU CONNECT</h1>
        </div>

        {/* White Form Section */}
        <div className="bg-white rounded-tr-3xl p-8 text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Reset Password</h2>

          {/* Form */}
          <form className="space-y-4 text-left">
            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NEW PASSWORD
              </label>
              <input
                id="newPassword"
                type="password"
                placeholder="******"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CONFIRM PASSWORD
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="******"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login"); // Navigate to login after reset
              }}
            >
              Log In
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-sm text-gray-600">
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 underline font-medium"
            >
              Back to Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
