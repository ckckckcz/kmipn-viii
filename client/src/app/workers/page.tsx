"use client";

// ponytail: table searching client side is simple and fast, pagination can be standard client state.
import { useState, useMemo } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EyeIcon, SearchIcon, PlusIcon, ShieldCheckIcon, ShieldAlertIcon } from "lucide-react";
import Link from "next/link";

export default function WorkersPage() {
  const { workers, zones } = useAwas();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkers = useMemo(() => {
    return workers.filter((w) =>
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.idCardNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [workers, searchQuery]);

  const getComplianceBadge = (rate: number) => {
    if (rate >= 95) {
      return (
        <Badge className="bg-green-600 hover:bg-green-600 text-white font-extrabold text-[10px] gap-1 h-5">
          <ShieldCheckIcon className="h-3 w-3" />
          {rate}%
        </Badge>
      );
    }
    if (rate >= 85) {
      return (
        <Badge className="bg-amber-500 hover:bg-amber-500 text-white font-extrabold text-[10px] gap-1 h-5">
          <ShieldAlertIcon className="h-3 w-3" />
          {rate}%
        </Badge>
      );
    }
    return (
      <Badge className="bg-red-500 hover:bg-red-500 text-white font-extrabold text-[10px] gap-1 h-5">
        <ShieldAlertIcon className="h-3 w-3" />
        {rate}%
      </Badge>
    );
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Manajemen Pekerja</h1>
            <p className="text-muted-foreground text-sm">Kelola data profil pekerja, assignment zona, dan pantau tingkat kepatuhan K3 individu.</p>
          </div>
          <Button asChild className="bg-primary text-white gap-1.5 h-9 shrink-0 self-start md:self-center">
            <Link href="/workers/new">
              <PlusIcon className="h-4 w-4" />
              Tambah Pekerja
            </Link>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari pekerja berdasarkan nama atau ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
        </div>

        {/* Workers Table */}
        <Card className="shadow-none border overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="pl-6 w-1/3">Nama Pekerja</TableHead>
                  <TableHead className="w-1/4">ID Card Number</TableHead>
                  <TableHead className="w-1/4">Zona Penugasan</TableHead>
                  <TableHead className="text-center w-36">Kepatuhan K3</TableHead>
                  <TableHead className="pr-6 text-right w-24">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-10 text-xs text-muted-foreground">
                      Tidak ada pekerja yang cocok dengan pencarian.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredWorkers.map((w) => {
                    const zone = zones.find((z) => z.id === w.zoneId);

                    return (
                      <TableRow key={w.id} className="h-14 hover:bg-muted/5">
                        <TableCell className="pl-6 font-semibold flex items-center gap-3">
                          <img
                            src={w.photoUrl}
                            alt={w.name}
                            className="size-9 rounded-full object-cover border shrink-0 bg-muted"
                          />
                          <span className="truncate">{w.name}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground font-mono text-xs">
                          {w.idCardNumber}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-xs font-semibold">
                          {zone ? zone.name.split(" - ")[0] : "Belum Ditugaskan"}
                        </TableCell>
                        <TableCell className="text-center">
                          {getComplianceBadge(w.complianceRate)}
                        </TableCell>
                        <TableCell className="pr-6 text-right">
                          <Button asChild size="icon-sm" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Link href={`/workers/${w.id}`}>
                              <EyeIcon className="h-4 w-4" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
