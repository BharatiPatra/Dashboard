import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import SubscriptionPlan from "./SubscriptionPlan";
import BillingInvoice from "./BillingInvoice";
import UsageLimit from "./UsageLimit";

const tabs = [
  { value: "plans", label: "Subscription Plans" },
  { value: "billing", label: "Billing & Invoices" },
  { value: "usage", label: "Usage & Limits" },
];

// Responsive tab trigger component
const TabTrigger = ({ value, label }) => (
  <TabsTrigger
    value={value}
    className="w-full sm:w-auto text-center px-4 py-2 text-sm sm:text-base font-medium rounded-md cursor-pointer transition-colors
      data-[state=active]:bg-blue-600 data-[state=active]:text-white
      data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 hover:data-[state=inactive]:bg-gray-200"
  >
    {label}
  </TabsTrigger>
);

export default function Subscription() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex-none px-4 py-4 sm:px-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          Subscription
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-10">
          <TabsList className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <TabTrigger key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsContent value="plans" className="h-full">
            <div className="p-4 sm:p-6">
              <SubscriptionPlan />
            </div>
          </TabsContent>

          <TabsContent value="billing" className="h-full">
            <div className="p-4 sm:p-6">
              <BillingInvoice />
            </div>
          </TabsContent>

          <TabsContent value="usage" className="h-full">
            <div className="p-4 sm:p-6">
              <UsageLimit />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
