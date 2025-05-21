import { Button } from "@/components/ui/button";
import { HelpCircle, Settings } from "lucide-react";

export default function ChatHeader({ conversation }) {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600">
            <div className="font-medium">
              {conversation?.agent
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <div>
            <h3 className="font-medium">{conversation?.title}</h3>
            <p className="text-sm ">
              {conversation?.agent}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
