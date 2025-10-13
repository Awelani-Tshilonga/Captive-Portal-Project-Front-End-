import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/AdminComponents/SideBar";
import Header from "../components/AdminComponents/Header";

export default function AdminLayout() {
  const location = useLocation();

  // Automatically generate a title from the current route
  const getTitle = () => {
    const path = location.pathname.replace("/", "");
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : "Overview";
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    // You can clear sessionStorage, redirect to login, etc.
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={getTitle()} onSignOut={handleSignOut} />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
