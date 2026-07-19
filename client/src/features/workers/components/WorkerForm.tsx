import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";
import Link from "next/link";
import { Zone } from "@/types";
import { WorkerFormData, WorkerFormErrors } from "@/features/workers/types";
import { PhotoUploader } from "@/features/workers/components/PhotoUploader";
import { WORKER_TEXT } from "@/features/workers/constants/defaults";

interface Props {
  form: WorkerFormData;
  previewUrl: string | null;
  errors: WorkerFormErrors;
  zones: Zone[];
  onFieldChange: <K extends keyof WorkerFormData>(key: K, value: WorkerFormData[K]) => void;
  onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function WorkerForm({ form, previewUrl, errors, zones, onFieldChange, onPhotoUpload, onSubmit }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Button asChild variant="outline" size="icon-sm">
          <Link href="/workers"><ArrowLeftIcon className="h-4 w-4" /></Link>
        </Button>
        <div>
          <h1 className="text-xl font-bold tracking-tight">{WORKER_TEXT.newTitle}</h1>
          <p className="text-muted-foreground text-xs">{WORKER_TEXT.newDescription}</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card className="shadow-none border">
          <CardHeader className="py-4 px-5 border-b">
            <CardTitle className="text-sm font-semibold">{WORKER_TEXT.formTitle}</CardTitle>
            <CardDescription className="text-xs">{WORKER_TEXT.formDescription}</CardDescription>
          </CardHeader>
          <form onSubmit={onSubmit}>
            <CardContent className="p-5 flex flex-col gap-4">
              <PhotoUploader previewUrl={previewUrl} onUpload={onPhotoUpload} />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground">{WORKER_TEXT.nameLabel}</label>
                <Input required placeholder={WORKER_TEXT.namePlaceholder} value={form.name} onChange={(e) => onFieldChange("name", e.target.value)} />
                {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground">{WORKER_TEXT.idLabel}</label>
                <Input required placeholder={WORKER_TEXT.idPlaceholder} value={form.idCardNumber} onChange={(e) => onFieldChange("idCardNumber", e.target.value)} />
                {errors.idCardNumber && <span className="text-[10px] text-red-500">{errors.idCardNumber}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground">{WORKER_TEXT.zoneLabel}</label>
                <Select value={form.zoneId} onValueChange={(val) => onFieldChange("zoneId", val)}>
                  <SelectTrigger><SelectValue placeholder={WORKER_TEXT.zonePlaceholder} /></SelectTrigger>
                  <SelectContent>
                    {zones.map((z) => <SelectItem key={z.id} value={z.id}>{z.name}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.zoneId && <span className="text-[10px] text-red-500">{errors.zoneId}</span>}
              </div>
            </CardContent>
            <div className="border-t p-4 flex justify-end gap-2.5 bg-muted/5">
              <Button asChild variant="outline" size="sm"><Link href="/workers">{WORKER_TEXT.cancel}</Link></Button>
              <Button type="submit" size="sm" className="bg-primary text-white gap-1.5">
                <SaveIcon className="h-4 w-4" />
                {WORKER_TEXT.save}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
