import React, { useState } from "react";

const VerifyPage = () => {
  const [code, setCode] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    alert(`Verification code "${code}" submitted!`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Verify Account</h2>
      <form onSubmit={handleVerify} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-purple-600 text-white py-2 rounded">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyPage;
