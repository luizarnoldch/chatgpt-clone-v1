"use client"

import React from 'react'

// Components
import ToggleBar from './ToggleBar'

// Hooks
import { useSidebarStore } from "@/stores/sidebar-store";
import { cn } from '@/lib/utils';

type Props = {
  children?: React.ReactNode
}

const DesktopSidebar = ({ children }: Props) => {
  const isDesktopSidebarOpen = useSidebarStore((state) => state.isDesktopSidebarOpen);

  return (
    <div
      className={cn(
        isDesktopSidebarOpen ? "block" : "hidden",
        "w-full h-full"
      )}
    >
      <div className="hidden md:flex flex-col h-full w-64 px-3">
        <ToggleBar />
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
