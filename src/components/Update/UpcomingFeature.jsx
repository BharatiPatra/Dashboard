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

import { Progress } from "@/components/ui/progress";

import { Clock, Info, Rocket } from "lucide-react";

import { upcomingFeatures } from "./DummyData"; // Mock data
const UpcomingFeature = () => {
  return (
    <TabsContent value="upcoming" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Features</CardTitle>
          <CardDescription>
            Features and improvements we're currently working on
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {upcomingFeatures.map((feature) => (
            <div key={feature.id} className="border rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-medium text-lg">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <Badge
                  variant={
                    feature.status === "in-development"
                      ? "default"
                      : "secondary"
                  }
                >
                  {feature.status === "in-development"
                    ? "In Development"
                    : "Planned"}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{feature.progress}%</span>
                </div>
                <Progress value={feature.progress} />
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Estimated release: {feature.eta}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <div className="w-full p-4 bg-muted/40 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium">Have a feature request?</h3>
            </div>
            <p className="text-muted-foreground mb-3">
              We're always looking to improve our platform. If you have a
              feature idea, let us know!
            </p>
            <Button className="gap-1">
              <Rocket className="h-4 w-4" />
              <span>Submit Feature Request</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default UpcomingFeature;
