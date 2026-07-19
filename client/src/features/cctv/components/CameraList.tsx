import { CameraFeed } from "@/features/cctv/types/camera";
import { FeedThumbnail } from "@/features/cctv/components/FeedThumbnail";

interface Props {
  feeds: CameraFeed[];
  selectedId: string;
  onSelect: (feed: CameraFeed) => void;
}

export function CameraList({ feeds, selectedId, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-3 overflow-y-auto max-h-[620px] pr-1">
      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Daftar Kamera ({feeds.length})</span>
      {feeds.length === 0 ? (
        <div className="text-center py-6 text-xs text-muted-foreground border rounded-lg bg-muted/15 border-dashed">
          Kamera tidak ditemukan.
        </div>
      ) : (
        feeds.map((feed) => (
          <FeedThumbnail key={feed.id} feed={feed} isActive={feed.id === selectedId} onClick={() => onSelect(feed)} />
        ))
      )}
    </div>
  );
}
