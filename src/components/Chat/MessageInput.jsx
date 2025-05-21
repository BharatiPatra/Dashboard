import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperclipIcon, SmileIcon, Send } from "lucide-react";

export default function MessageInput({
  message,
  onMessageChange,
  onSendMessage,
}) {
  return (
    <div className="p-2 sm:p-4 border-t">
      <form onSubmit={onSendMessage} className="flex gap-1 sm:gap-2">
        <div className="flex-1 relative">
          <Textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            className="min-h-[48px] sm:min-h-[60px] resize-none pr-10 sm:pr-12 text-sm"
          />
          <div className="absolute right-1 sm:right-2 bottom-1 sm:bottom-2 flex items-center gap-0.5 sm:gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-6 w-6 sm:h-8 sm:w-8"
            >
              <PaperclipIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-6 w-6 sm:h-8 sm:w-8"
            >
              <SmileIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          size="icon"
          className="h-[48px] w-[48px] sm:h-[60px] sm:w-[60px]"
        >
          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </form>
    </div>
  );
}
