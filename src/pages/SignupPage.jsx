// src/pages/SignupPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ulwembulogo from "../assets/ulwembulogo.jpeg";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, password, dob };
    console.log("Signup Data:", formData);
    navigate("/verify");
  };

  const dobOptions = Array.from({ length: 26 }, (_, i) => {
    const year = 2000 + i;
    return (
      <option key={year} value={`${year}-01-01`}>
        January 1, {year}
      </option>
    );
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* White Card */}
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-lg overflow-hidden">
        {/* Top gradient header inside card */}
        <div className="bg-gradient-to-br from-[#00B0F0] to-[#00D084] p-6 text-center">
          <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src={ulwembulogo}
              alt="ULWEMBU CONNECT Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold text-white mt-4">
            Create new Account
          </h2>
        </div>

        {/* Form inside white part of card */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-600 uppercase"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Jiana Martina"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-600 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="hello@reallygreatsite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-xs font-medium text-gray-600 uppercase"
            >
              Date of Birth
            </label>
            <select
              id="dob"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-400"
            >
              <option value="">Select</option>
              {dobOptions}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium bg-[#00C853] text-white rounded-md hover:bg-[#00BFA5] transition-colors"
          >
            Sign up
          </button>

          <p className="text-center text-xs text-gray-600">
            Already Registered?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
