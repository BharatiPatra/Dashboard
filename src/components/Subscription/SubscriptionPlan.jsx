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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {subscriptionPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${plan.popular ? "border-primary" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <Badge className="bg-primary hover:bg-primary text-xs sm:text-sm">
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                {plan.description}
              </CardDescription>
              <div className="mt-2">
                <span className="text-2xl sm:text-3xl font-bold">
                  $
                  {billingCycle === "annual"
                    ? Math.round(plan.price * 0.8)
                    : plan.price}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  /
                  {billingCycle === "annual"
                    ? "month, billed annually"
                    : "month"}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <PlanFeature key={index} feature={feature} />
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.popular
                  ? "Upgrade to Professional"
                  : `Choose ${plan.name}`}
              </Button>
            </CardFooter>
          </Card>
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
