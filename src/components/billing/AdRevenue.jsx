import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Progress } from "../ui/progress";
import { Eye, MousePointer, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const mockAdMetrics = [
  { id: "AD001", adNetwork: "Google AdSense", impressions: 125420, clicks: 2845, ctr: 2.27, revenue: 847.50, status: "active" },
  { id: "AD002", adNetwork: "Facebook Ads", impressions: 89350, clicks: 1567, ctr: 1.75, revenue: 324.75, status: "active" },
  { id: "AD003", adNetwork: "Amazon DSP", impressions: 67890, clicks: 892, ctr: 1.31, revenue: 156.25, status: "paused" },
  { id: "AD004", adNetwork: "Microsoft Advertising", impressions: 34567, clicks: 578, ctr: 1.67, revenue: 89.40, status: "pending" },
];

const totalMetrics = {
  totalImpressions: mockAdMetrics.reduce((sum, ad) => sum + ad.impressions, 0),
  totalClicks: mockAdMetrics.reduce((sum, ad) => sum + ad.clicks, 0),
  totalRevenue: mockAdMetrics.reduce((sum, ad) => sum + ad.revenue, 0),
  averageCtr: mockAdMetrics.reduce((sum, ad) => sum + ad.ctr, 0) / mockAdMetrics.length,
};

export function AdRevenue() {
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "paused":
        return <Badge className="bg-warning text-warning-foreground">Paused</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getCtrColor = (ctr) => {
    if (ctr >= 2) return "text-success";
    if (ctr >= 1.5) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">
              {totalMetrics.totalImpressions.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+12.4% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {totalMetrics.totalClicks.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+8.7% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average CTR</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-combined">
              {totalMetrics.averageCtr.toFixed(2)}%
            </div>
            <p className="text-xs text-muted-foreground">Industry average: 1.8%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ad Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-ads">
              R{totalMetrics.totalRevenue.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Ad Network Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockAdMetrics.map((ad) => (
              <div key={ad.id} className="space-y-3 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{ad.adNetwork}</h4>
                    {getStatusBadge(ad.status)}
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-revenue-ads">
                      R{ad.revenue.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Impressions</div>
                    <div className="font-medium">{ad.impressions.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Clicks</div>
                    <div className="font-medium">{ad.clicks.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">CTR</div>
                    <div className={`font-medium ${getCtrColor(ad.ctr)}`}>
                      {ad.ctr.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Performance Score</span>
                    <span>{Math.min(ad.ctr * 50, 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={Math.min(ad.ctr * 50, 100)} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Detailed Ad Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ad Network</TableHead>
                <TableHead>Impressions</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>CTR</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>RPM</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAdMetrics.map((ad) => (
                <TableRow key={ad.id}>
                  <TableCell className="font-medium">{ad.adNetwork}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted-foreground" /> {ad.impressions.toLocaleString()}
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <MousePointer className="h-4 w-4 text-muted-foreground" /> {ad.clicks.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <span className={getCtrColor(ad.ctr)}>{ad.ctr.toFixed(2)}%</span>
                  </TableCell>
                  <TableCell className="font-medium">R{ad.revenue.toFixed(2)}</TableCell>
                  <TableCell>R{((ad.revenue / ad.impressions) * 1000).toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(ad.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
