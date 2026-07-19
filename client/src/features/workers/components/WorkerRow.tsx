import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Worker, Zone } from "@/types";
import { ComplianceBadge } from "@/features/workers/components/ComplianceBadge";
import { WORKER_TEXT } from "@/features/workers/constants/defaults";

interface Props {
  worker: Worker;
  zone?: Zone;
}

export function WorkerRow({ worker: w, zone }: Props) {
  return (
    <tr className="h-14 hover:bg-muted/5">
      <td className="pl-6 font-semibold flex items-center gap-3">
        <img src={w.photoUrl} alt={w.name} className="size-9 rounded-full object-cover border shrink-0 bg-muted" />
        <span className="truncate">{w.name}</span>
      </td>
      <td className="text-muted-foreground font-mono text-xs">{w.idCardNumber}</td>
      <td className="text-muted-foreground text-xs font-semibold">
        {zone ? zone.name.split(" - ")[0] : WORKER_TEXT.noZone}
      </td>
      <td className="text-center"><ComplianceBadge rate={w.complianceRate} /></td>
      <td className="pr-6 text-right">
        <Button asChild size="icon-sm" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Link href={`/workers/${w.id}`}><EyeIcon className="h-4 w-4" /></Link>
        </Button>
      </td>
    </tr>
  );
}
