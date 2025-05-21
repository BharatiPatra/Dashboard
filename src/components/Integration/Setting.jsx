import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight, Check } from "lucide-react";

// Setting item component
const SettingItem = ({ title, description, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
    <div>
      <h3 className="font-medium text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
    </div>
    {children}
  </div>
);

// OAuth application item component
const OAuthAppItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md gap-3 sm:gap-4">
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 p-1.5 sm:p-2 rounded-md">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-medium text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
    <Button
      variant="outline"
      size="sm"
      className="h-8 sm:h-9 text-xs sm:text-sm cursor-pointer"
    >
      Revoke
    </Button>
  </div>
);

const Setting = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">
            Integration Settings
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Configure global settings for all integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SettingItem
            title="Auto-sync content"
            description="Automatically sync content with connected platforms"
          >
            <Switch className="cursor-pointer" />
          </SettingItem>

          <SettingItem
            title="Sync frequency"
            description="How often to sync with connected platforms"
          >
            <div className="w-full sm:w-48">
              <select className="w-full p-2 border rounded-md text-xs sm:text-sm cursor-pointer">
                <option className="cursor-pointer">Every hour</option>
                <option className="cursor-pointer">Every 6 hours</option>
                <option className="cursor-pointer">Every 12 hours</option>
                <option className="cursor-pointer">Daily</option>
              </select>
            </div>
          </SettingItem>

          <SettingItem
            title="Webhook security"
            description="Require signatures for webhook requests"
          >
            <Switch defaultChecked className="cursor-pointer" />
          </SettingItem>

          <SettingItem
            title="API rate limiting"
            description="Limit API requests per minute"
          >
            <div className="w-full sm:w-48">
              <select className="w-full p-2 border rounded-md text-xs sm:text-sm cursor-pointer">
                <option className="cursor-pointer">60 requests/min</option>
                <option className="cursor-pointer">120 requests/min</option>
                <option className="cursor-pointer">240 requests/min</option>
                <option className="cursor-pointer">Unlimited</option>
              </select>
            </div>
          </SettingItem>

          <Button className="mt-2 h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer">
            Save Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">
            OAuth Applications
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Manage OAuth applications that can access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <OAuthAppItem
              icon={ArrowUpRight}
              title="Content Scheduler"
              description="Access to read and schedule content"
            />

            <OAuthAppItem
              icon={Check}
              title="SEO Analyzer"
              description="Access to read content and keywords"
            />

            <Button className="w-full h-9 sm:h-10 text-xs sm:text-sm md:text-base cursor-pointer">
              Register New Application
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Setting;
