import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
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
import { linkAnalytics } from "./DummyData";

const LinkAnalytic = () => {
  return (
    <TabsContent value="analytics" className="space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-foreground">Link Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search analytics..."
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
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
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
              {linkAnalytics.map((analytic) => (
                <Card key={analytic.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <div className="text-sm text-foreground">
                          <span className="font-medium">Source:</span>{" "}
                          {analytic.source}
                        </div>
                        <div className="text-sm text-foreground">
                          <span className="font-medium">Target:</span>{" "}
                          {analytic.target}
                        </div>
                        <div className="text-sm text-foreground">
                          <span className="font-medium">Clicks:</span>{" "}
                          {analytic.clicks}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-input hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                          Export Data
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
    </TabsContent>
  );
};

export default LinkAnalytic;
