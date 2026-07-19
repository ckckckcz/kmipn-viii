import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import { Zone } from "@/types";
import { RiskBadge } from "@/features/zones/components/RiskBadge";
import { ZoneStats } from "@/features/zones/components/ZoneStats";
import { RequiredPpeList } from "@/features/zones/components/RequiredPpeList";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";

interface Props {
  zone: Zone;
}

export function ZoneCard({ zone }: Props) {
  return (
    <Card className="shadow-none border flex flex-col justify-between">
      <CardHeader className="pb-3 border-b">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-2.5 items-start">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border shrink-0">
              <MapPinIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">{zone.name}</CardTitle>
              <CardDescription className="text-xs mt-0.5 line-clamp-2">{zone.description}</CardDescription>
            </div>
          </div>
          <RiskBadge level={zone.riskLevel} />
        </div>
      </CardHeader>
      <CardContent className="py-4 flex flex-col gap-4 flex-1">
        <ZoneStats complianceScore={zone.complianceScore} gateCount={zone.gateCount} />
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{ZONE_TEXT.ppeLabel}</span>
          <RequiredPpeList items={zone.requiredPpe} />
        </div>
      </CardContent>
      <CardFooter className="pt-3 pb-4 border-t flex justify-end">
        <Button asChild size="sm" variant="outline" className="h-8">
          <Link href={`/zones/${zone.id}`}>{ZONE_TEXT.manageZone}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
