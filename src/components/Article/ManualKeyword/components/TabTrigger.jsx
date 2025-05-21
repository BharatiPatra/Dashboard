import { TabsTrigger } from "@/components/ui/tabs";

export const CustomTabTrigger = ({ value, label }) => (
  <TabsTrigger
    value={value}
    className="px-3 sm:px-6 py-2 sm:py-4 rounded-md cursor-pointer text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
  >
    {label}
  </TabsTrigger>
);
