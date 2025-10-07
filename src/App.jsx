import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payments from "./Pages/payments.jsx";
import Ad from "./Pages/ad.jsx";
import PaymentSuccess from "./Pages/PaymentSucess.jsx";
import Redirected from "./Pages/Redirected.jsx";
import Payy from "./Pages/Pay.jsx";
import Plans from './Pages/ChoosePlan.jsx';
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import ResetPage from "./Pages/ResetPasswordPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import VerifyPage from "./Pages/VerifyPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Payments />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/Redirected" element={<Redirected/>} />
        <Route path="payy" element={<Payy />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/verify" element={<VerifyPage />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;

