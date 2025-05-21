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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Link, Plus, Search } from "lucide-react";
import { internalLinks } from "./DummyData";

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
    <div className="space-y-6 min-h-0">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">Existing Links</h2>
          <Button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm whitespace-nowrap">
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Add New Link
          </Button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search links..."
            className="w-full sm:w-64 text-xs sm:text-sm"
          />
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 cursor-pointer"
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Source Article
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Target Article
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Anchor Text
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Status
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Clicks
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {internalLinks.map((link) => (
                  <TableRow key={link.id}>
                    <TableCell className="font-medium text-xs sm:text-sm">
                      {link.source}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {link.target}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      "{link.anchorText}"
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={link.status} />
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {link.clicks}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <ActionButtons />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExistingLink;
