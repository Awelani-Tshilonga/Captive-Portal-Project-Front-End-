// src/pages/HomePage.jsx
import { useNavigate } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400 px-4">
      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 text-center">
        {/* Logo */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6">
          <img
            src={ulwembulogo}
            alt="ULWEMBU CONNECT Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Text */}
        <h1 className="text-blue-600 text-xl font-semibold leading-tight">
          Connecting Citizens,<br />
          Empowering Communities
        </h1>
        <p className="mt-2 text-gray-600 font-medium">Enjoy free Wi-Fi</p>

        {/* Buttons */}
        <div className="mt-10 space-y-4">
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-2 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
