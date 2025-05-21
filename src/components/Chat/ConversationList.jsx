import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Bot } from "lucide-react";

export default function ConversationList({
  conversations,
  activeConversation,
  searchQuery,
  onSearchChange,
  onConversationSelect,
}) {
  // Filter conversations based on search query
  const filteredConversations = conversations.filter(
    (conv) =>
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ConversationItem = ({ conversation }) => (
    <div
      className={`p-3 cursor-pointer hover:bg-muted/50 transition-colors ${
        activeConversation === conversation.id ? "bg-muted/50" : ""
      }`}
      onClick={() => onConversationSelect(conversation.id)}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            conversation.type === "ai"
              ? "bg-purple-100 text-purple-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {conversation.type === "ai" ? (
            <Bot className="h-5 w-5" />
          ) : (
            <div className="font-medium">
              {conversation.agent
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">{conversation.title}</h3>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {conversation.timestamp}
            </span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm text-muted-foreground truncate">
              {conversation.lastMessage}
            </p>
            {conversation.unread && (
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="text-xs px-1 py-0 h-5">
              {conversation.type === "ai" ? "AI" : "Support"}
            </Badge>
            <Badge
              variant={
                conversation.status === "active" ? "secondary" : "outline"
              }
              className="text-xs px-1 py-0 h-5"
            >
              {conversation.status === "active" ? "Active" : "Closed"}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:col-span-1 border rounded-lg overflow-hidden flex flex-col">
      <div className="p-4 border-b bg-muted/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium">Conversations</h2>
          <Button variant="outline" size="sm" className="gap-1 cursor-pointer">
            <Plus className="h-4 w-4" />
            <span>New Chat</span>
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer" />
          <Input
            placeholder="Search conversations..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Tabs defaultValue="all" className="w-full">
          <div className="px-2 pt-2">
            <TabsList className="w-full">
              <TabsTrigger
                value="all"
                className="flex-1 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="flex-1 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="closed"
                className="flex-1 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Closed
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="m-0">
            <div className="divide-y">
              {filteredConversations.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  No conversations found
                </div>
              ) : (
                filteredConversations.map((conv) => (
                  <ConversationItem key={conv.id} conversation={conv} />
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="active" className="m-0">
            <div className="divide-y">
              {filteredConversations
                .filter((conv) => conv.status === "active")
                .map((conv) => (
                  <ConversationItem key={conv.id} conversation={conv} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="closed" className="m-0">
            <div className="divide-y">
              {filteredConversations
                .filter((conv) => conv.status === "closed")
                .map((conv) => (
                  <ConversationItem key={conv.id} conversation={conv} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
