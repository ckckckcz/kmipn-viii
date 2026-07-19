"use client";

// ponytail: keep simulation simple but high fidelity using native HTML5 video/canvas or static fallback.
import { useState, useEffect, useRef } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { PPE_LABELS, PpeType } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlayIcon, ShieldAlertIcon, ShieldCheckIcon, AlertCircleIcon, CameraIcon, LockIcon, UnlockIcon, RefreshCwIcon, Check, X } from "lucide-react";
import Image from "next/image";

type ScanStatus = "idle" | "processing" | "granted" | "denied";

export default function GateMonitorPage() {
  const { zones, workers, simulateGateScan, accessLogs } = useAwas();

  // Simulation controls
  const [selectedWorkerId, setSelectedWorkerId] = useState<string>("");
  const [selectedZoneId, setSelectedZoneId] = useState<string>("");
  const [scenario, setScenario] = useState<"complete" | "incomplete">("complete");

  // Scan state
  const [scanStatus, setScanStatus] = useState<ScanStatus>("idle");
  const [activeWorker, setActiveWorker] = useState<any>(null);
  const [activeZone, setActiveZone] = useState<any>(null);
  const [scanMissingPpe, setScanMissingPpe] = useState<PpeType[]>([]);
  const [isCameraActive, setIsCameraActive] = useState(false);

  // Bounding box animation simulation state
  const [showBoxes, setShowBoxes] = useState(false);

  // Setup initial selection
  useEffect(() => {
    if (workers.length > 0) setSelectedWorkerId(workers[0].id);
    if (zones.length > 0) setSelectedZoneId(zones[0].id);
  }, [workers, zones]);

  // Video stream ref
  const videoRef = useRef<HTMLVideoElement>(null);

  // Toggle Camera
  useEffect(() => {
    let stream: MediaStream | null = null;
    if (isCameraActive && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 640, height: 480 } })
        .then((s) => {
          stream = s;
          if (videoRef.current) {
            videoRef.current.srcObject = s;
          }
        })
        .catch((err) => {
          console.error("Camera access denied:", err);
          setIsCameraActive(false);
        });
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCameraActive]);

  const handleSimulateScan = () => {
    if (!selectedWorkerId || !selectedZoneId) return;

    const worker = workers.find((w) => w.id === selectedWorkerId);
    const zone = zones.find((z) => z.id === selectedZoneId);
    if (!worker || !zone) return;

    setScanStatus("processing");
    setActiveWorker(worker);
    setActiveZone(zone);
    setShowBoxes(false);

    // Artificial delay to look like processing
    setTimeout(() => {
      let missingItems: PpeType[] = [];
      if (scenario === "incomplete") {
        // Randomly select 1 or 2 items from the zone's required PPE to be missing
        const required = zone.requiredPpe;
        if (required.length > 0) {
          const numMissing = Math.min(required.length, Math.floor(Math.random() * 2) + 1);
          const shuffled = [...required].sort(() => 0.5 - Math.random());
          missingItems = shuffled.slice(0, numMissing);
        }
      }

      const isComplete = missingItems.length === 0;

      setScanMissingPpe(missingItems);
      setScanStatus(isComplete ? "granted" : "denied");
      setShowBoxes(true);

      // Perform context state update
      simulateGateScan(worker.id, zone.id, isComplete, missingItems);
    }, 1500);
  };

  // Helper to check if a specific PPE is missing in the current scan
  const isPpeItemMissing = (item: PpeType) => {
    return scanMissingPpe.includes(item);
  };

  // Filter access logs for current gate log simulation list
  const gateLogs = accessLogs.slice(0, 8);

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gate Monitor</h1>
          <p className="text-muted-foreground text-sm">Simulasi pemindaian pintu gerbang K3 pintar secara real-time.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel Kiri: Camera/Simulation Feed */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Card className="shadow-none border overflow-hidden flex flex-col h-full min-h-[400px]">
              <CardHeader className="border-b py-3 px-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <CardTitle className="text-sm font-semibold">Live Camera Feed - Gate 1</CardTitle>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCameraActive(!isCameraActive)}
                  className="h-8 gap-1.5"
                >
                  <CameraIcon className="h-3.5 w-3.5" />
                  {isCameraActive ? "Nonaktifkan Kamera" : "Aktifkan Kamera"}
                </Button>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative bg-neutral-900 flex items-center justify-center min-h-[300px]">
                {isCameraActive ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover aspect-video"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400 gap-2">
                    <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center border border-neutral-700">
                      <CameraIcon className="w-8 h-8 text-neutral-500" />
                    </div>
                    <span className="text-sm font-medium">Kamera Fisik Off (Mode Simulasi Gambar Statis)</span>
                    <span className="text-xs text-neutral-500 max-w-xs text-center">Aktifkan kamera lokal atau klik "Simulasikan Scan" di sebelah kanan.</span>
                  </div>
                )}

                {/* Static Placeholder Image Overlay (when scan status is not idle and physical camera is off) */}
                {!isCameraActive && activeWorker && scanStatus !== "idle" && (
                  <img
                    src={activeWorker.photoUrl}
                    alt="Detected Worker"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale-[20%]"
                  />
                )}

                {/* Overlay Scanning Effect */}
                {scanStatus === "processing" && (
                  <div className="absolute inset-0 bg-blue-500/10 flex flex-col items-center justify-center">
                    <div className="absolute inset-x-0 h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-pulse" style={{
                      animation: "scanLine 2s infinite ease-in-out",
                      top: "20%"
                    }}></div>
                    <style jsx global>{`
                      @keyframes scanLine {
                        0% { top: 10%; }
                        50% { top: 90%; }
                        100% { top: 10%; }
                      }
                    `}</style>
                    <div className="bg-neutral-900/90 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 flex items-center gap-2 backdrop-blur-sm">
                      <RefreshCwIcon className="h-4 w-4 animate-spin" />
                      <span className="text-xs font-semibold tracking-wider uppercase">Menganalisis Kepatuhan APD...</span>
                    </div>
                  </div>
                )}

                {/* AI Bounding Boxes Overlay (only when showBoxes is true) */}
                {showBoxes && activeWorker && activeZone && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Head/Helmet Box */}
                    {activeZone.requiredPpe.includes("helmet") && (
                      <div
                        className={`absolute border-2 ${
                          isPpeItemMissing("helmet") ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"
                        } px-2 py-0.5 text-[9px] font-bold text-white rounded`}
                        style={{ top: "15%", left: "40%", width: "22%", height: "20%" }}
                      >
                        <span className={`block px-1 rounded text-[8px] uppercase ${isPpeItemMissing("helmet") ? "bg-red-600" : "bg-green-600"}`}>
                          Helm: {isPpeItemMissing("helmet") ? "MISSING" : "OK"}
                        </span>
                      </div>
                    )}

                    {/* Mask Box */}
                    {activeZone.requiredPpe.includes("mask") && (
                      <div
                        className={`absolute border-2 ${
                          isPpeItemMissing("mask") ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"
                        } px-2 py-0.5 text-[9px] font-bold text-white rounded`}
                        style={{ top: "33%", left: "44%", width: "14%", height: "10%" }}
                      >
                        <span className={`block px-1 rounded text-[8px] uppercase ${isPpeItemMissing("mask") ? "bg-red-600" : "bg-green-600"}`}>
                          Masker: {isPpeItemMissing("mask") ? "MISSING" : "OK"}
                        </span>
                      </div>
                    )}

                    {/* Lab Coat / Body Box */}
                    {activeZone.requiredPpe.includes("lab_coat") && (
                      <div
                        className={`absolute border-2 ${
                          isPpeItemMissing("lab_coat") ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"
                        } px-2 py-0.5 text-[9px] font-bold text-white rounded`}
                        style={{ top: "42%", left: "30%", width: "42%", height: "45%" }}
                      >
                        <span className={`block px-1 rounded text-[8px] uppercase ${isPpeItemMissing("lab_coat") ? "bg-red-600" : "bg-green-600"}`}>
                          Jas Lab: {isPpeItemMissing("lab_coat") ? "MISSING" : "OK"}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Simulation Controller Panel */}
            <Card className="shadow-none border">
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-sm font-semibold">Kontrol Simulasi Demo</CardTitle>
                <CardDescription className="text-xs">Gunakan panel ini untuk mensimulasikan berbagai skenario pekerja dan K3.</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Pilih Pekerja</label>
                  <Select value={selectedWorkerId} onValueChange={setSelectedWorkerId}>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Pilih Pekerja" />
                    </SelectTrigger>
                    <SelectContent>
                      {workers.map((w) => (
                        <SelectItem key={w.id} value={w.id}>
                          {w.name} ({w.idCardNumber.split("-")[2]})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Zona Tujuan</label>
                  <Select value={selectedZoneId} onValueChange={setSelectedZoneId}>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Pilih Zona" />
                    </SelectTrigger>
                    <SelectContent>
                      {zones.map((z) => (
                        <SelectItem key={z.id} value={z.id}>
                          {z.name.split(" - ")[0]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Skenario APD</label>
                  <Select value={scenario} onValueChange={(val: any) => setScenario(val)}>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Skenario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="complete">Lengkap (Akses Diberikan)</SelectItem>
                      <SelectItem value="incomplete">Tidak Lengkap (Akses Ditolak)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSimulateScan}
                  disabled={scanStatus === "processing"}
                  className="w-full h-9 bg-primary text-white"
                >
                  <PlayIcon className="h-4 w-4 mr-2" />
                  Simulasikan Scan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Panel Kanan: Status & Checklist */}
          <div className="flex flex-col gap-6">
            {/* Status Card */}
            <Card className="shadow-none border flex-1">
              <CardHeader className="border-b py-3 px-4">
                <CardTitle className="text-sm font-semibold">Hasil Deteksi Scan</CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex flex-col gap-4">
                {/* Large Status Display */}
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/20 min-h-[140px] text-center">
                  {scanStatus === "idle" && (
                    <div className="flex flex-col items-center gap-2">
                      <RefreshCwIcon className="h-10 w-10 text-muted-foreground/60 animate-pulse" />
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Menunggu Scan...</span>
                      <span className="text-xs text-muted-foreground">Klik tombol Simulasikan Scan untuk memulai.</span>
                    </div>
                  )}

                  {scanStatus === "processing" && (
                    <div className="flex flex-col items-center gap-2">
                      <RefreshCwIcon className="h-10 w-10 text-blue-500 animate-spin" />
                      <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">Memproses...</span>
                      <span className="text-xs text-muted-foreground">Mencocokkan wajah dan mendeteksi kelengkapan APD.</span>
                    </div>
                  )}

                  {scanStatus === "granted" && (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center border border-green-200 shadow-[0_0_15px_rgba(34,197,94,0.15)] animate-pulse">
                        <ShieldCheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="flex items-center gap-1.5 text-lg font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">
                        LENGKAP
                        <Check className="h-5 w-5 text-green-600 dark:text-green-400 stroke-[3]" />
                      </span>
                      <span className="text-xs text-muted-foreground">Akses Gerbang Diberikan.</span>
                    </div>
                  )}

                  {scanStatus === "denied" && (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center border border-red-200 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                        <ShieldAlertIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="flex items-center gap-1.5 text-lg font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
                        TIDAK LENGKAP
                        <X className="h-5 w-5 text-red-600 dark:text-red-400 stroke-[3]" />
                      </span>
                      <span className="text-xs text-muted-foreground">Akses Gerbang Ditolak & Pelanggaran Dicatat.</span>
                    </div>
                  )}
                </div>

                {/* Gate Indicator Box */}
                <div className={`flex items-center justify-between p-3 rounded-lg border text-sm font-medium transition-all ${
                  scanStatus === "granted"
                    ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
                    : "bg-muted/30 text-muted-foreground border-border"
                }`}>
                  <span className="flex items-center gap-2">
                    {scanStatus === "granted" ? <UnlockIcon className="h-4 w-4" /> : <LockIcon className="h-4 w-4" />}
                    Status Gerbang
                  </span>
                  <Badge variant={scanStatus === "granted" ? "default" : "outline"} className={scanStatus === "granted" ? "bg-green-600 text-white" : ""}>
                    {scanStatus === "granted" ? "Terbuka (GATE OPEN)" : "Terkunci (GATE LOCKED)"}
                  </Badge>
                </div>

                {/* Worker Profile Metadata */}
                {activeWorker && (
                  <div className="flex gap-3 border p-3 rounded-lg bg-muted/10 items-center">
                    <img
                      src={activeWorker.photoUrl}
                      alt={activeWorker.name}
                      className="w-12 h-12 rounded-md object-cover border"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold truncate">{activeWorker.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{activeWorker.idCardNumber}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        Zona Default: <span className="font-medium text-foreground">{zones.find(z => z.id === activeWorker.zoneId)?.name.split(" - ")[0]}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* PPE Checklist */}
                {activeZone && (
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Persyaratan APD {activeZone.name.split(" - ")[0]}</h5>
                    <div className="flex flex-col gap-1.5">
                      {activeZone.requiredPpe.map((ppe: PpeType) => {
                        const isMissing = isPpeItemMissing(ppe);
                        const isProcessing = scanStatus === "processing";
                        const isIdle = scanStatus === "idle";

                        return (
                          <div
                            key={ppe}
                            className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all duration-200 ${
                              isIdle
                                ? "bg-muted/10 border-muted text-muted-foreground"
                                : isProcessing
                                ? "bg-muted/30 border-muted/50 text-muted-foreground animate-pulse"
                                : isMissing
                                ? "bg-red-50/50 dark:bg-red-950/10 border-red-200/60 dark:border-red-900/30 text-red-700 dark:text-red-400 shadow-sm"
                                : "bg-green-50/50 dark:bg-green-950/10 border-green-200/60 dark:border-green-900/30 text-green-700 dark:text-green-400 shadow-sm"
                            }`}
                          >
                            <span className="font-medium">{PPE_LABELS[ppe]}</span>
                            <div className="flex items-center gap-1.5 font-semibold text-[10px] uppercase tracking-wider">
                              {isIdle ? (
                                <span className="text-muted-foreground">Menunggu</span>
                              ) : isProcessing ? (
                                <span className="text-blue-500 animate-pulse flex items-center gap-1">
                                  <RefreshCwIcon className="h-2.5 w-2.5 animate-spin" />
                                  Mendeteksi
                                </span>
                              ) : isMissing ? (
                                <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
                                  <span>Tidak Ada</span>
                                  <X className="h-3 w-3 stroke-[3]" />
                                </span>
                              ) : (
                                <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                                  <span>Lengkap</span>
                                  <Check className="h-3 w-3 stroke-[3]" />
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Live Event Log */}
        <Card className="shadow-none border">
          <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-semibold">Live Event Log Gerbang</CardTitle>
              <CardDescription className="text-xs">Daftar log aktivitas keluar masuk gerbang real-time.</CardDescription>
            </div>
            <Badge variant="outline" className="text-xs font-mono text-muted-foreground">
              {accessLogs.length} Total Log
            </Badge>
          </CardHeader>
          <CardContent className="p-0 max-h-[300px] overflow-y-auto">
            {gateLogs.length === 0 ? (
              <div className="text-center py-6 text-xs text-muted-foreground">Belum ada aktivitas pemindaian.</div>
            ) : (
              <div className="flex flex-col divide-y">
                {gateLogs.map((log) => {
                  const worker = workers.find((w) => w.id === log.workerId);
                  const zone = zones.find((z) => z.id === log.zoneId);

                  return (
                    <div key={log.id} className="flex flex-col md:flex-row md:items-center justify-between p-3.5 gap-2 hover:bg-muted/5">
                      <div className="flex items-center gap-3">
                        {worker?.photoUrl && (
                          <img
                            src={worker.photoUrl}
                            alt={worker.name}
                            className="w-8 h-8 rounded object-cover border"
                          />
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
                            {log.gateName} • {new Date(log.timestamp).toLocaleString("id-ID")}
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
                          className={`text-[10px] py-0 px-2 uppercase font-black tracking-wide ${
                            log.status === "granted" ? "bg-green-600 text-white hover:bg-green-600" : ""
                          }`}
                        >
                          {log.status === "granted" ? "GRANTED" : "DENIED"}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
