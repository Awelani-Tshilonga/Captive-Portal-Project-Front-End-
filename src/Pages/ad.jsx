import React from "react";
import logo from "../assets/ulwembu connect logo.jpeg";
import video from "../assets/video.mp4";

export default function Ad() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      {/* Card */}
      <div className="bg-white shadow-xl rounded -3xl overflow-hidden max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-green-400 p-6 flex flex-col items-center">
          <img
            src={logo}
            alt="Ulwembu Connect"
            className="w-20 h-20 rounded-xl bg-white p-2 shadow-md mb-4"
          />
          <h1 className="text-white text-lg font-bold text-center">
            You’ve successfully logged in
          </h1>
          <p className="text-white text-sm text-center opacity-90">
            You will be redirected shortly
          </p>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col items-center space-y-6">
          {/* Video */}
          <video
            src={video}
            controls
            className="rounded-2xl shadow-lg w-full"
          />

          {/* Button */}
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-teal-500 to-green-400 text-white font-semibold shadow-md hover:opacity-90 transition">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
