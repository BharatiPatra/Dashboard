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
import { Search, Filter, RefreshCw, ExternalLink } from "lucide-react";
import { existingBacklinks } from "./DummyData";

export default function ExistingBacklink() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-foreground">Existing Backlinks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search backlinks..."
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
                  <SelectItem value="all">All Backlinks</SelectItem>
                  <SelectItem value="dofollow">DoFollow</SelectItem>
                  <SelectItem value="nofollow">NoFollow</SelectItem>
                  <SelectItem value="sponsored">Sponsored</SelectItem>
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
            {existingBacklinks.map((backlink) => (
              <Card key={backlink.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Source:</span>{" "}
                        {backlink.source}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Target:</span>{" "}
                        {backlink.target}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Type:</span>{" "}
                        {backlink.type}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">DA:</span>{" "}
                        {backlink.domainAuthority}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-input hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 dark:text-red-400 dark:border-red-400"
                      >
                        Remove
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
