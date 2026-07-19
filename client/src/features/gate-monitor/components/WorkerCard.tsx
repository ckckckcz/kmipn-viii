import { Worker, Zone } from "@/types";

interface Props {
  worker: Worker;
  zones: Zone[];
}

export function WorkerCard({ worker, zones }: Props) {
  const zoneName = zones.find((z) => z.id === worker.zoneId)?.name.split(" - ")[0] ?? "";
  return (
    <div className="flex gap-3 border p-3 rounded-lg bg-muted/10 items-center">
      <img src={worker.photoUrl} alt={worker.name} className="w-12 h-12 rounded-md object-cover border" />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold truncate">{worker.name}</h4>
        <p className="text-xs text-muted-foreground truncate">{worker.idCardNumber}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          Zona Default: <span className="font-medium text-foreground">{zoneName}</span>
        </p>
      </div>
    </div>
  );
}
