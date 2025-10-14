import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail, validatePhone, validateTextOnly } from "../../utils/validation";
import ulwembulogo from "../../assets/ulwembulogo.jpeg";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // ✅ track touched fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    // ✅ live validation as you type
    validateField(name, value);
  };

  const validateField = (field, value) => {
    let error = "";

    if (field === "name") {
      if (!value.trim()) error = "Full name is required.";
      else if (!validateTextOnly(value))
        error = "Name must contain only letters.";
    }

    if (field === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!validateEmail(value))
        error = "Please enter a valid email.";
    }

    if (field === "phone") {
      if (!value.trim()) error = "Phone number is required.";
      else if (!validatePhone(value))
        error = "Phone must be 10–15 digits.";
    }

    if (field === "password") {
      if (!value.trim()) error = "Password is required.";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required.";
    else if (!validateTextOnly(form.name))
      newErrors.name = "Name must contain only letters.";

    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email))
      newErrors.email = "Please enter a valid email.";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!validatePhone(form.phone))
      newErrors.phone = "Phone must be 10–15 digits.";

    if (!form.password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/verify");
  };

  // ✅ dynamic border class logic
  const getInputClass = (field) => {
    const hasError = errors[field];
    const isTouched = touched[field];
    return `w-full border rounded-lg p-2 focus:ring-2 outline-none transition-all duration-150 ${
      isTouched
        ? hasError
          ? "border-red-500 focus:ring-red-400"
          : "border-green-400 focus:ring-green-400"
        : "border-gray-300"
    }`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 text-center">
        <img
          src={ulwembulogo}
          alt="Ulwembu Connect"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={(e) => validateField("name", e.target.value)}
              className={getInputClass("name")}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={(e) => validateField("email", e.target.value)}
              className={getInputClass("email")}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={(e) => validateField("phone", e.target.value)}
              className={getInputClass("phone")}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              onBlur={(e) => validateField("password", e.target.value)}
              className={getInputClass("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded-lg hover:from-teal-600 hover:to-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
