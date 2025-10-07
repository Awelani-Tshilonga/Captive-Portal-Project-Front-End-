import React, { useState } from "react";

const ResetPage = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-yellow-500 text-white py-2 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ResetPage;
