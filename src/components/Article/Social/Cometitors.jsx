import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Competitors() {
  const [competitors, setCompetitors] = useState([
    {
      id: 1,
      name: "Competitor 1",
      url: "https://example1.com",
      keywords: 1500,
      articles: 45,
    },
    {
      id: 2,
      name: "Competitor 2",
      url: "https://example2.com",
      keywords: 2300,
      articles: 78,
    },
  ]);

  const [newCompetitor, setNewCompetitor] = useState({
    name: "",
    url: "",
    keywords: 0,
    articles: 0,
  });

  const addCompetitor = () => {
    if (newCompetitor.name && newCompetitor.url) {
      setCompetitors([
        ...competitors,
        {
          id: competitors.length + 1,
          ...newCompetitor,
          keywords: 0,
          articles: 0,
        },
      ]);
      setNewCompetitor({ name: "", url: "", keywords: 0, articles: 0 });
    }
  };

  const removeCompetitor = (id) => {
    setCompetitors(competitors.filter((comp) => comp.id !== id));
  };

  return (
    <div className="space-y-4 h-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search competitors..."
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-background text-foreground dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          Add Competitor
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden dark:border-gray-700">
        <table className="w-full">
          <thead className="bg-muted dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground dark:text-gray-300">
                <Checkbox />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground dark:text-gray-300">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground dark:text-gray-300">
                Domain
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground dark:text-gray-300">
                Keywords
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground dark:text-gray-300">
                Articles
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border dark:divide-gray-700">
            {competitors.map((competitor) => (
              <tr
                key={competitor.id}
                className="hover:bg-muted/50 dark:hover:bg-gray-800/50"
              >
                <td className="px-4 py-3">
                  <Checkbox />
                </td>
                <td className="px-4 py-3 text-sm">{competitor.name}</td>
                <td className="px-4 py-3 text-sm">
                  <a
                    href={competitor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {competitor.url}
                  </a>
                </td>
                <td className="px-4 py-3 text-sm">
                  {competitor.keywords?.toLocaleString() || 0}
                </td>
                <td className="px-4 py-3 text-sm">
                  {competitor.articles?.toLocaleString() || 0}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      View Details
                    </button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeCompetitor(competitor.id)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
