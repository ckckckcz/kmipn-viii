"use client";

// ponytail: table filtering client side is simple and fast, pagination can be standard client state.
import { useState, useMemo } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { PPE_LABELS, PpeType, Violation } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EyeIcon, SearchIcon, FilterIcon, RefreshCwIcon } from "lucide-react";
import Link from "next/link";

export default function ViolationsPage() {
  const { violations, workers, zones } = useAwas();

  // Filters state
  const [searchName, setSearchName] = useState("");
  const [selectedZoneId, setSelectedZoneId] = useState<string>("all");
  const [selectedPpe, setSelectedPpe] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtered violations
  const filteredViolations = useMemo(() => {
    return violations.filter((v) => {
      const worker = workers.find((w) => w.id === v.workerId);
      const zone = zones.find((z) => z.id === v.zoneId);

      // Search name match
      const nameMatch = worker
        ? worker.name.toLowerCase().includes(searchName.toLowerCase())
        : false;

      // Zone match
      const zoneMatch = selectedZoneId === "all" || v.zoneId === selectedZoneId;

      // PPE match
      const ppeMatch = selectedPpe === "all" || v.missingPpe.includes(selectedPpe as PpeType);

      // Status match
      const statusMatch = selectedStatus === "all" || v.followUpStatus === selectedStatus;

      return nameMatch && zoneMatch && ppeMatch && statusMatch;
    });
  }, [violations, workers, zones, searchName, selectedZoneId, selectedPpe, selectedStatus]);

  // Paginated data
  const totalPages = Math.ceil(filteredViolations.length / itemsPerPage) || 1;
  const paginatedViolations = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredViolations.slice(start, start + itemsPerPage);
  }, [filteredViolations, currentPage]);

  const handleResetFilters = () => {
    setSearchName("");
    setSelectedZoneId("all");
    setSelectedPpe("all");
    setSelectedStatus("all");
    setCurrentPage(1);
  };

  const getStatusBadge = (status: Violation["followUpStatus"]) => {
    switch (status) {
      case "new":
        return <Badge variant="destructive" className="bg-red-500 hover:bg-red-500 text-white uppercase text-[9px] font-black tracking-wide">Baru</Badge>;
      case "in_progress":
        return <Badge variant="secondary" className="bg-amber-500 hover:bg-amber-500 text-white uppercase text-[9px] font-black tracking-wide">Diproses</Badge>;
      case "resolved":
        return <Badge variant="default" className="bg-green-600 hover:bg-green-600 text-white uppercase text-[9px] font-black tracking-wide">Selesai</Badge>;
    }
  };

  const formatTimeAgo = (timestampStr: string): string => {
    const diff = Date.now() - new Date(timestampStr).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Baru saja";
    if (minutes < 60) return `${minutes}m lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}j lalu`;
    const days = Math.floor(hours / 24);
    return `${days}d lalu`;
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Log Pelanggaran APD</h1>
          <p className="text-muted-foreground text-sm">Daftar riwayat dan audit trail pelanggaran standar K3 di seluruh area.</p>
        </div>

        {/* Filter Bar Card */}
        <Card className="shadow-none border">
          <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <FilterIcon className="h-4 w-4 text-muted-foreground" />
              Filter & Pencarian
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleResetFilters}
              className="h-8 text-xs text-muted-foreground hover:text-foreground"
            >
              Reset Filter
            </Button>
          </CardHeader>
          <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase">Cari Nama Pekerja</label>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Ketik nama pekerja..."
                  value={searchName}
                  onChange={(e) => {
                    setSearchName(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-9 h-9"
                />
              </div>
            </div>

            {/* Zone Filter */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase">Zona Area</label>
              <Select
                value={selectedZoneId}
                onValueChange={(val) => {
                  setSelectedZoneId(val);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Semua Zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Zona</SelectItem>
                  {zones.map((z) => (
                    <SelectItem key={z.id} value={z.id}>
                      {z.name.split(" - ")[0]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* APD Filter */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase">Jenis APD Hilang</label>
              <Select
                value={selectedPpe}
                onValueChange={(val) => {
                  setSelectedPpe(val);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Semua Jenis APD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Jenis APD</SelectItem>
                  {Object.entries(PPE_LABELS).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase">Status Tindak Lanjut</label>
              <Select
                value={selectedStatus}
                onValueChange={(val) => {
                  setSelectedStatus(val);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Semua Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="new">Baru</SelectItem>
                  <SelectItem value="in_progress">Diproses</SelectItem>
                  <SelectItem value="resolved">Selesai</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Violations Table */}
        <Card className="shadow-none border overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="pl-6 w-1/4">Pekerja</TableHead>
                  <TableHead className="w-1/4">Zona</TableHead>
                  <TableHead className="w-1/4">APD Kurang</TableHead>
                  <TableHead className="text-center w-32">Waktu</TableHead>
                  <TableHead className="text-center w-32">Status</TableHead>
                  <TableHead className="pr-6 text-right w-24">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedViolations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-xs text-muted-foreground">
                      Tidak ada log pelanggaran yang cocok dengan kriteria pencarian.
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedViolations.map((v) => {
                    const worker = workers.find((w) => w.id === v.workerId);
                    const zone = zones.find((z) => z.id === v.zoneId);

                    return (
                      <TableRow key={v.id} className="h-14 hover:bg-muted/5">
                        <TableCell className="pl-6 font-semibold flex items-center gap-3">
                          <img
                            src={v.screenshotUrl}
                            alt={worker?.name || "Pekerja"}
                            className="size-9 rounded-md object-cover border shrink-0 bg-muted"
                          />
                          <span className="truncate">{worker?.name || "Unknown Worker"}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-xs font-medium">
                          {zone?.name || "Unknown Zone"}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {v.missingPpe.map((item) => (
                              <span
                                key={item}
                                className="px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-[10px] font-semibold border border-red-200 dark:border-red-900/30"
                              >
                                {PPE_LABELS[item]}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-center text-muted-foreground text-xs whitespace-nowrap">
                          {formatTimeAgo(v.timestamp)}
                        </TableCell>
                        <TableCell className="text-center">
                          {getStatusBadge(v.followUpStatus)}
                        </TableCell>
                        <TableCell className="pr-6 text-right">
                          <Button asChild size="icon-sm" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Link href={`/violations/${v.id}`}>
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

            {/* Pagination Controls */}
            {filteredViolations.length > itemsPerPage && (
              <div className="flex justify-between items-center px-6 py-4 border-t">
                <span className="text-xs text-muted-foreground">
                  Menampilkan {Math.min(filteredViolations.length, (currentPage - 1) * itemsPerPage + 1)}–
                  {Math.min(filteredViolations.length, currentPage * itemsPerPage)} dari {filteredViolations.length} data
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="h-8 px-3"
                  >
                    Sebelumnya
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="h-8 px-3"
                  >
                    Selanjutnya
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
