"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessagesSquare,
  BookOpen,
  BarChart,
  Settings,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

interface SidebarGroupProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SidebarItem({ href, icon, title, isActive }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 rounded-md px-4 py-3 text-sm transition-colors",
        isActive
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent/50 hover:text-accent-foreground"
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

function SidebarGroup({ title, icon, children }: SidebarGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between px-4 py-3 font-medium text-sm"
        >
          <div className="flex items-center gap-4">
            {icon}
            <span>{title}</span>
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-10 pr-2 space-y-3 pt-1">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed top-16 left-0 z-30 h-[calc(100vh-64px)] w-70 border-r bg-background transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="flex h-full flex-col py-6">
        {/* Top Section */}
        <div className="px-4">
          <div className="space-y-3">
            <SidebarItem
              href="/dashboard"
              icon={<LayoutDashboard className="h-5 w-5" />}
              title="Dashboard"
              isActive={pathname === "/dashboard"}
            />
            <SidebarItem
              href="/interviews"
              icon={<MessagesSquare className="h-5 w-5" />}
              title="Interviews"
              isActive={
                pathname === "/interviews" ||
                pathname.startsWith("/interviews/")
              }
            />

            <SidebarGroup
              title="Resources"
              icon={<BookOpen className="h-5 w-5" />}
            >
              <SidebarItem
                href="/resources/interview-prep"
                icon={<span className="h-2 w-2 rounded-full bg-foreground" />}
                title="Interview Prep"
                isActive={pathname === "/resources/interview-prep"}
              />
              <SidebarItem
                href="/resources/resume-tips"
                icon={<span className="h-2 w-2 rounded-full bg-foreground" />}
                title="Resume Tips"
                isActive={pathname === "/resources/resume-tips"}
              />
              <SidebarItem
                href="/resources/job-hunting"
                icon={<span className="h-2 w-2 rounded-full bg-foreground" />}
                title="Job Hunting"
                isActive={pathname === "/resources/job-hunting"}
              />
            </SidebarGroup>

            <SidebarItem
              href="/analytics"
              icon={<BarChart className="h-5 w-5" />}
              title="Analytics"
              isActive={pathname === "/analytics"}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto px-4 pt-6">
          <div className="space-y-3">
            <SidebarItem
              href="/settings"
              icon={<Settings className="h-5 w-5" />}
              title="Settings"
              isActive={pathname === "/settings"}
            />
            <SidebarItem
              href="/help"
              icon={<HelpCircle className="h-5 w-5" />}
              title="Help & Support"
              isActive={pathname === "/help"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
