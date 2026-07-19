import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { WORKER_TEXT } from "@/features/workers/constants/defaults";

export function WorkerHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{WORKER_TEXT.title}</h1>
        <p className="text-muted-foreground text-sm">{WORKER_TEXT.description}</p>
      </div>
      <Button asChild className="bg-primary text-white gap-1.5 h-9 shrink-0 self-start md:self-center">
        <Link href="/workers/new">
          <PlusIcon className="h-4 w-4" />
          {WORKER_TEXT.addWorker}
        </Link>
      </Button>
    </div>
  );
}
