import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon, FilterIcon } from "lucide-react";
import { Zone } from "@/types";
import { PPE_LABELS } from "@/types";
import { VIOLATION_FILTER_TEXT } from "@/features/violations/constants/violation-status";
import { STATUS_OPTIONS } from "@/features/violations/types/violation";

interface Props {
  searchName: string;
  selectedZoneId: string;
  selectedPpe: string;
  selectedStatus: string;
  zones: Zone[];
  onSearchChange: (val: string) => void;
  onZoneChange: (val: string) => void;
  onPpeChange: (val: string) => void;
  onStatusChange: (val: string) => void;
  onReset: () => void;
}

export function ViolationFilter({
  searchName, selectedZoneId, selectedPpe, selectedStatus, zones,
  onSearchChange, onZoneChange, onPpeChange, onStatusChange, onReset,
}: Props) {
  return (
    <Card className="shadow-none border">
      <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <FilterIcon className="h-4 w-4 text-muted-foreground" />
          {VIOLATION_FILTER_TEXT.title}
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={onReset} className="h-8 text-xs text-muted-foreground hover:text-foreground">
          {VIOLATION_FILTER_TEXT.reset}
        </Button>
      </CardHeader>
      <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-muted-foreground uppercase">{VIOLATION_FILTER_TEXT.searchLabel}</label>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder={VIOLATION_FILTER_TEXT.searchPlaceholder} value={searchName} onChange={(e) => onSearchChange(e.target.value)} className="pl-9 h-9" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-muted-foreground uppercase">{VIOLATION_FILTER_TEXT.zoneLabel}</label>
          <Select value={selectedZoneId} onValueChange={onZoneChange}>
            <SelectTrigger className="w-full h-9"><SelectValue placeholder={VIOLATION_FILTER_TEXT.zoneAll} /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{VIOLATION_FILTER_TEXT.zoneAll}</SelectItem>
              {zones.map((z) => <SelectItem key={z.id} value={z.id}>{z.name.split(" - ")[0]}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-muted-foreground uppercase">{VIOLATION_FILTER_TEXT.ppeLabel}</label>
          <Select value={selectedPpe} onValueChange={onPpeChange}>
            <SelectTrigger className="w-full h-9"><SelectValue placeholder={VIOLATION_FILTER_TEXT.ppeAll} /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{VIOLATION_FILTER_TEXT.ppeAll}</SelectItem>
              {Object.entries(PPE_LABELS).map(([key, value]) => <SelectItem key={key} value={key}>{value}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-muted-foreground uppercase">{VIOLATION_FILTER_TEXT.statusLabel}</label>
          <Select value={selectedStatus} onValueChange={onStatusChange}>
            <SelectTrigger className="w-full h-9"><SelectValue placeholder={VIOLATION_FILTER_TEXT.statusAll} /></SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
