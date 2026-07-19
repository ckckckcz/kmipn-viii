import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from "lucide-react";
import { WORKER_TEXT } from "@/features/workers/constants/defaults";
import Image from "next/image";

interface Props {
  previewUrl: string | null;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PhotoUploader({ previewUrl, onUpload }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-muted-foreground">{WORKER_TEXT.photoLabel}</label>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border bg-muted/20 overflow-hidden flex items-center justify-center relative shrink-0">
          {previewUrl ? (
            <Image src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="text-[10px] text-muted-foreground text-center px-1 font-semibold">{WORKER_TEXT.noImage}</div>
          )}
        </div>
        <div className="flex-1">
          <div className="relative">
            <input type="file" accept="image/*" onChange={onUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <Button type="button" variant="outline" size="sm" className="h-9 gap-1.5 pointer-events-none">
              <UploadCloudIcon className="h-4 w-4" />
              {WORKER_TEXT.selectPhoto}
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">{WORKER_TEXT.photoHint}</p>
        </div>
      </div>
    </div>
  );
}
