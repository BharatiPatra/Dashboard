import { requestedFeatures } from "../dummyData/ArticleConstant";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

export default function AllRequest() {
  return (
    <>
      {requestedFeatures.map((feature) => (
        <Card key={feature.id} className="mb-4">
          <CardHeader className="p-4 sm:p-6 pb-2">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
              <CardTitle className="text-base sm:text-lg">
                {feature.title}
              </CardTitle>
              <Badge
                className={
                  feature.status === "planned"
                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm"
                    : feature.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-xs sm:text-sm"
                    : feature.status === "completed"
                    ? "bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm"
                }
              >
                {feature.status === "in-progress"
                  ? "In Progress"
                  : feature.status === "under-review"
                  ? "Under Review"
                  : feature.status.charAt(0).toUpperCase() +
                    feature.status.slice(1)}
              </Badge>
            </div>
            <CardDescription className="text-xs sm:text-sm mt-1">
              Requested {feature.date}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="text-sm sm:text-base">{feature.description}</p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 p-4 sm:p-6 pt-0">
            <Button
              variant="outline"
              size="sm"
              className="gap-1 w-full sm:w-auto text-xs sm:text-sm"
            >
              <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="cursor-pointer">Upvote ({feature.votes})</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer w-full sm:w-auto text-xs sm:text-sm"
            >
              Comment
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
