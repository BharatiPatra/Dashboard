import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Download, Plus, Search } from "lucide-react";
import Keyword from "./Keyword";
import Saved from "./Saved";
import Competitors from "./Competitors";
import Trends from "./Trends";

const tabs = [
  { value: "research", label: "Keyword Research" },
  { value: "saved", label: "Saved Keywords" },
  { value: "competitors", label: "Competitor Keywords" },
  { value: "trends", label: "Keyword Trends" },
];

export default function KeywordResearch() {
  const [activeTab, setActiveTab] = useState("research");

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">
        Keyword Research
      </h1>

      <Tabs
        defaultValue="research"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-8">
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

        <TabsContent value="research" className="space-y-6">
          <Keyword />
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          <Saved />
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <Competitors />
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Trends />
        </TabsContent>
      </Tabs>
    </div>
  );
}
