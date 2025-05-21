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

export default function AI() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>AI Settings</CardTitle>
          <CardDescription>
            Configure AI settings for article generation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Default AI Model
            </label>
            <Select defaultValue="gpt-4">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select AI model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4" className="cursor-pointer">
                  GPT-4
                </SelectItem>
                <SelectItem value="gpt-3.5" className="cursor-pointer">
                  GPT-3.5
                </SelectItem>
                <SelectItem value="claude" className="cursor-pointer">
                  Claude
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Default Article Length
            </label>
            <Select defaultValue="medium">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select default length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short" className="cursor-pointer">
                  Short (500-800 words)
                </SelectItem>
                <SelectItem value="medium" className="cursor-pointer">
                  Medium (1000-1500 words)
                </SelectItem>
                <SelectItem value="long" className="cursor-pointer">
                  Long (2000+ words)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Auto-optimize for SEO</span>
              <span className="text-xs text-gray-500">
                Automatically optimize AI-generated content for SEO
              </span>
            </div>
            <Switch className="cursor-pointer" />
          </div>

          <Button className="mt-2 cursor-pointer">Save AI Settings</Button>
        </CardContent>
      </Card>
    </>
  );
}
