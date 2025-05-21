import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExistingLink from "./ExistingLink";
import LinkOpportunity from "./LinkOpportunity";
import AddInternalLink from "./AddInternalLink";
import LinkAnalytic from "./LinkAnalytic";

// Tab configuration
const tabs = [
  { value: "existing", label: "Existing Links" },
  { value: "opportunities", label: "Link Opportunities" },
  { value: "add", label: "Add Internal Link" },
  { value: "analytics", label: "Link Analytics" },
];

// Tab trigger component
const TabTrigger = ({ value, label }) => (
  <TabsTrigger
    value={value}
    className="w-full sm:w-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 cursor-pointer rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
  >
    {label}
  </TabsTrigger>
);

export default function InternalLink() {
  const [activeTab, setActiveTab] = useState("existing");

  return (
    <div className="h-full flex flex-col overflow-hidden bg-white rounded-lg shadow-sm">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        defaultValue="existing"
        className="flex flex-col h-full"
      >
        {/* Header with tab triggers */}
        <div className="flex-none p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            Internal Links
          </h1>
          <div className="flex justify-center mb-4 sm:mb-6">
            <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-transparent w-full max-w-4xl">
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

        {/* Tab content */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <TabsContent value="existing" className="h-full overflow-y-auto">
            <div className="p-4 sm:p-6">
              <ExistingLink />
            </div>
          </TabsContent>
          <TabsContent value="opportunities" className="h-full overflow-y-auto">
            <div className="p-4 sm:p-6">
              <LinkOpportunity />
            </div>
          </TabsContent>
          <TabsContent value="add" className="h-full overflow-y-auto">
            <div className="p-4 sm:p-6">
              <AddInternalLink />
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="h-full overflow-y-auto">
            <div className="p-4 sm:p-6">
              <LinkAnalytic />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
