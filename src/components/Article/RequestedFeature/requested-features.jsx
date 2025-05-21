import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp } from "lucide-react";
import AllRequest from "./AllRequest";
import PlannedRequests from "./PlannedRequest";

const tabs = [
  { value: "all", label: "All Requests" },
  { value: "planned", label: "Planned" },
  { value: "in-progress", label: "In Progress" },
];

export default function RequestedFeatures() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-semibold mb-8">
        Requested Features
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search features..."
            className="w-full sm:w-64 text-sm sm:text-base"
          />
          <Button
            variant="outline"
            className="cursor-pointer w-full sm:w-auto text-sm sm:text-base"
          >
            Search
          </Button>
        </div>
        <Button className="cursor-pointer w-full sm:w-auto text-sm sm:text-base">
          Request New Feature
        </Button>
      </div>

      <Tabs
        defaultValue="all"
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

        <TabsContent value="all" className="space-y-8">
          <AllRequest />
        </TabsContent>

        <TabsContent value="planned" className="space-y-8">
          <PlannedRequests />
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-8">
          <AllRequest />
        </TabsContent>
      </Tabs>
    </div>
  );
}
