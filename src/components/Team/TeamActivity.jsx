import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Calendar, Clock, FileText, Filter } from "lucide-react";

import { teamActivity } from "./DummyData"; // Mock data
const TeamActivity = () => {
  return (
    <TabsContent value="activity" className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Team Activity</CardTitle>
              <CardDescription>Recent actions by team members</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-1 cursor-pointer">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="gap-1 cursor-pointer">
                <Calendar className="h-4 w-4" />
                <span>Date Range</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {teamActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium text-sm mt-0.5">
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        {activity.action}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                  <p className="text-sm mt-1">{activity.target}</p>
                  <div className="mt-3 pt-3 border-t">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-sm cursor-pointer"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" className="cursor-pointer">
            Load More Activity
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Content</CardTitle>
            <CardDescription>Upcoming articles and tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">Top Amazon Payment Methods</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">
                    Scheduled for May 25, 2023
                  </p>
                </div>
                <Badge>Sarah Johnson</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">SEO Guide for Beginners</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">
                    Scheduled for May 28, 2023
                  </p>
                </div>
                <Badge>Michael Chen</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">Content Marketing Strategy</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">
                    Scheduled for June 2, 2023
                  </p>
                </div>
                <Badge>Emily Wilson</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Tasks and articles due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">
                      Blog Post on SEO Best Practices
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">
                    Due May 25, 2023
                  </p>
                </div>
                <Badge>Sarah Johnson</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">Article on Content Marketing</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">
                    Due May 28, 2023
                  </p>
                </div>
                <Badge>Michael Chen</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">Social Media Strategy Plan</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">
                    Due June 2, 2023
                  </p>
                </div>
                <Badge>Emily Wilson</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default TeamActivity;
