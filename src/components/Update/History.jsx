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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, ChevronRight, Sparkles, Zap } from "lucide-react";

import { updates } from "./DummyData"; // Mock data
const History = () => {
  return (
    <TabsContent value="history" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Update History</CardTitle>
          <CardDescription>Previous versions and their changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Version</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Release Date</TableHead>
                <TableHead>Changes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {updates.map((update) => (
                <TableRow key={update.id}>
                  <TableCell className="font-medium">
                    {update.version}
                    {update.status === "current" && (
                      <Badge variant="outline" className="ml-2">
                        Current
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        update.type === "major"
                          ? "default"
                          : update.type === "minor"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {update.type.charAt(0).toUpperCase() +
                        update.type.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{update.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>{update.highlights.length}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="h-4 w-4 text-amber-500" />
                        <span>{update.changes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <span>{update.fixes}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <span>Details</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline">Load More Updates</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Major Milestones</CardTitle>
          <CardDescription>
            Key updates in our platform's history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative pl-6 border-l space-y-8">
            <div className="relative">
              <div className="absolute -left-[25px] p-1 bg-primary rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Version 2.0 Launch</h3>
                  <Badge>Major</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  January 15, 2023
                </p>
                <p className="text-sm">
                  Complete platform redesign with new content editor, improved
                  SEO tools, and team collaboration features.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] p-1 bg-primary rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">AI Integration</h3>
                  <Badge>Major</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  March 10, 2022
                </p>
                <p className="text-sm">
                  Introduced AI-powered content suggestions, keyword research,
                  and content optimization.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] p-1 bg-primary rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Platform Launch</h3>
                  <Badge>Major</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  September 5, 2021
                </p>
                <p className="text-sm">
                  Initial release of our content management and SEO platform.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default History;
