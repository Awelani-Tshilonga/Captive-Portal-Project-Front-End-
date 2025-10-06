// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { name, password });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      {/* Outer Gradient Card (same as SignupPage) */}
      <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-400 shadow-lg text-center">
        {/* Logo */}
        <div className="p-6">
          <img
            src={ulwembulogo}
            alt="ULWEMBU CONNECT Logo"
            className="w-16 h-16 mx-auto mb-4 rounded-md"
          />
          <h1 className="text-xl font-bold text-white">ULWEMBU CONNECT</h1>
        </div>

        {/* White Form Section */}
        <div className="bg-white rounded-tr-3xl p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Login</h2>
          <p className="text-sm text-gray-500 mb-6">Sign in to continue</p>

          {/* Login Form */}
          <form className="space-y-4 text-left" onSubmit={handleLogin}>
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
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
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
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="******"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
              Log in
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 flex justify-between text-sm text-blue-500">
            <button onClick={() => navigate("/")} className="hover:underline">
              ← Back to Home
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
