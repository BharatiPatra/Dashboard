import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Competitors() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">
          Competitor Keyword Analysis
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm mt-1">
          Analyze keywords from your competitors
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Enter competitor domain"
            className="w-full text-sm sm:text-base"
          />
          <Button className="w-full sm:w-auto text-sm sm:text-base">
            Analyze
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
