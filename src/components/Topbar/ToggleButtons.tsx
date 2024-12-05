"use client"

import React from "react";
import ToggleButton from "../Buttons/ToggleSidebarButton";
import CreateButton from "../Buttons/CreateChatButton";
import { useSidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
};

const ToggleButtons = ({ children }: Props) => {
  const isDesktopSidebarOpen = useSidebarStore((state) => state.isDesktopSidebarOpen);

  return (
    <div
      className="flex justify-center items-center gap-2"
    >
      <div className={cn(
        "justify-center items-center gap-2",
        isDesktopSidebarOpen ? "hidden" : "flex"
      )}>
        <ToggleButton />
        <CreateButton />
      </div>
      {children}
    </div>
  );
};

export default ToggleButtons;
