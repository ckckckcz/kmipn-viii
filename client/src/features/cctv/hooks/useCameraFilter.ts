import { useMemo } from "react";
import { CameraFeed } from "@/features/cctv/types/camera";
import { CAMERA_FEEDS } from "@/features/cctv/constants/camera-feeds";

export function useCameraFilter(searchQuery: string, selectedZone: string) {
  return useMemo(() => {
    const q = searchQuery.toLowerCase();
    return CAMERA_FEEDS.filter((feed) =>
      (feed.name.toLowerCase().includes(q) || feed.zoneName.toLowerCase().includes(q)) &&
      (selectedZone === "all" || feed.zone === selectedZone)
    );
  }, [searchQuery, selectedZone]);
}
