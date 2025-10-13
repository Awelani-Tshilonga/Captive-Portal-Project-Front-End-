import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";
import { DollarSign, TrendingUp, Users, Eye } from "lucide-react";

const revenueData = [
  { name: "User Payments", value: 2847.5, color: "hsl(var( 0--revenue-user))" },
  { name: "Ad Revenue", value: 1253.75, color: "hsl(var(--revenue-ads))" },
];

const planRevenueData = [
  { plan: "Free Access", revenue: 89.7, users: 30 },
  { plan: "Daily Pass", revenue: 599.4, users: 60 },
  { plan: "Weekly Pro", revenue: 1749.3, users: 70 },
  { plan: "Monthly Pro", revenue: 1299.87, users: 13 },
];

const monthlyRevenueData = [
  { month: "Jan", userPayments: 2100, adRevenue: 800, combined: 2900 },
  { month: "Feb", userPayments: 2300, adRevenue: 900, combined: 3200 },
  { month: "Mar", userPayments: 2150, adRevenue: 850, combined: 3000 },
  { month: "Apr", userPayments: 2500, adRevenue: 1100, combined: 3600 },
  { month: "May", userPayments: 2750, adRevenue: 1200, combined: 3950 },
  { month: "Jun", userPayments: 2847, adRevenue: 1254, combined: 4101 },
];

const COLORS = [
  "hsl(var(--revenue-user))",
  "hsl(var(--revenue-ads))",
];

export function RevenueDashboard() {
  const totalUserPayments = revenueData[0].value;
  const totalAdRevenue = revenueData[1].value;
  const combinedRevenue = totalUserPayments + totalAdRevenue;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total User Payments</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-user">
              R{totalUserPayments.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +15.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ad Revenue</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-ads">
              R{totalAdRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +8.7% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Combined Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-combined">
              R{combinedRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +12.4% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`R${value}`, ""]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={planRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="plan" />
                <YAxis />
                <Tooltip formatter={(value) => [`R${value}`, "Revenue"]} />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value, name) => [`R${value}`, name]} />
              <Line type="monotone" dataKey="userPayments" stroke="hsl(var(--revenue-user))" strokeWidth={3} name="User Payments" />
              <Line type="monotone" dataKey="adRevenue" stroke="hsl(var(--revenue-ads))" strokeWidth={3} name="Ad Revenue" />
              <Line type="monotone" dataKey="combined" stroke="hsl(var(--revenue-combined))" strokeWidth={3} name="Combined Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Plan Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Plan Performance Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {planRevenueData.map((plan) => (
              <div key={plan.plan} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="font-medium">{plan.plan}</div>
                  <div className="text-sm text-muted-foreground">
                    {plan.users} users
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">R{plan.revenue}</div>
                  <div className="text-sm text-muted-foreground">
                    R{(plan.revenue / plan.users).toFixed(2)} per user
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
