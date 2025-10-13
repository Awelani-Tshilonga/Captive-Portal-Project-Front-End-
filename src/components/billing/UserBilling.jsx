import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Progress } from "../ui/progress";
import { Users, Clock, Database, CreditCard } from "lucide-react";

const mockUserBilling = [
  {
    id: "USR001",
    username: "john.doe",
    device: "iPhone 14 Pro",
    plan: "Weekly Pro",
    dataUsed: 2.3,
    dataLimit: 5,
    timeUsed: "4h 23m",
    amountOwed: 24.99,
    paymentStatus: "paid",
  },
  {
    id: "USR002",
    username: "jane.smith",
    device: "Samsung Galaxy S23",
    plan: "Daily Pass",
    dataUsed: 4.1,
    dataLimit: 5,
    timeUsed: "5h 12m",
    amountOwed: 9.99,
    paymentStatus: "pending",
  },
  {
    id: "USR003",
    username: "mike.wilson",
    device: "MacBook Pro M2",
    plan: "Monthly Pro",
    dataUsed: 12.5,
    dataLimit: -1,
    timeUsed: "2d 14h",
    amountOwed: 99.99,
    paymentStatus: "paid",
  },
  {
    id: "USR004",
    username: "sarah.johnson",
    device: "iPad Air",
    plan: "Free Access",
    dataUsed: 0.8,
    dataLimit: 1,
    timeUsed: "45m",
    amountOwed: 2.99,
    paymentStatus: "overdue",
  },
  {
    id: "USR005",
    username: "alex.chen",
    device: "Dell XPS 13",
    plan: "Daily Pass",
    dataUsed: 3.2,
    dataLimit: 5,
    timeUsed: "3h 56m",
    amountOwed: 9.99,
    paymentStatus: "paid",
  },
];

export function UserBilling() {
  const getPaymentStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-success text-success-foreground">Paid</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getDataUsagePercentage = (used, limit) => {
    if (limit === -1) return 0; // Unlimited
    return Math.min((used / limit) * 100, 100);
  };

  const totalUsers = mockUserBilling.length;
  const activeUsers = mockUserBilling.filter(u => u.paymentStatus === "paid").length;
  const totalRevenue = mockUserBilling
    .filter(u => u.paymentStatus === "paid")
    .reduce((sum, u) => sum + u.amountOwed, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Active connections
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              Currently online
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-combined">
              R{totalRevenue.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              From active subscriptions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* User Billing Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            User Billing Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Username/Device</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Data Usage</TableHead>
                <TableHead>Time Used</TableHead>
                <TableHead>Amount Owed</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUserBilling.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-mono text-sm">{user.id}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{user.username}</div>
                      <div className="text-sm text-muted-foreground">
                        {user.device}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.plan}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="text-sm">
                        {user.dataUsed} GB
                        {user.dataLimit !== -1 && ` / ${user.dataLimit} GB`}
                      </div>
                      {user.dataLimit !== -1 && (
                        <Progress
                          value={getDataUsagePercentage(user.dataUsed, user.dataLimit)}
                          className="h-2"
                        />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {user.timeUsed}
                  </TableCell>
                  <TableCell className="font-medium">
                    R{user.amountOwed.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {getPaymentStatusBadge(user.paymentStatus)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
