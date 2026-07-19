import { Badge } from "@/components/ui/badge";
import { PPE_LABELS, AccessLog, Worker, Zone } from "@/types";
import { formatTimestamp } from "@/features/gate-monitor/utils/gate";

interface Props {
  log: AccessLog;
  worker?: Worker;
  zone?: Zone;
}

export function GateEventItem({ log, worker, zone }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-3.5 gap-2 hover:bg-muted/5">
      <div className="flex items-center gap-3">
        {worker?.photoUrl && (
          <img src={worker.photoUrl} alt={worker.name} className="w-8 h-8 rounded object-cover border" />
        )}
        <div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-foreground">{worker?.name || "Unknown Worker"}</span>
            <span className="text-xs text-muted-foreground font-mono">({worker?.idCardNumber})</span>
            <span className="text-[10px] text-muted-foreground">menuju</span>
            <Badge variant="outline" className="text-[10px] py-0 px-1 font-normal h-4">
              {zone?.name.split(" - ")[0] || "Unknown Zone"}
            </Badge>
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5">
            {log.gateName} • {formatTimestamp(log.timestamp)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 self-start md:self-center">
        {log.missingPpe.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {log.missingPpe.map((item) => (
              <span key={item} className="px-1 text-[9px] bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-400 font-bold rounded">
                -{PPE_LABELS[item]}
              </span>
            ))}
          </div>
        )}
        <Badge
          variant={log.status === "granted" ? "default" : "destructive"}
          className={`text-[10px] py-0 px-2 uppercase font-black tracking-wide ${log.status === "granted" ? "bg-green-600 text-white hover:bg-green-600" : ""}`}
        >
          {log.status === "granted" ? "GRANTED" : "DENIED"}
        </Badge>
      </div>
    </div>
  );
}
