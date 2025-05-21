import { Badge } from "@/components/ui/badge";
import { intentStyles } from "../DummyData";

export const IntentBadge = ({ intent }) => {
  const getBadgeStyle = (intent) =>
    intentStyles[intent] || intentStyles.navigational;

  return (
    <Badge
      className={`${getBadgeStyle(intent)} hover:${getBadgeStyle(intent)}`}
    >
      {intent.charAt(0).toUpperCase() + intent.slice(1)}
    </Badge>
  );
};
