import { PtzDir, PtzState } from "@/features/cctv/types/camera";

export const INITIAL_PTZ: PtzState = { x: 50, y: 50, zoom: 100 };

export const PTZ_MOVEMENT: Record<PtzDir, (p: PtzState) => PtzState> = {
  up: (p) => ({ ...p, y: Math.max(10, p.y - 10) }),
  down: (p) => ({ ...p, y: Math.min(90, p.y + 10) }),
  left: (p) => ({ ...p, x: Math.max(10, p.x - 10) }),
  right: (p) => ({ ...p, x: Math.min(90, p.x + 10) }),
  zoomIn: (p) => ({ ...p, zoom: Math.min(220, p.zoom + 20) }),
  zoomOut: (p) => ({ ...p, zoom: Math.max(100, p.zoom - 20) }),
  reset: () => INITIAL_PTZ,
};
