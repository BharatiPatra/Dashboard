import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

const OutreachCampaigns = () => {
  return (
      <TabsContent value="outreach" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Outreach Campaigns</CardTitle>
              <CardDescription>
                Manage your backlink outreach campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 text-center text-gray-500">
              <p>No active outreach campaigns</p>
              <Button className="mt-4 cursor-pointer">Create New Campaign</Button>
            </CardContent>
          </Card>
        </TabsContent>  )
}

export default OutreachCampaigns