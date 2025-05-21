import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import General from "./General";
import SEO from "./SEO";
import AI from "./AI";
import Publishing from "./Publishing";

export default function ArticleSettings() {
  const tabs = [
    { value: "general", label: "General Settings" },
    { value: "seo", label: "SEO Settings" },
    { value: "templates", label: "Article Templates" },
    { value: "ai", label: "AI Settings" },
    { value: "publishing", label: "Publishing Settings" },
  ];
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="p-2 sm:p-4 md:p-6 h-full flex flex-col">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">
        Article Settings
      </h1>

      <Tabs
        defaultValue="general"
        className="w-full flex-1 flex flex-col"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-4">
          <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-transparent w-full max-w-4xl">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 cursor-pointer rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto mt-6">
          <TabsContent value="general" className="space-y-4 h-full">
            <General />
          </TabsContent>

          <TabsContent value="seo" className="space-y-4 h-full">
            <SEO />
          </TabsContent>

          <TabsContent value="templates" className="space-y-4 h-full">
            {/* Templates content */}
          </TabsContent>

          <TabsContent value="ai" className="space-y-4 h-full">
            <AI />
          </TabsContent>

          <TabsContent value="publishing" className="space-y-4 h-full">
            <Publishing />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
