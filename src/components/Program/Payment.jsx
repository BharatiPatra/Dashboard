import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { DollarSign } from "lucide-react";

import { affiliateStats, referrals } from "./DummyData"; // Mock data
const Payment = () => {
  return (
    <TabsContent value="payments" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
          <CardDescription>
            Manage your payment methods and settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Payment Method</h3>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">PayPal</p>
                  <p className="text-sm text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="cursor-pointer">
                Change
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Payment Threshold</h3>
            <p className="text-sm text-muted-foreground mb-2">
              We'll send your payment when your balance reaches the threshold
            </p>
            <select className="w-full p-2 border rounded-md cursor-pointer">
              <option className="cursor-pointer">$100</option>
              <option className="cursor-pointer">$200</option>
              <option className="cursor-pointer">$300</option>
              <option className="cursor-pointer">$500</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Payment;
