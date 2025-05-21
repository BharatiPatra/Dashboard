import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SwitchOption = ({ title, description, defaultChecked = false }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
    <div className="flex flex-col gap-1">
      <span className="text-xs sm:text-sm font-medium">{title}</span>
      <span className="text-xs text-gray-500">{description}</span>
    </div>
    <Switch defaultChecked={defaultChecked} className="cursor-pointer" />
  </div>
);

const AutoBlogSetting = () => {
  return (
    <TabsContent value="settings" className="space-y-6 min-h-0">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-foreground">Auto Blog Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-foreground">
                    Enable Auto Blogging
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically generate and publish blog posts
                  </p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Posting Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger className="bg-background text-foreground border-input">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Posting Time</Label>
                <Input
                  type="time"
                  defaultValue="09:00"
                  className="bg-background text-foreground border-input"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Content Categories</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="bg-background text-foreground border-input">
                    <SelectValue placeholder="Select categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">AI Model</Label>
                <Select defaultValue="gpt4">
                  <SelectTrigger className="bg-background text-foreground border-input">
                    <SelectValue placeholder="Select AI model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt4">GPT-4</SelectItem>
                    <SelectItem value="gpt35">GPT-3.5</SelectItem>
                    <SelectItem value="claude">Claude</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                className="border-input hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Reset
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Save Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default AutoBlogSetting;
