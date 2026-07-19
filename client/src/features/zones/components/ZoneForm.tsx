import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SaveIcon } from "lucide-react";
import Link from "next/link";
import { PpeType } from "@/types";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";
import { RISK_LEVELS } from "@/features/zones/constants/riskLevels";
import { PpeChecklist } from "@/features/zones/components/PpeChecklist";

interface Props {
  name: string;
  description: string;
  riskLevel: "low" | "medium" | "high";
  requiredPpe: PpeType[];
  onNameChange: (val: string) => void;
  onDescriptionChange: (val: string) => void;
  onRiskLevelChange: (val: "low" | "medium" | "high") => void;
  onPpeToggle: (ppe: PpeType) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ZoneForm({
  name, description, riskLevel, requiredPpe,
  onNameChange, onDescriptionChange, onRiskLevelChange, onPpeToggle, onSubmit,
}: Props) {
  return (
    <div className="max-w-3xl">
      <Card className="shadow-none border">
        <CardHeader className="py-4 px-5 border-b">
          <CardTitle className="text-sm font-semibold">{ZONE_TEXT.formTitle}</CardTitle>
          <CardDescription className="text-xs">{ZONE_TEXT.formDescription}</CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent className="p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground">{ZONE_TEXT.nameLabel}</label>
              <Input required placeholder={ZONE_TEXT.namePlaceholder} value={name} onChange={(e) => onNameChange(e.target.value)} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground">{ZONE_TEXT.descLabel}</label>
              <Textarea placeholder={ZONE_TEXT.descPlaceholder} value={description} onChange={(e) => onDescriptionChange(e.target.value)} rows={3} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground">{ZONE_TEXT.riskLabel}</label>
              <Select value={riskLevel} onValueChange={(val: "low" | "medium" | "high") => onRiskLevelChange(val)}>
                <SelectTrigger><SelectValue placeholder={ZONE_TEXT.riskPlaceholder} /></SelectTrigger>
                <SelectContent>
                  {RISK_LEVELS.map((rl) => <SelectItem key={rl.value} value={rl.value}>{rl.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <PpeChecklist selected={requiredPpe} onToggle={onPpeToggle} />
          </CardContent>
          <div className="border-t p-4 flex justify-end gap-2.5 bg-muted/5">
            <Button asChild variant="outline" size="sm"><Link href="/zones">{ZONE_TEXT.cancel}</Link></Button>
            <Button type="submit" size="sm" className="bg-primary text-white gap-1.5">
              <SaveIcon className="h-4 w-4" />
              {ZONE_TEXT.save}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
