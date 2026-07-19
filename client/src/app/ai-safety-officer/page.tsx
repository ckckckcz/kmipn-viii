"use client";

// ponytail: keep this page static as it's a roadmap feature, using standard HTML input for placeholder.
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BrainIcon, SendIcon, SparklesIcon, AlertCircleIcon, ShieldCheckIcon, Construction } from "lucide-react";

export default function AiSafetyOfficerPage() {
  const insights = [
    {
      id: "insight-1",
      title: "Peningkatan Pelanggaran Masker di Zona A",
      description: "Zona A - Filling & Processing mengalami lonjakan pelanggaran APD berupa tidak menggunakan masker sebesar 15% pada shift malam minggu ini. Disarankan melakukan evaluasi ketersediaan stok masker di dispenser gerbang masuk.",
      type: "warning",
      date: "Hari Ini",
    },
    {
      id: "insight-2",
      title: "Penurunan Compliance Score Zona D",
      description: "Compliance score Zona D - Raw Material Prep menurun dari 84% ke 78.9% dalam 3 hari terakhir. Kategori pelanggaran terbanyak didominasi oleh ketidakpatuhan penggunaan Kacamata Safety dan Helm.",
      type: "alert",
      date: "Kemarin",
    },
    {
      id: "insight-3",
      title: "Apresiasi K3 Terhadap Zona C",
      description: "Zona C - Warehouse & Loading sukses mempertahankan compliance score rata-rata di atas 94% selama 14 hari berturut-turut. Rekomendasi pemberian reward K3 untuk tim shift kerja terkait.",
      type: "success",
      date: "3 Hari Lalu",
    },
  ];

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">AI Safety Officer</h1>
            <p className="text-muted-foreground text-sm">Konsultan K3 berbasis LLM cerdas yang menganalisis log kepatuhan APD.</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1 bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50 font-semibold uppercase text-[10px] tracking-wider px-2.5 py-1 self-start md:self-center">
            <Construction className="h-3.5 w-3.5 text-amber-500 animate-bounce" />
            Fitur Roadmap Fase Berikutnya
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel Kiri: AI Insight Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <SparklesIcon className="h-4 w-4 text-primary" />
              Rekomendasi & Insight K3 Otomatis
            </h3>

            {insights.map((ins) => (
              <Card key={ins.id} className="shadow-none border">
                <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ins.type === "warning" && <AlertCircleIcon className="h-4 w-4 text-amber-500" />}
                    {ins.type === "alert" && <AlertCircleIcon className="h-4 w-4 text-red-500" />}
                    {ins.type === "success" && <ShieldCheckIcon className="h-4 w-4 text-green-500" />}
                    <CardTitle className="text-sm font-bold">{ins.title}</CardTitle>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">{ins.date}</span>
                </CardHeader>
                <CardContent className="p-4 text-xs text-muted-foreground leading-relaxed">
                  {ins.description}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Panel Kanan: AI Chat Interface Mockup */}
          <Card className="shadow-none border flex flex-col h-[500px]">
            <CardHeader className="border-b py-3 px-4 bg-muted/10">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <BrainIcon className="h-4.5 w-4.5 text-primary" />
                Tanya AI Safety Officer
              </CardTitle>
              <CardDescription className="text-xs">Konsultasikan regulasi K3 dan tren pelanggaran.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
              {/* Messages Container Mockup */}
              <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4 text-xs">
                {/* AI Intro Message */}
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

                {/* Disabled Overlay */}
                <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2 border">
                    <BrainIcon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-foreground">Fitur Obrolan Segera Hadir</span>
                  <span className="text-[10px] text-muted-foreground max-w-[200px] mt-1">Sistem integrasi model LLM (Gemini) pada roadmap fase 2.</span>
                </div>
              </div>

              {/* Input Area Mockup */}
              <div className="flex gap-2 pt-3 border-t">
                <Input
                  disabled
                  placeholder="Ketik pertanyaan K3 di sini... (Segera Hadir)"
                  className="h-9 text-xs"
                />
                <Button disabled size="icon-sm" className="bg-primary text-white">
                  <SendIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
