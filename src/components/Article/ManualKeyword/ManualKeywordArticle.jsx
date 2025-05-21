import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { keywords, tabs } from "./DummyData";
import { CustomTabTrigger } from "./components/TabTrigger";
import { SearchBar } from "./components/SearchBar";
import { IntentFilter } from "./components/IntentFilter";
import { KeywordTable } from "./components/KeywordTable";
import { CreateArticleForm } from "./components/CreateArticleForm";
import { ConversionHistory } from "./components/ConversionHistory";

export default function ManualKeywordArticle() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [activeTab, setActiveTab] = useState("select");

  const toggleKeyword = (id) => {
    setSelectedKeywords((prev) =>
      prev.includes(id)
        ? prev.filter((keywordId) => keywordId !== id)
        : [...prev, id]
    );
  };

  const toggleAllKeywords = (checked) => {
    setSelectedKeywords(checked ? keywords.map((kw) => kw.id) : []);
  };

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">
        Manual Keyword to Article
      </h1>

      <Tabs
        defaultValue="select"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-4">
          <TabsList className="flex flex-wrap gap-2 sm:gap-4 bg-transparent">
            {tabs.map((tab) => (
              <CustomTabTrigger
                key={tab.value}
                value={tab.value}
                label={tab.label}
              />
            ))}
          </TabsList>
        </div>

        <div className="mt-6">
          <TabsContent value="select" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <SearchBar />
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <IntentFilter />
                <Button className="cursor-pointer w-full sm:w-auto text-sm sm:text-base">
                  Create Articles
                </Button>
              </div>
            </div>

            <KeywordTable
              keywords={keywords}
              selectedKeywords={selectedKeywords}
              toggleKeyword={toggleKeyword}
              toggleAllKeywords={toggleAllKeywords}
            />
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <CreateArticleForm />
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <ConversionHistory />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
