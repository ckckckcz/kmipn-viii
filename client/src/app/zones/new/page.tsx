"use client";

// ponytail: keep form standard and native, validate client side and update react context directly.
import React, { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { PPE_LABELS, PpeType } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewZonePage() {
  const router = useRouter();
  const { addZone } = useAwas();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [riskLevel, setRiskLevel] = useState<"low" | "medium" | "high">("medium");
  const [requiredPpe, setRequiredPpe] = useState<PpeType[]>([]);

  const handlePpeToggle = (ppe: PpeType) => {
    setRequiredPpe((prev) =>
      prev.includes(ppe) ? prev.filter((item) => item !== ppe) : [...prev, ppe]
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addZone({
      name,
      description,
      riskLevel,
      requiredPpe,
    });

    router.push("/zones");
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="icon-sm">
            <Link href="/zones">
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Tambah Zona Baru</h1>
            <p className="text-muted-foreground text-xs">Buat area kerja baru dengan standar kepatuhan K3 sendiri.</p>
          </div>
        </div>

        <div className="max-w-3xl">
          <Card className="shadow-none border">
            <CardHeader className="py-4 px-5 border-b">
              <CardTitle className="text-sm font-semibold">Formulir Tambah Zona</CardTitle>
              <CardDescription className="text-xs">Isi data dasar zona dan tentukan APD yang wajib dikenakan di area ini.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSave}>
              <CardContent className="p-5 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Nama Zona</label>
                  <Input
                    required
                    placeholder="Contoh: Zona E - Ruang Boiler"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Deskripsi Zona</label>
                  <Textarea
                    placeholder="Jelaskan aktivitas utama dan tingkat bahaya di zona ini..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Tingkat Risiko K3</label>
                  <Select
                    value={riskLevel}
                    onValueChange={(val: any) => setRiskLevel(val)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Tingkat Risiko" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Rendah (Low Risk)</SelectItem>
                      <SelectItem value="medium">Sedang (Medium Risk)</SelectItem>
                      <SelectItem value="high">Tinggi (High Risk)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Checklist APD */}
                <div className="flex flex-col gap-2.5 mt-2">
                  <label className="text-xs font-semibold text-muted-foreground">Checklist APD Wajib</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(Object.keys(PPE_LABELS) as PpeType[]).map((ppe) => {
                      const isChecked = requiredPpe.includes(ppe);
                      return (
                        <button
                          type="button"
                          key={ppe}
                          onClick={() => handlePpeToggle(ppe)}
                          className={`flex items-center gap-2 p-2.5 border rounded-lg text-left text-xs font-semibold transition-all ${
                            isChecked
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border bg-transparent text-muted-foreground hover:bg-muted/10"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="accent-primary pointer-events-none"
                          />
                          <span>{PPE_LABELS[ppe]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
              <div className="border-t p-4 flex justify-end gap-2.5 bg-muted/5">
                <Button asChild variant="outline" size="sm">
                  <Link href="/zones">Batal</Link>
                </Button>
                <Button type="submit" size="sm" className="bg-primary text-white gap-1.5">
                  <SaveIcon className="h-4 w-4" />
                  Simpan Zona
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
