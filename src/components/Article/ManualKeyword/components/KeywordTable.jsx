import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowUpDown } from "lucide-react";
import { IntentBadge } from "./IntentBadge";

const KeywordRow = ({ keyword, isSelected, onToggle }) => (
  <TableRow className="cursor-pointer" onClick={onToggle}>
    <TableCell>
      <Checkbox
        checked={isSelected}
        onCheckedChange={onToggle}
        onClick={(e) => e.stopPropagation()}
      />
    </TableCell>
    <TableCell className="font-medium">
      <div>
        <div>{keyword.keyword}</div>
        <div className="text-xs text-gray-500 sm:hidden mt-1">
          {keyword.volume.toLocaleString()} • {keyword.difficulty} • $
          {keyword.cpc.toFixed(2)}
        </div>
      </div>
    </TableCell>
    <TableCell className="hidden sm:table-cell">
      {keyword.volume.toLocaleString()}
    </TableCell>
    <TableCell className="hidden sm:table-cell">
      <div className="flex items-center gap-2">
        <span>{keyword.difficulty}</span>
        <Progress value={keyword.difficulty} className="h-2 w-16" />
      </div>
    </TableCell>
    <TableCell className="hidden md:table-cell">
      ${keyword.cpc.toFixed(2)}
    </TableCell>
    <TableCell className="hidden sm:table-cell">
      <IntentBadge intent={keyword.intent} />
    </TableCell>
  </TableRow>
);

export const KeywordTable = ({
  keywords,
  selectedKeywords,
  toggleKeyword,
  toggleAllKeywords,
}) => (
  <Card>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  className="cursor-pointer"
                  checked={selectedKeywords.length === keywords.length}
                  onCheckedChange={toggleAllKeywords}
                />
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Keyword
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                <div className="flex items-center gap-1">
                  Volume
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                <div className="flex items-center gap-1">
                  Difficulty
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="hidden md:table-cell">CPC</TableHead>
              <TableHead className="hidden sm:table-cell">Intent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {keywords.map((kw) => (
              <KeywordRow
                key={kw.id}
                keyword={kw}
                isSelected={selectedKeywords.includes(kw.id)}
                onToggle={() => toggleKeyword(kw.id)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);
