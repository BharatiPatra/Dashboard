import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Publishing() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Publishing Settings</CardTitle>
          <CardDescription>
            Configure publishing settings for articles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Default Publishing Time
            </label>
            <Select defaultValue="immediate">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select default publishing time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate" className="cursor-pointer">
                  Immediate
                </SelectItem>
                <SelectItem value="morning" className="cursor-pointer">
                  Morning (8:00 AM)
                </SelectItem>
                <SelectItem value="noon" className="cursor-pointer">
                  Noon (12:00 PM)
                </SelectItem>
                <SelectItem value="evening" className="cursor-pointer">
                  Evening (6:00 PM)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">
                Auto-publish AI-generated content
              </span>
              <span className="text-xs text-gray-500">
                Automatically publish AI-generated content
              </span>
            </div>
            <Switch className="cursor-pointer" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Social media sharing</span>
              <span className="text-xs text-gray-500">
                Automatically share new articles on social media
              </span>
            </div>
            <Switch className="cursor-pointer" />
          </div>

          <Button className="mt-2 cursor-pointer">
            Save Publishing Settings
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
