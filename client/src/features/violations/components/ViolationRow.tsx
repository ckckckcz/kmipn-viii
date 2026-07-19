import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Violation, Worker, Zone } from "@/types";
import { PPE_LABELS } from "@/types";
import { ViolationStatusBadge } from "@/features/violations/components/ViolationStatusBadge";
import { formatTimeAgo } from "@/features/violations/utils/time";

interface Props {
  violation: Violation;
  worker?: Worker;
  zone?: Zone;
}

export function ViolationRow({ violation: v, worker, zone }: Props) {
  return (
    <tr className="h-14 hover:bg-muted/5">
      <td className="pl-6 font-semibold flex items-center gap-3">
        <img src={v.screenshotUrl} alt={worker?.name || "Pekerja"} className="size-9 rounded-md object-cover border shrink-0 bg-muted" />
        <span className="truncate">{worker?.name || "Unknown Worker"}</span>
      </td>
      <td className="text-muted-foreground text-xs font-medium">{zone?.name || "Unknown Zone"}</td>
      <td>
        <div className="flex flex-wrap gap-1">
          {v.missingPpe.map((item) => (
            <span key={item} className="px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-[10px] font-semibold border border-red-200 dark:border-red-900/30">
              {PPE_LABELS[item]}
            </span>
          ))}
        </div>
      </td>
      <td className="text-center text-muted-foreground text-xs whitespace-nowrap">{formatTimeAgo(v.timestamp)}</td>
      <td className="text-center"><ViolationStatusBadge status={v.followUpStatus} /></td>
      <td className="pr-6 text-right">
        <Button asChild size="icon-sm" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Link href={`/violations/${v.id}`}><EyeIcon className="h-4 w-4" /></Link>
        </Button>
      </td>
    </tr>
  );
}
