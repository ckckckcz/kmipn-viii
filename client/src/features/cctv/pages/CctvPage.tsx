"use client";

import { useState, useCallback } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio } from "lucide-react";
import { CameraFeed } from "@/features/cctv/types/camera";
import { CAMERA_FEEDS } from "@/features/cctv/constants/camera-feeds";
import { useClock } from "@/features/cctv/hooks/useClock";
import { useBlink } from "@/features/cctv/hooks/useBlink";
import { useCameraFilter } from "@/features/cctv/hooks/useCameraFilter";
import { usePtz } from "@/features/cctv/hooks/usePtz";
import { CameraHeader } from "@/features/cctv/components/CameraHeader";
import { CameraPlayer } from "@/features/cctv/components/CameraPlayer";
import { CameraToolbar } from "@/features/cctv/components/CameraToolbar";
import { CameraList } from "@/features/cctv/components/CameraList";
import { CameraGrid } from "@/features/cctv/components/CameraGrid";

export function CctvPage() {
  const [selectedFeed, setSelectedFeed] = useState<CameraFeed>(CAMERA_FEEDS[0]);
  const [viewMode, setViewMode] = useState<"split" | "grid">("split");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("all");
  const [isRecording, setIsRecording] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [flash, setFlash] = useState(false);

  const timeStr = useClock();
  const blink = useBlink();
  const filteredFeeds = useCameraFilter(searchQuery, selectedZone);
  const { ptz, move: handlePtz, reset: resetPtz } = usePtz();

  const selectFeed = useCallback((feed: CameraFeed) => {
    setSelectedFeed(feed);
    resetPtz();
  }, [resetPtz]);

  const offline = selectedFeed.status === "offline";

  return (
    <AppShell>
      <div className="flex flex-col gap-6 h-full min-h-[78vh]">
        <CameraHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedZone={selectedZone}
          onZoneChange={setSelectedZone}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {viewMode === "split" ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
            <Card className="lg:col-span-3 border overflow-hidden flex flex-col h-full bg-neutral-950 text-white min-h-120 shadow-lg relative">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/80 to-transparent p-4 z-10 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-black/40 border-neutral-700 text-white gap-1 px-2 py-0.5 rounded font-mono font-bold tracking-wider">
                    <Radio className="h-3.5 w-3.5 text-neutral-400" />LIVE Feed
                  </Badge>
                  <span className="font-mono font-medium drop-shadow-md text-neutral-300">{selectedFeed.name}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 bg-black/30 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                  <span className="hidden md:inline">{selectedFeed.resolution}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{selectedFeed.fps} FPS</span><span>•</span>
                  <span>{selectedFeed.bitrate}</span>
                </div>
              </div>

              <CameraPlayer feed={selectedFeed} ptz={ptz} isRecording={isRecording} blink={blink} flash={flash} timeStr={timeStr} />

              <CameraToolbar
                isRecording={isRecording}
                isMuted={isMuted}
                isOffline={offline}
                onToggleRecording={() => setIsRecording((v) => !v)}
                onToggleMute={() => setIsMuted((v) => !v)}
                onSnapshot={() => { setFlash(true); setTimeout(() => setFlash(false), 150); }}
                onPtz={handlePtz}
              />
            </Card>

            <CameraList feeds={filteredFeeds} selectedId={selectedFeed.id} onSelect={selectFeed} />
          </div>
        ) : (
          <CameraGrid feeds={filteredFeeds} onSelect={(feed) => { selectFeed(feed); setViewMode("split"); }} />
        )}
      </div>
    </AppShell>
  );
}
