// Dummy data for integrations
export const availableIntegrations = [
  {
    id: 1,
    name: "WordPress",
    description: "Connect to your WordPress site for seamless content publishing",
    status: "connected",
    icon: "wordpress",
    lastSync: "2 hours ago",
  },
  {
    id: 2,
    name: "Google Analytics",
    description: "Track article performance and visitor metrics",
    status: "connected",
    icon: "analytics",
    lastSync: "1 day ago",
  },
  {
    id: 3,
    name: "Ahrefs",
    description: "Import keyword data and backlink information",
    status: "disconnected",
    icon: "ahrefs",
    lastSync: "Never",
  },
  {
    id: 4,
    name: "Semrush",
    description: "Import keyword research and competitor analysis",
    status: "disconnected",
    icon: "semrush",
    lastSync: "Never",
  },
  {
    id: 5,
    name: "Mailchimp",
    description: "Send email newsletters with your latest articles",
    status: "connected",
    icon: "mailchimp",
    lastSync: "3 days ago",
  },
]

// Dummy data for API usage
export const apiUsage = [
  {
    id: 1,
    name: "Article Generation",
    used: 145,
    limit: 200,
    percentage: 72,
  },
  {
    id: 2,
    name: "Keyword Research",
    used: 87,
    limit: 100,
    percentage: 87,
  },
  {
    id: 3,
    name: "Content Optimization",
    used: 32,
    limit: 50,
    percentage: 64,
  },
]

// Dummy data for webhooks
export const webhooks = [
  {
    id: 1,
    name: "New Article Published",
    endpoint: "https://example.com/webhooks/new-article",
    status: "active",
    lastTriggered: "1 day ago",
  },
  {
    id: 2,
    name: "Keyword Rank Changed",
    endpoint: "https://example.com/webhooks/rank-change",
    status: "active",
    lastTriggered: "3 hours ago",
  },
  {
    id: 3,
    name: "Backlink Detected",
    endpoint: "https://example.com/webhooks/backlink",
    status: "inactive",
    lastTriggered: "Never",
  },
]