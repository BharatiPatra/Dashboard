import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

const BacklinkAnalytic = () => {
  return (
    <TabsContent value="analytics" className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Backlink Analytics</CardTitle>
          <CardDescription>
            Performance metrics for your backlinks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 text-gray-500">
            <p>Analytics visualization would appear here</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default BacklinkAnalytic;
