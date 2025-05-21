import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExistingBacklink from "./ExistingBacklink";
import BacklinkOpportunitiy from "./BacklinkOpportunitiy";
import OutreachCampaigns from "./OutreachCampaigns";
import BacklinkAnalytic from "./BacklinkAnalytic";

// Tab configuration
const tabs = [
  { value: "existing", label: "Existing Backlinks" },
  { value: "opportunities", label: "Backlink Opportunities" },
  { value: "outreach", label: "Outreach Campaigns" },
  { value: "analytics", label: "Backlink Analytics" },
];

// Tab trigger component for better reusability
const TabTrigger = ({ value, label }) => (
  <TabsTrigger
    value={value}
    className="flex-1 sm:flex-none min-w-[140px] text-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 cursor-pointer rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
  >
    {label}
  </TabsTrigger>
);

export default function Backlink() {
  const [activeTab, setActiveTab] = useState("existing");
 return (
    <div className="h-full flex flex-col overflow-auto bg-white rounded-lg shadow-sm">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        defaultValue="existing"
        className="flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex-none p-3 sm:p-4 md:p-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">
            Free Backlinks
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
          <TabsContent
            value="existing"
            className="h-full overflow-y-auto mt-0"
          >
            <div className="p-3 sm:p-4 md:p-6">
              <ExistingBacklink />
            </div>
          </TabsContent>
          <TabsContent
            value="opportunities"
            className="h-full overflow-y-auto mt-0"
          >
            <div className="p-3 sm:p-4 md:p-6">
              <BacklinkOpportunitiy />
            </div>
          </TabsContent>
          <TabsContent
            value="outreach"
            className="h-full overflow-y-auto mt-0"
          >
            <div className="p-3 sm:p-4 md:p-6">
              <OutreachCampaigns />
            </div>
          </TabsContent>
          <TabsContent
            value="analytics"
            className="h-full overflow-y-auto mt-0"
          >
            <div className="p-3 sm:p-4 md:p-6">
              <BacklinkAnalytic />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
