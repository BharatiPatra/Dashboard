import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Link,
  Plus,
  Search,
  Filter,
  RefreshCw,
} from "lucide-react";
import { internalLinks } from "./DummyData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Status badge component
const StatusBadge = ({ status }) => (
  <Badge
    className={
      status === "active"
        ? "bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm"
        : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm"
    }
  >
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </Badge>
);

// Action buttons component
const ActionButtons = () => (
  <div className="flex gap-2">
    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
      <Link className="h-3 w-3 sm:h-4 sm:w-4" />
    </Button>
  </div>
);

const ExistingLink = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-foreground">Existing Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search links..."
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
                  <SelectItem value="all">All Links</SelectItem>
                  <SelectItem value="navigation">Navigation</SelectItem>
                  <SelectItem value="content">Content</SelectItem>
                  <SelectItem value="footer">Footer</SelectItem>
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
            {internalLinks.map((link) => (
              <Card key={link.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Source:</span>{" "}
                        {link.source}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Target:</span>{" "}
                        {link.target}
                      </div>
                      <div className="text-sm text-foreground">
                        <span className="font-medium">Anchor:</span>{" "}
                        {link.anchorText}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-input hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
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
};

export default ExistingLink;
