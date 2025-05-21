import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const IntentFilter = () => (
  <Select defaultValue="all" className="w-full sm:w-[150px]">
    <SelectTrigger className="cursor-pointer text-sm sm:text-base">
      <SelectValue placeholder="Filter by intent" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all" className="cursor-pointer">
        All Intents
      </SelectItem>
      <SelectItem value="informational" className="cursor-pointer">
        Informational
      </SelectItem>
      <SelectItem value="commercial" className="cursor-pointer">
        Commercial
      </SelectItem>
      <SelectItem value="transactional" className="cursor-pointer">
        Transactional
      </SelectItem>
      <SelectItem value="navigational" className="cursor-pointer">
        Navigational
      </SelectItem>
    </SelectContent>
  </Select>
);
