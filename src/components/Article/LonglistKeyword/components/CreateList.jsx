import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";

export const CreateList = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <Input
          placeholder="Enter article title..."
          className="w-full sm:w-[350px]"
        />
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            className="cursor-pointer flex-1 sm:flex-none"
          >
            Import Keywords
          </Button>
          <Button className="cursor-pointer flex-1 sm:flex-none">
            Create List
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Add Keywords</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="min-w-[200px]">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Keyword
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[150px]">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Search Volume
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Input placeholder="Enter keyword..." className="w-full" />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      placeholder="Enter volume..."
                      className="w-full"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
