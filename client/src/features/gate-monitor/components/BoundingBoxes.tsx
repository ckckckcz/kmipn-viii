const BOXES: Record<string, { top: string; left: string; width: string; height: string; label: string }> = {
  helmet: { top: "15%", left: "40%", width: "22%", height: "20%", label: "Helm" },
  mask: { top: "33%", left: "44%", width: "14%", height: "10%", label: "Masker" },
  lab_coat: { top: "42%", left: "30%", width: "42%", height: "45%", label: "Jas Lab" },
};

import { PpeType } from "@/types";

interface Props {
  requiredPpe: PpeType[];
  isPpeItemMissing: (item: PpeType) => boolean;
}

export function BoundingBoxes({ requiredPpe, isPpeItemMissing }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {requiredPpe.map((item) => {
        const box = BOXES[item];
        if (!box) return null;
        const missing = isPpeItemMissing(item);
        return (
          <div
            key={item}
            className={`absolute border-2 ${missing ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"} px-2 py-0.5 text-[9px] font-bold text-white rounded`}
            style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
          >
            <span className={`block px-1 rounded text-[8px] uppercase ${missing ? "bg-red-600" : "bg-green-600"}`}>
              {box.label}: {missing ? "MISSING" : "OK"}
            </span>
          </div>
        );
      })}
    </div>
  );
}
