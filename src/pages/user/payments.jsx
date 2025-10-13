import React, { useState } from "react";
import logo from "../../assets/Ulwembu connect logo.jpeg";
import googlePayIcon from "../../assets/google.png";
import voucherIcon from "../../assets/voucher.png";
import paypalIcon from "../../assets/paypal.png";
import applePayIcon from "../../assets/apple.png";

export default function PaymentPage() {
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <img
          src={logo}
          alt="ULWEMBU Connect"
          className="h-24 w-24 object-contain mb-6"
        />
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 
        </h1>
        <p className="text-lg text-gray-700">Thank you for your purchase!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-6">
      {/* Card */}
      <div className="max-w-sm w-full overflow-hidden shadow-md border border-green-400 rounded-xl">
        {/* Card Header with gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-green-400 p-6 flex flex-col items-center rounded-t-xl">
          <img
            src={logo}
            alt="Ulwembu Connect Logo"
            className="w-20 h-20 rounded-xl shadow-lg bg-white p-2 mb-3"
          />
          <h1 className="text-white text-xl font-bold">Payment Details</h1>
        </div>

        {/* White Card Body overlapping the header with rounded top-right corner */}
        <div className="bg-white p-6 -mt-4 rounded-tr-3xl relative z-10">
          {/* Payment Methods */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg py-2 hover:opacity-90 transition">
              <img src={googlePayIcon} alt="Google Pay" className="h-5 w-5 mr-2" />
              Google Pay
            </button>
            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg py-2 hover:opacity-90 transition">
              <img src={voucherIcon} alt="Voucher" className="h-5 w-5 mr-2" />
              1 Voucher
            </button>
            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg py-2 hover:opacity-90 transition">
              <img src={paypalIcon} alt="PayPal" className="h-5 w-5 mr-2" />
              PayPal
            </button>
            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg py-2 hover:opacity-90 transition">
              <img src={applePayIcon} alt="Apple Pay" className="h-5 w-5 mr-2" />
              Apple Pay
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Card Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number *
              </label>
              <div className="grid grid-cols-4 gap-2">
                <input type="text" maxLength="4" className="border border-green-400 rounded-lg p-2 text-center outline-none focus:ring-2 focus:ring-green-400" />
                <input type="text" maxLength="4" className="border border-green-400 rounded-lg p-2 text-center outline-none focus:ring-2 focus:ring-green-400" />
                <input type="text" maxLength="4" className="border border-green-400 rounded-lg p-2 text-center outline-none focus:ring-2 focus:ring-green-400" />
                <input type="text" maxLength="4" className="border border-green-400 rounded-lg p-2 text-center outline-none focus:ring-2 focus:ring-green-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Holder Name *
              </label>
              <input
                type="text"
                className="w-full border border-green-400 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-green-400 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV *
                </label>
                <input
                  type="password"
                  maxLength="3"
                  className="w-full border border-green-400 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </form>

          {/* Total */}
          <div className="flex justify-between items-center mt-6 text-gray-700 font-medium">
            <span>Total Amount :</span>
            <span>R 79</span>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold shadow-md transition"
          >
            Pay R79
          </button>
        </div>
      </div>
    </div>
  );
}