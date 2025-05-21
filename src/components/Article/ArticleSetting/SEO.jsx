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

export default function SEO() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
          <CardDescription>Configure SEO settings for articles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Default Meta Title
            </label>
            <Input placeholder="Enter default meta title" className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Default Meta Description
            </label>
            <Textarea
              placeholder="Enter default meta description"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Default Keywords
            </label>
            <Input
              placeholder="Enter default keywords (comma separated)"
              className="w-full"
            />
          </div>

          <Button className="mt-2 cursor-pointer">Save SEO Settings</Button>
        </CardContent>
      </Card>
    </>
  );
}
