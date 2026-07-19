import { useState, useCallback } from "react";
import { PtzDir, PtzState } from "@/features/cctv/types/camera";
import { INITIAL_PTZ, PTZ_MOVEMENT } from "@/features/cctv/constants/ptz";

export function usePtz() {
  const [ptz, setPtz] = useState<PtzState>(INITIAL_PTZ);

  const move = useCallback((direction: PtzDir) => {
    setPtz((prev) => PTZ_MOVEMENT[direction]?.(prev) ?? prev);
  }, []);

  const reset = useCallback(() => setPtz(INITIAL_PTZ), []);

  return { ptz, move, reset };
}
