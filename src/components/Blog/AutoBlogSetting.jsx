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
      <Card className="overflow-hidden">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Auto-Blog Settings
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Configure your auto-blog preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="space-y-4">
            <SwitchOption
              title="Auto-publish all posts"
              description="Automatically publish all generated posts"
            />

            <SwitchOption
              title="Add featured images"
              description="Automatically add featured images to posts"
              defaultChecked={true}
            />

            <SwitchOption
              title="Auto-categorize"
              description="Automatically assign categories to posts"
              defaultChecked={true}
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                Default Content Type
              </label>
              <Select defaultValue="article">
                <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                  <SelectValue placeholder="Select default content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="article"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    Full Article
                  </SelectItem>
                  <SelectItem
                    value="listicle"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    Listicle
                  </SelectItem>
                  <SelectItem
                    value="howto"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    How-To Guide
                  </SelectItem>
                  <SelectItem
                    value="review"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    Review
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                Default Article Length
              </label>
              <Select defaultValue="medium">
                <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                  <SelectValue placeholder="Select default length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="short"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    Short (500-800 words)
                  </SelectItem>
                  <SelectItem
                    value="medium"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    Medium (1000-1500 words)
                  </SelectItem>
                  <SelectItem
                    value="long"
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    Long (2000+ words)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-2">
            <Button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm">
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default AutoBlogSetting;
