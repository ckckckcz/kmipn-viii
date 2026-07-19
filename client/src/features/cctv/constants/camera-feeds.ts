import { CameraFeed } from "@/features/cctv/types/camera";

export const CAMERA_FEEDS: CameraFeed[] = [
  { id: "cam-01", name: "CAM-01: Filling Room Gate", url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80", zone: "filling", zoneName: "Filling Room", status: "recording", fps: 30, resolution: "1920x1080", bitrate: "4.2 Mbps" },
  { id: "cam-02", name: "CAM-02: Packing Line Entrance", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80", zone: "packing", zoneName: "Packing Line", status: "recording", fps: 25, resolution: "1920x1080", bitrate: "3.8 Mbps" },
  { id: "cam-03", name: "CAM-03: Loading Dock Area 1", url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80", zone: "loading", zoneName: "Loading Dock", status: "online", fps: 30, resolution: "1280x720", bitrate: "2.1 Mbps" },
  { id: "cam-04", name: "CAM-04: Raw Material Prep Area", url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80", zone: "raw", zoneName: "Raw Material Prep", status: "recording", fps: 30, resolution: "1920x1080", bitrate: "4.5 Mbps" },
  { id: "cam-05", name: "CAM-05: Warehouse Storage Rack 3", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80", zone: "warehouse", zoneName: "Warehouse Storage", status: "online", fps: 24, resolution: "1280x720", bitrate: "1.8 Mbps" },
  { id: "cam-06", name: "CAM-06: Main Lobby Gate Entrance", url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80", zone: "lobby", zoneName: "Main Lobby", status: "online", fps: 30, resolution: "1920x1080", bitrate: "3.5 Mbps" },
];
