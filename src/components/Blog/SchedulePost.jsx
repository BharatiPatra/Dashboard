import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Badge } from "lucide-react";
import { scheduledPosts } from "./DummyData";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

const SchedulePost = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState("10:00");

  const timeOptions = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
  ];

  return (
    <TabsContent value="schedule" className="space-y-4 min-h-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className="text-base sm:text-lg font-medium text-foreground">
          Scheduled Posts
        </h2>
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto gap-1 cursor-pointer text-xs sm:text-sm border-input hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Refresh</span>
        </Button>
      </div>

      <div className="space-y-4 overflow-y-auto">
        {scheduledPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="p-4 sm:p-6 pb-2">
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                <CardTitle className="text-base sm:text-lg text-foreground">
                  {post.title}
                </CardTitle>
                <Badge
                  className={
                    post.status === "scheduled"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm dark:bg-blue-900 dark:text-blue-200"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm dark:bg-gray-800 dark:text-gray-200"
                  }
                >
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                {post.status === "scheduled"
                  ? `Scheduled for ${post.date}`
                  : "Draft"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="text-xs sm:text-sm text-foreground">
                <span className="font-medium">Keyword:</span> {post.keyword}
              </div>
            </CardContent>
            <div className="px-4 sm:px-6 pb-4 flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm border-input hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Edit
              </Button>
              {post.status === "scheduled" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto text-red-500 border-red-500 cursor-pointer text-xs sm:text-sm hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Schedule
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-foreground">Schedule Post</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-foreground">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-background text-foreground border-input hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background border-input">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Select Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="bg-background text-foreground border-input">
                  <Clock className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="cursor-pointer"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                className="border-input hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Schedule
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default SchedulePost;
