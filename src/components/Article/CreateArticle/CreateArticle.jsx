import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ImportContent from "./ImportContent";
import AIContent from "./AIContent";
import MannualContent from "./MannualContent";

export default function CreateArticlePage() {
  const tabs = [
    { value: "manual", label: "Manual Creation" },
    { value: "ai", label: "AI Generation" },
    { value: "import", label: "Import Content" },
  ];
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-semibold mb-8">Create Article</h1>

      <Tabs
        defaultValue="manual"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-8">
          <TabsList className="flex flex-wrap gap-3 sm:gap-4 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-4 sm:px-6 py-2.5 sm:py-4 cursor-pointer rounded-md text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="manual" className="space-y-8">
          <MannualContent />
        </TabsContent>

        <TabsContent value="ai" className="space-y-8">
          <AIContent />
        </TabsContent>

        <TabsContent value="import" className="space-y-8">
          <ImportContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
