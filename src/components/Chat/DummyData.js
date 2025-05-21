// Dummy data for chat conversations
export const conversations = [
  {
    id: 1,
    type: "support",
    title: "Help with content optimization",
    lastMessage: "Thanks for your help!",
    timestamp: "10:32 AM",
    unread: false,
    agent: "Sarah Johnson",
    status: "closed",
  },
  {
    id: 2,
    type: "support",
    title: "Keyword research question",
    lastMessage: "How do I export my keyword list?",
    timestamp: "Yesterday",
    unread: true,
    agent: "Michael Chen",
    status: "active",
  },
  {
    id: 3,
    type: "ai",
    title: "Article outline assistance",
    lastMessage: "Can you help me outline an article about SEO?",
    timestamp: "May 15",
    unread: false,
    agent: "AI Assistant",
    status: "active",
  },
  {
    id: 4,
    type: "support",
    title: "Billing question",
    lastMessage: "I need help with my subscription",
    timestamp: "May 10",
    unread: false,
    agent: "Emily Wilson",
    status: "active",
  },
  {
    id: 5,
    type: "ai",
    title: "Content ideas for my blog",
    lastMessage: "Generate blog post ideas for digital marketing",
    timestamp: "May 5",
    unread: false,
    agent: "AI Assistant",
    status: "active",
  },
];

// Dummy data for current chat messages
export const currentChatMessages = [
  {
    id: 1,
    sender: "user",
    message:
      "Hi there! I'm having trouble with the keyword research tool. When I try to search for keywords, it's not showing any results.",
    timestamp: "10:15 AM",
    status: "read",
  },
  {
    id: 2,
    sender: "agent",
    agent: {
      name: "Michael Chen",
      avatar: "MC",
      role: "Support Specialist",
    },
    message:
      "Hello! I'd be happy to help you with the keyword research tool. Could you please tell me what keywords you're trying to search for and if you're getting any error messages?",
    timestamp: "10:17 AM",
    status: "read",
  },
  {
    id: 3,
    sender: "user",
    message:
      "I'm trying to search for 'content marketing strategies' but it just shows a loading spinner and then nothing happens. No error message.",
    timestamp: "10:20 AM",
    status: "read",
  },
  {
    id: 4,
    sender: "agent",
    agent: {
      name: "Michael Chen",
      avatar: "MC",
      role: "Support Specialist",
    },
    message:
      "Thank you for that information. Let me check if there are any known issues with the keyword research tool right now. In the meantime, could you try clearing your browser cache and cookies, then restart your browser and try again? This often resolves temporary issues.",
    timestamp: "10:22 AM",
    status: "read",
  },
  {
    id: 5,
    sender: "user",
    message:
      "I tried clearing my cache and cookies, but I'm still having the same issue.",
    timestamp: "10:25 AM",
    status: "read",
  },
  {
    id: 6,
    sender: "agent",
    agent: {
      name: "Michael Chen",
      avatar: "MC",
      role: "Support Specialist",
    },
    message:
      "I've checked our system status, and it looks like there was a temporary issue with the keyword research API that we use. Our engineering team is already working on it and it should be resolved within the next hour. I apologize for the inconvenience. Would you like me to notify you once the issue is resolved?",
    timestamp: "10:28 AM",
    status: "read",
  },
  {
    id: 7,
    sender: "user",
    message: "Yes, please let me know when it's fixed. Thanks for your help!",
    timestamp: "10:32 AM",
    status: "read",
  },
];