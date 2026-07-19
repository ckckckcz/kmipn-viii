"use client";

import { useState, useEffect, useCallback } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { zoneService } from "@/services/zone.service";
import { workerService } from "@/services/worker.service";
import { accessLogService, gateService } from "@/services/access-log.service";
import type { Zone, Worker, AccessLog, PpeType } from "@/types";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";
import { useCamera } from "@/features/gate-monitor/hooks/useCamera";
import { useGateScan } from "@/features/gate-monitor/hooks/useGateScan";
import { useBoundingBoxes } from "@/features/gate-monitor/hooks/useBoundingBoxes";
import { CameraFeed } from "@/features/gate-monitor/components/CameraFeed";
import { SimulationControl } from "@/features/gate-monitor/components/SimulationControl";
import { ScanResultCard } from "@/features/gate-monitor/components/ScanResultCard";
import { GateEventLog } from "@/features/gate-monitor/components/GateEventLog";

function isError(e: unknown): e is Error {
  return e instanceof Error;
}

export default function GateMonitorPage() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [accessLogs, setAccessLogs] = useState<AccessLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      const [z, w, l] = await Promise.all([zoneService.getAll(), workerService.getAll(), accessLogService.getAll()]);
      setZones(z); setWorkers(w); setAccessLogs(l);
    } catch (e: unknown) {
      setError(isError(e) ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const [selectedWorkerId, setSelectedWorkerId] = useState<string>("");
  const [selectedZoneId, setSelectedZoneId] = useState<string>("");
  const [scenario, setScenario] = useState<"complete" | "incomplete">("complete");

  const { isCameraActive, setIsCameraActive, videoRef } = useCamera();
  const { showBoxes, show: showBoundingBoxes } = useBoundingBoxes();
  const { scanStatus, activeWorker, activeZone, isPpeItemMissing, simulate } = useGateScan(
    useCallback(async (workerId: string, zoneId: string, isComplete: boolean, missingItems: PpeType[]) => {
      try {
        await gateService.scan({ workerId, zoneId, isPpeComplete: isComplete, missingItems });
        await fetchAll();
        showBoundingBoxes();
      } catch (e: unknown) {
        setError(isError(e) ? e.message : "Unknown error");
      }
    }, [fetchAll, showBoundingBoxes])
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

  if (loading) return <AppShell><div className="flex justify-center py-20 text-muted-foreground text-sm">Memuat data...</div></AppShell>;
  if (error) return <AppShell><div className="flex justify-center py-20 text-red-500 text-sm">Error: {error}</div></AppShell>;

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
              workers={workers} zones={zones}
              selectedWorkerId={selectedWorkerId} selectedZoneId={selectedZoneId}
              scenario={scenario} isProcessing={scanStatus === "processing"}
              onWorkerChange={setSelectedWorkerId} onZoneChange={setSelectedZoneId}
              onScenarioChange={setScenario} onSimulate={handleSimulateScan}
            />
          </div>

          <div className="flex flex-col gap-6">
            <ScanResultCard
              scanStatus={scanStatus} activeWorker={activeWorker} activeZone={activeZone}
              zones={zones} isPpeItemMissing={isPpeItemMissing}
            />
          </div>
        </div>

        <GateEventLog logs={gateLogs} workers={workers} zones={zones} />
      </div>
    </AppShell>
  );
}
