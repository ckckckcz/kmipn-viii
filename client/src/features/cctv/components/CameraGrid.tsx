import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, Maximize2 } from "lucide-react";
import { CameraFeed } from "@/features/cctv/types/camera";
import { STATUS_BADGE, SCANLINE_BG } from "@/features/cctv/constants/status-badge";

interface Props {
  feeds: CameraFeed[];
  onSelect: (feed: CameraFeed) => void;
}

export function CameraGrid({ feeds, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {feeds.map((feed) => (
        <Card key={feed.id} className="group border overflow-hidden bg-neutral-950 text-white flex flex-col justify-between aspect-video relative shadow hover:shadow-lg transition-all duration-200 cursor-pointer"
          onClick={() => onSelect(feed)}>
          <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/85 to-transparent p-3 z-10 flex justify-between items-center text-[10px]">
            <span className="font-mono text-neutral-300 font-medium truncate max-w-[70%]">{feed.name}</span>
            <Badge className={`${STATUS_BADGE[feed.status].className} font-mono text-[8px] h-4 py-0 px-1 rounded flex items-center gap-1 font-bold`}>
              {feed.status === "recording" && <Circle className="h-2 w-2 fill-white text-white animate-pulse" />}
              {feed.status === "online" && <Circle className="h-2 w-2 fill-green-400 text-green-400" />}
              {STATUS_BADGE[feed.status].label}
            </Badge>
          </div>
          <div className="flex-1 relative overflow-hidden bg-neutral-900">
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${feed.url})`, filter: feed.status === "offline" ? "brightness(0.3) grayscale(1)" : "none" }} />
            <div className={`absolute inset-0 ${SCANLINE_BG} opacity-35`} />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1.5">
                <Maximize2 className="h-6 w-6 text-white" />
                <span className="text-[10px] font-mono tracking-wider font-semibold text-neutral-200 uppercase">Focus Camera</span>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 border-t border-neutral-800 p-2 px-3 flex justify-between items-center text-[10px] text-neutral-400 font-mono z-10">
            <span>{feed.zoneName}</span>
            <div className="flex gap-2"><span>{feed.resolution}</span><span>•</span><span>{feed.fps} FPS</span></div>
          </div>
        </Card>
      ))}
    </div>
  );
}
