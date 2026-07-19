import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";

export function ZoneFormHeader() {
  return (
    <div className="flex items-center gap-3">
      <Button asChild variant="outline" size="icon-sm">
        <Link href="/zones"><ArrowLeftIcon className="h-4 w-4" /></Link>
      </Button>
      <div>
        <h1 className="text-xl font-bold tracking-tight">{ZONE_TEXT.newTitle}</h1>
        <p className="text-muted-foreground text-xs">{ZONE_TEXT.newDescription}</p>
      </div>
    </div>
  );
}
