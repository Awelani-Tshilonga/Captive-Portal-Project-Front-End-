import React, { useState } from "react";

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
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <aside className="w-20 bg-teal-600 text-white flex flex-col items-center py-8 space-y-6">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-teal-900 font-bold">
            UL
          </div>
        </div>

        {/* Nav icons */}
        <nav className="flex flex-col items-center space-y-6 mt-6">
          <button className="p-2 rounded hover:bg-teal-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M3 11.5L12 4l9 7.5M5 21V11h14v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-teal-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87M12 7a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-teal-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M12 2l8 4v6c0 5-3.58 9.74-8 11-4.42-1.26-8-6-8-11V6l8-4z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-teal-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M3 3v18h18M7 13V7m5 10V7m5 2V7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        <div className="flex-1" />
        <div className="text-xs opacity-80">v1.0</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-700">User Management</h1>
          <button className="text-sm text-gray-500 hover:text-teal-600">
            Sign Out
          </button>
        </div>

        <div className="my-4 h-1 bg-gray-100 rounded"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card title="Total Users" value="15,847" text="+12% this month" />
          <Card title="Online Users" value="892" text="Currently online" />
          <Card title="New Registrations" value="34" text="This week" />
          <Card title="Blocked Users" value="15" text="Security violations" />
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
const Card = ({ title, value, text }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-xl font-semibold text-teal-600 mt-1">{value}</span>
      <span className="text-xs text-green-500 mt-1">{text}</span>
    </div>
  </div>
);

export default UserManagement;