import { PpeType } from "@/types";

export function pickRandomMissingPpe(required: PpeType[]): PpeType[] {
  if (required.length === 0) return [];
  const numMissing = Math.min(required.length, Math.floor(Math.random() * 2) + 1);
  const shuffled = [...required].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numMissing);
}
