import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { importedKeywords } from "../DummyData/KeywordExcelConstants";

export default function KImport() {
  return (
    <>
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Import Keywords
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Review and complete your keyword import
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pb-16 sm:pb-24 space-y-4">
          <div className="bg-gray-50 p-3 sm:p-4 rounded-md">
            <h3 className="text-sm sm:text-base font-medium mb-2">
              Import Summary
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <span className="font-medium">Total Keywords:</span>{" "}
                {importedKeywords.length}
              </li>
              <li>
                <span className="font-medium">Duplicate Keywords:</span> 0
              </li>
              <li>
                <span className="font-medium">New Keywords:</span>{" "}
                {importedKeywords.length}
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm font-medium">
                Skip duplicates
              </span>
              <span className="text-xs text-gray-500">
                Skip keywords that already exist in your database
              </span>
            </div>
            <Checkbox defaultChecked className="cursor-pointer" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm font-medium">
                Auto-generate articles
              </span>
              <span className="text-xs text-gray-500">
                Automatically create article drafts for imported keywords
              </span>
            </div>
            <Checkbox className="cursor-pointer" />
          </div>

          <Button className="w-full gap-1 text-sm sm:text-base">
            <Upload className="h-3 w-3 sm:h-4 sm:w-4" />
            Import {importedKeywords.length} Keywords
          </Button>
        </CardContent>
      </Card>
      <div className="h-16 sm:h-24"></div>
    </>
  );
}
