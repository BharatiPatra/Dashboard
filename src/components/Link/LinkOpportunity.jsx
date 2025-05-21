import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { linkOpportunities } from "./DummyData";

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
    <Badge className={`${getBadgeStyle(relevance)} text-xs sm:text-sm`}>
      {relevance}
    </Badge>
  );
};

const LinkOpportunity = () => {
  return (
    <div className="space-y-6 min-h-0">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg sm:text-xl font-semibold">Link Opportunities</h2>
        <p className="text-sm text-muted-foreground">
          Suggested internal links based on content relevance
        </p>
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
                    Relevance
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Suggested Anchor Text
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm whitespace-nowrap">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {linkOpportunities.map((opportunity) => (
                  <TableRow key={opportunity.id}>
                    <TableCell className="font-medium text-xs sm:text-sm">
                      {opportunity.source}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {opportunity.target}
                    </TableCell>
                    <TableCell>
                      <RelevanceBadge relevance={opportunity.relevance} />
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      "{opportunity.suggestedAnchorText}"
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Button
                          size="sm"
                          className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm whitespace-nowrap"
                        >
                          Add Link
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

export default LinkOpportunity;
