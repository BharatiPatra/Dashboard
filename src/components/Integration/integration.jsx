import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AvailableIntegration from "./AvailableIntegration";
import ApiWebhook from "./ApiWebhook";
import Setting from "./Setting";

// Tab configuration
const tabs = [
  { value: "available", label: "Available Integrations" },
  { value: "api", label: "API & Webhooks" },
  { value: "settings", label: "Integration Settings" },
];

// Tab trigger component for better reusability
const TabTrigger = ({ value, label }) => (
  <TabsTrigger
    value={value}
    className="w-full sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 cursor-pointer rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
  >
    {label}
  </TabsTrigger>
);

export default function Integration() {
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [activeTab, setActiveTab] = useState("available");

  return (
    <div className="h-full flex flex-col overflow-auto bg-white rounded-lg shadow-sm">
      <div className="flex-none p-3 sm:p-4 md:p-6 ">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">
          Integrations
        </h1>

        <Tabs
          defaultValue="available"
          className="w-full mt-10"
          value={activeTab}
          onValueChange={setActiveTab}

        >
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
            <TabsList className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 bg-transparent w-full sm:w-auto">
              {tabs.map((tab) => (
                <TabTrigger
                  key={tab.value}
                  value={tab.value}
                  label={tab.label}
                />
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="flex-1 min-h-0">
        <Tabs
          defaultValue="available"
          className="w-full h-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="h-full">
            <TabsContent
              value="available"
              className="mt-0 h-full overflow-y-auto"
            >
              <div className="p-3 sm:p-4 md:p-6">
                <AvailableIntegration />
              </div>
            </TabsContent>
            <TabsContent value="api" className="mt-0 h-full overflow-y-auto">
              <div className="p-3 sm:p-4 md:p-6">
                <ApiWebhook />
              </div>
            </TabsContent>
            <TabsContent
              value="settings"
              className="mt-0 h-full overflow-y-auto"
            >
              <div className="p-3 sm:p-4 md:p-6">
                <Setting />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {selectedIntegration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-background p-4 sm:p-5 md:p-6 rounded-lg w-full max-w-full sm:max-w-[400px] md:max-w-md">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
              {selectedIntegration.status === "connected"
                ? `Manage ${selectedIntegration.name} Integration`
                : `Connect to ${selectedIntegration.name}`}
            </h2>

            {selectedIntegration.status === "connected" ? (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">
                    Connection Status
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs sm:text-sm md:text-base">
                      Connected
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">
                    Last Synced
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base">
                    {selectedIntegration.lastSync}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 h-9 sm:h-10 text-xs sm:text-sm md:text-base"
                    onClick={() => setSelectedIntegration(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1 h-9 sm:h-10 text-xs sm:text-sm md:text-base"
                  >
                    Disconnect
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-2">
                    API Key
                  </label>
                  <Input
                    placeholder="Enter API key"
                    className="h-9 sm:h-10 text-xs sm:text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-2">
                    API Secret
                  </label>
                  <Input
                    placeholder="Enter API secret"
                    type="password"
                    className="h-9 sm:h-10 text-xs sm:text-sm md:text-base"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 h-9 sm:h-10 text-xs sm:text-sm md:text-base"
                    onClick={() => setSelectedIntegration(null)}
                  >
                    Cancel
                  </Button>
                  <Button className="flex-1 h-9 sm:h-10 text-xs sm:text-sm md:text-base">
                    Connect
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
