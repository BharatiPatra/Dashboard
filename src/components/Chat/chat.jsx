import { useState, useRef, useEffect } from "react";
import { conversations, currentChatMessages } from "./DummyData";
import ConversationList from "./ConversationList";
import ChatHeader from "./ChatHeader";
import MessagesArea from "./MessagesArea";
import MessageInput from "./MessageInput";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Chat() {
  const [activeConversation, setActiveConversation] = useState(2);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChatMessages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Here you would typically send the message to your backend
    setMessage("");
  };

  const activeConversationData = conversations.find(
    (conv) => conv.id === activeConversation
  );

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Live Chat Support</h1>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)] md:h-[calc(100vh-160px)]">
        {/* Mobile sidebar overlay */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Conversations sidebar */}
        <div
          className={`fixed lg:static inset-y-0 left-0 w-[280px] lg:w-auto z-50 transform transition-transform duration-200 ease-in-out ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <ConversationList
            conversations={conversations}
            activeConversation={activeConversation}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onConversationSelect={(id) => {
              setActiveConversation(id);
              setIsMobileSidebarOpen(false);
            }}
          />
        </div>

        {/* Chat interface */}
        <div className="lg:col-span-2 border rounded-lg overflow-hidden flex flex-col">
          <ChatHeader conversation={activeConversationData} />
          <MessagesArea
            messages={currentChatMessages}
            messagesEndRef={messagesEndRef}
          />
          <MessageInput
            message={message}
            onMessageChange={setMessage}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}
