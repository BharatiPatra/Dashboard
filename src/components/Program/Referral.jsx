import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, LineChart } from "lucide-react";

import { referrals } from "./DummyData"; // Mock data
const Referral = () => {
  return (
    <TabsContent value="referrals" className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Your Referrals</CardTitle>
            <CardDescription>Track all your referred customers</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrals.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell className="font-medium">{referral.user}</TableCell>
                  <TableCell>{referral.date}</TableCell>
                  <TableCell>{referral.plan}</TableCell>
                  <TableCell>{referral.commission}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        referral.status === "paid" ? "success" : "secondary"
                      }
                    >
                      {referral.status === "paid" ? "Paid" : "Pending"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
            <div>Showing 6 of 24 referrals</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="cursor-pointer">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="cursor-pointer">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Referral Statistics</CardTitle>
          <CardDescription>
            Detailed breakdown of your referral performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Conversion by Plan
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Starter</span>
                    <span>16%</span>
                  </div>
                  <Progress value={16} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Professional</span>
                    <span>58%</span>
                  </div>
                  <Progress value={58} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Enterprise</span>
                    <span>26%</span>
                  </div>
                  <Progress value={26} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Traffic Sources
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Direct Link</span>
                    <span>42%</span>
                  </div>
                  <Progress value={42} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Blog</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Social Media</span>
                    <span>23%</span>
                  </div>
                  <Progress value={23} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Monthly Trend
              </h3>
              <div className="h-[120px] flex items-center justify-center bg-muted/40 rounded-md">
                <div className="text-center">
                  <LineChart className="h-6 w-6 text-muted-foreground mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">
                    Chart would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Referral;
