import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";

// Content type options
const contentTypes = [
  { value: "article", label: "Full Article" },
  { value: "listicle", label: "Listicle" },
  { value: "howto", label: "How-To Guide" },
  { value: "review", label: "Review" },
];

// Article length options
const articleLengths = [
  { value: "short", label: "Short (500-800 words)" },
  { value: "medium", label: "Medium (1000-1500 words)" },
  { value: "long", label: "Long (2000+ words)" },
];

// Time options
const timeOptions = [
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "14:00", label: "02:00 PM" },
];

// Switch option component
const SwitchOption = ({ title, description, defaultChecked = false }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
    <div className="flex flex-col gap-1">
      <span className="text-xs sm:text-sm font-medium">{title}</span>
      <span className="text-xs text-gray-500">{description}</span>
    </div>
    <Switch defaultChecked={defaultChecked} className="cursor-pointer" />
  </div>
);

const CreateBlog = () => {
  const [date, setDate] = useState();

  return (
    <TabsContent value="create" className="space-y-6">
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Create Auto-Blog Post
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Set up an automated blog post based on keywords
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4">
          {/* Topic Input */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">
              Topic or Keyword
            </label>
            <Input
              placeholder="Enter topic or keyword"
              className="w-full text-xs sm:text-sm"
            />
          </div>

          {/* Content Type Select */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">
              Content Type
            </label>
            <Select defaultValue="article">
              <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent>
                {contentTypes.map((type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Article Length Select */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">
              Article Length
            </label>
            <Select defaultValue="medium">
              <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                <SelectValue placeholder="Select length" />
              </SelectTrigger>
              <SelectContent>
                {articleLengths.map((length) => (
                  <SelectItem
                    key={length.value}
                    value={length.value}
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    {length.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Schedule Publication */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">
              Schedule Publication
            </label>
            <div className="flex flex-col gap-2 w-full">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal cursor-pointer text-xs sm:text-sm"
                  >
                    <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Select defaultValue="10:00">
                <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                  <Clock className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions.map((time) => (
                    <SelectItem
                      key={time.value}
                      value={time.value}
                      className="cursor-pointer text-xs sm:text-sm"
                    >
                      {time.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Switch Options */}
          <div className="space-y-4">
            <SwitchOption
              title="Auto-publish"
              description="Automatically publish when generated"
            />
            <SwitchOption
              title="Add images"
              description="Automatically add relevant images"
              defaultChecked={true}
            />
          </div>

          {/* Submit Button */}
          <Button className="w-full cursor-pointer text-sm sm:text-base">
            Create Auto-Blog Post
          </Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default CreateBlog;
