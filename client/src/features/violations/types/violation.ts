export type FollowUpStatus = "new" | "in_progress" | "resolved";

export const STATUS_OPTIONS = [
  { value: "all", label: "Semua Status" },
  { value: "new", label: "Baru" },
  { value: "in_progress", label: "Diproses" },
  { value: "resolved", label: "Selesai" },
];

export const STATUS_BADGE_CONFIG: Record<FollowUpStatus, { className: string; label: string }> = {
  new: { className: "bg-red-500 hover:bg-red-500 text-white uppercase text-[9px] font-black tracking-wide", label: "Baru" },
  in_progress: { className: "bg-amber-500 hover:bg-amber-500 text-white uppercase text-[9px] font-black tracking-wide", label: "Diproses" },
  resolved: { className: "bg-green-600 hover:bg-green-600 text-white uppercase text-[9px] font-black tracking-wide", label: "Selesai" },
};
