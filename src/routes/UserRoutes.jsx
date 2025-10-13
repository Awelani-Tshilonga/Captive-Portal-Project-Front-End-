import { Routes, Route } from "react-router-dom";

import Payments from "../pages/user/Payments";
import Ad from "../pages/user/Ad";
import PaymentSuccess from "../pages/user/PaymentSuccess";
import Redirected from "../pages/user/Redirected";
import Payy from "../pages/user/Pay";
import Plans from "../pages/user/ChoosePlan";
import HomePage from "../pages/user/HomePage";
import LoginPage from "../pages/user/LoginPage";
import SignupPage from "../pages/user/SignupPage";
import ResetPage from "../pages/user/ResetPasswordPage";
import VerifyPage from "../pages/user/VerifyPage";

export default function UserRoutes() {
  return (
    <Routes>
      
        <Route path="/" element={<Payments />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/redirected" element={<Redirected />} />
        <Route path="/payy" element={<Payy />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/verify" element={<VerifyPage />} />
     
    </Routes>
  );
}
