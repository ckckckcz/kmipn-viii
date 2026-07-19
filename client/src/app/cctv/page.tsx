"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Video, 
  VideoOff, 
  Search, 
  Grid2X2, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  Radio, 
  Circle, 
  Camera, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut,
  Activity,
  Layers,
  Settings,
  RefreshCw,
  Tv2,
  Columns4,
  RotateCcw
} from "lucide-react";

interface CameraFeed {
  id: string;
  name: string;
  url: string;
  zone: string;
  zoneName: string;
  status: "recording" | "online" | "offline";
  fps: number;
  resolution: string;
  bitrate: string;
}

export default function CctvPage() {
  const cctvFeeds: CameraFeed[] = [
    { 
      id: "cam-01", 
      name: "CAM-01: Filling Room Gate", 
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
      zone: "filling",
      zoneName: "Filling Room",
      status: "recording",
      fps: 30,
      resolution: "1920x1080",
      bitrate: "4.2 Mbps"
    },
    { 
      id: "cam-02", 
      name: "CAM-02: Packing Line Entrance", 
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80",
      zone: "packing",
      zoneName: "Packing Line",
      status: "recording",
      fps: 25,
      resolution: "1920x1080",
      bitrate: "3.8 Mbps"
    },
    { 
      id: "cam-03", 
      name: "CAM-03: Loading Dock Area 1", 
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80",
      zone: "loading",
      zoneName: "Loading Dock",
      status: "online",
      fps: 30,
      resolution: "1280x720",
      bitrate: "2.1 Mbps"
    },
    { 
      id: "cam-04", 
      name: "CAM-04: Raw Material Prep Area", 
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
      zone: "raw",
      zoneName: "Raw Material Prep",
      status: "recording",
      fps: 30,
      resolution: "1920x1080",
      bitrate: "4.5 Mbps"
    },
    { 
      id: "cam-05", 
      name: "CAM-05: Warehouse Storage Rack 3", 
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80",
      zone: "warehouse",
      zoneName: "Warehouse Storage",
      status: "online",
      fps: 24,
      resolution: "1280x720",
      bitrate: "1.8 Mbps"
    },
    { 
      id: "cam-06", 
      name: "CAM-06: Main Lobby Gate Entrance", 
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80",
      zone: "lobby",
      zoneName: "Main Lobby",
      status: "online",
      fps: 30,
      resolution: "1920x1080",
      bitrate: "3.5 Mbps"
    },
  ];

  const [selectedFeed, setSelectedFeed] = useState<CameraFeed>(cctvFeeds[0]);
  const [viewMode, setViewMode] = useState<"split" | "grid">("split");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("all");
  
  // Interactive Simulation States
  const [isRecording, setIsRecording] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [ptzOffset, setPtzOffset] = useState({ x: 50, y: 50, zoom: 100 });
  const [flash, setFlash] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [blink, setBlink] = useState(true);

  // Digital clock overlay effect
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) + " " + d.toLocaleTimeString("id-ID", { hour12: false }));
    };
    updateTime();
    const clockTimer = setInterval(updateTime, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  // Blink indicator effect for REC badge
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlink(b => !b);
    }, 1000);
    return () => clearInterval(blinkTimer);
  }, []);

  // PTZ Control operations
  const handlePtz = (direction: "up" | "down" | "left" | "right" | "zoomIn" | "zoomOut" | "reset") => {
    setPtzOffset(prev => {
      switch (direction) {
        case "up":
          return { ...prev, y: Math.max(10, prev.y - 10) };
        case "down":
          return { ...prev, y: Math.min(90, prev.y + 10) };
        case "left":
          return { ...prev, x: Math.max(10, prev.x - 10) };
        case "right":
          return { ...prev, x: Math.min(90, prev.x + 10) };
        case "zoomIn":
          return { ...prev, zoom: Math.min(220, prev.zoom + 20) };
        case "zoomOut":
          return { ...prev, zoom: Math.max(100, prev.zoom - 20) };
        case "reset":
          return { x: 50, y: 50, zoom: 100 };
        default:
          return prev;
      }
    });
  };

  // Snapshot flash animation trigger
  const triggerSnapshot = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
  };

  // Filter feeds based on search query and zone
  const filteredFeeds = cctvFeeds.filter(feed => {
    const matchesSearch = feed.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          feed.zoneName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone = selectedZone === "all" || feed.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <AppShell>
      <div className="flex flex-col gap-6 h-full min-h-[78vh]">
        {/* Header Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CCTV Monitoring</h1>
            <p className="text-muted-foreground text-sm font-light">Visualisasi feed kamera CCTV pengawas area pabrik secara real-time.</p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative w-48">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari kamera..."
                className="pl-8 h-9 text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-36 h-9 text-xs">
                <SelectValue placeholder="Semua Zona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Zona</SelectItem>
                <SelectItem value="filling">Filling Room</SelectItem>
                <SelectItem value="packing">Packing Line</SelectItem>
                <SelectItem value="loading">Loading Dock</SelectItem>
                <SelectItem value="raw">Raw Material</SelectItem>
                <SelectItem value="warehouse">Warehouse</SelectItem>
                <SelectItem value="lobby">Main Lobby</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center border rounded-md p-0.5 bg-muted/40">
              <Button
                variant={viewMode === "split" ? "secondary" : "ghost"}
                size="icon-sm"
                className="h-8 w-8"
                onClick={() => setViewMode("split")}
              >
                <Columns4 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon-sm"
                className="h-8 w-8"
                onClick={() => setViewMode("grid")}
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {viewMode === "split" ? (
          /* Split Layout (Focus + Sidebar list) */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
            {/* Viewport Card */}
            <Card className="lg:col-span-3 border overflow-hidden flex flex-col h-full bg-neutral-950 text-white min-h-[480px] shadow-lg relative">
              {/* Camera Header Overlay */}
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-black/40 border-neutral-700 text-white gap-1 px-2 py-0.5 rounded font-mono font-bold tracking-wider">
                    <Radio className="h-3.5 w-3.5 text-neutral-400" />
                    LIVE Feed
                  </Badge>
                  <span className="font-mono font-medium drop-shadow-md text-neutral-300">{selectedFeed.name}</span>
                </div>
                
                {/* HUD Camera Specs */}
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 bg-black/30 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                  <span className="hidden md:inline">{selectedFeed.resolution}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{selectedFeed.fps} FPS</span>
                  <span>•</span>
                  <span>{selectedFeed.bitrate}</span>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-neutral-900 group">
                {/* Video Image Container with dynamic PTZ values */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
                  style={{ 
                    backgroundImage: `url(${selectedFeed.url})`,
                    backgroundPosition: `${ptzOffset.x}% ${ptzOffset.y}%`,
                    backgroundSize: `${ptzOffset.zoom}%`,
                    filter: selectedFeed.status === "offline" ? "grayscale(1) brightness(0.3)" : "none"
                  }}
                />

                {/* Scanline Grid simulation overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-40" />

                {/* Clock & REC Overlays */}
                {selectedFeed.status !== "offline" && (
                  <>
                    {/* Blink Recording indicator */}
                    <div className="absolute top-16 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/5 px-2.5 py-1 rounded text-xs font-mono">
                      {isRecording ? (
                        <>
                          <Circle className={`h-3 w-3 fill-red-600 text-red-600 ${blink ? "opacity-100" : "opacity-20"}`} />
                          <span className="text-red-500 font-bold">REC</span>
                        </>
                      ) : (
                        <>
                          <Circle className="h-3 w-3 fill-yellow-600 text-yellow-600" />
                          <span className="text-yellow-500 font-bold">PAUSED</span>
                        </>
                      )}
                    </div>

                    {/* Clock Date/Time overlay */}
                    <div className="absolute bottom-4 left-4 z-10 bg-black/50 backdrop-blur-sm border border-white/5 px-3 py-1 rounded font-mono text-[10px] text-neutral-300 drop-shadow">
                      {timeStr}
                    </div>

                    {/* PTZ Indicator Overlay */}
                    <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm border border-white/5 px-2.5 py-1 rounded font-mono text-[9px] text-neutral-400">
                      PTZ: X:{ptzOffset.x}% Y:{ptzOffset.y}% Z:{ptzOffset.zoom}%
                    </div>
                  </>
                )}

                {/* Offline State Screen */}
                {selectedFeed.status === "offline" && (
                  <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-center gap-3 z-10">
                    <VideoOff className="h-12 w-12 text-neutral-600" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold tracking-wider uppercase text-neutral-400">No Connection</span>
                      <span className="text-xs text-neutral-600 max-w-xs">Feed kamera ini tidak aktif atau terputus dari jaringan ONVIF/RTSP.</span>
                    </div>
                  </div>
                )}

                {/* Flash effect overlay */}
                {flash && <div className="absolute inset-0 bg-white z-50 animate-fade-out" />}
              </div>

              {/* Viewport Control Bar */}
              <div className="border-t border-neutral-900 bg-neutral-900/60 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 backdrop-blur-md">
                {/* Control Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    disabled={selectedFeed.status === "offline"}
                    className={`h-8 px-3 text-xs rounded-md font-medium flex items-center gap-1.5 transition-all cursor-pointer border ${
                      isRecording 
                        ? "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20" 
                        : "bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:text-white"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <Circle className={`h-2.5 w-2.5 ${isRecording ? "fill-red-500 text-red-500 animate-pulse" : "fill-neutral-400 text-neutral-400"}`} />
                    <span>{isRecording ? "Stop Record" : "Start Record"}</span>
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    disabled={selectedFeed.status === "offline"}
                    className="h-8 px-3 text-xs rounded-md font-medium flex items-center gap-1.5 transition-all cursor-pointer border bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="h-3.5 w-3.5 text-neutral-400" />
                        <span>Unmute Feed</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-green-400">Mute Feed</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={triggerSnapshot}
                    disabled={selectedFeed.status === "offline"}
                    className="h-8 px-3 text-xs rounded-md font-medium flex items-center gap-1.5 transition-all cursor-pointer border bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Camera className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Snapshot</span>
                  </button>
                </div>

                {/* Interactive PTZ Controller Pad */}
                {selectedFeed.status !== "offline" && (
                  <div className="flex items-center gap-4 bg-neutral-950/80 border border-neutral-800/80 p-2.5 rounded-lg">
                    <span className="text-[10px] uppercase font-mono font-bold text-neutral-500 tracking-wider">PTZ Control</span>
                    
                    {/* Navigation D-Pad */}
                    <div className="grid grid-cols-3 gap-1 w-20 h-20 items-center justify-center border border-neutral-800 rounded-md p-1 bg-black/40">
                      <div />
                      <button 
                        onClick={() => handlePtz("up")} 
                        className="flex items-center justify-center h-5 w-5 bg-neutral-900 hover:bg-neutral-800 rounded text-neutral-400 border border-neutral-800 hover:text-white"
                      >
                        <ChevronUp className="h-3 w-3" />
                      </button>
                      <div />
                      
                      <button 
                        onClick={() => handlePtz("left")} 
                        className="flex items-center justify-center h-5 w-5 bg-neutral-900 hover:bg-neutral-800 rounded text-neutral-400 border border-neutral-800 hover:text-white"
                      >
                        <ChevronLeft className="h-3 w-3" />
                      </button>
                      <button 
                        onClick={() => handlePtz("reset")} 
                        className="flex items-center justify-center h-5 w-5 bg-neutral-900 hover:bg-neutral-800 rounded text-neutral-400 border border-neutral-800 hover:text-white"
                      >
                        <RotateCcw className="h-3 w-3 text-neutral-500" />
                      </button>
                      <button 
                        onClick={() => handlePtz("right")} 
                        className="flex items-center justify-center h-5 w-5 bg-neutral-900 hover:bg-neutral-800 rounded text-neutral-400 border border-neutral-800 hover:text-white"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </button>

                      <div />
                      <button 
                        onClick={() => handlePtz("down")} 
                        className="flex items-center justify-center h-5 w-5 bg-neutral-900 hover:bg-neutral-800 rounded text-neutral-400 border border-neutral-800 hover:text-white"
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                      <div />
                    </div>

                    <div className="flex flex-col gap-1">
                      <button 
                        onClick={() => handlePtz("zoomIn")} 
                        className="flex items-center justify-center h-6 w-6 bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 text-neutral-400 hover:text-white"
                        title="Zoom In"
                      >
                        <ZoomIn className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => handlePtz("zoomOut")} 
                        className="flex items-center justify-center h-6 w-6 bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 text-neutral-400 hover:text-white"
                        title="Zoom Out"
                      >
                        <ZoomOut className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Sidebar Feed List */}
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[620px] pr-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Daftar Kamera ({filteredFeeds.length})</span>
              {filteredFeeds.length === 0 ? (
                <div className="text-center py-6 text-xs text-muted-foreground border rounded-lg bg-muted/15 border-dashed">
                  Kamera tidak ditemukan.
                </div>
              ) : (
                filteredFeeds.map((feed) => {
                  const isActive = feed.id === selectedFeed.id;
                  return (
                    <div 
                      key={feed.id}
                      onClick={() => {
                        setSelectedFeed(feed);
                        setPtzOffset({ x: 50, y: 50, zoom: 100 });
                      }}
                      className={`group border rounded-lg p-2.5 cursor-pointer transition-all duration-200 flex flex-col gap-2 relative ${
                        isActive 
                          ? "bg-muted border-primary shadow-sm ring-1 ring-primary/20" 
                          : "bg-card hover:bg-muted/30 hover:border-neutral-300 dark:hover:border-neutral-800"
                      }`}
                    >
                      {/* Mini Thumbnail */}
                      <div className="relative aspect-video rounded overflow-hidden bg-neutral-950 w-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center" 
                          style={{ backgroundImage: `url(${feed.url})`, filter: feed.status === "offline" ? "brightness(0.3) grayscale(1)" : "none" }}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-30" />
                        
                        {/* Live Badges */}
                        <div className="absolute top-1.5 left-1.5 flex gap-1 items-center">
                          {feed.status === "recording" ? (
                            <Badge className="bg-red-600 hover:bg-red-600 text-white font-mono text-[8px] h-4 py-0 px-1 font-bold rounded">REC</Badge>
                          ) : feed.status === "online" ? (
                            <Badge className="bg-neutral-800 hover:bg-neutral-800 text-green-400 border border-green-500/30 font-mono text-[8px] h-4 py-0 px-1 font-bold rounded">LIVE</Badge>
                          ) : (
                            <Badge className="bg-neutral-900 hover:bg-neutral-900 text-neutral-400 font-mono text-[8px] h-4 py-0 px-1 font-bold rounded">OFFLINE</Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold truncate text-foreground group-hover:text-primary transition-colors">
                          {feed.name.split(": ")[0]}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate">
                          {feed.zoneName}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ) : (
          /* Grid Layout (Show all active feeds in full layout) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {filteredFeeds.map((feed) => (
              <Card 
                key={feed.id} 
                className="group border overflow-hidden bg-neutral-950 text-white flex flex-col justify-between aspect-video relative shadow hover:shadow-lg transition-all duration-200 cursor-pointer"
                onClick={() => {
                  setSelectedFeed(feed);
                  setViewMode("split");
                  setPtzOffset({ x: 50, y: 50, zoom: 100 });
                }}
              >
                {/* Header overlay */}
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/85 to-transparent p-3 z-10 flex justify-between items-center text-[10px]">
                  <span className="font-mono text-neutral-300 font-medium truncate max-w-[70%]">{feed.name}</span>
                  {feed.status === "recording" ? (
                    <Badge className="bg-red-600 text-white font-mono text-[8px] h-4 py-0 px-1 rounded flex items-center gap-1 font-bold">
                      <Circle className="h-2 w-2 fill-white text-white animate-pulse" />
                      REC
                    </Badge>
                  ) : feed.status === "online" ? (
                    <Badge className="bg-black/60 border border-green-500/30 text-green-400 font-mono text-[8px] h-4 py-0 px-1 rounded flex items-center gap-1 font-bold">
                      <Circle className="h-2 w-2 fill-green-400 text-green-400" />
                      LIVE
                    </Badge>
                  ) : (
                    <Badge className="bg-black/60 border border-neutral-700 text-neutral-400 font-mono text-[8px] h-4 py-0 px-1 rounded font-bold">
                      OFFLINE
                    </Badge>
                  )}
                </div>

                {/* Stream Preview */}
                <div className="flex-1 relative overflow-hidden bg-neutral-900">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${feed.url})`, filter: feed.status === "offline" ? "brightness(0.3) grayscale(1)" : "none" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-35" />
                  
                  {/* Hover visual specs */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-15">
                    <div className="flex flex-col items-center gap-1.5">
                      <Maximize2 className="h-6 w-6 text-white" />
                      <span className="text-[10px] font-mono tracking-wider font-semibold text-neutral-200 uppercase">Focus Camera</span>
                    </div>
                  </div>
                </div>

                {/* Footer overlay */}
                <div className="bg-neutral-900 border-t border-neutral-800 p-2 px-3 flex justify-between items-center text-[10px] text-neutral-400 font-mono z-10">
                  <span>{feed.zoneName}</span>
                  <div className="flex gap-2">
                    <span>{feed.resolution}</span>
                    <span>•</span>
                    <span>{feed.fps} FPS</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
