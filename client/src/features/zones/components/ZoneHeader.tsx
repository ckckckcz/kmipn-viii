import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";

export function ZoneHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{ZONE_TEXT.title}</h1>
        <p className="text-muted-foreground text-sm">{ZONE_TEXT.description}</p>
      </div>
      <Button asChild className="bg-primary text-white gap-1.5 h-9 shrink-0 self-start md:self-center">
        <Link href="/zones/new">
          <PlusIcon className="h-4 w-4" />
          {ZONE_TEXT.addZone}
        </Link>
      </Button>
    </div>
  );
}
