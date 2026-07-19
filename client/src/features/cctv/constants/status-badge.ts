import { CameraStatus } from "@/features/cctv/types/camera";

export const STATUS_BADGE: Record<CameraStatus, { label: string; className: string }> = {
  recording: { label: "REC", className: "bg-red-600 text-white" },
  online: { label: "LIVE", className: "bg-neutral-800 text-green-400 border border-green-500/30" },
  offline: { label: "OFFLINE", className: "bg-neutral-900 text-neutral-400" },
};

export const SCANLINE_BG = "bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]";

export const OFFLINE_FILTER = "grayscale(1) brightness(0.3)";
