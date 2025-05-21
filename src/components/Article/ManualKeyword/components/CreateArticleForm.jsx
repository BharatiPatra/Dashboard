import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSelect = ({ label, options }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <Select defaultValue={options[0].value}>
      <SelectTrigger className="cursor-pointer">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="cursor-pointer">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const FormCheckbox = ({ label, description, defaultChecked = false }) => (
  <div className="flex items-center justify-between">
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs text-gray-500">{description}</span>
    </div>
    <Checkbox defaultChecked={defaultChecked} className="cursor-pointer" />
  </div>
);

export const CreateArticleForm = () => (
  <Card>
    <CardHeader>
      <CardTitle>Create Articles from Keywords</CardTitle>
      <CardDescription>Configure how articles will be created from selected keywords</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <FormSelect
        label="Article Creation Method"
        options={[
          { value: "ai", label: "AI Generation" },
          { value: "manual", label: "Manual Creation" },
          { value: "template", label: "Use Template" },
        ]}
      />
      <FormSelect
        label="Article Length"
        options={[
          { value: "short", label: "Short (500-800 words)" },
          { value: "medium", label: "Medium (1000-1500 words)" },
          { value: "long", label: "Long (2000+ words)" },
        ]}
      />
      <FormCheckbox
        label="Auto-publish"
        description="Automatically publish when generated"
      />
      <FormCheckbox
        label="Add featured images"
        description="Automatically add featured images"
        defaultChecked
      />
      <Button className="w-full cursor-pointer">Create Articles</Button>
    </CardContent>
  </Card>
); 