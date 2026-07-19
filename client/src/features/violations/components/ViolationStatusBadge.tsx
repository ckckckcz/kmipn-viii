import { Badge } from "@/components/ui/badge";
import { FollowUpStatus, STATUS_BADGE_CONFIG } from "@/features/violations/types/violation";

interface Props {
  status: FollowUpStatus;
}

export function ViolationStatusBadge({ status }: Props) {
  const cfg = STATUS_BADGE_CONFIG[status];
  return <Badge variant="default" className={cfg.className}>{cfg.label}</Badge>;
}
