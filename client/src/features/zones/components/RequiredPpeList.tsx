import { PPE_LABELS, PpeType } from "@/types";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";

interface Props {
  items: PpeType[];
}

export function RequiredPpeList({ items }: Props) {
  if (items.length === 0) {
    return <span className="text-xs text-muted-foreground italic">{ZONE_TEXT.noPpe}</span>;
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((ppe) => (
        <span key={ppe} className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-semibold border border-primary/20">
          {PPE_LABELS[ppe]}
        </span>
      ))}
    </div>
  );
}
