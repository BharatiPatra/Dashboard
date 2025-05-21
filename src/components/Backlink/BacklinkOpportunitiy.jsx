import { Button } from "@/components/ui/button";
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
import { opportunities } from "./DummyData";

// Relevance badge component
const RelevanceBadge = ({ relevance }) => {
  const getBadgeStyle = (relevance) => {
    switch (relevance) {
      case "High":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <Badge
      className={`${getBadgeStyle(relevance)} text-xs sm:text-sm md:text-base`}
    >
      {relevance}
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

const BacklinkOpportunitiy = () => {
  return (
    <div className="space-y-4 sm:space-y-6 min-h-0">
      <div className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          Backlink Opportunities
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
          Potential websites for backlink outreach
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Website
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Relevance
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Domain Authority
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Contact Info
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Notes
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opportunities.map((opp) => (
                  <TableRow key={opp.id}>
                    <TableCell className="font-medium text-xs sm:text-sm md:text-base">
                      {opp.website}
                    </TableCell>
                    <TableCell>
                      <RelevanceBadge relevance={opp.relevance} />
                    </TableCell>
                    <TableCell>
                      <DomainAuthority value={opp.domainAuthority} />
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm md:text-base">
                      {opp.contactInfo}
                    </TableCell>
                    <TableCell className="max-w-[120px] sm:max-w-[200px] md:max-w-xs truncate text-xs sm:text-sm md:text-base">
                      {opp.notes}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Button
                          size="sm"
                          className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap h-8 sm:h-9"
                        >
                          Start Outreach
                        </Button>
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

export default BacklinkOpportunitiy;
