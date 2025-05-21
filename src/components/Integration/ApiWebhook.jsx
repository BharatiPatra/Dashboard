import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { RefreshCw, Settings } from "lucide-react";

import { apiUsage, webhooks } from "./DummyData";

// API Key section component
const ApiKeySection = ({ title, description, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
    <div>
      <h3 className="font-medium text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
    </div>
    <div className="flex items-center gap-2">
      <Input
        value={value}
        className="w-full sm:w-64 text-xs sm:text-sm"
        readOnly
      />
      <Button
        variant="outline"
        size="sm"
        className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
      >
        Copy
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
      >
        <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>
    </div>
  </div>
);

// Webhook item component
const WebhookItem = ({ webhook }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md gap-3 sm:gap-4">
    <div>
      <h3 className="font-medium text-sm sm:text-base">{webhook.name}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground break-all">
        {webhook.endpoint}
      </p>
      <div className="text-xs text-muted-foreground mt-1">
        Last triggered: {webhook.lastTriggered}
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Switch
        checked={webhook.status === "active"}
        className="cursor-pointer"
      />
      <Button
        variant="outline"
        size="sm"
        className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
      >
        <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>
    </div>
  </div>
);

const ApiWebhook = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">API Keys</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Manage your API keys for external integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ApiKeySection
            title="Primary API Key"
            description="Use this key for production environments"
            value="sk_live_*****************************"
          />

          <ApiKeySection
            title="Test API Key"
            description="Use this key for testing environments"
            value="sk_test_*****************************"
          />

          <Separator className="my-4" />

          <div>
            <h3 className="font-medium text-sm sm:text-base mb-2">API Usage</h3>
            <div className="space-y-3">
              {apiUsage.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>{item.name}</span>
                    <span>
                      {item.used} / {item.limit}
                    </span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Webhooks</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Configure webhooks to notify your systems of events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {webhooks.map((webhook) => (
            <WebhookItem key={webhook.id} webhook={webhook} />
          ))}

          <Button className="w-full h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer">
            Add New Webhook
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiWebhook;
