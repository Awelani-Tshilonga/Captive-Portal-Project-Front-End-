import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payments from "./Pages/payments.jsx";
import Ad from "./Pages/ad.jsx";
import PaymentSuccess from "./Pages/PaymentSucess.jsx";
import Redirected from "./Pages/Redirected.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Payments />} />

        <Route path="/payments" element={<Payments />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
         <Route path="/Redirected" element={<Redirected/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

