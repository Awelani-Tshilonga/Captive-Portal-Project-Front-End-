import React, { useState } from "react";
import logo from "../assets/ulwembu connect logo.jpeg"; // your logo
import citywifi from "../assets/citywifi.png";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

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

        {/* citywifi image visible only on large screens */}
        <div className="hidden md:flex justify-center mt-auto">
          <img
            src={citywifi}
            alt="Ulwembu Connect Logo"
            className="w-[1000px] mr-[172px]  h-62 p-3"
          />
        </div>
                {/* citywifi image visible only on small screens */}
        <div className="flex justify-center">
          <img
            src={citywifi}
            alt="Ulwembu Connect Logo"
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
        <form className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="w-24 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-20 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Name on card"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Street address or P.O box"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Apt., suite, unit, building (Optional)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City"
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="State, province, region"
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none">
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
