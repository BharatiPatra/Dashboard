import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Download, FileSpreadsheet, Upload } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

export default function KUpload() {
  const [isUploaded, setIsUploaded] = useState(false);
  const handleUpload = () => {
    setIsUploaded(true);
    setActiveTab("preview");
  };

  return (
    <>
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Upload Excel File
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Upload an Excel file containing your keywords
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-12 text-center">
            <FileSpreadsheet className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-gray-400 mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium mb-2">
              Drag and drop your Excel file here
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">or</p>
            <Button
              onClick={handleUpload}
              className="cursor-pointer text-sm sm:text-base"
            >
              Browse Files
            </Button>
            <p className="text-xs text-gray-500 mt-3 sm:mt-4">
              Supports .xlsx, .xls, and .csv files
            </p>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="text-sm sm:text-base">Template</AlertTitle>
            <AlertDescription className="text-xs sm:text-sm">
              <p className="mb-2">
                Download our template file to ensure your data is formatted
                correctly for import.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 cursor-pointer text-xs sm:text-sm"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                Download Template
              </Button>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </>
  );
}
