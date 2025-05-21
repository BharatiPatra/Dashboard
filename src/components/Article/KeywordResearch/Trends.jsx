import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Trends() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">Keyword Trends</CardTitle>
        <CardDescription className="text-xs sm:text-sm mt-1">
          Track keyword popularity over time
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="text-center p-6 sm:p-12 text-gray-500">
          <p className="text-sm sm:text-base">
            Trend visualization would appear here
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
