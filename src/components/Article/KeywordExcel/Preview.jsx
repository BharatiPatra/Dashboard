import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Download, FileSpreadsheet, Upload } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { importedKeywords } from "../DummyData/KeywordExcelConstants";

export default function Preview() {
  return (
    <>
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Preview Data</CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Review the data from your Excel file
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox className="cursor-pointer" />
                </TableHead>
                <TableHead className="text-xs sm:text-sm">Keyword</TableHead>
                <TableHead className="text-xs sm:text-sm">Volume</TableHead>
                <TableHead className="text-xs sm:text-sm">Difficulty</TableHead>
                <TableHead className="text-xs sm:text-sm">CPC</TableHead>
                <TableHead className="text-xs sm:text-sm">Intent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {importedKeywords.map((kw) => (
                <TableRow key={kw.id}>
                  <TableCell>
                    <Checkbox className="cursor-pointer" />
                  </TableCell>
                  <TableCell className="font-medium text-xs sm:text-sm">
                    {kw.keyword}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">
                    {kw.volume.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm">
                        {kw.difficulty}
                      </span>
                      <Progress
                        value={kw.difficulty}
                        className="h-2 w-12 sm:w-16"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">
                    ${kw.cpc.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        kw.intent === "informational"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm"
                          : kw.intent === "commercial"
                          ? "bg-purple-100 text-purple-800 hover:bg-purple-100 text-xs sm:text-sm"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm"
                      }
                    >
                      {kw.intent.charAt(0).toUpperCase() + kw.intent.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
        <Button
          variant="outline"
          onClick={() => setActiveTab("upload")}
          className="w-full sm:w-auto text-sm sm:text-base"
        >
          Back
        </Button>
        <Button
          onClick={() => setActiveTab("map")}
          className="w-full sm:w-auto text-sm sm:text-base"
        >
          Continue
        </Button>
      </div>
    </>
  );
}
