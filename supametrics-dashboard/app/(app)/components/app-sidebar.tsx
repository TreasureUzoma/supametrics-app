"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Sparkle,
  Command,
  LayoutDashboard,
  LifeBuoy,
  Settings2,
  Activity,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../../../components/ui/logo";

// Full sidebar data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://avatars.githubusercontent.com/u/34312347?v=4",
  },
  teams: [
    {
      name: "My Workspace",
      logo: AudioWaveform,
      plan: "Pro",
    },
    {
      name: "Supametrics",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Sparka",
      logo: Command,
      plan: "Pro",
    },
  ],
  navLinks: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Activity",
      url: "/activity",
      icon: Activity,
    },
    {
      title: "AI",
      url: "/ai",
      icon: Sparkle,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
  ],
  navMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "/settinggs/general" },
        { title: "Team", url: "/setttings/teams" },
        { title: "Billing", url: "/settings/billing" },
        { title: "Limits", url: "/settings/limits" },
      ],
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full p-2 my-1 group-data-[collapsible=icon]:hidden">
          <Logo />
        </div>
        <div className="hidden w-full p-2 my-1 group-data-[collapsible=icon]:block">
          <Logo showText={false} />
        </div>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain navLinks={data.navLinks} navMain={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
