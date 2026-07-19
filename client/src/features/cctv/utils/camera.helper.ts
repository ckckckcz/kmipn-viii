export const CTRL_BUTTON = "h-8 px-3 text-xs rounded-md font-medium flex items-center gap-1.5 transition-all cursor-pointer border disabled:opacity-50 disabled:cursor-not-allowed";

export function isOffline(status: string) {
  return status === "offline";
}
