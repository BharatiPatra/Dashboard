import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddInternalLink from "./AddInternalLink";
import ExistingLink from "./ExistingLink";
import LinkOpportunity from "./LinkOpportunity";
import LinkAnalytic from "./LinkAnalytic";

// Tab configuration
const tabs = [
  { value: "add", label: "Add Internal Link" },
  { value: "existing", label: "Existing Links" },
  { value: "opportunity", label: "Link Opportunities" },
  { value: "analytics", label: "Link Analytics" },
];

export default function InternalLink() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="p-2 sm:p-4 md:p-6 h-full flex flex-col">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">
        Internal Link
      </h1>

      <Tabs
        defaultValue="add"
        className="w-full flex-1 flex flex-col"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-4">
          <TabsList className="flex flex-wrap gap-2 sm:gap-4 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-3 sm:px-6 py-2 sm:py-4 cursor-pointer rounded-md text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:bg-gray-800 dark:data-[state=inactive]:text-gray-300 dark:data-[state=inactive]:hover:bg-gray-700"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto mt-6">
          <TabsContent value="add" className="space-y-4 h-full">
            <AddInternalLink />
          </TabsContent>

          <TabsContent value="existing" className="space-y-4 h-full">
            <ExistingLink />
          </TabsContent>

          <TabsContent value="opportunity" className="space-y-4 h-full">
            <LinkOpportunity />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4 h-full">
            <LinkAnalytic />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
