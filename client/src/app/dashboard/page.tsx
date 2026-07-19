import { AppShell } from "@/components/layout/AppShell";
import { ChannelBreakdownChart } from "@/features/dashboard/components/channel-breakdown-chart";
import { ConversationVolumeChart } from "@/features/dashboard/components/conversation-volume-chart";
import { CsatResponsesChart } from "@/features/dashboard/components/csat-responses-chart";
import { FirstReplyTimeChart } from "@/features/dashboard/components/first-reply-time-chart";
import { RecentConversations } from "@/features/dashboard/components/recent-conversations";
import { DashboardStats } from "@/features/dashboard/components/stats";
import { SupportActivity } from "@/features/dashboard/components/support-activity";
import { TeamOnDuty } from "@/features/dashboard/components/team-on-duty";

export default function Dashboard() {
  return (
    <AppShell>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardStats />
        <ConversationVolumeChart />
        <ChannelBreakdownChart />
        <CsatResponsesChart />
        <FirstReplyTimeChart />
        <TeamOnDuty />
        <RecentConversations />
        <SupportActivity />
      </div>
    </AppShell>
  );
}
