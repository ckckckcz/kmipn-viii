import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";
import { AccessLog, Worker, Zone } from "@/types";
import { GateEventItem } from "@/features/gate-monitor/components/GateEventItem";

interface Props {
  logs: AccessLog[];
  workers: Worker[];
  zones: Zone[];
}

export function GateEventLog({ logs, workers, zones }: Props) {
  return (
    <Card className="shadow-none border">
      <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-sm font-semibold">{GATE_TEXT.eventLogTitle}</CardTitle>
          <CardDescription className="text-xs">{GATE_TEXT.eventLogDesc}</CardDescription>
        </div>
        <Badge variant="outline" className="text-xs font-mono text-muted-foreground">
          {logs.length} {GATE_TEXT.totalLogs}
        </Badge>
      </CardHeader>
      <CardContent className="p-0 max-h-[300px] overflow-y-auto">
        {logs.length === 0 ? (
          <div className="text-center py-6 text-xs text-muted-foreground">{GATE_TEXT.noActivity}</div>
        ) : (
          <div className="flex flex-col divide-y">
            {logs.map((log) => (
              <GateEventItem
                key={log.id}
                log={log}
                worker={workers.find((w) => w.id === log.workerId)}
                zone={zones.find((z) => z.id === log.zoneId)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
