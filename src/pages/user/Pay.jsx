import React, { useState } from "react";
import logo from "../../assets/ulwembu connect logo.jpeg";
import citywifi from "../../assets/citywifi.png";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.cardNumber.trim()) newErrors.cardNumber = true;
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
      newErrors.cardNumber = true;

    if (!formData.expiry.trim()) newErrors.expiry = true;
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry))
      newErrors.expiry = true;

    if (!formData.cvc.trim()) newErrors.cvc = true;
    else if (!/^\d{3,4}$/.test(formData.cvc)) newErrors.cvc = true;

    if (!formData.name.trim() || /[0-9]/.test(formData.name))
      newErrors.name = true;

    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.city.trim() || /[0-9]/.test(formData.city))
      newErrors.city = true;
    if (!formData.state.trim() || /[0-9]/.test(formData.state))
      newErrors.state = true;
    if (!formData.country.trim()) newErrors.country = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/PaymentSuccess");
    }
  };

  // Conditional border class
  const borderClass = (field) =>
    errors[field]
      ? "border-red-500 focus:ring-red-400"
      : "border-gray-300 focus:ring-blue-500";

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-blue-500 to-green-400">
      {/* Left Section */}
      <div className="text-white flex flex-col justify-between p-10">
        <div className="flex justify-center mb-6 mt-10">
          <img
            src={logo}
            alt="Ulwembu Connect Logo"
            className="w-24 h-24 rounded-xl shadow-lg bg-white p-3"
          />
        </div>

        <div className="hidden md:flex justify-center mt-auto">
          <img
            src={citywifi}
            alt="City WiFi"
            className="w-[1000px] mr-[172px]  h-62 p-3"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={citywifi}
            alt="City WiFi"
            className="w-[500px] h-48 md:hidden lg:hidden -mb-[72px] opacity-30"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="p-10 bg-white rounded-tl-3xl">
        <h2 className="text-2xl font-semibold mb-4">Payment method</h2>
        <div className="flex gap-3 mb-8">
          {["card", "paypal", "apple", "google"].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`flex-1 border rounded-lg py-2 text-center capitalize ${
                paymentMethod === method
                  ? "border-blue-500 text-blue-600"
                  : "border-gray-300 hover:border-blue-300"
              }`}
            >
              {method === "card" && "Credit or Debit card"}
              {method === "paypal" && "PayPal"}
              {method === "apple" && "Apple Pay"}
              {method === "google" && "Google Pay"}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Payment information</h2>
        <form className="space-y-4" onSubmit={handlePay}>
          <div className="flex gap-3">
            <input
              type="text"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
              onChange={handleChange}
              className={`flex-1 border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
                "cardNumber"
              )}`}
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className={`w-24 border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
                "expiry"
              )}`}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
              className={`w-20 border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
                "cvc"
              )}`}
            />
          </div>

          <input
            type="text"
            name="name"
            placeholder="Name on card"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
              "name"
            )}`}
          />
          <input
            type="text"
            name="address"
            placeholder="Street address or P.O box"
            value={formData.address}
            onChange={handleChange}
            className={`w-full border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
              "address"
            )}`}
          />
          <input
            type="text"
            name="apt"
            placeholder="Apt., suite, unit, building (Optional)"
            value={formData.apt}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="flex gap-3">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={`flex-1 border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
                "city"
              )}`}
            />
            <input
              type="text"
              name="state"
              placeholder="State, province, region"
              value={formData.state}
              onChange={handleChange}
              className={`flex-1 border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
                "state"
              )}`}
            />
          </div>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full border rounded-lg p-3 focus:ring-2 outline-none ${borderClass(
              "country"
            )}`}
          >
            <option value="">Select country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>South Africa</option>
            <option>Canada</option>
          </select>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:bg-blue-700 text-white text-xl font-bold py-2 rounded-lg mt-4"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
