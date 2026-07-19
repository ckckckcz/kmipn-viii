import { BrainIcon } from "lucide-react";

export function AiWelcomeMessage() {
  return (
    <div className="flex gap-2.5 max-w-[85%] self-start">
      <div className="size-7 rounded-full bg-primary/10 flex items-center justify-center border shrink-0">
        <BrainIcon className="h-4 w-4 text-primary" />
      </div>
      <div className="bg-muted/40 p-3 rounded-lg border border-border">
        <p className="font-semibold text-foreground mb-0.5">AI Safety Officer</p>
        <p className="text-muted-foreground leading-relaxed">
          Halo! Saya AI Safety Officer. Saya dapat membantu menganalisis tren kecelakaan/pelanggaran APD, menyusun rekomendasi audit K3, atau menjawab pertanyaan terkait regulasi K3 di pabrik. Apa yang ingin Anda tanyakan?
        </p>
      </div>
    </div>
  );
}
