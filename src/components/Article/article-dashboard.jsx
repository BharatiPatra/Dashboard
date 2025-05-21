"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { articles } from "./dummyData/ArticleConstant";

export default function ArticlesDashboard() {
  const [activeTab, setActiveTab] = useState("generated");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [entriesPerPage, setEntriesPerPage] = useState("10");

  const tabs = [
    { label: "Generated Articles", value: "generated" },
    { label: "Published Articles", value: "published" },
    { label: "Scheduled Articles", value: "scheduled" },
    { label: "Archived Articles", value: "archived" },
  ];

  // Filter articles whenever search query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredArticles(articles);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.keyword.toLowerCase().includes(query)
    );

    setFilteredArticles(filtered);
  }, [searchQuery]);

  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-7xl mx-auto">
      {/* Centered bold title */}
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
        Articles
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 justify-center ">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap ${
              activeTab === tab.value
                ? "bg-blue-600 text-white dark:bg-blue-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            } cursor-pointer`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Centered search */}
      <div className="flex justify-center mb-4">
        <Input
          placeholder="Search for Title & Keywords..."
          className="w-full max-w-md text-sm sm:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-md overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead className="bg-gray-50 dark:text-gray-300 dark:bg-gray-800">
            <tr>
              <th className="p-2 sm:p-3 pr-2 sm:pr-5 text-left ">
                <Checkbox className="cursor-pointer" />
              </th>
              <th className="p-2 sm:p-3 text-left">Article Title</th>
              <th className="p-2 sm:p-3 text-left hidden sm:table-cell">
                Keyword [Traffic]
              </th>
              <th className="p-2 sm:p-3 text-left hidden sm:table-cell">
                Words
              </th>
              <th className="p-2 sm:p-3 text-left hidden md:table-cell">
                Created On
              </th>
              <th className="p-2 sm:p-3 text-left">Action</th>
              <th className="p-2 sm:p-3 text-left">Publish</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <tr key={article.id} className="border-t">
                  <td className="p-2 sm:p-3">
                    <Checkbox className="cursor-pointer" />
                  </td>
                  <td className="p-2 sm:p-3">
                    <div className="font-medium">{article.title}</div>
                    <div className="text-gray-500 sm:hidden">
                      {article.keyword} • {article.words} words
                    </div>
                  </td>
                  <td className="p-2 sm:p-3 hidden sm:table-cell">
                    {article.keyword}
                  </td>
                  <td className="p-2 sm:p-3 hidden sm:table-cell">
                    {article.words}
                  </td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    {article.createdOn}
                  </td>
                  <td className="p-2 sm:p-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 px-2 sm:px-3 text-xs sm:text-sm cursor-pointer"
                    >
                      View
                    </Button>
                  </td>
                  <td className="p-2 sm:p-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No articles found matching "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <span>Total {filteredArticles.length} Article Titles</span>
          <span className="hidden sm:inline"> | Show</span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-16 h-7 sm:h-8">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10" className="cursor-pointer">
                10
              </SelectItem>
              <SelectItem value="25" className="cursor-pointer">
                25
              </SelectItem>
              <SelectItem value="50" className="cursor-pointer">
                50
              </SelectItem>
            </SelectContent>
          </Select>
          <span className="hidden sm:inline">entries per page</span>
        </div>
        <div className="flex items-center gap-1">
          <span>1</span>
          <span>/</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
