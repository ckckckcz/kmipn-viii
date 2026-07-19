import { Search, Columns4, Grid2X2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ZONE_OPTIONS } from "@/features/cctv/constants/zone-options";
import { ViewMode } from "@/features/cctv/types/camera";

interface Props {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedZone: string;
  onZoneChange: (val: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function CameraHeader({ searchQuery, onSearchChange, selectedZone, onZoneChange, viewMode, onViewModeChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">CCTV Monitoring</h1>
        <p className="text-muted-foreground text-sm font-light">Visualisasi feed kamera CCTV pengawas area pabrik secara real-time.</p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative w-48">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cari kamera..." className="pl-8 h-9 text-xs" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
        </div>
        <Select value={selectedZone} onValueChange={onZoneChange}>
          <SelectTrigger className="w-36 h-9 text-xs"><SelectValue placeholder="Semua Zona" /></SelectTrigger>
          <SelectContent>
            {ZONE_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="flex items-center border rounded-md p-0.5 bg-muted/40">
          <Button variant={viewMode === "split" ? "secondary" : "ghost"} size="icon-sm" className="h-8 w-8" onClick={() => onViewModeChange("split")}><Columns4 className="h-4 w-4" /></Button>
          <Button variant={viewMode === "grid" ? "secondary" : "ghost"} size="icon-sm" className="h-8 w-8" onClick={() => onViewModeChange("grid")}><Grid2X2 className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
