import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { articles, keywordLists } from "../DummyData";

export const ManageKeywords = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <Select defaultValue="article1">
          <SelectTrigger className="w-full sm:w-[350px] cursor-pointer">
            <SelectValue placeholder="Select article" />
          </SelectTrigger>
          <SelectContent>
            {articles.map((article) => (
              <SelectItem
                key={article.id}
                value={`article${article.id}`}
                className="cursor-pointer"
              >
                {article.title} ({article.keywords} keywords)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            className="cursor-pointer flex-1 sm:flex-none"
          >
            Add Keywords
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer flex-1 sm:flex-none"
          >
            Remove Selected
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">
            Keyword List for "Complete Guide to League of Legends"
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="min-w-[200px]">Keyword</TableHead>
                  <TableHead className="min-w-[120px]">Search Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keywordLists[0].keywords.map((keyword, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">
                      {keyword.keyword}
                    </TableCell>
                    <TableCell>{keyword.volume.toLocaleString()}</TableCell>
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
