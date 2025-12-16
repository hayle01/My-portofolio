"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  CodeSquare,
  Sparkles,
  Trophy,
  MessageSquare,
  HelpCircle,
  Settings,
  ChevronRight,
  Atom,
  LogOut,
  UserCircle,
  CreditCard,
  Globe,
  BriefcaseBusiness,
  ClipboardList,
  ChevronsUpDown,
  Code,
} from "lucide-react";

interface User {
  name: string;
  email: string;
  image: string;
  initials: string;
}

const DUMMY_USER: User = {
  name: "Moabdirahim",
  email: "mabdirahim832@gmail.com",
  image: "https://i.pravatar.cc/150?img=11",
  initials: "MM",
};

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
  },
  {
    title: "Projects",
    icon: Sparkles,
    href: "/dashboard/projects",
  },
  {
    title: "Skills & Tools",
    icon: BriefcaseBusiness,
    href: "/dashboard/skills",
  },
  {
    title: "Certifications",
    icon: Trophy,
    href: "/dashboard/certifications",
  },
  {
    title: "Testimonials",
    icon: MessageSquare,
    href: "/dashboard/testimonials",
  },
  {
    title: "Content/Posts",
    icon: ClipboardList,
    href: "/dashboard/posts",
  },
];

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas" className="l" {...props}>
      <SidebarHeader className="p-3 sm:p-4 lg:p-5 border-b">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded bg-linear-to-b from-[#6e3ff3] to-[#aa8ef9] text-white">
            <Code className="size-5" />
          </div>
          <span className="font-semibold text-base sm:text-lg">Portofolio</span>
        </div>
      </SidebarHeader>
      {/* <SidebarSeparator className="mt-2" /> */}

      <SidebarContent className="px-3 pt-2 sm:px-4 lg:px-5">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = item.href === "/dashboard"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive} 
                      className="h-9 sm:h-[38px]"
                    >
                      <Link href={item.href}>
                        <item.icon className="size-4 sm:size-5" /> 
                        <span className="text-sm">
                          {item.title}
                        </span>
                        {isActive && ( 
                          <ChevronRight className="ml-auto size-4 text-muted-foreground opacity-60" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-9 sm:h-[38px]">
              <Link href="/dashboard/help">
                <HelpCircle className="size-4 sm:size-5" />
                <span className="text-sm">Help Center</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-9 sm:h-[38px]">
              <Link href="/dashboard/settings">
                <Settings className="size-4 sm:size-5" />
                <span className="text-sm">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Button variant="outline" className="w-full mt-2" asChild>
          <Link
            href="https://moabdirahim.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="size-4 mr-2" />
            moabdirahim.dev
          </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors">
              <Avatar className="size-7 sm:size-8">
                <AvatarImage src={DUMMY_USER.image} alt={DUMMY_USER.name} /> 
                <AvatarFallback className="text-xs">{DUMMY_USER.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs sm:text-sm">{DUMMY_USER.name || "Guest"}</p> 
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  {DUMMY_USER.email}
                </p>
              </div>
              <ChevronsUpDown className="size-4 text-muted-foreground shrink-0" />
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-[200px]">
    
    <DropdownMenuItem asChild> 
      <Link href="/dashboard/profile">
        <UserCircle className="size-4 mr-2" />
        Profile
      </Link>
    </DropdownMenuItem>

    <DropdownMenuItem asChild>
      <Link href="/dashboard/billing">
        <CreditCard className="size-4 mr-2" />
        Billing
      </Link>
    </DropdownMenuItem>

    <DropdownMenuItem asChild>
      <Link href="/dashboard/settings">
        <Settings className="size-4 mr-2" />
        Settings
      </Link>
    </DropdownMenuItem>

    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive cursor-pointer">
      <LogOut className="size-4 mr-2" />
      Log out
    </DropdownMenuItem>
    
  </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}