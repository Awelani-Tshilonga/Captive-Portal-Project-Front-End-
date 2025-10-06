// src/pages/SignupPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      {/* Outer Gradient Card */}
      <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-400 shadow-lg text-center">
        {/* Logo */}
        <div className="p-6">
          <img
            src={ulwembulogo}
            alt="ULWEMBU CONNECT Logo"
            className="w-16 h-16 mx-auto mb-4 rounded-md"
          />
        </div>

        {/* White Form Section (touching edges, keep rounded-tr-3xl) */}
        <div className="bg-white rounded-tr-3xl p-8 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-6">
            Create new Account
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NAME
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jiara Martinez"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@reallygreatsite.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                placeholder="******"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                DATE OF BIRTH
              </label>
              <input
                id="dob"
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
              Sign up
            </button>
          </form>

          {/* Login Prompt */}
          <p className="mt-4 text-sm text-gray-600">
            Already Registered?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 underline font-medium"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
