import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BrainIcon, SendIcon } from "lucide-react";
import { AiWelcomeMessage } from "@/features/ai-safety-officer/components/AiWelcomeMessage";
import { ComingSoonOverlay } from "@/features/ai-safety-officer/components/ComingSoonOverlay";

export function AiChatMockup() {
  return (
    <Card className="shadow-none border flex flex-col h-[500px]">
      <CardHeader className="border-b py-3 px-4 bg-muted/10">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <BrainIcon className="h-4.5 w-4.5 text-primary" />
          Tanya AI Safety Officer
        </CardTitle>
        <CardDescription className="text-xs">Konsultasikan regulasi K3 dan tren pelanggaran.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4 text-xs relative">
          <AiWelcomeMessage />
          <ComingSoonOverlay />
        </div>
        <div className="flex gap-2 pt-3 border-t">
          <Input disabled placeholder="Ketik pertanyaan K3 di sini... (Segera Hadir)" className="h-9 text-xs" />
          <Button disabled size="icon-sm" className="bg-primary text-white">
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
