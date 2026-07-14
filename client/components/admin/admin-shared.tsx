import type { ReactNode } from "react";
import {
  LayoutGridIcon,
  DoorOpenIcon,
  ShieldAlertIcon,
  MapIcon,
  UsersIcon,
  VideoIcon,
  BrainIcon,
  HelpCircleIcon,
  BookOpenIcon,
} from "lucide-react";

export type SidebarNavItem = {
  title: string;
  path?: string;
  icon?: ReactNode;
  isActive?: boolean;
  subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
  label?: string;
  items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
  {
    label: "Utama",
    items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutGridIcon className="h-4 w-4" />,
      },
      {
        title: "Gate Monitor",
        path: "/dashboard/gate-monitor",
        icon: <DoorOpenIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    label: "Manajemen K3",
    items: [
      {
        title: "Pelanggaran APD",
        path: "/dashboard/violations",
        icon: <ShieldAlertIcon className="h-4 w-4" />,
      },
      {
        title: "Manajemen Zona",
        path: "/dashboard/zones",
        icon: <MapIcon className="h-4 w-4" />,
      },
      {
        title: "Manajemen Pekerja",
        path: "/dashboard/workers",
        icon: <UsersIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    label: "Roadmap (Fase 2)",
    items: [
      {
        title: "CCTV Monitoring",
        path: "/dashboard/cctv",
        icon: <VideoIcon className="h-4 w-4" />,
      },
      {
        title: "AI Safety Officer",
        path: "/dashboard/ai-officer",
        icon: <BrainIcon className="h-4 w-4" />,
      },
    ],
  },
];

export const footerNavLinks: SidebarNavItem[] = [
  {
    title: "Help Center",
    path: "/help",
    icon: <HelpCircleIcon className="h-4 w-4" />,
  },
  {
    title: "Documentation",
    path: "/documentation",
    icon: <BookOpenIcon className="h-4 w-4" />,
  },
];
