import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Analysis() {
  return (
    <div className="space-y-4 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">
              Top Competitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">example.com</span>
                <span className="text-sm font-medium">150 keywords</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">competitor1.com</span>
                <span className="text-sm font-medium">120 keywords</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">competitor2.com</span>
                <span className="text-sm font-medium">90 keywords</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Content Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Topic 1</span>
                <span className="text-sm font-medium">1,500 volume</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Topic 2</span>
                <span className="text-sm font-medium">1,200 volume</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Topic 3</span>
                <span className="text-sm font-medium">900 volume</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">
              Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Keyword 1</span>
                <span className="text-sm font-medium">Low difficulty</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Keyword 2</span>
                <span className="text-sm font-medium">Medium difficulty</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Keyword 3</span>
                <span className="text-sm font-medium">Low difficulty</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
