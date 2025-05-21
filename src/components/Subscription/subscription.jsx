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
      data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 hover:data-[state=inactive]:bg-gray-200
      dark:data-[state=inactive]:bg-gray-800 dark:data-[state=inactive]:text-gray-300 dark:hover:data-[state=inactive]:bg-gray-700"
  >
    {label}
  </TabsTrigger>
);

export default function Subscription() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <div className="h-full flex flex-col overflow-auto bg-white dark:bg-black rounded-lg shadow-sm">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        defaultValue="plans"
        className="flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex-none p-3 sm:p-4 md:p-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 dark:text-white">
            Subscription
          </h1>

          {/* Tab Triggers */}
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
            <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-full bg-transparent border-none shadow-none">
              {tabs.map((tab) => (
                <TabTrigger
                  key={tab.value}
                  value={tab.value}
                  label={tab.label}
                />
              ))}
            </TabsList>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <TabsContent value="plans" className="h-full overflow-y-auto mt-0">
            <div className="p-3 sm:p-4 md:p-6">
              <SubscriptionPlan />
            </div>
          </TabsContent>
          <TabsContent value="usage" className="h-full overflow-y-auto mt-0">
            <div className="p-3 sm:p-4 md:p-6">
              <UsageLimit />
            </div>
          </TabsContent>
          <TabsContent value="billing" className="h-full overflow-y-auto mt-0">
            <div className="p-3 sm:p-4 md:p-6">
              <BillingInvoice />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
