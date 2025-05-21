import { User } from "lucide-react";

export default function MessagesArea({ messages, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex gap-3 ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender !== "user" && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
              <div className="font-medium text-sm">
                {msg.agent?.avatar || "A"}
              </div>
            </div>
          )}
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              msg.sender === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            <p className="text-sm">{msg.message}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs opacity-70">{msg.timestamp}</span>
              {msg.sender === "user" && (
                <span className="text-xs opacity-70">
                  {msg.status === "read" ? "Read" : "Sent"}
                </span>
              )}
            </div>
          </div>
          {msg.sender === "user" && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
              <User className="h-4 w-4" />
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
