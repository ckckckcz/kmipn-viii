import { useState, useCallback } from "react";
import { ScanStatus } from "@/features/gate-monitor/types/gate";
import { SCAN_ANIMATION_DURATION } from "@/features/gate-monitor/constants/scan-status";
import { pickRandomMissingPpe } from "@/features/gate-monitor/utils/randomPpe";
import { PpeType, Worker, Zone } from "@/types";

export function useGateScan(onResult: (workerId: string, zoneId: string, isComplete: boolean, missingItems: PpeType[]) => void) {
  const [scanStatus, setScanStatus] = useState<ScanStatus>("idle");
  const [activeWorker, setActiveWorker] = useState<Worker | null>(null);
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [scanMissingPpe, setScanMissingPpe] = useState<PpeType[]>([]);

  const isPpeItemMissing = useCallback((item: PpeType) => scanMissingPpe.includes(item), [scanMissingPpe]);

  const simulate = useCallback((worker: Worker, zone: Zone, scenario: "complete" | "incomplete") => {
    setScanStatus("processing");
    setActiveWorker(worker);
    setActiveZone(zone);

    setTimeout(() => {
      let missingItems: PpeType[] = [];
      if (scenario === "incomplete") {
        missingItems = pickRandomMissingPpe(zone.requiredPpe);
      }
      const isComplete = missingItems.length === 0;
      setScanMissingPpe(missingItems);
      setScanStatus(isComplete ? "granted" : "denied");
      onResult(worker.id, zone.id, isComplete, missingItems);
    }, SCAN_ANIMATION_DURATION);
  }, [onResult]);

  const reset = useCallback(() => {
    setScanStatus("idle");
    setActiveWorker(null);
    setActiveZone(null);
    setScanMissingPpe([]);
  }, []);

  return {
    scanStatus, setScanStatus,
    activeWorker, activeZone,
    scanMissingPpe,
    isPpeItemMissing,
    simulate, reset,
  };
}
