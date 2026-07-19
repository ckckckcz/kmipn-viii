"use client";

// ponytail: keep form standard and native, validate client side and update react context directly.
import React, { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftIcon, SaveIcon, UploadCloudIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewWorkerPage() {
  const router = useRouter();
  const { addWorker, zones } = useAwas();

  const [name, setName] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [photoUrl, setPhotoUrl] = useState("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&q=80"); // default avatar fallback
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        setPhotoUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !idCardNumber.trim() || !zoneId) return;

    addWorker({
      name,
      idCardNumber,
      zoneId,
      photoUrl,
    });

    router.push("/workers");
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="icon-sm">
            <Link href="/workers">
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Tambah Pekerja Baru</h1>
            <p className="text-muted-foreground text-xs">Daftarkan pekerja baru dan tentukan penugasan area kerja default.</p>
          </div>
        </div>

        <div className="max-w-2xl">
          <Card className="shadow-none border">
            <CardHeader className="py-4 px-5 border-b">
              <CardTitle className="text-sm font-semibold">Formulir Pendaftaran Pekerja</CardTitle>
              <CardDescription className="text-xs">Isi data identitas pekerja beserta foto profil untuk identifikasi wajah.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSave}>
              <CardContent className="p-5 flex flex-col gap-4">
                {/* Photo Upload Simulation */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-muted-foreground">Foto Profil Pekerja</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border bg-muted/20 overflow-hidden flex items-center justify-center relative shrink-0">
                      {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-[10px] text-muted-foreground text-center px-1 font-semibold">No Image</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button type="button" variant="outline" size="sm" className="h-9 gap-1.5 pointer-events-none">
                          <UploadCloudIcon className="h-4 w-4" />
                          Pilih Foto
                        </Button>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">Format JPG, PNG. Maksimal 2MB. Hanya disimpan di lokal session.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Nama Lengkap Pekerja</label>
                  <Input
                    required
                    placeholder="Contoh: Budi Prasetyo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Nomor Kartu Identitas (ID Card Number)</label>
                  <Input
                    required
                    placeholder="Contoh: ID-09412-BDP"
                    value={idCardNumber}
                    onChange={(e) => setIdCardNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Zona Penugasan Utama</label>
                  <Select
                    value={zoneId}
                    onValueChange={setZoneId}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Zona" />
                    </SelectTrigger>
                    <SelectContent>
                      {zones.map((z) => (
                        <SelectItem key={z.id} value={z.id}>
                          {z.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <div className="border-t p-4 flex justify-end gap-2.5 bg-muted/5">
                <Button asChild variant="outline" size="sm">
                  <Link href="/workers">Batal</Link>
                </Button>
                <Button type="submit" size="sm" className="bg-primary text-white gap-1.5">
                  <SaveIcon className="h-4 w-4" />
                  Simpan Pekerja
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
