import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Article options for select inputs
const articleOptions = [
  {
    value: "article1",
    label: "How to Improve Your Skills in League of Legends",
  },
  {
    value: "article2",
    label: "How to Master Last Hitting in League of Legends",
  },
  {
    value: "article3",
    label: "7 Tips for Better Teamplay in League of Legends",
  },
  {
    value: "article4",
    label: "Top Virtual Assistant Services (2024)",
  },
];

// Form field component
const FormField = ({ label, children }) => (
  <div>
    <label className="block text-xs sm:text-sm font-medium mb-1">{label}</label>
    {children}
  </div>
);

const AddInternalLink = () => {
  const [formData, setFormData] = useState({
    sourceUrl: "",
    targetUrl: "",
    anchorText: "",
    category: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-foreground">Add New Internal Link</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sourceUrl" className="text-foreground">
              Source URL
            </Label>
            <Input
              id="sourceUrl"
              value={formData.sourceUrl}
              onChange={(e) =>
                setFormData({ ...formData, sourceUrl: e.target.value })
              }
              placeholder="Enter source page URL"
              className="bg-background text-foreground border-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetUrl" className="text-foreground">
              Target URL
            </Label>
            <Input
              id="targetUrl"
              value={formData.targetUrl}
              onChange={(e) =>
                setFormData({ ...formData, targetUrl: e.target.value })
              }
              placeholder="Enter target page URL"
              className="bg-background text-foreground border-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="anchorText" className="text-foreground">
              Anchor Text
            </Label>
            <Input
              id="anchorText"
              value={formData.anchorText}
              onChange={(e) =>
                setFormData({ ...formData, anchorText: e.target.value })
              }
              placeholder="Enter anchor text"
              className="bg-background text-foreground border-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-foreground">
              Category
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger className="bg-background text-foreground border-input">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="navigation">Navigation</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="footer">Footer</SelectItem>
                <SelectItem value="sidebar">Sidebar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-foreground">
              Notes
            </Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Add any additional notes"
              className="min-h-[100px] bg-background text-foreground border-input"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              className="border-input hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Add Link
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddInternalLink;
