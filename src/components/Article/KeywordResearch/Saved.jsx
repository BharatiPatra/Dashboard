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

export default function Saved() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">Saved Keywords</CardTitle>
        <CardDescription className="text-xs sm:text-sm mt-1">
          Your saved keywords for content creation
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 text-center text-gray-500">
        <p className="text-sm sm:text-base">
          You haven't saved any keywords yet
        </p>
        <Button className="mt-4 cursor-pointer w-full sm:w-auto text-sm sm:text-base">
          Research Keywords
        </Button>
      </CardContent>
    </Card>
  );
}
