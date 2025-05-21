import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">
            Add Internal Link
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-1">
            Create a new internal link between articles
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-6">
          <FormField label="Source Article">
            <Select>
              <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                <SelectValue placeholder="Select source article" />
              </SelectTrigger>
              <SelectContent>
                {articleOptions.map((article) => (
                  <SelectItem
                    key={article.value}
                    value={article.value}
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    {article.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Target Article">
            <Select>
              <SelectTrigger className="w-full cursor-pointer text-xs sm:text-sm">
                <SelectValue placeholder="Select target article" />
              </SelectTrigger>
              <SelectContent>
                {articleOptions.map((article) => (
                  <SelectItem
                    key={article.value}
                    value={article.value}
                    className="cursor-pointer text-xs sm:text-sm"
                  >
                    {article.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Anchor Text">
            <Input
              placeholder="Enter anchor text"
              className="w-full text-xs sm:text-sm"
            />
          </FormField>

          <div className="pt-4 flex justify-end">
            <Button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm whitespace-nowrap">
              Add Internal Link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddInternalLink;
