import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Ulwembu connect logo.jpeg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-400 px-6">
      <div className="text-center text-white max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="ULWEMBU CONNECT Logo"
            className="w-20 h-20 rounded-md shadow-md"
          />
        </div>

        {/* Headings */}
        <h1 className="text-xl font-semibold mb-2">
          Connecting Citizens,
          <br />
          Empowering Communities
        </h1>
        <p className="text-sm mb-8">Enjoy free Wi-Fi</p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/signup")}
            className="py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-500 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="py-3 bg-white text-green-500 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;