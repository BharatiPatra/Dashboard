import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Gift, Shield, Star, Zap, X } from "lucide-react";
import { usageData } from "./DummyData";

// Usage progress item component
const UsageProgressItem = ({ label, used, total, percentage }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs sm:text-sm">
      <span>{label}</span>
      <span>
        {typeof used === "number" ? used.toLocaleString() : used} /{" "}
        {typeof total === "number" ? total.toLocaleString() : total}
      </span>
    </div>
    <Progress value={percentage} />
  </div>
);

// Add-on item component
const AddOnItem = ({ title, description, price }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md gap-3 sm:gap-4">
    <div>
      <h3 className="font-medium text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="font-medium text-sm sm:text-base">${price}</span>
      <Button
        size="sm"
        className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
      >
        Add
      </Button>
    </div>
  </div>
);

const UsageLimit = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-lg">Current Plan</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              You are currently on the Professional plan
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">
                Professional Plan
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                $79/month • Renews on June 1, 2023
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
            >
              Change Plan
            </Button>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium text-sm sm:text-base mb-3">
              Usage This Month
            </h3>
            <div className="space-y-4">
              <UsageProgressItem
                label="Words Generated"
                used={usageData.words.used}
                total={usageData.words.total}
                percentage={usageData.words.percentage}
              />

              <UsageProgressItem
                label="Keyword Research Queries"
                used={usageData.keywords.used}
                total={usageData.keywords.total}
                percentage={usageData.keywords.percentage}
              />

              <UsageProgressItem
                label="User Accounts"
                used={usageData.users.used}
                total={usageData.users.total}
                percentage={usageData.users.percentage}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <Button
            variant="outline"
            className="w-full sm:w-auto h-9 sm:h-10 text-xs sm:text-sm md:text-base gap-1 cursor-pointer"
          >
            <span>Redeem Code</span>
            <Gift className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button className="w-full sm:w-auto h-9 sm:h-10 text-xs sm:text-sm md:text-base gap-1 cursor-pointer">
            <span>Upgrade Plan</span>
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base sm:text-lg">Add-ons</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Purchase additional resources
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <AddOnItem
              title="Extra Words"
              description="10,000 additional words"
              price="19"
            />

            <AddOnItem
              title="Extra Keywords"
              description="25 additional keyword queries"
              price="9"
            />

            <AddOnItem
              title="Additional User"
              description="1 additional user account"
              price="15"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base sm:text-lg">
                Referral Program
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Earn credits by referring friends
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-3 sm:p-4 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <h3 className="font-medium text-sm sm:text-base">
                  Refer a friend, get $20 credit
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                For each friend who signs up and subscribes, you'll receive $20
                in account credit.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  value="https://app.example.com/ref/johndoe"
                  readOnly
                  className="text-xs sm:text-sm"
                />
                <Button
                  variant="outline"
                  className="h-9 sm:h-10 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Copy</span>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm sm:text-base mb-2">
                Your Referrals
              </h3>
              <div className="text-center py-4 sm:py-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  No referrals yet
                </p>
                <Button
                  variant="link"
                  className="mt-1 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Share your link</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsageLimit;
