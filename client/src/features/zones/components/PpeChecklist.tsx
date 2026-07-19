import { PPE_LABELS, PpeType } from "@/types";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";

interface Props {
  selected: PpeType[];
  onToggle: (ppe: PpeType) => void;
}

export function PpeChecklist({ selected, onToggle }: Props) {
  return (
    <div className="flex flex-col gap-2.5 mt-2">
      <label className="text-xs font-semibold text-muted-foreground">{ZONE_TEXT.ppeChecklist}</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {(Object.keys(PPE_LABELS) as PpeType[]).map((ppe) => {
          const isChecked = selected.includes(ppe);
          return (
            <button
              type="button"
              key={ppe}
              onClick={() => onToggle(ppe)}
              className={`flex items-center gap-2 p-2.5 border rounded-lg text-left text-xs font-semibold transition-all ${
                isChecked ? "border-primary bg-primary/5 text-primary" : "border-border bg-transparent text-muted-foreground hover:bg-muted/10"
              }`}
            >
              <input type="checkbox" checked={isChecked} readOnly className="accent-primary pointer-events-none" />
              <span>{PPE_LABELS[ppe]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
