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
import { RefreshCw, Settings, Copy } from "lucide-react";

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
          <div className="grid gap-4">
            {webhooks.map((webhook) => (
              <div
                key={webhook.id}
                className="p-4 border rounded-lg "
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium dark:text-white">
                      {webhook.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {webhook.description}
                    </p>
                  </div>
                  <Switch
                    checked={webhook.enabled}
                    onCheckedChange={() => handleToggle(webhook.id)}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium dark:text-gray-300">
                      URL:
                    </span>
                    <code className="px-2 py-1 text-sm bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-300">
                      {webhook.url}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(webhook.url)}
                      className="dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium dark:text-gray-300">
                      Secret:
                    </span>
                    <code className="px-2 py-1 text-sm bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-300">
                      {webhook.secret}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(webhook.secret)}
                      className="dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer">
            Add New Webhook
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiWebhook;
