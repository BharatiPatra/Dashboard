import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, User } from "lucide-react";
import ProfileContent from "./UserProfile";
import Security from "./Security";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { value: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    {
      value: "security",
      label: "Security",
      icon: <Shield className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex justify-center mb-4 sm:mb-6">
      <TabsList className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4 bg-transparent w-full sm:w-auto">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="w-full px-4 py-3 sm:py-4 cursor-pointer rounded-md text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
          >
            <span className="flex items-center justify-center sm:justify-start gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-4xl mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center">
        My Profile
      </h1>

      <Tabs
        defaultValue="profile"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
          {activeTab === "profile" ? <ProfileContent /> : <Security />}
        </div>
      </Tabs>
    </div>
  );
}
