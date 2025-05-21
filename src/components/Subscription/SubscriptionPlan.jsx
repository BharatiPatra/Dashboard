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
import { Badge } from "@/components/ui/badge";
import { Check, LifeBuoy } from "lucide-react";
import { subscriptionPlans } from "./DummyData";

// Billing cycle toggle component
const BillingCycleToggle = ({ billingCycle, setBillingCycle }) => (
  <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
    <button
      className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm cursor-pointer ${
        billingCycle === "monthly" ? "bg-blue-600 text-white shadow" : ""
      }`}
      onClick={() => setBillingCycle("monthly")}
    >
      Monthly
    </button>
    <button
      className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm cursor-pointer ${
        billingCycle === "annual" ? "bg-background shadow" : ""
      }`}
      onClick={() => setBillingCycle("annual")}
    >
      Annual (Save 20%)
    </button>
  </div>
);

// Plan feature item component
const PlanFeature = ({ feature }) => (
  <li className="flex items-start gap-2">
    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5 cursor-pointer" />
    <span className="text-xs sm:text-sm">{feature}</span>
  </li>
);

const SubscriptionPlan = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-medium">Choose Your Plan</h2>
        <BillingCycleToggle
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 border rounded-lg ${
              plan.recommended
                ? "border-blue-500 dark:border-blue-400"
                : "dark:border-gray-800"
            } `}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium dark:text-white">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>
              {plan.recommended && (
                <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900/50">
                  Recommended
                </span>
              )}
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold dark:text-white">
                ${plan.price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
                  <span className="text-sm dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${
                plan.recommended
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
              }`}
            >
              {plan.current ? "Current Plan" : "Upgrade"}
            </Button>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">
            Enterprise Solutions
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Need a custom plan for your organization?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Our enterprise solutions offer custom word limits, dedicated
            support, and advanced features tailored to your organization's
            needs.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="h-9 sm:h-10 text-xs sm:text-sm md:text-base gap-2 cursor-pointer"
          >
            <LifeBuoy className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Contact Sales</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SubscriptionPlan;
