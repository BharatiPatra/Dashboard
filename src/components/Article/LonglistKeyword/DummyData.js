export const articles = [
  {
    id: 1,
    title: "Complete Guide to League of Legends",
    keywords: 12,
    words: 4850,
    createdOn: "1 week ago",
    status: "published",
  },
  {
    id: 2,
    title: "Virtual Assistant Services Comparison",
    keywords: 8,
    words: 3200,
    createdOn: "2 weeks ago",
    status: "published",
  },
  {
    id: 3,
    title: "Graphic Design Trends and Services",
    keywords: 15,
    words: 5100,
    createdOn: "3 weeks ago",
    status: "draft",
  },
];

export const keywordLists = [
  {
    id: 1,
    article: "Complete Guide to League of Legends",
    keywords: [
      { keyword: "league of legends guide", volume: 22000 },
      { keyword: "league of legends champions", volume: 165000 },
      { keyword: "league of legends tips", volume: 12000 },
      { keyword: "league of legends for beginners", volume: 8200 },
      { keyword: "how to play league of legends", volume: 14500 },
      { keyword: "league of legends roles", volume: 9800 },
      { keyword: "league of legends lanes", volume: 7600 },
      { keyword: "league of legends items", volume: 11000 },
      { keyword: "league of legends runes", volume: 13500 },
      { keyword: "league of legends summoner spells", volume: 6200 },
      { keyword: "league of legends objectives", volume: 5400 },
      { keyword: "league of legends teamfights", volume: 4800 },
    ],
  },
  {
    id: 2,
    article: "Virtual Assistant Services Comparison",
    keywords: [
      { keyword: "virtual assistant services", volume: 22000 },
      { keyword: "best virtual assistants", volume: 12000 },
      { keyword: "virtual assistant cost", volume: 8500 },
      { keyword: "hire virtual assistant", volume: 14000 },
      { keyword: "virtual assistant companies", volume: 7200 },
      { keyword: "virtual assistant for small business", volume: 9500 },
      { keyword: "virtual assistant tasks", volume: 6800 },
      { keyword: "virtual assistant benefits", volume: 5400 },
    ],
  },
  {
    id: 3,
    article: "Graphic Design Trends and Services",
    keywords: [
      { keyword: "graphic design services", volume: 40500 },
      { keyword: "graphic design trends", volume: 18000 },
      { keyword: "graphic design companies", volume: 15000 },
      { keyword: "graphic design pricing", volume: 9200 },
      { keyword: "graphic design portfolio", volume: 12500 },
      { keyword: "graphic design tools", volume: 22000 },
      { keyword: "graphic design software", volume: 28000 },
      { keyword: "graphic design for beginners", volume: 7800 },
      { keyword: "graphic design principles", volume: 6500 },
      { keyword: "graphic design elements", volume: 5400 },
      { keyword: "graphic design inspiration", volume: 11000 },
      { keyword: "graphic design styles", volume: 8700 },
      { keyword: "graphic design process", volume: 6200 },
      { keyword: "graphic design tips", volume: 9800 },
      { keyword: "graphic design examples", volume: 13500 },
    ],
  },
];

export const tabs = [
  { value: "articles", label: "Articles with Keyword Lists" },
  { value: "manage", label: "Manage Keyword Lists" },
  { value: "create", label: "Create New List" },
];
