import { AppShell } from "@/components/admin/admin-shell";
import { ChannelBreakdownChart } from "@/components/admin/dashboard/channel-breakdown-chart";
import { ConversationVolumeChart } from "@/components/admin/dashboard/conversation-volume-chart";
import { CsatResponsesChart } from "@/components/admin/dashboard/csat-responses-chart";
import { FirstReplyTimeChart } from "@/components/admin/dashboard/first-reply-time-chart";
import { RecentConversations } from "@/components/admin/dashboard/recent-conversations";
import { DashboardStats } from "@/components/admin/dashboard/stats";
import { SupportActivity } from "@/components/admin/dashboard/support-activity";
import { TeamOnDuty } from "@/components/admin/dashboard/team-on-duty";

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
