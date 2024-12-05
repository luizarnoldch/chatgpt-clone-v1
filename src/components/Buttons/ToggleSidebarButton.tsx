"use client"
import React from "react";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { PiSidebar } from "react-icons/pi";

// Hooks
import { useSidebarStore } from "@/stores/sidebar-store";

type Props = {};

const ToggleButton = (props: Props) => {
  const closeDesktopSidebar = useSidebarStore((state) => state.closeDesktopSidebar);
  const openDesktopSidebar = useSidebarStore((state) => state.openDesktopSidebar);
  const isDesktopSidebarOpen = useSidebarStore((state) => state.isDesktopSidebarOpen);

  const handleToggleSidebar = () => {
    if (isDesktopSidebarOpen) {
      closeDesktopSidebar();
    } else {
      openDesktopSidebar();
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="[&_svg]:size-6"
      onClick={handleToggleSidebar}
    >
      <PiSidebar />
    </Button>
  );
};

export default ToggleButton;
