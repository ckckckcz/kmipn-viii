import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider className={cn("[--app-wrapper-max-width:80rem]")}>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <div
            className={cn(
              "flex flex-1 flex-col p-4 md:p-6",
              "mx-auto w-full max-w-1xl",
            )}
          >
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
