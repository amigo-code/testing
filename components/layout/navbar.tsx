"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/layout/user-nav";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 items-center px-4 relative">
        {/* Mobile Layout */}
        <div className="flex md:hidden w-full items-center justify-between">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <span className="font-bold text-xl">CogniVue</span>
          </Link>

          <UserNav />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">CogniVue</span>
            </Link>
          </div>

          <div
            className={cn(
              "ml-auto flex items-center gap-4 transition-all duration-200 ease-in-out",
              isSearchOpen ? "w-full md:w-1/2 justify-between" : "justify-end"
            )}
          >
            {isSearchOpen ? (
              <>
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-8 md:w-[300px] lg:w-[400px]"
                    autoFocus
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
                <nav className="flex items-center space-x-4 lg:space-x-6">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/interviews"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Interviews
                  </Link>
                  <Link
                    href="/resources"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Resources
                  </Link>
                </nav>
                <UserNav />
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
