import React, { useState } from "react";
import Logo from "../assets/Logo.jpeg"; // ✅ Import your local logo

export default function LoginPage() {
  const [form, setForm] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${form.name || "User"}!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-8 text-center">
        {/* ✅ Local Logo */}
        <img
          src={Logo}
          alt="Ulwembu Connect"
          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-800">Login</h2>
        <p className="text-gray-500 text-sm mb-6">Sign in to continue.</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              NAME
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jiara Martins"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-green-400 rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-green-400 rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition"
          >
            Log in
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-3 text-sm">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Forgot Password?
          </a>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Signup !
          </a>
        </div>
      </div>
    </div>
  );
}
