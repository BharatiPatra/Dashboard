import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, Share2, Shield, Sliders, Zap } from "lucide-react";
import { availableIntegrations } from "./DummyData";

// Integration icon component
const IntegrationIcon = ({ icon }) => {
  const icons = {
    wordpress: Share2,
    analytics: Sliders,
    ahrefs: Link,
    semrush: Zap,
    mailchimp: Shield,
  };

  const Icon = icons[icon];
  return (
    <div className="bg-primary/10 p-1.5 sm:p-2 rounded-md">
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
    </div>
  );
};

// Status badge component
const StatusBadge = ({ status }) => (
  <Badge
    variant={status === "connected" ? "success" : "secondary"}
    className="text-xs sm:text-sm"
  >
    {status === "connected" ? "Connected" : "Disconnected"}
  </Badge>
);

const AvailableIntegration = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {availableIntegrations.map((integration) => (
          <div key={integration.id} className="p-4 border rounded-lg ">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-gray-100 rounded-lg ">
                <integration.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="font-medium dark:text-white">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {integration.description}
                </p>
              </div>
            </div>
            <Button
              className="w-full h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer"
              onClick={() => handleConnect(integration.id)}
            >
              Connect
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableIntegration;
