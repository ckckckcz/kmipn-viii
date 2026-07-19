"use client";

// ponytail: Use native React Context for standard, minimal state sharing. No need for heavy external stores.
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Zone, Worker, Violation, AccessLog } from "@/types";
import { INITIAL_ZONES } from "@/features/zones/data/zones";
import { INITIAL_WORKERS } from "@/features/workers/data/workers";
import { INITIAL_VIOLATIONS } from "@/features/violations/data/violations";
import { INITIAL_ACCESS_LOGS } from "@/features/gate-monitor/data/access-logs";

type AwasContextType = {
  zones: Zone[];
  workers: Worker[];
  violations: Violation[];
  accessLogs: AccessLog[];
  setZones: React.Dispatch<React.SetStateAction<Zone[]>>;
  setWorkers: React.Dispatch<React.SetStateAction<Worker[]>>;
  setViolations: React.Dispatch<React.SetStateAction<Violation[]>>;
  setAccessLogs: React.Dispatch<React.SetStateAction<AccessLog[]>>;
  addZone: (zone: Omit<Zone, "id" | "complianceScore" | "gateCount">) => void;
  updateZone: (zone: Zone) => void;
  addWorker: (worker: Omit<Worker, "id" | "complianceRate">) => void;
  updateWorker: (worker: Worker) => void;
  simulateGateScan: (workerId: string, zoneId: string, isPpeComplete: boolean, missingItems: any[]) => void;
};

const AwasContext = createContext<AwasContextType | undefined>(undefined);

export function AwasProvider({ children }: { children: ReactNode }) {
  const [zones, setZones] = useState<Zone[]>(INITIAL_ZONES);
  const [workers, setWorkers] = useState<Worker[]>(INITIAL_WORKERS);
  const [violations, setViolations] = useState<Violation[]>(INITIAL_VIOLATIONS);
  const [accessLogs, setAccessLogs] = useState<AccessLog[]>(INITIAL_ACCESS_LOGS);

  const addZone = (newZone: Omit<Zone, "id" | "complianceScore" | "gateCount">) => {
    const id = `zone-${zones.length + 1}`;
    const zone: Zone = {
      ...newZone,
      id,
      complianceScore: 100, // New zone starts fully compliant
      gateCount: 1,
    };
    setZones((prev) => [...prev, zone]);
  };

  const updateZone = (updatedZone: Zone) => {
    setZones((prev) => prev.map((z) => (z.id === updatedZone.id ? updatedZone : z)));
  };

  const addWorker = (newWorker: Omit<Worker, "id" | "complianceRate">) => {
    const id = `worker-${workers.length + 1}`;
    const worker: Worker = {
      ...newWorker,
      id,
      complianceRate: 100, // Starts at 100%
    };
    setWorkers((prev) => [...prev, worker]);
  };

  const updateWorker = (updatedWorker: Worker) => {
    setWorkers((prev) => prev.map((w) => (w.id === updatedWorker.id ? updatedWorker : w)));
  };

  const simulateGateScan = (
    workerId: string,
    zoneId: string,
    isPpeComplete: boolean,
    missingItems: any[]
  ) => {
    const timestamp = new Date().toISOString();
    const logId = `log-${accessLogs.length + 1}`;
    const status = isPpeComplete ? "granted" : "denied";

    // Add access log
    const newLog: AccessLog = {
      id: logId,
      workerId,
      zoneId,
      gateName: `Gate ${zones.find((z) => z.id === zoneId)?.name.split(" - ")[0].replace("Zona ", "") || "A"}-1`,
      status,
      missingPpe: missingItems,
      timestamp,
    };
    setAccessLogs((prev) => [newLog, ...prev]);

    // If PPE is not complete, also add a violation
    if (!isPpeComplete) {
      const violationId = `violation-${violations.length + 1}`;
      // Map random placeholder screenshot from unsplash
      const randomImages = [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
      ];
      const newViolation: Violation = {
        id: violationId,
        workerId,
        zoneId,
        missingPpe: missingItems,
        screenshotUrl: randomImages[Math.floor(Math.random() * randomImages.length)],
        confidenceScore: Math.floor(Math.random() * 15) + 80, // 80 - 95
        followUpStatus: "new",
        timestamp,
      };
      setViolations((prev) => [newViolation, ...prev]);

      // Reduce compliance rates as penalty
      setWorkers((prev) =>
        prev.map((w) => {
          if (w.id === workerId) {
            const current = w.complianceRate;
            return { ...w, complianceRate: Math.max(0, parseFloat((current - 5).toFixed(1))) };
          }
          return w;
        })
      );

      setZones((prev) =>
        prev.map((z) => {
          if (z.id === zoneId) {
            const current = z.complianceScore;
            return { ...z, complianceScore: Math.max(0, parseFloat((current - 2.5).toFixed(1))) };
          }
          return z;
        })
      );
    } else {
      // Improve compliance slightly for passing
      setWorkers((prev) =>
        prev.map((w) => {
          if (w.id === workerId) {
            const current = w.complianceRate;
            return { ...w, complianceRate: Math.min(100, parseFloat((current + 1).toFixed(1))) };
          }
          return w;
        })
      );

      setZones((prev) =>
        prev.map((z) => {
          if (z.id === zoneId) {
            const current = z.complianceScore;
            return { ...z, complianceScore: Math.min(100, parseFloat((current + 0.5).toFixed(1))) };
          }
          return z;
        })
      );
    }
  };

  return (
    <AwasContext.Provider
      value={{
        zones,
        workers,
        violations,
        accessLogs,
        setZones,
        setWorkers,
        setViolations,
        setAccessLogs,
        addZone,
        updateZone,
        addWorker,
        updateWorker,
        simulateGateScan,
      }}
    >
      {children}
    </AwasContext.Provider>
  );
}

export function useAwas() {
  const context = useContext(AwasContext);
  if (context === undefined) {
    throw new Error("useAwas must be used within an AwasProvider");
  }
  return context;
}
