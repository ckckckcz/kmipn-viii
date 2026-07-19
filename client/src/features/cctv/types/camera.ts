export type CameraStatus = "recording" | "online" | "offline";

export interface CameraFeed {
  id: string;
  name: string;
  url: string;
  zone: string;
  zoneName: string;
  status: CameraStatus;
  fps: number;
  resolution: string;
  bitrate: string;
}

export type PtzDir = "up" | "down" | "left" | "right" | "zoomIn" | "zoomOut" | "reset";

export interface PtzState {
  x: number;
  y: number;
  zoom: number;
}

export type ViewMode = "split" | "grid";
