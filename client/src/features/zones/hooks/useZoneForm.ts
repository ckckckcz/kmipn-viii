import { useState, useCallback } from "react";
import { PpeType } from "@/types";

interface ZoneFormState {
  name: string;
  description: string;
  riskLevel: "low" | "medium" | "high";
  requiredPpe: PpeType[];
}

export function useZoneForm() {
  const [form, setForm] = useState<ZoneFormState>({
    name: "",
    description: "",
    riskLevel: "medium",
    requiredPpe: [],
  });

  const setField = useCallback(<K extends keyof ZoneFormState>(key: K, value: ZoneFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handlePpeToggle = useCallback((ppe: PpeType) => {
    setForm((prev) => ({
      ...prev,
      requiredPpe: prev.requiredPpe.includes(ppe)
        ? prev.requiredPpe.filter((item) => item !== ppe)
        : [...prev.requiredPpe, ppe],
    }));
  }, []);

  const isValid = form.name.trim().length > 0;

  return { form, setField, handlePpeToggle, isValid };
}
