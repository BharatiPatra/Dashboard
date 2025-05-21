import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CurrentVersion from "./CurrentVersion";
import UpcomingFeature from "./UpcomingFeature";
import History from "./History";

const tabs = [
  { value: "current", label: "Current Version" },
  { value: "upcoming", label: "Upcoming Features" },
  { value: "history", label: "Update History" },
];

export default function Update() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Updates</h1>

      <Tabs defaultValue="current" className="w-full">
        <div className="flex justify-center mt-10 mb-4">
          <TabsList className="flex flex-col gap-4 w-full max-w-xs md:flex-row md:gap-4 md:max-w-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full md:w-auto px-6 py-4 rounded-md text-sm font-medium transition-colors 
                  data-[state=active]:bg-blue-600 
                  data-[state=active]:text-white 
                  data-[state=inactive]:bg-gray-100 
                  data-[state=inactive]:text-gray-700 
                  data-[state=inactive]:hover:bg-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mt-10">
          <TabsContent value="current">
            <CurrentVersion />
          </TabsContent>

          <TabsContent value="upcoming">
            <UpcomingFeature />
          </TabsContent>

          <TabsContent value="history">
            <History />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
