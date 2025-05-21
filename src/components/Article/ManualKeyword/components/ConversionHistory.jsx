import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export const ConversionHistory = () => (
  <Card className="mt-4">
    <CardHeader className="pb-4">
      <CardTitle className="text-xl">Conversion History</CardTitle>
      <CardDescription className="text-sm mt-1">
        History of keywords converted to articles
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="py-4">Keyword</TableHead>
              <TableHead className="py-4">Article Title</TableHead>
              <TableHead className="py-4">Date Created</TableHead>
              <TableHead className="py-4">Status</TableHead>
              <TableHead className="py-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <HistoryRow
              keyword="league of legends best champions"
              title="Top 10 Best Champions in League of Legends (2024)"
              date="2 days ago"
            />
            <HistoryRow
              keyword="virtual assistant services"
              title="Top Virtual Assistant Services (2024)"
              date="1 week ago"
            />
            <HistoryRow
              keyword="graphic design services"
              title="Universal Graphic Design Services You Can Rely On"
              date="2 weeks ago"
            />
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

const HistoryRow = ({ keyword, title, date }) => (
  <TableRow className="hover:bg-gray-50">
    <TableCell className="py-4 font-medium">{keyword}</TableCell>
    <TableCell className="py-4">{title}</TableCell>
    <TableCell className="py-4">{date}</TableCell>
    <TableCell className="py-4">
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        Published
      </Badge>
    </TableCell>
    <TableCell className="py-4">
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
        <FileText className="h-4 w-4" />
      </Button>
    </TableCell>
  </TableRow>
);
