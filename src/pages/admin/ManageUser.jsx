import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  User,
  Wifi,
  FileText,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const ManageUser = () => {
  const data = [
    { name: "Download", value: 70 },
    { name: "Upload", value: 30 },
  ];
  const COLORS = ["#22c55e", "#d1d5db"]; // blue + gray

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ---------------- Sidebar ---------------- */}
      <aside className="w-20 bg-[#00B0F0] flex flex-col items-center py-6 space-y-6">
        <User className="text-white w-6 h-6 cursor-pointer" />
        <Wifi className="text-white w-6 h-6 cursor-pointer" />
        <FileText className="text-white w-6 h-6 cursor-pointer" />
        <Bell className="text-white w-6 h-6 cursor-pointer" />
        <Settings className="text-white w-6 h-6 cursor-pointer" />
        <LogOut className="text-white w-6 h-6 cursor-pointer mt-auto mb-6" />
      </aside>

      {/* ---------------- Main Content ---------------- */}
      <main className="flex-1 p-6">
        {/* Header Card */}
        <div className="bg-white shadow-sm rounded-lg p-5 mb-6 flex items-center justify-between border border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="bg-[#E6F7FF] text-[#00B0F0] w-12 h-12 rounded-full flex items-center justify-center font-semibold">
              TM
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Thabo Mokoena
              </h2>
              <p className="text-sm text-gray-500">Device: iPhone 15 Pro</p>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              <span className="font-medium">Device MAC:</span> 00:11:22:33:44:55
            </p>
            <p>
              <span className="font-medium">IP Address:</span>{" "}
              <span className="text-[#00B0F0]">192.168.1.20</span>
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-600 font-semibold">Online</span>
            </p>
            <p>
              <span className="font-medium">Plan:</span> Free
            </p>
          </div>

          <button className="bg-red-100 text-red-600 font-medium px-4 py-1 rounded-md hover:bg-red-200">
            Block
          </button>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left - Personal and Contact Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-3">
              Personal Information
            </h3>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Gender:</span>
              <span className="font-medium">Male</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Date Of Birth:</span>
              <span className="font-medium">27 Sep 1999</span>
            </div>

            <h3 className="font-semibold text-gray-700 mb-3">
              Contact Information
            </h3>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Phone No.:</span>
              <span className="font-medium">072 345 6759</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Email:</span>
              <span className="font-medium text-[#00B0F0]">
                tmokoena@gmail.com
              </span>
            </div>
          </div>

          {/* Right - Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <h3 className="font-semibold text-gray-700 mb-2">
              Upload vs Download
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Example: 70% download, 30% upload
            </p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  <Cell fill="#00B0F0" />
                  <Cell fill="#E5E7EB" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sessions Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-700 mb-3">Sessions</h3>
          <table className="w-full text-sm text-left border-t border-gray-100">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">Session ID</th>
                <th className="py-2">AP Name</th>
                <th className="py-2">Plan</th>
                <th className="py-2">Duration</th>
                <th className="py-2">Status</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-100">
                <td className="py-2">S10123</td>
                <td>AP-Entrance</td>
                <td>Free</td>
                <td>45 min</td>
                <td className="text-green-600">Active</td>
                <td>30 Oct 2025</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-2">S10123</td>
                <td>AP-Entrance</td>
                <td>Daily Pass</td>
                <td>24 hrs</td>
                <td className="text-gray-500">Time Out</td>
                <td>12 Oct 2025</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-2">S10123</td>
                <td>AP-Entrance</td>
                <td>Daily Pass</td>
                <td>24 hrs</td>
                <td className="text-gray-500">Time Out</td>
                <td>5 Oct 2025</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="py-2">S10123</td>
                <td>AP-Entrance</td>
                <td>Free</td>
                <td>2 hrs</td>
                <td className="text-gray-500">Time Out</td>
                <td>1 Oct 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ManageUser;
