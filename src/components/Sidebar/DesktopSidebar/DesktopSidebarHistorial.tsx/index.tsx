import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import DesktopSidebarAssistants from "./DesktopSidebarAssistants";
import DesktopSidebarChats from "./DesktopSidebarChats";

type Props = {};

const DesktopSidebarHistorial = ({}: Props) => {
  return (
    <ScrollArea className="h-full w-full overflow-y-auto overflow-x-hidden pb-4 pl-4">
      <DesktopSidebarAssistants />
      <DesktopSidebarChats />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default DesktopSidebarHistorial;
