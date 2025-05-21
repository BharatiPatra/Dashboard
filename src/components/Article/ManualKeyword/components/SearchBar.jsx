import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => (
  <div className="flex gap-2 w-full sm:w-auto">
    <Input
      placeholder="Search keywords..."
      className="w-full sm:w-64 text-sm sm:text-base"
    />
    <Button variant="outline" size="icon" className="cursor-pointer shrink-0">
      <Search className="h-4 w-4" />
    </Button>
  </div>
);
