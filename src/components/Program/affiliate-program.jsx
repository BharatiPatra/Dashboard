import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";
import Referral from "./Referral";
import Payment from "./Payment";
const tabs = [
  { value: "overview", label: "Overview" },
  { value: "referrals", label: "Referrals" },
  { value: "payments", label: "Payments" },
];

export default function AffiliateProgram() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Affiliate Program</h1>

      <Tabs
        defaultValue="overview"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-4 ">
          <TabsList className="flex gap-4 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-6 py-4 cursor-pointer rounded-md text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <Overview />
        <Referral />
        <Payment />
      </Tabs>
    </div>
  );
}
