import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, RefreshCw } from "lucide-react";
import { outreachCampaigns } from "./DummyData";

export default function OutreachCampaigns() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-foreground">Outreach Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search campaigns..."
                  className="pl-9 bg-background text-foreground border-input"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] bg-background text-foreground border-input">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Campaigns</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="border-input hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {outreachCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Campaign:</span>{" "}
                        {campaign.name}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Status:</span>{" "}
                        {campaign.status}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Targets:</span>{" "}
                        {campaign.targetCount}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Response Rate:</span>{" "}
                        {campaign.responseRate}%
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-input hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
                      >
                        {campaign.status === "Draft"
                          ? "Launch Campaign"
                          : "View Progress"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
