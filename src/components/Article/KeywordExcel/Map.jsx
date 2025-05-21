import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Map() {
  return (
    <>
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Map Fields</CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Map your Excel columns to the correct fields
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                Keyword Field
              </label>
              <Select defaultValue="column_a">
                <SelectTrigger className="text-xs sm:text-sm">
                  <SelectValue placeholder="Select Excel column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="column_a" className="text-xs sm:text-sm">
                    Column A (Keyword)
                  </SelectItem>
                  <SelectItem value="column_b" className="text-xs sm:text-sm">
                    Column B
                  </SelectItem>
                  <SelectItem value="column_c" className="text-xs sm:text-sm">
                    Column C
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                Volume Field
              </label>
              <Select defaultValue="column_b">
                <SelectTrigger className="text-xs sm:text-sm">
                  <SelectValue placeholder="Select Excel column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="column_a" className="text-xs sm:text-sm">
                    Column A
                  </SelectItem>
                  <SelectItem value="column_b" className="text-xs sm:text-sm">
                    Column B (Volume)
                  </SelectItem>
                  <SelectItem value="column_c" className="text-xs sm:text-sm">
                    Column C
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                Difficulty Field
              </label>
              <Select defaultValue="column_c">
                <SelectTrigger className="text-xs sm:text-sm">
                  <SelectValue placeholder="Select Excel column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="column_a" className="text-xs sm:text-sm">
                    Column A
                  </SelectItem>
                  <SelectItem value="column_b" className="text-xs sm:text-sm">
                    Column B
                  </SelectItem>
                  <SelectItem value="column_c" className="text-xs sm:text-sm">
                    Column C (Difficulty)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                CPC Field
              </label>
              <Select defaultValue="column_d">
                <SelectTrigger className="text-xs sm:text-sm">
                  <SelectValue placeholder="Select Excel column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="column_c" className="text-xs sm:text-sm">
                    Column C
                  </SelectItem>
                  <SelectItem value="column_d" className="text-xs sm:text-sm">
                    Column D (CPC)
                  </SelectItem>
                  <SelectItem value="column_e" className="text-xs sm:text-sm">
                    Column E
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">
                Intent Field
              </label>
              <Select defaultValue="column_e">
                <SelectTrigger className="text-xs sm:text-sm">
                  <SelectValue placeholder="Select Excel column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="column_d" className="text-xs sm:text-sm">
                    Column D
                  </SelectItem>
                  <SelectItem value="column_e" className="text-xs sm:text-sm">
                    Column E (Intent)
                  </SelectItem>
                  <SelectItem value="column_f" className="text-xs sm:text-sm">
                    Column F
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
        <Button
          variant="outline"
          onClick={() => setActiveTab("preview")}
          className="w-full sm:w-auto text-sm sm:text-base"
        >
          Back
        </Button>
        <Button
          onClick={() => setActiveTab("import")}
          className="w-full sm:w-auto text-sm sm:text-base"
        >
          Continue
        </Button>
      </div>
    </>
  );
}
