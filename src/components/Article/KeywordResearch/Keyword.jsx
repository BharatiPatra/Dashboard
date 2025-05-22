import { keywords } from "../DummyData/ArticleConstant";
import { useState } from "react";
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
import { ArrowUpDown, Download, Plus, Search } from "lucide-react";

export default function () {
  return (
    <>
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Keyword Explorer
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Research keywords for your content
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              placeholder="Enter a keyword or topic"
              className="w-full text-sm sm:text-base"
            />
            <Button className="cursor-pointer w-full sm:w-auto text-sm sm:text-base">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Research
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <Badge
              variant="outline"
              className="cursor-pointer text-xs sm:text-sm"
            >
              league of legends
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer text-xs sm:text-sm"
            >
              virtual assistant
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer text-xs sm:text-sm"
            >
              graphic design
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer text-xs sm:text-sm"
            >
              backlinks
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-800 hover:bg-blue-50 cursor-pointer text-xs sm:text-sm"
            >
              + Add Keyword
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-6">
        <h2 className="text-base sm:text-lg font-medium">Keyword Results</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="gap-1 cursor-pointer w-full sm:w-auto text-xs sm:text-sm"
          >
            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
            Export
          </Button>
          <Select defaultValue="volume">
            <SelectTrigger className="w-full sm:w-[180px] cursor-pointer text-xs sm:text-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="volume"
                className="cursor-pointer text-xs sm:text-sm"
              >
                Sort by Volume
              </SelectItem>
              <SelectItem
                value="difficulty"
                className="cursor-pointer text-xs sm:text-sm"
              >
                Sort by Difficulty
              </SelectItem>
              <SelectItem
                value="cpc"
                className="cursor-pointer text-xs sm:text-sm"
              >
                Sort by CPC
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox className="cursor-pointer" />
                </TableHead>
                <TableHead className="text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    Keyword
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    Volume
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    Difficulty
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-xs sm:text-sm">CPC</TableHead>
                <TableHead className="text-xs sm:text-sm">Intent</TableHead>
                <TableHead className="text-xs sm:text-sm">Trend</TableHead>
                <TableHead className="text-xs sm:text-sm">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywords.map((kw) => (
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
                          : kw.intent === "transactional"
                          ? "bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm"
                      }
                    >
                      {kw.intent.charAt(0).toUpperCase() + kw.intent.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        kw.trend === "increasing"
                          ? "bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm"
                          : kw.trend === "decreasing"
                          ? "bg-red-100 text-red-800 hover:bg-red-100 text-xs sm:text-sm"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm"
                      }
                    >
                      {kw.trend.charAt(0).toUpperCase() + kw.trend.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
