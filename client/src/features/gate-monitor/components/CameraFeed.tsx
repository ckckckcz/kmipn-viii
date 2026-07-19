import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";
import { Worker } from "@/types";
import { PpeType } from "@/types";
import { ScanningOverlay } from "@/features/gate-monitor/components/ScanningOverlay";
import { BoundingBoxes } from "@/features/gate-monitor/components/BoundingBoxes";

interface Props {
  isCameraActive: boolean;
  onToggleCamera: () => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  scanStatus: string;
  activeWorker: Worker | null;
  showBoxes: boolean;
  activeZone: { requiredPpe: PpeType[] } | null;
  isPpeItemMissing: (item: PpeType) => boolean;
}

export function CameraFeed({ isCameraActive, onToggleCamera, videoRef, scanStatus, activeWorker, showBoxes, activeZone, isPpeItemMissing }: Props) {
  return (
    <Card className="shadow-none border overflow-hidden flex flex-col h-full min-h-[400px]">
      <CardHeader className="border-b py-3 px-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <CardTitle className="text-sm font-semibold">{GATE_TEXT.cameraFeed}</CardTitle>
        </div>
        <Button variant="outline" size="sm" onClick={onToggleCamera} className="h-8 gap-1.5">
          <CameraIcon className="h-3.5 w-3.5" />
          {isCameraActive ? GATE_TEXT.deactivateCam : GATE_TEXT.activateCam}
        </Button>
      </CardHeader>
      <CardContent className="p-0 flex-1 relative bg-neutral-900 flex items-center justify-center min-h-[300px]">
        {isCameraActive ? (
          <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover aspect-video" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400 gap-2">
            <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center border border-neutral-700">
              <CameraIcon className="w-8 h-8 text-neutral-500" />
            </div>
            <span className="text-sm font-medium">{GATE_TEXT.camOff}</span>
            <span className="text-xs text-neutral-500 max-w-xs text-center">{GATE_TEXT.camOffDesc}</span>
          </div>
        )}

        {!isCameraActive && activeWorker && scanStatus !== "idle" && (
          <img src={activeWorker.photoUrl} alt="Detected Worker" className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale-[20%]" />
        )}

        {scanStatus === "processing" && <ScanningOverlay />}

        {showBoxes && activeZone && (
          <BoundingBoxes
            requiredPpe={activeZone.requiredPpe}
            isPpeItemMissing={isPpeItemMissing}
          />
        )}
      </CardContent>
    </Card>
  );
}
