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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {availableIntegrations.map((integration) => (
          <Card key={integration.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <IntegrationIcon icon={integration.icon} />
                  <CardTitle className="text-base sm:text-lg">
                    {integration.name}
                  </CardTitle>
                </div>
                <StatusBadge status={integration.status} />
              </div>
              <CardDescription className="text-xs sm:text-sm">
                {integration.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {integration.status === "connected" && (
                <div className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  Last synced: {integration.lastSync}
                </div>
              )}
              <Button
                variant={
                  integration.status === "connected" ? "outline" : "default"
                }
                className="w-full h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer"
                onClick={() => setSelectedIntegration(integration)}
              >
                {integration.status === "connected" ? "Manage" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableIntegration;
