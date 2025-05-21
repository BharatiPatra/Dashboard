import { competitorKeywords } from "../DummyData/SocialConstants";
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
export default function Keywords() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[200px] cursor-pointer ">
              <SelectValue placeholder="Select competitor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="cursor-pointer">
                All Competitors
              </SelectItem>
              <SelectItem value="gamingguides" className="cursor-pointer">
                gamingguides.com
              </SelectItem>
              <SelectItem
                value="leagueoflegendstips"
                className="cursor-pointer"
              >
                leagueoflegendstips.net
              </SelectItem>
              <SelectItem value="esportshub">esportshub.io</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Search keywords..." className="w-64" />
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Search className="h-4 w-4 " />
          </Button>
        </div>
        <Button variant="outline" className="gap-1 cursor-pointer">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox className="cursor-pointer" />
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Keyword
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Volume
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Difficulty
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Competitor</TableHead>
                <TableHead>Content Gap</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitorKeywords.map((kw) => (
                <TableRow key={kw.id}>
                  <TableCell>
                    <Checkbox className="cursor-pointer" />
                  </TableCell>
                  <TableCell className="font-medium">{kw.keyword}</TableCell>
                  <TableCell>{kw.volume.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{kw.difficulty}</span>
                      <Progress value={kw.difficulty} className="h-2 w-16" />
                    </div>
                  </TableCell>
                  <TableCell>#{kw.position}</TableCell>
                  <TableCell>{kw.competitor}</TableCell>
                  <TableCell>
                    {kw.gap ? (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                        Gap
                      </Badge>
                    ) : (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Covered
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
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
