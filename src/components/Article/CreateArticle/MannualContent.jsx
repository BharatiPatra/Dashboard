import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function MannualContent() {
  const keywords = [
    { id: 1, keyword: "league of legends", volume: 2300, difficulty: 400 },
    { id: 2, keyword: "virtual assistance", volume: 2000, difficulty: 300 },
    { id: 3, keyword: "graphic design services", volume: 350, difficulty: 150 },
    { id: 4, keyword: "modern payment methods", volume: 2000, difficulty: 250 },
    { id: 5, keyword: "backlinks", volume: 4500, difficulty: 500 },
    { id: 6, keyword: "ai seo software", volume: 800, difficulty: 200 },
  ];

  const [selectedKeyword, setSelectedKeyword] = useState("");

  return (
    <>
      <Card>
        <CardHeader className="p-3 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Article Details
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Enter the basic information for your article
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Article Title
            </label>
            <Input
              placeholder="Enter article title"
              className="w-full text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Select Keyword
            </label>
            <Select value={selectedKeyword} onValueChange={setSelectedKeyword}>
              <SelectTrigger className="cursor-pointer text-sm sm:text-base">
                <SelectValue placeholder="Select a keyword" />
              </SelectTrigger>
              <SelectContent>
                {keywords.map((kw) => (
                  <SelectItem
                    key={kw.id}
                    value={kw.keyword}
                    className="cursor-pointer text-sm sm:text-base"
                  >
                    {kw.keyword} [{kw.volume}/{kw.difficulty}]
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Meta Description
            </label>
            <Textarea
              placeholder="Enter meta description"
              className="w-full text-sm sm:text-base min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="p-3 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Article Content
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Write or paste your article content
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0">
          <Textarea
            placeholder="Enter article content"
            className="w-full min-h-[200px] sm:min-h-[300px] text-sm sm:text-base"
          />
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-end gap-2">
        <Button
          variant="outline"
          className="cursor-pointer w-full sm:w-auto text-sm sm:text-base"
        >
          Save Draft
        </Button>
        <Button className="cursor-pointer w-full sm:w-auto text-sm sm:text-base">
          Publish Article
        </Button>
      </div>
    </>
  );
}
