import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "./DummyData";
import { ArticlesList } from "./components/ArticlesList";
import { ManageKeywords } from "./components/ManageKeywords";
import { CreateList } from "./components/CreateList";

export default function LonglistKeywordArticle() {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">
        Longlist Keyword to Article
      </h1>

      <Tabs
        defaultValue="articles"
        className="w-full"
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

        <div className="mt-6">
          <TabsContent value="articles" className="space-y-4">
            <ArticlesList />
          </TabsContent>

          <TabsContent value="manage" className="space-y-4">
            <ManageKeywords />
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <CreateList />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
