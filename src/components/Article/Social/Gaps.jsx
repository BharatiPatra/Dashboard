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
import { Search } from "lucide-react";

export default function Gaps() {
  return (
    <div className="space-y-4 h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search content gaps..."
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
        <Button className="cursor-pointer w-full sm:w-auto">Export Gaps</Button>
      </div>

      <Card className="h-[calc(100%-80px)]">
        <CardContent className="p-0 h-full">
          <div className="overflow-y-auto h-full">
            <Table>
              <TableHeader className="sticky top-0 bg-white">
                <TableRow>
                  <TableHead className="min-w-[200px]">Topic</TableHead>
                  <TableHead className="min-w-[150px]">Competitor</TableHead>
                  <TableHead className="min-w-[100px]">Volume</TableHead>
                  <TableHead className="min-w-[100px]">Difficulty</TableHead>
                  <TableHead className="min-w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Example Topic</TableCell>
                  <TableCell>example.com</TableCell>
                  <TableCell>1,500</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="cursor-pointer text-xs sm:text-sm"
                      >
                        Create Content
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
