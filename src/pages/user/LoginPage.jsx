import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";
import { validateTextOnly } from "../../utils/validation";

export default function LoginPage() {
  const [form, setForm] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    else if (!validateTextOnly(form.name)) newErrors.name = "Name must contain only letters.";

    if (!form.password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const normalized = form.name.trim().toLowerCase();
    if (normalized === "thandi mukwebho") navigate("/Redirected");
    else if (normalized === "lukhanyo omalu") navigate("/ad");
    else alert("User not recognized. Please enter a valid name.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-8 text-center">
        <img src={Logo} alt="Logo" className="w-24 h-24 mx-auto mb-4 rounded-full" />

        <h2 className="text-2xl font-bold text-blue-800">Login</h2>
        <p className="text-gray-500 text-sm mb-6">Sign in to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full rounded-lg p-2 focus:ring-2 outline-none ${
                errors.name
                  ? "border border-red-500 focus:ring-red-400"
                  : "border border-green-400 focus:ring-green-400"
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full rounded-lg p-2 focus:ring-2 outline-none ${
                errors.password
                  ? "border border-red-500 focus:ring-red-400"
                  : "border border-green-400 focus:ring-green-400"
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
