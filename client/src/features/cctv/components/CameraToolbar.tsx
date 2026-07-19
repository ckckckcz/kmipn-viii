import { Circle, Volume2, VolumeX, Camera as CameraIcon } from "lucide-react";
import { PtzControl } from "@/features/cctv/components/PtzControl";
import { PtzDir } from "@/features/cctv/types/camera";
import { isOffline, CTRL_BUTTON } from "@/features/cctv/utils/camera.helper";

interface Props {
  isRecording: boolean;
  isMuted: boolean;
  isOffline: boolean;
  onToggleRecording: () => void;
  onToggleMute: () => void;
  onSnapshot: () => void;
  onPtz: (dir: PtzDir) => void;
}

export function CameraToolbar({ isRecording, isMuted, isOffline: offline, onToggleRecording, onToggleMute, onSnapshot, onPtz }: Props) {
  return (
    <div className="border-t border-neutral-900 bg-neutral-900/60 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <button onClick={onToggleRecording} disabled={offline}
          className={`${CTRL_BUTTON} ${isRecording ? "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20" : "bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:text-white"}`}>
          <Circle className={`h-2.5 w-2.5 ${isRecording ? "fill-red-500 text-red-500 animate-pulse" : "fill-neutral-400 text-neutral-400"}`} />
          <span>{isRecording ? "Stop Record" : "Start Record"}</span>
        </button>
        <button onClick={onToggleMute} disabled={offline} className={`${CTRL_BUTTON} bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:text-white`}>
          {isMuted ? <><VolumeX className="h-3.5 w-3.5 text-neutral-400" /><span>Unmute Feed</span></> : <><Volume2 className="h-3.5 w-3.5 text-green-500" /><span className="text-green-400">Mute Feed</span></>}
        </button>
        <button onClick={onSnapshot} disabled={offline} className={`${CTRL_BUTTON} bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:text-white`}>
          <CameraIcon className="h-3.5 w-3.5 text-neutral-400" /><span>Snapshot</span>
        </button>
      </div>
      {!offline && <PtzControl onCommand={onPtz} />}
    </div>
  );
}
