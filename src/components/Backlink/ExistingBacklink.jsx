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
import { Progress } from "@/components/ui/progress";
import { ExternalLink, RefreshCw, Search } from "lucide-react";
import { backlinks } from "./DummyData";

// Status badge component
const StatusBadge = ({ status }) => {
  const getBadgeStyle = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <Badge
      className={`${getBadgeStyle(status)} text-xs sm:text-sm md:text-base`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

// Domain authority component
const DomainAuthority = ({ value }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs sm:text-sm md:text-base">{value}</span>
    <Progress value={value} className="h-1.5 sm:h-2 w-12 sm:w-16" />
  </div>
);

// Action button component
const ActionButton = () => (
  <Button
    variant="ghost"
    size="sm"
    className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer"
  >
    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
  </Button>
);

const ExistingBacklink = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search backlinks..."
            className="w-full sm:w-56 md:w-64 text-xs sm:text-sm md:text-base"
          />
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 cursor-pointer h-9 w-9 sm:h-10 sm:w-10"
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          className="w-full sm:w-auto gap-1 cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap h-9 sm:h-10"
        >
          <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Refresh Backlinks</span>
        </Button>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Source
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Target Article
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Anchor Text
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Domain Authority
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Status
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Date Found
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backlinks.map((link) => (
                  <TableRow key={link.id}>
                    <TableCell className="font-medium text-xs sm:text-sm md:text-base">
                      {link.source}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm md:text-base">
                      {link.target}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm md:text-base">
                      "{link.anchorText}"
                    </TableCell>
                    <TableCell>
                      <DomainAuthority value={link.domainAuthority} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={link.status} />
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm md:text-base">
                      {link.dateFound}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <ActionButton />
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

export default ExistingBacklink;
