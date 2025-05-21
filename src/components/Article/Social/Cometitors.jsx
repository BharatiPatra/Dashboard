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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { competitors } from "../DummyData/SocialConstants";
import { Search } from "lucide-react";

export default function Competitors() {
  return (
    <div className="space-y-4 h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search competitors..."
            className="w-full sm:w-64"
          />
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer shrink-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Button className="cursor-pointer w-full sm:w-auto">
          Add Competitor
        </Button>
      </div>

      <Card className="h-[calc(100%-80px)]">
        <CardContent className="p-0 h-full">
          <div className="overflow-y-auto h-full">
            <Table>
              <TableHeader className="sticky top-0 bg-white">
                <TableRow>
                  <TableHead className="min-w-[200px]">
                    Competitor Name
                  </TableHead>
                  <TableHead className="min-w-[150px]">Website</TableHead>
                  <TableHead className="min-w-[100px]">Keywords</TableHead>
                  <TableHead className="min-w-[100px]">Articles</TableHead>
                  <TableHead className="min-w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competitors.map((competitor) => (
                  <TableRow key={competitor.id}>
                    <TableCell className="font-medium">
                      {competitor.name}
                    </TableCell>
                    <TableCell>{competitor.domain}</TableCell>
                    <TableCell>
                      {competitor.keywords.toLocaleString()}
                    </TableCell>
                    <TableCell>{competitor.traffic.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer text-xs sm:text-sm"
                        >
                          View Details
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
}
