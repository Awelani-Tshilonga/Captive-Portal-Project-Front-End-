// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import ResetPage from "./pages/ResetPage";
import VerifyPage from "./pages/VerifyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/reset" element={<ResetPage />} />
      <Route path="/verify" element={<VerifyPage />} />
    </Routes>
  );
};

export default App;
