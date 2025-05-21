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
import { FileText, Search } from "lucide-react";
import { articles } from "../DummyData";

export const ArticlesList = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex gap-2 w-full sm:w-auto">
          <Input placeholder="Search articles..." className="w-full sm:w-64" />
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer shrink-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Button className="cursor-pointer w-full sm:w-auto">
          Create New List
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px]">Article Title</TableHead>
                  <TableHead className="min-w-[100px]">Keywords</TableHead>
                  <TableHead className="min-w-[100px]">Words</TableHead>
                  <TableHead className="min-w-[120px]">Created On</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">
                      {article.title}
                    </TableCell>
                    <TableCell>{article.keywords}</TableCell>
                    <TableCell>{article.words}</TableCell>
                    <TableCell>{article.createdOn}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          article.status === "published"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {article.status.charAt(0).toUpperCase() +
                          article.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer text-xs sm:text-sm"
                        >
                          View Keywords
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 cursor-pointer"
                        >
                          <FileText className="h-4 w-4" />
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
