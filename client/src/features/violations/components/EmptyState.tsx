import { EMPTY_TEXT } from "@/features/violations/constants/violation-status";

export function EmptyState() {
  return (
    <tr>
      <td colSpan={6} className="text-center py-10 text-xs text-muted-foreground">{EMPTY_TEXT}</td>
    </tr>
  );
}
