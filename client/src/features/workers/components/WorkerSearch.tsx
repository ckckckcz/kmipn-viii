import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { WORKER_TEXT } from "@/features/workers/constants/defaults";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export function WorkerSearch({ value, onChange }: Props) {
  return (
    <div className="relative flex-1 max-w-sm">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder={WORKER_TEXT.searchPlaceholder} value={value} onChange={(e) => onChange(e.target.value)} className="pl-9 h-9" />
    </div>
  );
}
