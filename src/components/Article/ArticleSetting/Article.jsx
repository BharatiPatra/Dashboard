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

export default function Article() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Article Templates</CardTitle>
          <CardDescription>Manage article templates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Template
            </label>
            <Select defaultValue="blog-post">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blog-post" className="cursor-pointer">
                  Blog Post
                </SelectItem>
                <SelectItem value="news-article" className="cursor-pointer">
                  News Article
                </SelectItem>
                <SelectItem value="tutorial" className="cursor-pointer">
                  Tutorial
                </SelectItem>
                <SelectItem value="review" className="cursor-pointer">
                  Review
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Template Content
            </label>
            <Textarea
              className="w-full min-h-[200px]"
              placeholder="Enter template content"
            />
          </div>

          <div className="flex justify-between">
            <Button variant="outline" className="cursor-pointer">
              Create New Template
            </Button>
            <Button className="cursor-pointer">Save Template</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
