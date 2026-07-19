import { useState, useCallback } from "react";
import { PpeType } from "@/types";

export function useRequiredPpe() {
  const [requiredPpe, setRequiredPpe] = useState<PpeType[]>([]);

  const toggle = useCallback((ppe: PpeType) => {
    setRequiredPpe((prev) =>
      prev.includes(ppe) ? prev.filter((item) => item !== ppe) : [...prev, ppe]
    );
  }, []);

  return { requiredPpe, toggle };
}
