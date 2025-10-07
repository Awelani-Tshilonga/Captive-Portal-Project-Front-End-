import { useNavigate } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg"; // Adjust path as needed

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(to bottom right, #00B0F0, #00D18C)",
      }}
    >
      {/* Logo in white circle */}
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
        <img
          src={ulwembulogo}
          alt="ULWEMBU CONNECT Logo"
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Tagline */}
      <h1 className="text-white text-lg font-semibold leading-snug">
        Connecting Citizens,<br /> Empowering Communities
      </h1>
      <p className="text-white mt-2 text-sm">Enjoy free Wi-Fi</p>

      {/* Buttons */}
      <div className="mt-10 w-full max-w-[240px] space-y-4">
        {/* Get Started button (outlined white) */}
        <button
          onClick={() => navigate("/signup")}
          className="w-full py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-green-600 transition duration-300"
        >
          Get Started
        </button>

        {/* Log In button (solid white, green text) */}
        <button
          onClick={() => navigate("/login")}
          className="w-full py-2 bg-white text-[#00B070] rounded-full font-medium hover:bg-gray-100 transition duration-300"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default HomePage;