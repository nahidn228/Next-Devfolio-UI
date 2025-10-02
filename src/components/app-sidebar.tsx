"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  MessageSquarePlus,
  PieChart,
  Settings2,
  SquarePlus,
  SquareTerminal,
} from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "./module/logo/logo";
import { useSession } from "next-auth/react";

interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}

// This is sample data.
const data = {


  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "All Projects",
      url: "/dashboard/projects",
      icon: Frame,
    },
    {
      name: "All Blogs",
      url: "/dashboard/blogs",
      icon: PieChart,
    },
    {
      name: "Add Project",
      url: "/dashboard/add-project",
      icon: SquarePlus,
    },
    {
      name: "Add Blog",
      url: "/dashboard/add-blog",
      icon: MessageSquarePlus,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = useSession();
  const user = session?.data?.user;
  if (!user) return null;
  console.log(user);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        {/* <NavMain items={data.navMain} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.name ?? "Unknown",
            email: user.email ?? "No email",
            avatar: user.image ?? "/default-avatar.png",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
