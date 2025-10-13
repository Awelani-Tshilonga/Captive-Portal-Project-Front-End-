import React, { useState } from "react";
import { Users } from 'lucide-react';

const UserManagement = () => {
  // user data
  const [users] = useState([
    { id: 1, name: "Thabo Mokoena", status: "Online", plan: "Free", device: "iPhone 15 Pro", data: 155 },
    { id: 2, name: "Sipho Khumalo", status: "Online", plan: "Free", device: "Samsung Galaxy S23", data: 255 },
    { id: 3, name: "Zanele Dlamini", status: "Offline", plan: "Paid", device: "MacBook Pro 16″", data: 355 },
    { id: 4, name: "Lebo Ndlovu", status: "Blocked", plan: "Paid", device: "Samsung Galaxy Tab S9", data: 455 },
    { id: 5, name: "Kagiso Molefe", status: "Online", plan: "Paid", device: "Vivo V27", data: 555 },
    { id: 6, name: "Ayanda Mthembu", status: "Online", plan: "Free", device: "Huawei P60", data: 655 },
    { id: 7, name: "Precious Hlongwane", status: "Online", plan: "Paid", device: "iPhone 13", data: 755 },
    { id: 8, name: "Tshepo Masango", status: "Online", plan: "Free", device: "Samsung Galaxy Tab S9", data: 855 },
    { id: 9, name: "Busisiwe Khalo", status: "Session Timed Out", plan: "Free", device: "Itel Pro Vision1", data: 955 },
  ]);

  // search filter
  const [filter, setFilter] = useState("");
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <main className="flex-1 p-10 mt-0">

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card title="Total Users" value="15,847" text="+12% this month" icon />
          <Card title="Online Users" value="892" text="Currently online" icon />
          <Card title="New Registrations" value="34" text="This week" icon /> {/* Icon aligned */}
          <Card title="Blocked Users" value="15" text="Security violations" icon />
        </div>

        {/* Table */}
        <section className="mt-10 bg-white rounded-lg p-6 border border-gray-100 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">User Directory</h2>
            <input
              type="text"
              placeholder="Filter by name"
              className="px-3 py-2 border rounded text-sm focus:outline-none focus:ring focus:ring-teal-200"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm divide-y divide-gray-200">
              <thead className="text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-4 py-3 w-12">ID</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Device</th>
                  <th className="px-4 py-3 text-right">Data Used (MB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">{u.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-700">{u.name}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          u.status === "Online"
                            ? "bg-green-50 text-green-600"
                            : u.status === "Blocked"
                            ? "bg-red-50 text-red-600"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{u.plan}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{u.device}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{u.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-gray-500 text-xs">
            Showing {filteredUsers.length} entries
          </div>
        </section>
      </main>
    </div>
  );
};

/* -------------------- Card Component -------------------- */
const Card = ({ title, value, text, icon }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
    <div className="flex items-center justify-between">
      {/* Text content */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-xl font-semibold text-teal-600 mt-1">{value}</span>
        <span className="text-xs text-green-500 mt-1">{text}</span>
      </div>

      {/* Icon content */}
      {icon && (
        <div className="flex-shrink-0 ml-4 p-2 bg-teal-50 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-teal-600" />
        </div>
      )}
    </div>
  </div>
);

export default UserManagement;
