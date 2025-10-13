import React from "react";
import logo from "../../assets/ulwembu connect logo.jpeg";
import video from "../../assets/video.mp4";
import { useNavigate } from "react-router-dom";

export default function Ad() {
  const navigate = useNavigate(); // hook to navigate

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-green-400 p-6">
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Section */}
        <div className="p-10 flex flex-col items-center justify-center text-center text-white space-y-4 bg-gradient-to-r from-teal-500 to-green-400">
          <img
            src={logo}
            alt="Ulwembu Connect"
            className="w-24 h-24 rounded-xl bg-white p-2 shadow-md mb-2"
          />
          <h1 className="text-2xl font-bold">You've successfully logged in</h1>
          <p className="text-sm opacity-90">
            You will be redirected shortly
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-10 flex flex-col items-center justify-center space-y-6 rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl">
          {/* Video */}
          <video
            src={video}
            controls
            className="rounded-2xl shadow-lg w-72 max-w-md"
          />

          {/* Button */}
          <button
            onClick={() => navigate("/plans")} // navigate to /plans
            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-green-400 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}