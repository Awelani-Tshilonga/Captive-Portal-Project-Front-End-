import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Plus, Edit, Trash2, Wifi, Timer, HardDrive, DollarSign } from "lucide-react";
import { useToast } from "../../hooks/use-toast";


const mockPlans = [
  { id: "1", name: "Free Access", speed: "10 Mbps", dataLimit: "1 GB", duration: "1 Hour", price: 2.99, adsEnabled: true },
  { id: "2", name: "Daily Pass", speed: "25 Mbps", dataLimit: "5 GB", duration: "6 Hours", price: 9.99, adsEnabled: true },
  { id: "3", name: "Weekly Pro", speed: "50 Mbps", dataLimit: "Unlimited", duration: "24 Hours", price: 24.99, adsEnabled: false },
  { id: "4", name: "Monthly Pro", speed: "100 Mbps", dataLimit: "Unlimited", duration: "7 Days", price: 99.99, adsEnabled: false },
];

export function PlansManagement() {
  const [plans, setPlans] = useState(mockPlans);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const { toast } = useToast();

  const handleAddPlan = () => {
    setEditingPlan(null);
    setIsDialogOpen(true);
  };

  const handleEditPlan = (plan) => {
    setEditingPlan(plan);
    setIsDialogOpen(true);
  };

  const handleDeletePlan = (planId) => {
    setPlans(plans.filter(p => p.id !== planId));
    toast({
      title: "Plan Deleted",
      description: "The internet plan has been successfully deleted.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-5 w-5 text-primary" />
            Internet Plans Management
          </CardTitle>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddPlan} className="flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Plan
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{editingPlan ? "Edit Plan" : "Add New Plan"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Plan Name</Label>
                  <Input id="name" placeholder="e.g., Weekly Pro" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="speed">Speed</Label>
                    <Input id="speed" placeholder="e.g., 50 Mbps" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data">Data Limit</Label>
                    <Input id="data" placeholder="e.g., 5 GB" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g., 6 Hours" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (R)</Label>
                    <Input id="price" type="number" placeholder="9.99" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="ads">Enable Ads</Label>
                  <Switch id="ads" />
                </div>
                <Button className="w-full">{editingPlan ? "Update Plan" : "Create Plan"}</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan Name</TableHead>
                <TableHead>Speed</TableHead>
                <TableHead>Data Limit</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Ads</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {plans.map(plan => (
                <TableRow key={plan.id}>
                  <TableCell className="font-medium">{plan.name}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-muted-foreground" /> {plan.speed}
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" /> {plan.dataLimit}
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Timer className="h-4 w-4 text-muted-foreground" /> {plan.duration}
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" /> R{plan.price}
                  </TableCell>
                  <TableCell>
                    <Badge variant={plan.adsEnabled ? "default" : "secondary"}>
                      {plan.adsEnabled ? "Enabled" : "Disabled"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditPlan(plan)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeletePlan(plan.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
