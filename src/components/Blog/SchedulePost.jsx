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

const SchedulePost = () => {
  return (
    <TabsContent value="scheduled" className="space-y-4 min-h-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className="text-base sm:text-lg font-medium">Scheduled Posts</h2>
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto gap-1 cursor-pointer text-xs sm:text-sm"
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
                <CardTitle className="text-base sm:text-lg">
                  {post.title}
                </CardTitle>
                <Badge
                  className={
                    post.status === "scheduled"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm"
                  }
                >
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-xs sm:text-sm">
                {post.status === "scheduled"
                  ? `Scheduled for ${post.date}`
                  : "Draft"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="text-xs sm:text-sm">
                <span className="font-medium">Keyword:</span> {post.keyword}
              </div>
            </CardContent>
            <div className="px-4 sm:px-6 pb-4 flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm"
              >
                Edit
              </Button>
              {post.status === "scheduled" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto text-red-500 border-red-500 cursor-pointer text-xs sm:text-sm"
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm"
                >
                  Schedule
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};

export default SchedulePost;
