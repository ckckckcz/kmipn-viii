import { Badge } from "@/components/ui/badge";
import { Radio, Circle, VideoOff } from "lucide-react";
import { CameraFeed, PtzState } from "@/features/cctv/types/camera";
import { isOffline } from "@/features/cctv/utils/camera.helper";

interface Props {
  feed: CameraFeed;
  ptz: PtzState;
  isRecording: boolean;
  blink: boolean;
  flash: boolean;
  timeStr: string;
}

export function CameraPlayer({ feed, ptz, isRecording, blink, flash, timeStr }: Props) {
  const offline = isOffline(feed.status);

  return (
    <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-neutral-900 group">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
        style={{
          backgroundImage: `url(${feed.url})`,
          backgroundPosition: `${ptz.x}% ${ptz.y}%`,
          backgroundSize: `${ptz.zoom}%`,
          filter: offline ? "grayscale(1) brightness(0.3)" : "none"
        }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-40" />

      {!offline && (
        <>
          <div className="absolute top-16 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/5 px-2.5 py-1 rounded text-xs font-mono">
            {isRecording ? (
              <><Circle className={`h-3 w-3 fill-red-600 text-red-600 ${blink ? "opacity-100" : "opacity-20"}`} /><span className="text-red-500 font-bold">REC</span></>
            ) : (
              <><Circle className="h-3 w-3 fill-yellow-600 text-yellow-600" /><span className="text-yellow-500 font-bold">PAUSED</span></>
            )}
          </div>
          <div className="absolute bottom-4 left-4 z-10 bg-black/50 backdrop-blur-sm border border-white/5 px-3 py-1 rounded font-mono text-[10px] text-neutral-300 drop-shadow">{timeStr}</div>
          <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm border border-white/5 px-2.5 py-1 rounded font-mono text-[9px] text-neutral-400">PTZ: X:{ptz.x}% Y:{ptz.y}% Z:{ptz.zoom}%</div>
        </>
      )}

      {offline && (
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-center gap-3 z-10">
          <VideoOff className="h-12 w-12 text-neutral-600" />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold tracking-wider uppercase text-neutral-400">No Connection</span>
            <span className="text-xs text-neutral-600 max-w-xs">Feed kamera ini tidak aktif atau terputus dari jaringan ONVIF/RTSP.</span>
          </div>
        </div>
      )}

      {flash && <div className="absolute inset-0 bg-white z-50 animate-fade-out" />}
    </div>
  );
}
