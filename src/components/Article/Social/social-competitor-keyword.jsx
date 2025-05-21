import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Competitors from "./Cometitors";
import Keyword from "../KeywordResearch/Keyword";
import Gaps from "./Gaps";
import Analysis from "./Analysis";

const tabs = [
  { value: "competitors", label: "Competitors" },
  { value: "keywords", label: "Competitor Keywords" },
  { value: "gaps", label: "Content Gaps" },
  { value: "analysis", label: "Competitor Analysis" },
];

export default function SocialCompetitorKeyword() {
  const [activeTab, setActiveTab] = useState("competitors");

  return (
    <div className="p-2 sm:p-4 md:p-6 h-full flex flex-col">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">
        Social Competitor Keyword
      </h1>

      <Tabs
        defaultValue="competitors"
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
                className="px-3 sm:px-6 py-2 sm:py-4 cursor-pointer rounded-md text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto mt-6">
          <TabsContent value="competitors" className="space-y-4 h-full">
            <Competitors />
          </TabsContent>

          <TabsContent value="keywords" className="space-y-4 h-full">
            <Keyword />
          </TabsContent>

          <TabsContent value="gaps" className="space-y-4 h-full">
            <Gaps />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4 h-full">
            <Analysis />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
