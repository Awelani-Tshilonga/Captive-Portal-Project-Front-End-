import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import UserManagement from "../pages/admin/UserManagement";
import Security from "../pages/admin/Security";
import Analytics from "../pages/admin/Analytics";
import BillingDashboard from "../pages/admin/BillingDashboard";
import ManageUser from "../pages/admin/ManageUser";
import Alerts from "../pages/admin/Alerts";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/security" element={<Security />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/notifications" element={<Alerts />} />
        <Route path="/billing" element={<BillingDashboard />} />
        <Route path="/manage-user" element={<ManageUser />} />
      </Route>
    </Routes>
  );
}
