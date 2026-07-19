import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlayIcon } from "lucide-react";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";
import { Worker, Zone } from "@/types";

interface Props {
  workers: Worker[];
  zones: Zone[];
  selectedWorkerId: string;
  selectedZoneId: string;
  scenario: "complete" | "incomplete";
  isProcessing: boolean;
  onWorkerChange: (val: string) => void;
  onZoneChange: (val: string) => void;
  onScenarioChange: (val: "complete" | "incomplete") => void;
  onSimulate: () => void;
}

export function SimulationControl({
  workers, zones, selectedWorkerId, selectedZoneId, scenario, isProcessing,
  onWorkerChange, onZoneChange, onScenarioChange, onSimulate,
}: Props) {
  return (
    <Card className="shadow-none border">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-semibold">{GATE_TEXT.controlTitle}</CardTitle>
        <CardDescription className="text-xs">{GATE_TEXT.controlDesc}</CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">{GATE_TEXT.selectWorker}</label>
          <Select value={selectedWorkerId} onValueChange={onWorkerChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder={GATE_TEXT.selectWorker} />
            </SelectTrigger>
            <SelectContent>
              {workers.map((w) => (
                <SelectItem key={w.id} value={w.id}>{w.name} ({w.idCardNumber.split("-")[2]})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">{GATE_TEXT.selectZone}</label>
          <Select value={selectedZoneId} onValueChange={onZoneChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder={GATE_TEXT.selectZone} />
            </SelectTrigger>
            <SelectContent>
              {zones.map((z) => (
                <SelectItem key={z.id} value={z.id}>{z.name.split(" - ")[0]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">{GATE_TEXT.selectScenario}</label>
          <Select value={scenario} onValueChange={(val: "complete" | "incomplete") => onScenarioChange(val)}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder={GATE_TEXT.selectScenario} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="complete">{GATE_TEXT.scenarioComplete}</SelectItem>
              <SelectItem value="incomplete">{GATE_TEXT.scenarioIncomplete}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={onSimulate} disabled={isProcessing} className="w-full h-9 bg-primary text-white">
          <PlayIcon className="h-4 w-4 mr-2" />
          {GATE_TEXT.simulateScan}
        </Button>
      </CardContent>
    </Card>
  );
}
