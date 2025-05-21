import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function ImportContent() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">Import Content</CardTitle>
        <CardDescription className="text-xs sm:text-sm mt-1">
          Import content from external sources
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Import Method
          </label>
          <Select defaultValue="url">
            <SelectTrigger className="cursor-pointer text-sm sm:text-base">
              <SelectValue placeholder="Select import method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="url"
                className="cursor-pointer text-sm sm:text-base"
              >
                URL
              </SelectItem>
              <SelectItem
                value="file"
                className="cursor-pointer text-sm sm:text-base"
              >
                File Upload
              </SelectItem>
              <SelectItem
                value="paste"
                className="cursor-pointer text-sm sm:text-base"
              >
                Paste Content
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">URL</label>
          <Input
            placeholder="Enter URL to import content from"
            className="w-full text-sm sm:text-base"
          />
        </div>

        <div className="pt-4">
          <Button className="w-full cursor-pointer text-sm sm:text-base">
            Import Content
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
