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

export default function General() {
  return (
    <>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>General Article Settings</CardTitle>
          <CardDescription>
            Configure general settings for articles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Default Article Category
            </label>
            <Select defaultValue="blog">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select default category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blog" className="cursor-pointer">
                  Blog
                </SelectItem>
                <SelectItem value="news" className="cursor-pointer">
                  News
                </SelectItem>
                <SelectItem value="guides" className="cursor-pointer">
                  Guides
                </SelectItem>
                <SelectItem value="tutorials" className="cursor-pointer">
                  Tutorials
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Default Article Format
            </label>
            <Select defaultValue="standard">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select default format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard" className="cursor-pointer">
                  Standard
                </SelectItem>
                <SelectItem value="list" className="cursor-pointer">
                  List
                </SelectItem>
                <SelectItem value="gallery" className="cursor-pointer">
                  Gallery
                </SelectItem>
                <SelectItem value="video" className="cursor-pointer">
                  Video
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Default Article Status
            </label>
            <Select defaultValue="draft">
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select default status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft" className="cursor-pointer">
                  Draft
                </SelectItem>
                <SelectItem value="published" className="cursor-pointer">
                  Published
                </SelectItem>
                <SelectItem value="scheduled" className="cursor-pointer">
                  Scheduled
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="mt-2 cursor-pointer">Save General Settings</Button>
        </CardContent>
      </Card>
    </>
  );
}
