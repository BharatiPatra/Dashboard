import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers, teamActivity } from "./DummyData"; // Mock data
import TeamMember from "./TeamMember";
import TeamActivity from "./TeamActivity";

const tabs = [
  { value: "members", label: "Team Members" },
  { value: "activity", label: "Team Activity" },
];

export default function TeamCenter() {
  const [activeTab, setActiveTab] = useState("members");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Team Center</h1>

      <Tabs
        defaultValue="members"
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
                className="px-6 py-4 rounded-md cursor-pointer text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TeamMember />
        <TeamActivity />
      </Tabs>
    </div>
  );
}
