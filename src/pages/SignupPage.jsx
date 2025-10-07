// src/pages/SignupPage.jsx
import { useNavigate } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00B0F0] to-[#00D18C] px-4">
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-xl overflow-hidden">
        {/* Logo and Header */}
        <div className="p-6 text-center">
          <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-2">
            <img
              src={ulwembulogo}
              alt="ULWEMBU CONNECT Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-[#00B0F0]">
            Create new Account
          </h2>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jiana Martina"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D18C]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="hello@reallygreatsite.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D18C]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D18C]"
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              DATE OF BIRTH
            </label>
            <select
              id="dob"
              name="dob"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#00D18C]"
            >
              <option value="">Select</option>
              <option value="2000-01-01">January 1, 2000</option>
              <option value="2001-01-01">January 1, 2001</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#00D18C] text-white rounded-md text-sm font-semibold hover:bg-[#00B070] transition"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-600">
            Already Registered?{" "}
            <a href="/login" className="text-[#00B0F0] hover:underline">
              Log in now.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
