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

export default function AIContent() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">
          AI Article Generation
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm mt-1">
          Generate an article using AI
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Topic or Keyword
          </label>
          <Input
            placeholder="Enter topic or keyword"
            className="w-full text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Article Length
          </label>
          <Select defaultValue="medium">
            <SelectTrigger className="cursor-pointer text-sm sm:text-base">
              <SelectValue placeholder="Select length" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="short"
                className="cursor-pointer text-sm sm:text-base"
              >
                Short (500-800 words)
              </SelectItem>
              <SelectItem
                value="medium"
                className="cursor-pointer text-sm sm:text-base"
              >
                Medium (1000-1500 words)
              </SelectItem>
              <SelectItem
                value="long"
                className="cursor-pointer text-sm sm:text-base"
              >
                Long (2000+ words)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tone</label>
          <Select defaultValue="informative">
            <SelectTrigger className="cursor-pointer text-sm sm:text-base">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="informative"
                className="cursor-pointer text-sm sm:text-base"
              >
                Informative
              </SelectItem>
              <SelectItem
                value="conversational"
                className="cursor-pointer text-sm sm:text-base"
              >
                Conversational
              </SelectItem>
              <SelectItem
                value="professional"
                className="cursor-pointer text-sm sm:text-base"
              >
                Professional
              </SelectItem>
              <SelectItem
                value="persuasive"
                className="cursor-pointer text-sm sm:text-base"
              >
                Persuasive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4">
          <Button className="w-full cursor-pointer text-sm sm:text-base">
            Generate Article
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
