"use client";

import { useState, useEffect, useCallback } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";
import { useCamera } from "@/features/gate-monitor/hooks/useCamera";
import { useGateScan } from "@/features/gate-monitor/hooks/useGateScan";
import { useBoundingBoxes } from "@/features/gate-monitor/hooks/useBoundingBoxes";
import { CameraFeed } from "@/features/gate-monitor/components/CameraFeed";
import { SimulationControl } from "@/features/gate-monitor/components/SimulationControl";
import { ScanResultCard } from "@/features/gate-monitor/components/ScanResultCard";
import { GateEventLog } from "@/features/gate-monitor/components/GateEventLog";

export default function GateMonitorPage() {
  const { zones, workers, simulateGateScan, accessLogs } = useAwas();

  const [selectedWorkerId, setSelectedWorkerId] = useState<string>("");
  const [selectedZoneId, setSelectedZoneId] = useState<string>("");
  const [scenario, setScenario] = useState<"complete" | "incomplete">("complete");

  const { isCameraActive, setIsCameraActive, videoRef } = useCamera();
  const { showBoxes, show: showBoundingBoxes } = useBoundingBoxes();
  const { scanStatus, activeWorker, activeZone, scanMissingPpe, isPpeItemMissing, simulate, reset } = useGateScan(
    useCallback((workerId, zoneId, isComplete, missingItems) => {
      simulateGateScan(workerId, zoneId, isComplete, missingItems);
      showBoundingBoxes();
    }, [simulateGateScan, showBoundingBoxes])
  );

  useEffect(() => {
    if (workers.length > 0) setSelectedWorkerId(workers[0].id);
    if (zones.length > 0) setSelectedZoneId(zones[0].id);
  }, [workers, zones]);

  const handleSimulateScan = () => {
    if (!selectedWorkerId || !selectedZoneId) return;
    const worker = workers.find((w) => w.id === selectedWorkerId);
    const zone = zones.find((z) => z.id === selectedZoneId);
    if (!worker || !zone) return;
    simulate(worker, zone, scenario);
  };

  const gateLogs = accessLogs.slice(0, 8);

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{GATE_TEXT.title}</h1>
          <p className="text-muted-foreground text-sm">{GATE_TEXT.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <CameraFeed
              isCameraActive={isCameraActive}
              onToggleCamera={() => setIsCameraActive(!isCameraActive)}
              videoRef={videoRef}
              scanStatus={scanStatus}
              activeWorker={activeWorker}
              showBoxes={showBoxes}
              activeZone={activeZone}
              isPpeItemMissing={isPpeItemMissing}
            />
            <SimulationControl
              workers={workers}
              zones={zones}
              selectedWorkerId={selectedWorkerId}
              selectedZoneId={selectedZoneId}
              scenario={scenario}
              isProcessing={scanStatus === "processing"}
              onWorkerChange={setSelectedWorkerId}
              onZoneChange={setSelectedZoneId}
              onScenarioChange={setScenario}
              onSimulate={handleSimulateScan}
            />
          </div>

          <div className="flex flex-col gap-6">
            <ScanResultCard
              scanStatus={scanStatus}
              activeWorker={activeWorker}
              activeZone={activeZone}
              zones={zones}
              isPpeItemMissing={isPpeItemMissing}
            />
          </div>
        </div>

        <GateEventLog logs={gateLogs} workers={workers} zones={zones} />
      </div>
    </AppShell>
  );
}
