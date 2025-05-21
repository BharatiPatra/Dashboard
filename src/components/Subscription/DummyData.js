
// Dummy data for subscription plans
export const subscriptionPlans = [
  {
    id: 1,
    name: "Starter",
    price: 29,
    billing: "monthly",
    description: "Perfect for individuals and small blogs",
    features: [
      "5,000 words per month",
      "10 keyword research queries",
      "Basic SEO optimization",
      "1 user account",
      "Email support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 79,
    billing: "monthly",
    description: "Ideal for growing websites and content teams",
    features: [
      "25,000 words per month",
      "50 keyword research queries",
      "Advanced SEO optimization",
      "3 user accounts",
      "Priority email support",
      "Content calendar",
      "WordPress integration",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 199,
    billing: "monthly",
    description: "For large websites and agencies",
    features: [
      "100,000 words per month",
      "Unlimited keyword research",
      "Advanced SEO optimization",
      "10 user accounts",
      "Priority phone support",
      "Content calendar",
      "All integrations",
      "Custom templates",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

// Dummy data for billing history
export const billingHistory = [
  {
    id: "INV-001",
    date: "May 1, 2023",
    amount: "$79.00",
    status: "paid",
    plan: "Professional",
  },
  {
    id: "INV-002",
    date: "April 1, 2023",
    amount: "$79.00",
    status: "paid",
    plan: "Professional",
  },
  {
    id: "INV-003",
    date: "March 1, 2023",
    amount: "$29.00",
    status: "paid",
    plan: "Starter",
  },
];

// Dummy data for usage
export const usageData = {
  words: {
    used: 12500,
    total: 25000,
    percentage: 50,
  },
  keywords: {
    used: 32,
    total: 50,
    percentage: 64,
  },
  users: {
    used: 2,
    total: 3,
    percentage: 67,
  },
};