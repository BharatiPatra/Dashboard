import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AutoBlogSetting from "./AutoBlogSetting";
import SchedulePost from "./SchedulePost";
import CreateBlog from "./CreateBlog";

const tabs = [
  { value: "create", label: "Create Auto-Blog" },
  { value: "scheduled", label: "Scheduled Posts" },
  { value: "settings", label: "Auto-Blog Settings" },
];

export default function AutoBlog() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="p-4 sm:p-6 h-full overflow-y-auto">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 sticky top-0 bg-white z-10 py-2">
        Auto-Blog
      </h1>

      <Tabs
        defaultValue="create"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-4 sm:mb-6 sticky top-16 bg-white z-10 py-2">
          <TabsList className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-transparent w-full sm:w-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 cursor-pointer rounded-md text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mt-6 space-y-6">
          <CreateBlog />
          <SchedulePost />
          <AutoBlogSetting />
        </div>
      </Tabs>
    </div>
  );
}
