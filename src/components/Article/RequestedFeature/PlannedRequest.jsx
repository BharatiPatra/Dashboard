import { requestedFeatures } from "../DummyData/ArticleConstant";
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

export default function PlannedRequests() {
  return (
    <>
      {requestedFeatures
        .filter((f) => f.status === "planned")
        .map((feature) => (
          <Card key={feature.id} className="mb-4">
            <CardHeader className="p-4 sm:p-6 pb-2">
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                <CardTitle className="text-base sm:text-lg">
                  {feature.title}
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm">
                  Planned
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
