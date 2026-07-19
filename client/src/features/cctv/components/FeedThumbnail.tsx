import { Badge } from "@/components/ui/badge";
import { STATUS_BADGE, SCANLINE_BG } from "@/features/cctv/constants/status-badge";
import { CameraFeed } from "@/features/cctv/types/camera";

interface Props {
  feed: CameraFeed;
  isActive: boolean;
  onClick: () => void;
}

export function FeedThumbnail({ feed, isActive, onClick }: Props) {
  return (
    <div onClick={onClick} className={`group border rounded-lg p-2.5 cursor-pointer transition-all duration-200 flex flex-col gap-2 ${isActive ? "bg-muted border-primary shadow-sm ring-1 ring-primary/20" : "bg-card hover:bg-muted/30 hover:border-neutral-300 dark:hover:border-neutral-800"}`}>
      <div className="relative aspect-video rounded overflow-hidden bg-neutral-950 w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${feed.url})`, filter: feed.status === "offline" ? "brightness(0.3) grayscale(1)" : "none" }} />
        <div className={`absolute inset-0 ${SCANLINE_BG} opacity-30`} />
        <div className="absolute top-1.5 left-1.5">
          <Badge className={`${STATUS_BADGE[feed.status].className} font-mono text-[8px] h-4 py-0 px-1 font-bold rounded`}>{STATUS_BADGE[feed.status].label}</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold truncate text-foreground group-hover:text-primary transition-colors">{feed.name.split(": ")[0]}</span>
        <span className="text-[10px] text-muted-foreground truncate">{feed.zoneName}</span>
      </div>
    </div>
  );
}
