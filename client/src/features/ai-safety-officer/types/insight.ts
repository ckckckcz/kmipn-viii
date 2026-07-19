export type InsightType = "warning" | "alert" | "success";

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: InsightType;
  date: string;
}
