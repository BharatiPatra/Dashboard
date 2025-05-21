import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KUpload from "./Upload";
import Preview from "./Preview";
import Map from "./Map";
import KImport from "./KImport";

const tabs = [
  { value: "upload", label: "Upload File" },
  { value: "preview", label: "Preview Data" },
  { value: "map", label: "Map Fields" },
  { value: "import", label: "Import" },
];

export default function KeywordFromExcel() {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">
        Import Keyword from Excel
      </h1>

      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-6">
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
          <TabsContent value="upload" className="space-y-6">
            <KUpload />
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <Preview />
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Map />
          </TabsContent>

          <TabsContent value="import" className="space-y-6 pb-16 sm:pb-24">
            <KImport />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
