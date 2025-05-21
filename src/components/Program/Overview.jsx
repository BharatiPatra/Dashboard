import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Copy,
  DollarSign,
  Download,
  HelpCircle,
  LineChart,
  Link,
  Share2,
  Users,
} from "lucide-react";

import { affiliateStats } from "./DummyData"; // Mock data

const Overview = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://app.example.com/ref/user123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TabsContent value="overview" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-2xl font-bold">
                ${affiliateStats.totalEarnings.toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-2xl font-bold">
                ${affiliateStats.pendingPayment.toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                {affiliateStats.conversionRate}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {affiliateStats.conversionsThisMonth} conversions from{" "}
              {affiliateStats.clicksThisMonth} clicks
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Affiliate Link</CardTitle>
          <CardDescription>Share this link to earn commissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              value="https://app.example.com/ref/user123"
              readOnly
              className="font-mono text-sm"
            />
            <Button
              variant="outline"
              onClick={copyToClipboard}
              className="cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
              {!copied && <Copy className="ml-2 h-4 w-4" />}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            You earn 50% commission on the first payment of each customer you
            refer, and 25% on all recurring payments for the first year.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Your affiliate performance for the last 30 days
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-1 cursor-pointer">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center bg-muted/40 rounded-md">
            <div className="text-center">
              <LineChart className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">
                Performance chart would appear here
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Clicks
              </p>
              <p className="text-2xl font-bold">
                {affiliateStats.clicksThisMonth}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Conversions
              </p>
              <p className="text-2xl font-bold">
                {affiliateStats.conversionsThisMonth}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Conversion Rate
              </p>
              <p className="text-2xl font-bold">
                {affiliateStats.conversionRate}%
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Earnings This Month
              </p>
              <p className="text-2xl font-bold">
                ${affiliateStats.pendingPayment.toFixed(2)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Tips</CardTitle>
          <CardDescription>
            How to maximize your affiliate earnings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Target the right audience</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on people who need content creation and SEO tools.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                <Share2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Use social media</h3>
                <p className="text-sm text-muted-foreground">
                  Share your affiliate link on relevant social platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                <Link className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Create detailed reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Write honest reviews about our platform on your blog or
                  website.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full gap-1 cursor-pointer">
            <HelpCircle className="h-4 w-4" />
            <span>View Affiliate Guide</span>
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Overview;
