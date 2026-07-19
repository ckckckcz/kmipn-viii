import { Badge } from "@/components/ui/badge";
import { getComplianceConfig } from "@/features/workers/utils/compliance";

interface Props {
  rate: number;
}

export function ComplianceBadge({ rate }: Props) {
  const { icon: Icon, className } = getComplianceConfig(rate);
  return (
    <Badge className={className}>
      <Icon className="h-3 w-3" />
      {rate}%
    </Badge>
  );
}
