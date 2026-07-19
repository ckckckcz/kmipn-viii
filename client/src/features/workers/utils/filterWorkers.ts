import { Worker } from "@/types";

export function filterWorkers(workers: Worker[], query: string): Worker[] {
  const q = query.toLowerCase();
  return workers.filter((w) =>
    w.name.toLowerCase().includes(q) || w.idCardNumber.toLowerCase().includes(q)
  );
}
