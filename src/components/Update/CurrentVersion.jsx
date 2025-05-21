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
import { Separator } from "@/components/ui/separator";

import {
  AlertCircle,
  Check,
  ExternalLink,
  FileText,
  Sparkles,
  Zap,
} from "lucide-react";

import { updates, changelog } from "./DummyData"; // Mock data
const CurrentVersion = () => {
  return (
    <TabsContent value="current" className="space-y-6 ">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                Version {updates[0].version}
              </CardTitle>
              <CardDescription>Released on {updates[0].date}</CardDescription>
            </div>
            <Badge className="uppercase">{updates[0].type} Update</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">What's New</h3>
            <p className="text-muted-foreground mb-4">
              {updates[0].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {updates[0].highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/40 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-medium">New Features</h3>
              </div>
              <p className="text-3xl font-bold">
                {updates[0].highlights.length}
              </p>
            </div>

            <div className="p-4 bg-muted/40 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-amber-500" />
                <h3 className="font-medium">Improvements</h3>
              </div>
              <p className="text-3xl font-bold">{updates[0].changes}</p>
            </div>

            <div className="p-4 bg-muted/40 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <h3 className="font-medium">Bug Fixes</h3>
              </div>
              <p className="text-3xl font-bold">{updates[0].fixes}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="w-full">
            <h3 className="font-medium mb-2">Detailed Changelog</h3>
            <div className="max-h-[300px] overflow-y-auto border rounded-md p-4">
              <div className="space-y-3">
                <h4 className="font-medium">Features</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  {changelog[0].changes
                    .filter((item) => item.type === "feature")
                    .map((item, index) => (
                      <li key={index}>{item.description}</li>
                    ))}
                </ul>

                <h4 className="font-medium pt-2">Improvements</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  {changelog[0].changes
                    .filter((item) => item.type === "improvement")
                    .map((item, index) => (
                      <li key={index}>{item.description}</li>
                    ))}
                </ul>

                <h4 className="font-medium pt-2">Bug Fixes</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  {changelog[0].changes
                    .filter((item) => item.type === "fix")
                    .map((item, index) => (
                      <li key={index}>{item.description}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="gap-1">
              <FileText className="h-4 w-4" />
              <span>Full Release Notes</span>
            </Button>
            <Button variant="outline" className="gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Visit Blog Post</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default CurrentVersion;
